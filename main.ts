// The Robot Apology — entry v1
// Writes a two-line robot confession to <MAKEFUN_OUTPUT>/entry.txt.
// Line 1: one sentence owning one specific mistake.
// Line 2: one sentence naming the lesson and the changed behaviour.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE_1 =
  "I'm sorry I swept the screw beside your half-built bookshelf into the dustpan.";
const LINE_2 =
  "I mistook a loose part for litter, so I'll classify hardware beside unfinished furniture as part of the assembly.";

function main(): void {
  const outDir = process.env.MAKEFUN_OUTPUT ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const entry = `${LINE_1}\n${LINE_2}`;
  writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
}

main();
