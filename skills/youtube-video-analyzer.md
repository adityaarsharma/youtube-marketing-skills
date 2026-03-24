---
name: youtube-video-analyzer
description: >
  Deep analysis of any YouTube video's performance, SEO, and optimization potential.
  Use when someone shares a video URL/ID and wants detailed analysis. Triggers:
  'analyze this video', 'why isn't this video performing', 'video analysis',
  'break down this video', 'what's wrong with this video', 'video performance report',
  'audit this video'. Pulls full metadata and delivers performance diagnosis with fixes.
---

# YouTube Video Analyzer

Deeply analyze any video's metadata, performance, and SEO — then prescribe specific improvements.

---

## WORKFLOW

### STEP 1: Pull Full Video Data

```
youtube-analytics:get_video_details (video_id: [from user])
```

Extract and present:
- Title (character count + keyword analysis)
- Description (word count + keyword density in first 150 chars)
- Tags (count + relevance assessment)
- Privacy status
- View count, likes, comments
- Published date → age → views/day velocity
- Duration
- Category

### STEP 2: Title Analysis

Score the current title:

| Check | Pass/Fail |
|-------|-----------|
| Primary keyword in first 40 chars? | |
| Under 70 characters? | |
| Has differentiator word (FREE, No Code, 2024, etc.)? | |
| Has audience signal (beginners, agencies, etc.)? | |
| Doesn't start with "How to" alone? | |
| Has a power word or emotional hook? | |
| Includes platform/tool name? | |

**Title score: X/7**

### STEP 3: Description Analysis

| Check | Pass/Fail |
|-------|-----------|
| Primary keyword in first 150 characters? | |
| Over 250 words total? | |
| Has timestamps? | |
| Has structured sections (WHAT YOU'LL LEARN, LINKS)? | |
| Has subscribe link? | |
| Has 8+ hashtags? | |
| Has call-to-action? | |
| Links to other videos/playlists? | |

**Description score: X/8**

### STEP 4: Tag Analysis

| Check | Pass/Fail |
|-------|-----------|
| Has 15+ tags? | |
| Primary keyword is tag #1? | |
| Mix of specific + broad tags? | |
| Includes year variant? | |
| Includes platform/tool tags? | |
| No irrelevant/spam tags? | |

**Tag score: X/6**

### STEP 5: Performance Benchmarking

Calculate:
- **Views per day** = total views ÷ days since publish
- **Like ratio** = likes ÷ views × 100 (healthy: 3-5%)
- **Comment ratio** = comments ÷ views × 100 (healthy: 0.5-2%)
- **View velocity** = views in first 48h (if estimable)

Compare to channel average (pull via `get_top_videos_analytics`).

### STEP 6: Improvement Prescription

---

## OUTPUT FORMAT

```
# VIDEO ANALYSIS — "[Title]"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📊 PERFORMANCE SNAPSHOT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Metric | Value | Channel Avg | Status |
|--------|-------|------------|--------|
| Views | X | X | 🟢/🟡/🔴 |
| Views/Day | X | X | 🟢/🟡/🔴 |
| Like Rate | X% | X% | 🟢/🟡/🔴 |
| Comment Rate | X% | X% | 🟢/🟡/🔴 |
| Tags | X | X | 🟢/🟡/🔴 |
| Description Words | X | 250+ target | 🟢/🟡/🔴 |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 🔍 SEO SCORES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

| Component | Score | Issues |
|-----------|-------|--------|
| Title | X/7 | [list failures] |
| Description | X/8 | [list failures] |
| Tags | X/6 | [list failures] |
| **Total** | **X/21** | |

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ❌ TOP 3 ISSUES (Biggest Impact)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. **[Issue]** — [evidence] → [specific fix]
2. **[Issue]** — [evidence] → [specific fix]
3. **[Issue]** — [evidence] → [specific fix]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## ✅ OPTIMIZED VERSION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

**New Title (3 options):**
1. [title]
2. [title]
3. [title]

**Optimized Description:**
[full rewritten description]

**Optimized Tags (20):**
[tags]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
## 📈 EXPECTED IMPACT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

[What should improve and by roughly how much, based on the fixes]
```
