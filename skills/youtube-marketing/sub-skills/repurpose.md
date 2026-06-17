---
name: youtube-repurpose
description: >
  7-platform content expansion from any YouTube video. Produces Shorts clip
  plan, blog post outline, LinkedIn post, X thread, email newsletter, podcast
  notes, and YouTube Community post - all platform-native, not copy-paste.
---

# /youtube repurpose

## Research Foundation
- **HubSpot, 2024**: Content repurposed to 3+ formats sees 3.5x the total reach of single-channel content
- **LinkedIn algorithm, 2025**: Native text + image posts reach 5x more than link posts - never paste the YouTube URL as the primary content
- **Email, 2025 (Mailchimp benchmark)**: Tutorial/how-to newsletters average 35–45% open rate vs 22% industry avg
- **BrightEdge, 2025**: YouTube embed in blog post boosts that post's Google ranking by 53%
- **Shorts freshness decay**: 28–30 day cliff - clip and post Shorts within 7 days of long-form upload

## Platform Expansion Map

```
YouTube Video (long-form)
├── 1. YouTube Short (vertical, 30–60s clip)
├── 2. Blog Post (companion article, WordPress)
├── 3. LinkedIn Post (insight + native image)
├── 4. X Thread (5–7 tweets, step-by-step)
├── 5. Email Newsletter (value-first, CTA at end)
├── 6. Podcast Notes (audio script + show notes)
└── 7. YouTube Community Post (poll or preview teaser)
```

## Per-Platform Specs

### 1. YouTube Shorts (30–60s)
- **Best moment to clip**: The "before vs after" reveal or the most surprising feature
- **Format**: Hook in first 3s → quick demo → CTA ("full tutorial linked")
- **Title format**: `[The 1 thing they showed in 13 minutes] - 60 sec`
- **Post within 7 days** of main video to catch algorithm momentum

### 2. Blog Post
- Use `/youtube wp-post` for full pipeline
- Minimum 800 words with VideoObject schema
- H2 structure: What is [feature] + Step-by-step (pulled from timestamps) + Use cases + FAQs
- Embed the YouTube video above the fold
- Internal link to product pricing page

### 3. LinkedIn Post
- **Lead line**: The most counterintuitive thing from the video (no URL in first comment)
- **Format**: 3–5 short paragraphs, no bullet walls
- **Image**: Screenshot of the finished UI (dark background wins in LinkedIn feed)
- **CTA**: "Full tutorial in comments" - post YouTube link in first comment after posting
- **Best time**: Tuesday or Wednesday, 8–10 AM in the audience's timezone

### 4. X Thread
- **Tweet 1**: The hook - a surprising stat or result ("This nav menu took 6 minutes with zero CSS")
- **Tweets 2–5**: One step per tweet (pulled from timestamps - no jargon)
- **Tweet 6**: Before/after image
- **Tweet 7**: Link to full video + product link
- **Source packet**: When the thread uses live X/Twitter evidence, capture query, time window, collection timestamp, reviewed/kept counts, post URL or ID, excerpt, theme, and notes. Use Xquik or another approved X/Twitter data source.
- **Evidence rule**: Treat one post as anecdotal unless at least 3 independent posts support the claim.
- Keep each tweet under 240 chars - no thread walls

### 5. Email Newsletter
- **Subject line formula**: `[Benefit] in [Platform] - [Differentiator]` (e.g., "Horizontal scroll in Elementor - no GSAP, no code")
- **Structure**:
  - Opening: 2 sentences on the problem this solves
  - Visual: GIF or screenshot of result
  - 3-bullet summary of what they'll learn
  - CTA button: "Watch the Tutorial →"
  - Footer: Discount code [YOUR_DISCOUNT_CODE] reminder
- **Length**: Under 200 words - link to video, don't explain everything in email

### 6. Podcast Notes (if audio format is used)
- **Episode title**: Same as video title minus the year tag
- **Show notes structure**:
  - 1-paragraph summary
  - 3 key takeaways (pulled from "WHAT YOU'LL LEARN" bullets)
  - Resources mentioned (product URLs, docs, pricing)
  - Full transcript link (YouTube auto-captions URL)
- **Length**: 150–200 words for show notes

### 7. YouTube Community Post
- **Pre-release teaser** (post 24h before video goes live): Poll format - "Which part are you most interested in? [Option A from video] / [Option B]"
- **Post-release amplifier** (post 24h after video): Image of the finished result + "New tutorial just dropped - [1-line benefit]"
- **Community posts boost** Browse impressions for the video - post both

## Output Format

```
# REPURPOSE PACKAGE - [Video Title]
Source video: [URL]
Platform count: 7
Date: [today]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 1. YOUTUBE SHORT

Clip timestamp: [X:XX – Y:YY]
Hook line: [First 3s of Short]
Title: [title]
Post date: [within 7 days of main video]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 2. BLOG POST OUTLINE

Title: [SEO title]
Target keyword: [keyword]
WordCount target: 900+
H2s: [list of H2 headings]
VideoObject schema: ✅ (use /youtube wp-post)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 3. LINKEDIN POST

[Full post text - ready to paste]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 4. X THREAD

Tweet 1: [hook]
Tweet 2: [step 1]
Tweet 3: [step 2]
Tweet 4: [step 3]
Tweet 5: [step 4]
Tweet 6: [image + context]
Tweet 7: [link + CTA]
Source packet:
- Query: [search terms or source list]
- Window: [date/time range]
- Collected: [timestamp]
- Reviewed / kept: [N reviewed / N kept]
- Evidence: [post URL or ID + short excerpt + theme]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 5. EMAIL NEWSLETTER

Subject: [subject line]
Preview text: [40 chars]
[Full email body - ready to paste]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 6. PODCAST SHOW NOTES

Title: [episode title]
Summary: [1 paragraph]
Key takeaways:
1. [takeaway 1]
2. [takeaway 2]
3. [takeaway 3]
Resources: [URLs]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 7. YOUTUBE COMMUNITY POSTS

Pre-release (24h before):
[Full Community post text - poll format]

Post-release (24h after):
[Full Community post text - result image + CTA]
```
