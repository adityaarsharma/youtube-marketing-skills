# Shared local HTTP transport

The user requested a fork, upstream PR, and local upgrade so concurrent Codex chats use one YouTube MCP process without interrupting active tasks.

Add opt-in Streamable HTTP directly to the existing Node server; retain default stdio. A separate stdio gateway would require two processes and protocol forwarding, so direct transport support is preferable. HTTP binds only to loopback, exposes /mcp and /health, rejects browser Origins and untrusted Host headers, and has bounded request bodies. Use stateless SDK transports and a fresh MCP server per request in the same process; no session registry or child processes. Existing tools and authorization remain unchanged, except HTTP requires prior login instead of starting interactive OAuth. Credentials and token paths can be configured outside the package.

Test concurrent independent SDK clients, isolation after disconnect, method/path/host/origin/body errors, tool errors, and stdio compatibility. Deploy to a new immutable local release and user service; update only future connections, preserving old running processes. Publish no credentials or user-specific service paths.
