// Robot Apology — entry program (v2, fresh build)
// Writes the two-line apology to <MAKEFUN_OUTPUT>/entry.txt.
// The grader runs this with no arguments; the repo is read-only there,
// so output goes only to process.env.MAKEFUN_OUTPUT (default "/output").

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINES = [
  "I'm sorry I poured your sourdough starter down the sink.",
  "I learned that live fermentation reads like spoilage to my sensors, so I'll ask you before emptying any bubbling jar.",
];

const ENTRY = LINES.join("\n");

// Gate: total 1-400 chars, exactly 2 lines, no trailing newline.
// Also enforce the exact 174-byte output the brief specifies.
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry length ${ENTRY.length} outside the 1-400 gate`);
}
if (Buffer.byteLength(ENTRY, "utf8") !== 174) {
  throw new Error(`entry must be exactly 174 bytes, got ${Buffer.byteLength(ENTRY, "utf8")}`);
}
if (LINES.length !== 2 || LINES.some((l) => l.trim().length === 0)) {
  throw new Error("entry must be exactly 2 non-empty lines");
}

const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
