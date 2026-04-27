# YouTube Marketing Skills — Project Instructions

## Architecture

```
youtube-marketing-skills/
├── .claude-plugin                    # Plugin manifest
├── CLAUDE.md                         # Project instructions (this file)
├── README.md                         # Setup + full command reference
├── VISION.md                         # Product vision + roadmap
├── CONTRIBUTING.md                   # Contribution guidelines
├── LICENSE                           # MIT
├── install.sh                        # One-command install (Unix)
├── install.ps1                       # One-command install (Windows)
├── server.js                         # MCP server (local stdio + remote HTTP/SSE)
├── auth.js                           # OAuth2 setup for YouTube API
├── package.json
├── skills/
│   └── youtube-marketing/
│       ├── SKILL.md                  # Entry point — routing + channel config
│       ├── sub-skills/               # 21 command instruction files
│       │   ├── seo.md
│       │   ├── script.md
│       │   └── ... (21 total)
│       ├── references/               # On-demand knowledge guides
│       │   ├── algorithm-guide.md
│       │   ├── analytics-benchmarks.md
│       │   ├── seo-playbook.md
│       │   ├── retention-scripting-guide.md
│       │   ├── shorts-playbook.md
│       │   ├── thumbnail-ctr-guide.md
│       │   ├── monetization-guide.md
│       │   ├── repurposing-guide.md
│       │   └── dataforseo-integration.md
│       ├── templates/                # Channel type configurations
│       │   ├── product-company.md   # Plugin/SaaS companies (POSIMYTH default)
│       │   ├── tutorial-channel.md
│       │   ├── personal-brand.md
│       │   ├── agency-channel.md
│       │   ├── saas-channel.md
│       │   └── wordpress-specialist.md
│       └── execution/                # Helper scripts
│           └── README.md
└── references/
    └── whitepapers.md               # Full citation database
```

## Commands

| Command | Sub-skill file |
|---------|---------------|
| `/youtube seo` | sub-skills/seo.md |
| `/youtube audit` | sub-skills/audit.md |
| `/youtube script` | sub-skills/script.md |
| `/youtube hook` | sub-skills/hook.md |
| `/youtube thumbnail` | sub-skills/thumbnail.md |
| `/youtube ideate` | sub-skills/ideate.md |
| `/youtube analyze` | sub-skills/analyze.md |
| `/youtube calendar` | sub-skills/calendar.md |
| `/youtube shorts` | sub-skills/shorts.md |
| `/youtube repurpose` | sub-skills/repurpose.md |
| `/youtube competitor` | sub-skills/competitor.md |
| `/youtube metadata` | sub-skills/metadata.md |
| `/youtube strategy` | sub-skills/strategy.md |
| `/youtube wp-post` | sub-skills/wp-post.md |
| `/youtube plugin-demo` | sub-skills/plugin-demo.md |
| `/youtube batch-seo` | sub-skills/batch-seo.md |
| `/youtube funnel` | sub-skills/funnel.md |
| `/youtube comment-intel` | sub-skills/comment-intel.md |
| `/youtube shorts-from-long` | sub-skills/shorts-from-long.md |
| `/youtube collab` | sub-skills/collab.md |
| `/youtube monetize` | sub-skills/monetize.md |

## Development Rules

- Keep `SKILL.md` under 500 lines
- Sub-skills are instruction files in `sub-skills/` — self-contained, under 200 lines each
- Reference files are on-demand knowledge — loaded only when needed, not on every call
- Templates configure channel-specific constants — one file per channel archetype
- Python/Node scripts in `execution/` must have docstrings and CLI interface
- Naming: kebab-case for all files and directories
- Never hardcode channel-specific data in sub-skills — that goes in SKILL.md or a template

## MCP Server

The `server.js` MCP server runs in two modes:
- **Local (stdio)**: Default mode, used with Claude Code and other local MCP clients
- **Remote (HTTP/SSE)**: `MODE=remote PORT=3001 node server.js` — for team access

All 11 MCP tools enforce YouTube's content policies before any write operation.
