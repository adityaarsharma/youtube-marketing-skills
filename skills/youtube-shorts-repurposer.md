---
name: youtube-shorts-repurposer
description: >
  Turn any long-form YouTube video into multiple Shorts. Use when someone wants to
  create Shorts from existing content, repurpose videos, or maximize content output.
  Triggers: 'make shorts from this', 'repurpose video', 'turn into shorts',
  'extract shorts', 'shorts ideas from video', 'clip this video', 'content repurposing',
  'make shorts'. Analyzes video content and generates 3-5 Short scripts with hooks,
  text overlays, and CTAs that drive traffic back to the full video.
---

# YouTube Shorts Repurposer

Extract maximum value from every long-form video by creating 3-5 companion Shorts that drive reach and funnel viewers to the full tutorial.

---

## WORKFLOW

### STEP 1: Get the Source Video

Pull full details:
```
youtube-analytics:get_video_details (video_id)
```

Read: title, description, timestamps (from description), duration.

### STEP 2: Identify Short-Worthy Moments

From the timestamps and description, find moments that are:

**Tier 1 — Result Reveals (best for Shorts):**
- The finished product/output being shown
- Before/after transformations
- "Wow" moments where something clicks into place

**Tier 2 — Quick Tips:**
- A single trick or shortcut that saves time
- A non-obvious feature or hidden setting
- A common mistake and the fix

**Tier 3 — Hook Moments:**
- The most interesting claim from the video
- A surprising comparison or statistic
- The "you're doing it wrong" moment

### STEP 3: Write 3-5 Short Scripts

For each Short:

```
## SHORT #[N] — "[Title]"
**Source:** [timestamp range from original video]
**Duration:** [30-60 seconds]
**Type:** [Result Reveal / Quick Tip / Hook]

[0s] HOOK: [First sentence — must stop the scroll]
     SCREEN: [What to show — the most impressive visual]
     TEXT: "[2-3 word overlay]"

[5s] CONTEXT: [1 sentence — what problem this solves]
     SCREEN: [Quick setup/before state]

[10s] STEP 1: [Fastest action]
      SCREEN: [Exact UI/action]
      TEXT: "[Step label]"

[20s] STEP 2: [Key moment]
      SCREEN: [The transformation happening]

[35s] RESULT: [Show the output]
      SCREEN: [Finished product, polished]
      TEXT: "[Result label — e.g. DONE ✅]"

[45s] CTA: "Full tutorial linked above — subscribe for more"
      SCREEN: [End frame with subscribe prompt]
      TEXT: "FULL TUTORIAL ↑"
```

### STEP 4: Optimization Notes

For each Short, provide:
- **Best posting time:** (based on channel's audience timezone)
- **Hashtags:** 3-5 relevant hashtags
- **Title:** Short-optimized title (different from long-form)
- **Link:** Remind to add the full video link in Short's description

---

## SHORT SCRIPT RULES

1. **Hook in first 1 second** — show the result or make a bold claim immediately
2. **Skip all setup** — no intros, no "welcome back", no plugin installation
3. **Show, don't explain** — more screen recording, less talking head
4. **Text overlays every 5-10 seconds** — many viewers watch muted
5. **End with a reason to watch the full video** — "I cover 5 more tricks in the full tutorial"
6. **Vertical format** — note any screen recordings need to be cropped for 9:16
7. **30-60 seconds max** — YouTube Shorts limit. Aim for 45s sweet spot.
8. **Loop potential** — if the end connects visually to the start, retention goes up

---

## OUTPUT FORMAT

```
# SHORTS REPURPOSE PLAN — "[Original Video Title]"

**Source video:** [URL] | [duration] | [views]
**Shorts to create:** [3-5]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## SHORT 1: "[Title]" — [Type: Result Reveal]
**Source timestamp:** [X:XX - X:XX]
**Duration:** ~[X]s

[Full script with HOOK/SCREEN/TEXT/CTA format]

**Hashtags:** #[tag1] #[tag2] #[tag3]
**Best post time:** [time + timezone]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## SHORT 2: "[Title]" — [Type: Quick Tip]
[...]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

## POSTING STRATEGY
- Post Short 1 on [day] (1 day before/after full video)
- Post Short 2 on [day] (3 days later)
- Post Short 3 on [day] (5 days later)
- Each Short description links to the full tutorial
```
