import http from 'node:http';
import express from 'express';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

/** Parse local transport options; stdio remains the default. */
export function parseOptions(args = process.argv.slice(2)) {
  const options = { transport: 'stdio', host: '127.0.0.1', port: 3001 };
  for (let i = 0; i < args.length; i++) {
    const name = args[i].replace(/^--/, '');
    if (!['transport', 'host', 'port'].includes(name) || !args[i].startsWith('--') || args[i + 1] === undefined) {
      throw new Error(`Unknown or incomplete option: ${args[i]}`);
    }
    options[name] = args[++i];
  }
  if (!['stdio', 'http'].includes(options.transport)) throw new Error('Transport must be stdio or http');
  if (!['127.0.0.1', '::1', 'localhost'].includes(options.host)) throw new Error('HTTP host must be a loopback address');
  if (!/^\d+$/.test(String(options.port)) || Number(options.port) > 65535) throw new Error('Port must be an integer from 0 to 65535');
  options.port = Number(options.port);
  return options;
}

/** Serve independent stateless MCP requests in one process, on loopback only. */
export async function startHttpServer(createServer, { host = '127.0.0.1', port = 3001 } = {}) {
  if (!['127.0.0.1', '::1', 'localhost'].includes(host)) throw new Error('HTTP host must be a loopback address');
  const app = express();
  app.disable('x-powered-by');
  const active = new Set();
  const listener = http.createServer(app);
  let closing = false;
  app.use((req, res, next) => {
    const address = listener.address();
    const allowedHosts = ['127.0.0.1', 'localhost', '[::1]'].map(h => `${h}:${address.port}`);
    // No browser clients or cross-origin requests: this endpoint grants local account access.
    if (req.headers.origin !== undefined || !allowedHosts.includes(req.headers.host)) {
      return res.status(403).json({ error: 'Only local non-browser clients are allowed' });
    }
    if (closing) return res.status(503).json({ error: 'Server is shutting down' });
    next();
  });
  app.get('/health', (_req, res) => res.json({ status: 'healthy' }));
  app.post('/mcp', express.json({ limit: '1mb' }), async (req, res) => {
    const server = createServer();
    const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined, enableJsonResponse: true });
    const connection = { server, transport };
    active.add(connection);
    let cleaned = false;
    const cleanup = async () => {
      if (cleaned) return;
      cleaned = true;
      active.delete(connection);
      await server.close().catch(() => {});
      await transport.close().catch(() => {});
    };
    res.once('close', cleanup);
    try {
      await server.connect(transport);
      await transport.handleRequest(req, res, req.body);
    } catch (error) {
      console.error('HTTP MCP request failed:', error.message);
      if (!res.headersSent) res.status(500).json({ jsonrpc: '2.0', id: null, error: { code: -32603, message: 'Internal server error' } });
      else res.end();
      await cleanup();
    }
  });
  app.all('/mcp', (_req, res) => res.set('Allow', 'POST').status(405).json({ error: 'Use POST for stateless MCP' }));
  app.use((_req, res) => res.status(404).json({ error: 'Not found' }));
  app.use((error, _req, res, _next) => {
    const status = error.type === 'entity.too.large' ? 413 : 400;
    res.status(status).json({ jsonrpc: '2.0', id: null, error: { code: -32700, message: status === 413 ? 'Request too large' : 'Invalid JSON request' } });
  });
  await new Promise((resolve, reject) => {
    listener.once('error', reject);
    listener.listen(port, host, () => { listener.off('error', reject); resolve(); });
  });
  return {
    url: `http://${host === '::1' ? '[::1]' : host}:${listener.address().port}/mcp`,
    async close() {
      closing = true;
      const stopped = new Promise(resolve => listener.close(resolve));
      await Promise.all([...active].map(async ({ server, transport }) => {
        await server.close().catch(() => {});
        await transport.close().catch(() => {});
      }));
      listener.closeAllConnections();
      await stopped;
    },
  };
}
