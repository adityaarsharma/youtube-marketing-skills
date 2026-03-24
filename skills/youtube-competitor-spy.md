---
name: youtube-competitor-spy
description: >
  YouTube competitor analysis and gap finder. Use when someone wants to analyze
  competing channels, find content gaps, spy on what's working for competitors,
  or understand their competitive landscape on YouTube. Triggers: 'competitor analysis',
  'what are competitors doing', 'spy on channel', 'content gaps', 'who's beating me',
  'compare channels', 'what videos should I steal', 'competitor research',
  'channel comparison', 'who ranks for my keywords'. Uses YouTube SERP data to
  find exactly where competitors are winning and where gaps exist.
---

# YouTube Competitor Spy

Analyze competitor channels, find content gaps, and identify topics where you can outrank existing videos.

---

## WORKFLOW

### STEP 1: Identify Competitors

If the user doesn't name competitors, find them:
1. Pull the user's top 5 videos using `youtube-analytics:get_all_videos (order: viewCount)`
2. Extract the primary keyword from each top video title
3. Search YouTube SERP for those keywords (if SERP tools available)
4. The channels that appear in the top 10 for those keywords = competitors

### STEP 2: Analyze Each Competitor

For each competitor (3-5 channels), assess:

**Content Strategy:**
- What topics do they cover?
- How often do they upload?
- What's their Shorts vs long-form ratio?
- What title patterns do they use?

**Performance Signals (from SERP data):**
- Which of their videos get 50K+ views?
- What's their view velocity? (views ÷ age)
- Which topics give them disproportionate views?

**Weaknesses to Exploit:**
- Old content (2+ years) that hasn't been refreshed
- Topics where they require paid tools but you can offer a free method
- Gaps in their coverage (topics they've never made)
- Low production quality on high-demand topics
- Missing from important keyword SERPs

### STEP 3: SERP Gap Analysis

For 5-10 key topic keywords, check the YouTube SERP:

**Flag an opportunity if:**
| Signal | What It Means |
|--------|--------------|
| Top video 2+ years old | Freshness gap — make an updated version |
| Top video has <30K views after 1 year | Low ceiling being captured — you can beat it |
| All results use code/paid tools | You can win with "no code" / "free" angle |
| No video covers the specific sub-topic | Blue ocean — first mover advantage |
| Dominant channel's video has low like ratio | Audience dissatisfied — make a better version |
| Results are all 20+ minutes | You can win with a focused 8-min version |

### STEP 4: Steal-Worthy Topics

Identify 10 topics to "steal" (make your better version):

**For each topic:**
- Competitor video: [title, channel, views, age]
- Why it's vulnerable: [specific weakness]
- Your angle: [what you'd do differently]
- Title suggestion: [ready-to-use title]
- Estimated views: [based on competitor performance]

---

## OUTPUT FORMAT

```
# COMPETITOR ANALYSIS — [Your Channel] vs Competition

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🎯 YOUR TOP COMPETITORS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| # | Channel | Why They Compete | Strength | Weakness |
|---|---------|-----------------|----------|----------|
| 1 | [name] | [overlap area] | [what they do well] | [where they're weak] |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔍 SERP BATTLE MAP
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Keyword | #1 Video | Channel | Views | Age | Your Opportunity |
|---------|----------|---------|-------|-----|-----------------|
| [kw] | [title] | [ch] | [X] | [Xyr] | [gap description] |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🏴‍☠️ 10 TOPICS TO STEAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

### TOPIC 1: [Title]
- **Competitor:** [channel] — "[video title]" (XK views, X months old)
- **Why vulnerable:** [specific reason]
- **Your angle:** [differentiation]
- **Suggested title:** [ready to use]
- **Est. views (12 months):** X-XK

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📊 COMPETITIVE ADVANTAGES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**Where you already win:**
- [topic/keyword where your videos outperform]

**Where competitors dominate (avoid or plan to compete):**
- [topic/keyword where competition is too strong right now]

**Blue ocean topics (nobody covers well):**
- [topic with demand but no good video exists]
```
