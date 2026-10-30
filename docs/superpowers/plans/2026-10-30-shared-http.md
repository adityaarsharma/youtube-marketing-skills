# Shared HTTP Implementation Plan

Goal: one local YouTube MCP process for all new chats, preserving current clients.
Architecture: optional stateless Streamable HTTP in the existing process; loopback only.
Tech stack: Node.js, existing MCP SDK, Express, node:test.
Spec: ../specs/2026-10-30-shared-http-design.md

- [x] Add failing SDK integration tests for HTTP multi-client, error handling, and unchanged stdio.
- [x] Add transport module and CLI selection; wrap tool registration in server factory; configurable auth paths and noninteractive HTTP auth.
- [x] Document usage, package new files, run tests and fresh code review.
- [ ] Fork/push/create upstream PR; deploy new release, verify real read calls from two clients, change Codex URL.

Review focus: transport resource cleanup, loopback security, compatibility with Node 18, package contents, and no interference with existing processes.

Verification: initial tests 1/5 passed, 4 expected HTTP/config failures. Implementation 5/5 passed. Fresh review found SDK and Node minimum-version mismatches; both corrected and clean-install tests passed. Live deployment checks remain separate from credential-free tests.
