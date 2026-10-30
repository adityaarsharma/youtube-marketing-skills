import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import http from 'node:http';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

async function start(t, args = [], env = {}) {
  const child = spawn(process.execPath, ['server.js', ...args], { env: { ...process.env, ...env }, stdio: ['pipe', 'pipe', 'pipe'] });
  t.after(async () => {
    if (child.exitCode === null && child.signalCode === null) {
      const exit = once(child, 'exit'); child.kill('SIGTERM'); await exit;
    }
  });
  let stderr = '';
  const url = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`HTTP startup timed out: ${stderr}`)), 5000);
    child.stderr.on('data', data => {
      stderr += data;
      const match = stderr.match(/HTTP listening at (http:\/\/[^\s]+\/mcp)/);
      if (match) { clearTimeout(timer); resolve(match[1]); }
    });
    child.once('exit', code => { clearTimeout(timer); reject(new Error(`Server exited ${code}: ${stderr}`)); });
  });
  return { child, url };
}
async function client(url, name) {
  const c = new Client({ name, version: '1' });
  await c.connect(new StreamableHTTPClientTransport(new URL(url)));
  return c;
}

test('default stdio still lists YouTube tools without credentials', async () => {
  const c = new Client({ name: 'stdio-test', version: '1' });
  await c.connect(new StdioClientTransport({ command: process.execPath, args: ['server.js'], stderr: 'pipe' }));
  try { assert.ok((await c.listTools()).tools.some(t => t.name === 'get_channel_overview')); }
  finally { await c.close(); }
});

test('HTTP serves independent concurrent clients in one process', async t => {
  const { child, url } = await start(t, ['--transport', 'http', '--port', '0']);
  const clients = await Promise.all([client(url, 'first'), client(url, 'second')]);
  t.after(() => Promise.all(clients.map(c => c.close())));
  const lists = await Promise.all(clients.map(c => c.listTools()));
  assert.deepEqual(lists[0], lists[1]);
  assert.ok(lists[0].tools.some(t => t.name === 'get_channel_overview'));
  await clients[0].close();
  assert.deepEqual(await clients[1].listTools(), lists[1]);
  assert.equal(child.exitCode, null);
  assert.equal((await fetch(new URL('/health', url))).status, 200);
});

test('HTTP rejects unsafe requests and remains usable', async t => {
  const { url } = await start(t, ['--transport', 'http', '--port', '0']);
  for (const method of ['GET', 'DELETE', 'PUT']) {
    assert.equal((await fetch(url, { method })).status, 405);
  }
  assert.equal((await fetch(new URL('/unknown', url))).status, 404);
  assert.equal((await fetch(url, { method: 'POST', headers: { Origin: 'https://evil.example' } })).status, 403);
  const badHostStatus = await new Promise((resolve, reject) => {
    const req = http.request(url, { method: 'POST', headers: { Host: 'evil.example' } }, res => { res.resume(); resolve(res.statusCode); });
    req.on('error', reject); req.end();
  });
  assert.equal(badHostStatus, 403);
  assert.equal((await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{' })).status, 400);
  assert.equal((await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ value: 'x'.repeat(1024 * 1024) }) })).status, 413);
  const c = await client(url, 'after-errors');
  try { assert.ok((await c.listTools()).tools.length); } finally { await c.close(); }
});

test('HTTP uses external credential paths and never starts interactive login', async t => {
  const dir = await mkdtemp(path.join(tmpdir(), 'youtube-http-test-'));
  t.after(() => rm(dir, { recursive: true, force: true }));
  const credentials = path.join(dir, 'client.json');
  await writeFile(credentials, JSON.stringify({ installed: { client_id: 'test', client_secret: 'test', redirect_uris: ['http://localhost'] } }));
  const { url } = await start(t, ['--transport', 'http', '--port', '0'], { YOUTUBE_CREDENTIALS_PATH: credentials, YOUTUBE_TOKEN_PATH: path.join(dir, 'absent.json') });
  const c = await client(url, 'auth-test');
  try {
    const result = await c.callTool({ name: 'get_channel_overview', arguments: {} });
    assert.equal(result.isError, true);
    assert.match(result.content[0].text, /auth.js/);
  } finally { await c.close(); }
});

test('invalid transport configuration fails fast', async () => {
  for (const args of [['--transport', 'bogus'], ['--transport', 'http', '--host', '0.0.0.0'], ['--port', 'abc']]) {
    const child = spawn(process.execPath, ['server.js', ...args], { stdio: ['ignore', 'ignore', 'pipe'] });
    const [code] = await once(child, 'exit');
    assert.notEqual(code, 0);
  }
});
