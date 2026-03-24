# YouTube MCP Server

> **Connect Claude to your YouTube channel.** Read analytics, fetch full video metadata (including unlisted/private/draft), search your uploads, and update titles/descriptions/tags — all from Claude Desktop, Claude Code, or any MCP client.

[![npm version](https://img.shields.io/npm/v/youtube-studio-mcp?style=for-the-badge&color=CB3837&logo=npm)](https://www.npmjs.com/package/youtube-studio-mcp)
[![npm downloads](https://img.shields.io/npm/dm/youtube-studio-mcp?style=for-the-badge&color=CB3837&logo=npm)](https://www.npmjs.com/package/youtube-studio-mcp)
[![GitHub Stars](https://img.shields.io/github/stars/adityaarsharma/youtube-studio-mcp?style=for-the-badge&logo=github)](https://github.com/adityaarsharma/youtube-studio-mcp)
[![License MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)
[![Claude MCP](https://img.shields.io/badge/Claude-MCP%20Server-FF6B35?style=for-the-badge&logo=anthropic)](https://claude.ai)
[![Node.js](https://img.shields.io/badge/Node.js-18%2B-43853D?style=for-the-badge&logo=node.js)](https://nodejs.org)

---

## What Is This?

A **Model Context Protocol (MCP) server** that connects Claude to the **YouTube Data API v3** and **YouTube Analytics API** via OAuth2.

Instead of copying data from YouTube Studio into AI tools, just ask Claude:

- *"Pull the full title, description and tags for this video"*
- *"What are my top performing videos this month?"*
- *"Update the title and tags on my latest upload"*
- *"Where is my traffic coming from?"*

Claude reads your **real private channel data** and can **update video SEO directly**.

```
Claude  →  YouTube MCP Server  →  YouTube APIs  →  Your Channel Data
(you)        (this repo)           (OAuth2)         (stays local)
```

**Everything runs on YOUR machine. Read + Write access. Nothing sent to third parties.**

---

## Tools Available (10 total)

### Video Metadata (Read + Write)

| Tool | What It Does |
|------|-------------|
| `get_video_details` | Full metadata for any video by ID or URL — title, full description, all tags, category, privacy status (public/unlisted/private/draft), stats, duration, thumbnail URL |
| `search_my_videos` | Search your own channel's videos by keyword. Returns metadata + stats for matching videos |
| `update_video_seo` | Update title, description, and/or tags on any video directly. Only changes fields you provide |

### Channel Analytics

| Tool | What It Does |
|------|-------------|
| `get_channel_overview` | Subscribers, total views, video count, channel description, creation date |
| `get_all_videos` | List all videos with stats (views, likes, comments, tags, privacy status). Sort by date or views |
| `get_analytics_over_time` | Day-by-day views, watch time, subscribers gained/lost for any date range |
| `get_top_videos_analytics` | Top performing videos ranked by views with retention %, watch time, subs gained |
| `get_audience_demographics` | Audience breakdown: top countries, device types, age groups, gender |
| `get_traffic_sources` | Where viewers come from: YouTube Search, Suggested, Browse, External, Direct |
| `analyze_and_suggest_topics` | Pulls channel + top video data for AI-powered topic analysis |

---

## Install

### Option A: npx (Zero Install — just run it)

```bash
npx youtube-studio-mcp
```

### Option B: Global Install

```bash
npm install -g youtube-studio-mcp
```

### Option C: Clone + Run

```bash
git clone https://github.com/adityaarsharma/youtube-studio-mcp.git
cd youtube-studio-mcp
npm install
```

### Option D: Download ZIP

1. Click **Code → Download ZIP** above
2. Unzip → open Terminal → `cd` into the folder
3. Run `npm install`

---

## Setup (15 minutes, one time)

### Step 1 — Google Cloud Project

1. Go to [console.cloud.google.com](https://console.cloud.google.com)
2. Create a new project (name: `YouTube MCP`)
3. Enable these 2 APIs:
   - **YouTube Data API v3** (for video data + updates)
   - **YouTube Analytics API** (for private analytics)

### Step 2 — OAuth Consent Screen

1. Go to **APIs & Services → OAuth consent screen**
2. Select **External** → Create
3. Fill in app name (`YouTube MCP`), your email
4. Skip scopes → Add your Gmail as test user → Save

### Step 3 — Create OAuth Credentials

1. Go to **APIs & Services → Credentials**
2. Click **+ Create Credentials → OAuth client ID**
3. Select **Desktop app** → Create
4. **Download JSON** → rename to `credentials.json`
5. Move into this repo folder

### Step 4 — Authenticate

```bash
node auth.js
```

Browser opens → log in with the Google account that owns your YouTube channel → Allow.

> **"This app isn't verified"** warning is normal for personal apps. Click **Advanced → Go to YouTube MCP (unsafe)**.

### Step 5 — Connect to Claude

#### Claude Desktop

Edit `~/Library/Application Support/Claude/claude_desktop_config.json` (Mac) or `%APPDATA%\Claude\claude_desktop_config.json` (Windows):

```json
{
  "mcpServers": {
    "youtube-analytics": {
      "command": "node",
      "args": ["/full/path/to/youtube-studio-mcp/server.js"]
    }
  }
}
```

Or if installed via npm:

```json
{
  "mcpServers": {
    "youtube-analytics": {
      "command": "npx",
      "args": ["-y", "youtube-studio-mcp"]
    }
  }
}
```

#### Claude Code (Terminal)

```bash
claude mcp add youtube-analytics node /full/path/to/youtube-studio-mcp/server.js
```

#### VS Code

Add to `.vscode/settings.json`:

```json
{
  "mcp.servers": {
    "youtube-analytics": {
      "command": "npx",
      "args": ["-y", "youtube-studio-mcp"]
    }
  }
}
```

Restart Claude. Done!

---

## Ready-to-Use Prompts

### SEO Audit (any video)
```
Get the full details for this video: [paste URL or ID]
Check what keywords it's ranking for and suggest optimized title + tags
```

### Channel Performance Report
```
Pull my channel overview, top 20 videos by watch time, 90-day analytics,
traffic sources and audience demographics. Give me a full performance report.
```

### Video Topic Research
```
Get my top 20 videos by watch time. What patterns do you see —
topics, lengths, title styles? Suggest 10 new video ideas.
```

### Update Video SEO
```
Search my videos for "elementor menu". Pull the full details.
Write an optimized title, description, and tags — then update it.
```

### Audience Deep Dive
```
Show my full audience demographics — age, gender, countries, devices.
What content style and posting schedule fits my actual audience?
```

### Underperformer Diagnosis
```
Get all my videos. Compare bottom 10 vs top 10 by views.
Why did the lower ones underperform? What would you change?
```

---

## 8 Bundled AI Skills for YouTube Creators

This repo includes **ready-to-use AI skill files** in the `skills/` folder that supercharge your YouTube workflow. Each skill is a structured prompt that makes Claude act as a specialized team member.

**Install any skill:** Copy the `.md` file into your Claude skills directory and it activates automatically.

| Skill | What It Does | Trigger Phrases |
|-------|-------------|-----------------|
| **[SEO Optimizer](skills/youtube-seo-optimizer.md)** | Optimizes titles, descriptions, tags. Protects existing ranking keywords. 3 title options + full description + 20 tags | "optimize this video", "write title", "write tags" |
| **[Channel Audit](skills/youtube-channel-audit.md)** | Full channel health report — views, subs, retention, traffic sources, audience demographics. Identifies problems and prescribes fixes | "audit my channel", "why am I not growing", "channel report" |
| **[Topic Finder](skills/youtube-topic-finder.md)** | 12 data-backed video topics with keyword volumes, SERP gaps, and competitor analysis. Tier 1/2/3 prioritization | "video ideas", "what should I make next", "find topics" |
| **[Thumbnail Auditor](skills/youtube-thumbnail-auditor.md)** | 20-point thumbnail scoring (66-point scale). Grades A-F with specific redesign instructions | "audit thumbnail", "review this thumbnail", "CTR is low" |
| **[Script Writer](skills/youtube-script-writer.md)** | Full production-ready scripts with word-for-word narration, screen cues, timestamps, editor brief, and companion Short script | "write script", "video script", "tutorial script" |
| **[Competitor Spy](skills/youtube-competitor-spy.md)** | Competitor channel analysis, SERP battle maps, 10 "steal-worthy" topics with differentiation angles | "competitor analysis", "who's beating me", "content gaps" |
| **[Video Analyzer](skills/youtube-video-analyzer.md)** | Deep single-video analysis — SEO score (21-point), performance benchmarks, and optimized rewrite | "analyze this video", "why isn't this performing", "video audit" |
| **[Shorts Repurposer](skills/youtube-shorts-repurposer.md)** | Turn any long-form video into 3-5 Shorts with hooks, text overlays, and posting strategy | "make shorts from this", "repurpose video", "extract shorts" |

### How the Skills + MCP Work Together

```
You: "Optimize this video: youtube.com/watch?v=abc123"

Claude:
  1. youtube-seo-optimizer skill activates
  2. Calls get_video_details → pulls current title, description, tags
  3. Checks YouTube SERP for current rankings
  4. Lists PROTECTED keywords (won't remove)
  5. Writes 3 new title options + full description + 20 tags
  6. Can call update_video_seo to apply changes directly
```

The skills tell Claude **what to do**. The MCP tools give Claude **access to your data**. Together they create a complete YouTube AI workflow.

### Install Skills

**Claude Desktop / Claude Code:**
```bash
# Copy a skill to your Claude skills directory
cp skills/youtube-seo-optimizer.md ~/.claude/skills/
```

**Or install all 8:**
```bash
cp skills/youtube-*.md ~/.claude/skills/
```

---

## OAuth Scopes

| Scope | Purpose |
|-------|---------|
| `youtube` | Read + write video metadata (titles, descriptions, tags) |
| `youtube.readonly` | Read video data, search, list |
| `yt-analytics.readonly` | Read private analytics (views, watch time, subs, demographics) |
| `youtubepartner-channel-audit` | Extended channel audit data |

**To enable write access** (update_video_seo), delete `tokens.json` and re-run `node auth.js`. The new auth flow requests the `youtube` write scope.

---

## Privacy & Security

| Question | Answer |
|----------|--------|
| Does my data go to any server? | No — runs 100% on your machine |
| Can it delete videos? | No — only reads data and updates metadata |
| Is OAuth safe? | Yes — same system used by TubeBuddy, VidIQ |
| Can I revoke access? | Yes — anytime at myaccount.google.com/permissions |

**Never commit `credentials.json` or `tokens.json` to git.**

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `credentials.json not found` | Download from Google Cloud Console → move to repo folder |
| `Not authenticated` | Run `node auth.js` |
| Port 3000 in use | `lsof -ti:3000 \| xargs kill -9` then retry |
| Claude doesn't show tools | Check JSON syntax in config, restart Claude fully |
| "App isn't verified" | Click Advanced → Go to YouTube MCP (unsafe) |
| `update_video_seo` fails | Delete `tokens.json`, re-run `node auth.js` for write scope |
| Quota exceeded | YouTube API free limit: 10,000 units/day. Wait 24h |

---

## What's New in v2.1

- **npm package** — `npx youtube-studio-mcp` for zero-install
- **8 AI skills** — bundled YouTube workflow skills for Claude
- **MIT License** — free to use, modify, share

## What's New in v2.0

- **`get_video_details`** — Full metadata by video ID or URL. Works for public, unlisted, private, and draft videos
- **`search_my_videos`** — Search your own uploads by keyword
- **`update_video_seo`** — Update title, description, tags directly on YouTube
- **YouTube write scope** — OAuth now requests `youtube` scope for SEO updates
- **URL parsing** — Pass full YouTube URLs or just video IDs
- **Privacy status** — All video listings now show public/unlisted/private status

---

## Files

```
youtube-studio-mcp/
├── server.js          ← MCP server (10 tools)
├── auth.js            ← Run once to link YouTube account
├── package.json       ← Dependencies + npm config
├── skills/            ← 8 AI skills for YouTube creators
├── LICENSE            ← MIT
├── credentials.json   ← YOU add this (never commit!)
└── tokens.json        ← Auto-created after auth (never commit!)
```

---

## Contributing

PRs welcome! Ideas:
- Transcript extraction (YouTube captions API)
- YouTube Shorts-specific analytics
- Revenue/monetization data (YouTube Reporting API)
- Playlist management tools
- Comment management tools
- Thumbnail upload

---

## License

[MIT](LICENSE) — free to use, modify, share.

---

## Built By

**[Aditya Sharma](https://adityaarsharma.com)** — Building AI tools for creators and marketers.

- [Twitter/X](https://twitter.com/adityaarsharma)
- [GitHub](https://github.com/adityaarsharma)

If this saved you time — **star the repo** and share with a creator friend!
