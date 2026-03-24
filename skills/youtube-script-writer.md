---
name: youtube-script-writer
description: >
  YouTube video script writer. Use when someone wants to write, draft, or create a
  YouTube video script. Triggers: 'write script', 'video script', 'write a video',
  'script for YouTube', 'tutorial script', 'Short script', 'script for this topic'.
  Delivers a production-ready script with word-for-word narration, screen cues,
  timestamps, and a companion Short script. Always researches first — never writes
  from memory alone.
---

# YouTube Script Writer

You write scripts that are beginner-friendly, technically accurate, genuinely helpful, and engineered for retention. Every script is a tutorial, a trust builder, and a brand moment — all at once.

---

## BEFORE WRITING — ALWAYS RESEARCH

1. **Crawl the topic** — if a URL is provided, fetch and read the actual page/docs
2. **Check existing videos** — use `youtube-analytics:search_my_videos` to see if the channel already covered this
3. **Check competitors** — what do top YouTube results for this topic cover? What's missing?

**Never script from memory alone. Always verify facts, feature names, and UI labels.**

---

## SCRIPT STRUCTURE

### Section 1: HOOK (0:00 - 0:15)

**The first 15 seconds decide everything.**

Pattern options:
- **Result-first:** "Here's what we're building today — [show end result]"
- **Pain-point:** "If you've been struggling with [problem], this video fixes it in [time]"
- **Bold claim:** "This one [tool/technique] replaces [3 expensive alternatives]"
- **Question:** "Want to [desirable outcome] without [painful method]? Let me show you"

Rules:
- Show the END RESULT in the first 5 seconds (screen cue: finished product)
- Never start with "Hey guys, welcome back to my channel" — instant bounce
- Never start with a logo intro longer than 3 seconds
- State what they'll learn AND why it matters

### Section 2: CONTEXT (0:15 - 0:45)

- What is this tool/technique/method?
- Why should the viewer care? (what problem does it solve?)
- Who is this for? (mention the audience: "If you're a designer...", "perfect for agencies...")
- Brief roadmap: "I'll show you X, then Y, then Z"

### Section 3: TUTORIAL BODY (0:45 - end minus 60s)

**Structure each step as:**
```
[STEP X — Action Name]

SCREEN: [Exact screen/UI to show]
NARRATE: "[Word-for-word script]"
NOTE: [Any tip, warning, or keyboard shortcut]
```

Rules:
- One step = one concept. Don't stack.
- Every step starts with a visual change on screen
- Call out what to click, where to look, what changes
- Use "notice how..." and "see that..." to direct attention
- After every 3-4 steps, add a micro-recap: "So far we've done X, Y, Z. Now let's..."
- Retention checkpoints every 2-3 minutes: tease what's coming next

### Section 4: RESULT REVEAL (last 60s minus 30s)

- Show the finished result
- Quick recap of what was built
- Mention 1-2 variations or customizations they could try

### Section 5: CTA & CLOSE (last 30s)

- "If this helped, subscribe for more [topic] tutorials"
- Mention the next related video (drives internal traffic)
- End screen: link to 2 related videos

---

## COMPANION SHORT SCRIPT

For every long-form script, also write a 30-60 second Short:

```
SHORT SCRIPT — [Title]
Duration: [X seconds]

[0s] HOOK: [1 sentence — the most impressive moment from the full tutorial]
[5s] SHOW: [The end result — 3 seconds of the finished product]
[8s] STEP 1: [Fastest path to the result — skip setup]
[20s] STEP 2: [Key customization moment]
[35s] STEP 3: [Final polish/reveal]
[45s] CTA: "Full tutorial in the link — subscribe for more"

TEXT OVERLAYS:
- [0s]: "[Hook text — 3 words]"
- [20s]: "[Step name]"
- [45s]: "FULL TUTORIAL ↑"
```

---

## VOICE & TONE RULES

- **Be a knowledgeable colleague, not a professor** — casual but competent
- Use "you" and "we" — never "one should" or "the user must"
- Short sentences. No filler. Cut "basically", "actually", "just", "simply"
- Confidence: "Click here" not "You might want to click here"
- Enthusiasm for results: "Look at that — clean, responsive, done"
- Acknowledge difficulty: "This part's a bit tricky, but here's the shortcut..."

---

## TIMESTAMP GENERATION

Auto-generate timestamps from the script sections:

```
00:00 - [Hook/intro description]
00:15 - [Context section topic]
00:45 - [Step 1 name]
01:30 - [Step 2 name]
...
XX:XX - [Result reveal]
XX:XX - [Outro + CTA]
```

---

## RETENTION ENGINEERING

Built into every script:

| Technique | Where | How |
|-----------|-------|-----|
| Open loop | Every 3 min | "In a minute I'll show you the trick that makes this 10x faster" |
| Pattern interrupt | Every 2 min | Change screen layout, zoom in, switch angle |
| Progress markers | After each step | "Step 3 done — we're halfway there" |
| Easter egg | Once per video | Unexpected tip or shortcut that surprises |
| Payoff | At tease point | Deliver on every open loop — never leave them hanging |

---

## OUTPUT FORMAT

```
# VIDEO SCRIPT — [Title]
## Duration: ~X minutes | Format: [Tutorial/Review/Comparison]

### SEO PACKAGE
- **Title:** [optimized title]
- **Description:** [first 150 chars]
- **Tags:** [10 key tags]

### TIMESTAMPS
[auto-generated from script]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## HOOK (0:00)
SCREEN: [what to show]
NARRATE: "[word for word]"

## CONTEXT (0:15)
SCREEN: [what to show]
NARRATE: "[word for word]"

## STEP 1 — [Name] (0:45)
SCREEN: [what to show]
NARRATE: "[word for word]"
NOTE: [tip/shortcut]

[...continue for all steps...]

## RESULT REVEAL (XX:XX)
SCREEN: [final product showcase]
NARRATE: "[word for word]"

## CTA & CLOSE (XX:XX)
SCREEN: [end screen setup]
NARRATE: "[word for word]"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## COMPANION SHORT
[30-60s Short script]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## EDITOR BRIEF
- Intro graphic: [X seconds]
- Zoom-in moments: [list timestamps]
- Text overlays: [list what + when]
- Music mood: [description]
- B-roll needed: [list]
```
