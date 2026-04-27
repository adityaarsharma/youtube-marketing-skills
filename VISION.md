# Vision — youtube-marketing-mcp

## The Problem With Every YouTube Tool

VidIQ gives you a score. TubeBuddy gives you a checklist.  
Neither of them knows you're running a product company.

They're built for ad-revenue creators chasing impressions.  
You're building a sales channel. One plugin sale is worth 50,000 ad views.

No existing tool understands that difference.

---

## What We're Building

**The first YouTube marketing system built for product companies.**

Not a dashboard. Not a browser extension. Not another analytics view.

A **workflow** — from keyword idea to published video to WordPress blog post to ClickUp task — fully automated, Claude Code-native, and aware that you're selling something.

```
YouTube Search Gap
       ↓
Live SERP Data (DataForSEO)
       ↓
3 Title Variants + Full Description + 20 Tags
       ↓
Retention-Engineered Script
       ↓
Publish to YouTube (via MCP)
       ↓
Companion Blog Post → WordPress (VideoObject schema)
       ↓
Plugin funnel: Landing Page → Free Download → Pro Upgrade
```

No other tool does this pipeline end-to-end.

---

## The Vision: Claude Code as Your YouTube Team

Imagine a world where you open Claude Code and type:

```
/youtube ideate — what should we make this month for WDesignKit?
```

Claude pulls live keyword data from DataForSEO, checks your channel's 90-day performance, maps gaps in the current SERP, and returns 10 ranked video ideas with volume, competitor data, and a production priority.

Then you pick one and type:

```
/youtube seo — Build a Hover Side Menu in Elementor
```

It returns 3 title options, a complete optimized description, 20 tags, and a thumbnail brief — all grounded in what's actually ranking right now.

Then:
```
/youtube script — let's build the tutorial
```

A full retention-engineered script. Pattern interrupt every 60 seconds. Hook written using the 28–42 second formula proven across 150 million minutes of watch data.

Then:
```
/youtube metadata — finalize everything for upload
```

Copy-paste ready. Push directly to YouTube via the MCP. No leaving Claude Code.

Then:
```
/youtube wp-post — create the companion article
```

An 800+ word companion post with VideoObject schema, FAQs, and automatic publishing via WordPress REST API.

**One workflow. One tool. No switching tabs.**

---

## Why This Matters for the Community

YouTube is how independent developers, WordPress plugin makers, and digital product companies compete with enterprise marketing teams.

A solo developer with a great plugin but no marketing budget can't afford a video editor, an SEO consultant, and a content strategist.

This MCP gives them all three — for free, running locally on their machine, connected to their own YouTube channel and their own WordPress site.

**Open source. Self-hosted. Yours.**

No monthly fee. No usage limits. No locked-down dashboard. Just a Claude Code skill suite and a local MCP server you run once and forget.

---

## Roadmap

### v1.0 — Foundation (Now)
- [x] 11 MCP tools (YouTube Data API + YouTube Analytics)
- [x] 21 Claude Code commands (complete marketing workflow)
- [x] Local (stdio) + Remote (HTTP/SSE) transport
- [x] YouTube policy guardrails enforced before any update
- [x] WordPress publish pipeline (`/youtube wp-post`)
- [x] DataForSEO integration (live keyword + SERP data)
- [x] Research-grounded recommendations (14 published studies)

### v1.1 — Automation
- [ ] `/youtube cron` — weekly performance digest via scheduled task
- [ ] Auto-batch SEO on new video publish (webhook trigger)
- [ ] ClickUp integration — create task from each video idea in `/youtube ideate`
- [ ] Slack digest — weekly analytics summary to channel

### v1.2 — Intelligence
- [ ] Channel fingerprinting — learn what performs for YOUR channel specifically
- [ ] Competitor watch — alert when a competitor publishes in your keyword space
- [ ] Trending topic radar — surface trending WordPress/Elementor topics before they peak

### v2.0 — Platform
- [ ] Multi-channel support (manage multiple YouTube channels from one MCP)
- [ ] Agency mode — run batch SEO across client channels
- [ ] A/B title testing tracker — track which title variants win
- [ ] Full transcript → blog post (with `/youtube wp-post`)

---

## Built For

- **WordPress plugin companies** using YouTube as a sales channel
- **Elementor / Gutenberg tutorial creators** who want to grow without guesswork
- **Web design agencies** building a YouTube presence for clients
- **Solo developers** who want a marketing team in Claude Code
- **Anyone who's frustrated that VidIQ doesn't understand their business model**

---

## Star This If You

- Hate switching between YouTube Studio, VidIQ, Google Sheets, and Notion to plan one video
- Want keyword research that actually runs, not a tool that tells you to "research your keywords"
- Need to push video updates from Claude Code without opening a browser
- Want your WordPress blog and YouTube channel to work as one SEO system
- Believe that YouTube strategy should be grounded in data, not vibes

---

## Contributing

The skill files in `skills/` are plain Markdown. If you have data from your own niche (gaming, finance, tech, etc.) that improves the recommendations, PRs are welcome.

The research foundation in `references/whitepapers.md` is the backbone — if you have a published study that should be in there, open an issue.

**If this tool grows your channel or drives plugin sales, share it.** That's the signal that tells us what to build next.

---

**Repo:** [github.com/adityaarsharma/youtube-marketing-skills](https://github.com/adityaarsharma/youtube-marketing-skills)

*Built by [Aditya Sharma](https://adityaarsharma.com) — open source under MIT.*  
*The only YouTube tool that knows you're selling something.*
