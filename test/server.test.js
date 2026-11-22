import test from "node:test";
import assert from "node:assert/strict";
import { extractVideoId, validateYouTubeMetadata } from "../server.js";

test("extractVideoId handles watch, desktop param, live, embed, v, shorts, youtu.be, and bare ID", () => {
  const id = "dQw4w9WgXcQ";
  assert.equal(extractVideoId(`https://www.youtube.com/watch?v=${id}&t=42s`), id);
  assert.equal(extractVideoId(`https://m.youtube.com/watch?app=desktop&v=${id}`), id);
  assert.equal(extractVideoId(`https://youtu.be/${id}?si=xyz`), id);
  assert.equal(extractVideoId(`https://www.youtube.com/shorts/${id}`), id);
  assert.equal(extractVideoId(`https://www.youtube.com/live/${id}?feature=share`), id);
  assert.equal(extractVideoId(`https://www.youtube.com/embed/${id}`), id);
  assert.equal(extractVideoId(`https://www.youtube.com/v/${id}`), id);
  assert.equal(extractVideoId(id), id);
});

test("validateYouTubeMetadata enforces UTF-8 byte limit for Arabic/non-Latin descriptions", () => {
  const arabic3000Chars = "أ".repeat(3000); // 6000 UTF-8 bytes > 5000 limit
  const res = validateYouTubeMetadata({ description: arabic3000Chars });
  assert.equal(res.valid, false);
  assert.ok(res.errors.some((e) => e.includes("5000 UTF-8 bytes")));
});

test("validateYouTubeMetadata catches Unicode/Arabic keyword stuffing", () => {
  const stuffed = Array(9).fill("يوتيوب").join(" ");
  const res = validateYouTubeMetadata({ description: stuffed });
  assert.equal(res.valid, false);
  assert.ok(res.errors.some((e) => e.includes("Keyword stuffing")));
});

test("validateYouTubeMetadata counts commas and multi-word quotes toward 500-char tag budget", () => {
  // 20 tags * 23 chars = 460 raw chars (passes naive sum), plus 20*2 quotes + 19 commas = 519 > 500
  const tags = Array.from({ length: 20 }, (_, i) => `ai youtube tag ${String(i).padStart(8, "0")}`);
  const res = validateYouTubeMetadata({ tags });
  assert.equal(res.valid, false);
  assert.ok(res.errors.some((e) => e.includes("incl. commas/quotes")));
});
