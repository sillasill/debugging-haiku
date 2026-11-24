import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, 5-7-5 syllables, written to /output/entry.txt.
const haiku = [
  "Breakpoint holds its breath",
  "cursor blinks at three a.m.",
  "and the bug was mine",
].join("\n") + "\n";

const haikuLines = haiku.trimEnd().split("\n");
if (haikuLines.length !== 3) throw new Error("haiku must have exactly 3 lines");
if (haiku.length < 1 || haiku.length > 200) throw new Error("haiku must be 1-200 characters");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
