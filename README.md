# YouTube Marketing Skills

**The AI layer that replaces VidIQ, TubeBuddy, and your YouTube marketing team.**

21 commands. Live keyword data. Pushes directly to YouTube. Publishes to WordPress. Knows your channel, your products, your audience — not a generic creator's.

[![npm version](https://img.shields.io/npm/v/youtube-channel-mcp?style=for-the-badge&color=CB3837&logo=npm)](https://www.npmjs.com/package/youtube-channel-mcp)
[![npm downloads](https://img.shields.io/npm/dm/youtube-channel-mcp?style=for-the-badge&color=CB3837&logo=npm)](https://www.npmjs.com/package/youtube-channel-mcp)
[![GitHub Stars](https://img.shields.io/github/stars/adityaarsharma/youtube-marketing-skills?style=for-the-badge&logo=github)](https://github.com/adityaarsharma/youtube-marketing-skills)
[![License MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-43853D?style=for-the-badge&logo=node.js)](https://nodejs.org)

---

## Works With

| Agent | How |
|-------|-----|
| Claude Code | Skill files + live channel tools |
| Claude Desktop | Live channel tools |
| Cursor | Live channel tools |
| Windsurf | Live channel tools |
| OpenAI Codex | Skill files |
| Gemini CLI | Skill files |
| Any MCP client | Remote HTTP/SSE |

---

## VidIQ gives you a score. This gives you a workflow.

| VidIQ / TubeBuddy | YouTube Marketing Skills |
|-------------------|--------------------------|
| Suggests keywords | Pulls live SERP data + pushes the title to YouTube |
| Shows a CTR score | Diagnoses why CTR is low + rewrites the thumbnail brief |
| Gives a tag list | Generates 20 tags ordered by priority + validates against YouTube policy |
| Dashboard only | Publishes companion blog post to WordPress with VideoObject schema |
| One-size channel | Learns your products, pricing, audience, and fixed links |
| No script help | Retention-engineered script with pattern interrupts every 60–90s |

**One sale from a plugin demo video = 50,000 ad views.** This tool knows that. VidIQ doesn't.

---

## 21 Commands

| Command | What It Does |
|---------|-------------|
| `/youtube seo` | 3 title variants, description, 20 tags — with live keyword data |
| `/youtube audit` | 4-dimension channel health audit with A–F grades |
| `/youtube script` | Retention-engineered tutorial script, pattern interrupts every 60–90s |
| `/youtube hook` | 5 hook variants with drop-off risk ratings |
| `/youtube thumbnail` | 3 A/B thumbnail briefs with full design specs |
| `/youtube ideate` | 10 ranked video ideas with keyword volume + SERP gap |
| `/youtube analyze` | Analytics diagnosis — CTR, retention, traffic sources, sub conversion |
| `/youtube calendar` | Monthly content plan with Shorts supplement + upload cadence |
| `/youtube shorts` | Vertical-format Short: script, metadata, visual markers |
| `/youtube repurpose` | 7-platform expansion: Shorts, blog, LinkedIn, X, email, podcast, Community |
| `/youtube competitor` | Keyword gaps, format gaps, live SERP map |
| `/youtube metadata` | Copy-paste upload package with pre-publish checklist |
| `/youtube strategy` | Channel positioning, content pillars, 30/60/90-day milestones |
| `/youtube wp-post` | Companion blog post → WordPress publish + VideoObject schema |
| `/youtube plugin-demo` | Script + SEO template for software/plugin demo videos |
| `/youtube batch-seo` | Bulk SEO update for lowest-performing videos, auto-pushed |
| `/youtube funnel` | Video → landing page → product purchase funnel map |
| `/youtube comment-intel` | Mine comments for feature requests, pain points, reply templates |
| `/youtube shorts-from-long` | Extract 3–5 Shorts from any existing long-form video |
| `/youtube collab` | Channel collab opportunity finder for your niche |
| `/youtube monetize` | Revenue strategy across 7 streams |

---

## Live Channel Tools (10 Tools)

Direct read/write access to your YouTube channel. Everything runs on your machine via OAuth2 — nothing sent to third parties.

| Tool | What It Does |
|------|-------------|
| `get_video_details` | Full metadata — title, description, tags, privacy status, stats |
| `search_my_videos` | Search your channel by keyword |
| `update_video_seo` | Push title, description, tags directly to YouTube |
| `get_channel_overview` | Subscribers, total views, video count |
| `get_all_videos` | All videos with stats, sorted by date or views |
| `get_analytics_over_time` | Day-by-day views, watch time, subscribers for any date range |
| `get_top_videos_analytics` | Top videos ranked by views — with retention %, subs gained |
| `get_audience_demographics` | Countries, device types, age groups, gender |
| `get_traffic_sources` | Search, Suggested, Browse, External — with percentages |
| `analyze_and_suggest_topics` | Channel data → AI-powered topic and gap analysis |

---

## What's Inside

```
skills/youtube-marketing/
  SKILL.md              ← entry point — configure your channel here
  sub-skills/           ← 21 command files
  references/           ← 9 knowledge guides (algorithm, analytics, SEO, Shorts, retention...)
  templates/            ← 6 channel type configs
  execution/            ← helper scripts
references/
  whitepapers.md        ← full citation database (14 studies)
```

---

## Setup

**Prerequisites:** Node.js 18+, Google Cloud project with YouTube Data API v3 + YouTube Analytics API, OAuth 2.0 credentials (Desktop app type).

### Install

```bash
# One-line install
curl -fsSL https://raw.githubusercontent.com/adityaarsharma/youtube-marketing-skills/main/install.sh | bash

# Or via npm
npx youtube-channel-mcp

# Or clone
git clone https://github.com/adityaarsharma/youtube-marketing-skills
cd youtube-marketing-skills && npm install
```

### Authenticate

```bash
node auth.js
```

Opens a browser for OAuth. Saves `tokens.json` locally.

### Add to Claude Code

```json
{
  "mcpServers": {
    "youtube-marketing": {
      "command": "node",
      "args": ["/path/to/youtube-marketing-skills/server.js"]
    }
  },
  "skills": ["/path/to/youtube-marketing-skills/skills/youtube-marketing/SKILL.md"]
}
```

### Add to Claude Desktop

```json
{
  "mcpServers": {
    "youtube-marketing": {
      "command": "npx",
      "args": ["youtube-channel-mcp"]
    }
  }
}
```

### Remote Mode — Team Access

```bash
MODE=remote PORT=3001 node server.js
```

---

## Configure for Your Channel

Open `skills/youtube-marketing/SKILL.md` and set your constants once:

```markdown
Channel: [Your channel name and handle]
Products: [Your products + pricing URLs]
Discount code: [Your code]
Best publish time: [Your timezone]
Fixed description links: [Your product/docs/community URLs]
```

Every command now knows your business. `/youtube seo` writes descriptions with your links. `/youtube funnel` audits your actual product pages. `/youtube batch-seo` updates your real videos.

**Pick your channel type** from `skills/youtube-marketing/templates/`:

| Template | Built For |
|----------|-----------|
| `product-company.md` | Plugin / SaaS / software companies |
| `tutorial-channel.md` | Pure tutorial, ad revenue + affiliates |
| `personal-brand.md` | Consulting, coaching, course sales |
| `saas-channel.md` | Free trial → paid conversion funnel |
| `wordpress-specialist.md` | WordPress ecosystem, affiliate revenue |
| `agency-channel.md` | Client acquisition through authority content |

---

## Research Foundation

Every recommendation is grounded in published data — not opinions.

| Source | Finding Used |
|--------|-------------|
| Retention Rabbit (150M+ minutes) | Hook length 28–42s optimal for tutorials |
| Wistia, 2024 | Pattern interrupts every 60–90s → −40% drop-off |
| Focus Digital, Dec 2025 | CTR benchmarks: Poor <3%, Avg 3–5%, Good 5–8%, Excellent >8% |
| vidIQ (5M channel dataset) | 2–3x/week cadence → 4x subscriber growth |
| vidIQ (5M channel dataset) | Face in thumbnail → +38% CTR |
| BrightEdge, 2025 | Blog post with YouTube embed → +53% Google ranking |
| Yoast SEO Study, 2024 | VideoObject schema on WordPress → +31% Google CTR |
| ConversionXL, 2024 | Plugin demo videos convert at 2.8–6% |
| YouTube Official, Sept 2025 | Shorts freshness decay: 28–30 day cliff |
| HubSpot, 2024 | Content repurposed to 3+ formats → 3.5x total reach |
| Demand Curve, 2025 | Top 20% of videos drive 80% of channel growth |
| Semrush, 2025 | WordPress tutorial queries spike Jan–Mar and Sep–Nov |

Full citations: [`references/whitepapers.md`](references/whitepapers.md)

---

## Compatible Integrations

| Integration | Used For |
|-------------|---------|
| **DataForSEO MCP** | Live keyword research + SERP analysis |
| **WordPress MCP** | Publishing companion posts via `/youtube wp-post` |
| **Google Search Console MCP** | Cross-referencing search performance |
| **GA4 MCP** | Traffic attribution in `/youtube funnel` |
| **Figma MCP** | Thumbnail brief → design handoff |
| **Slack MCP** | Batch SEO results + weekly analytics digests |

---

## License

MIT — [Aditya Sharma](https://adityaarsharma.com)
