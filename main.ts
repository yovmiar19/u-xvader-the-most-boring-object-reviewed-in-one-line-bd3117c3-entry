// Entry for make.fun bounty "The Most Boring Object, Reviewed in One Line"
// (u-xvader-the-most-boring-object-reviewed-in-one-line-bd3117c3)
// One-line funny+true review of a genuinely boring everyday object (max 200 chars).
// Writes exactly the entry line to /output/entry.txt and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Rubber band: sits in the drawer for years, then crumbles into sticky bits the one day you need it.";

// Gate: the entry must be a single line of at most 200 characters.
if (LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`Entry line violates the gate (length ${LINE.length}).`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
