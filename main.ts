import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, 5-7-5 syllables, written to /output/entry.txt.
const haiku = [
  "Breakpoint holds its breath",
  "cursor blinks at three a.m.",
  "and the bug was mine",
].join("\n") + "\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", haiku, "utf8");
