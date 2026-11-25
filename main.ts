import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS's own excuse, in its voice: smug, defensive, blaming the map.
const LINE =
  "The map told me to turn left at the red barn. The red barn is a wedding venue now. Congratulations, you are the plus-one.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-200 non-blank chars, got ${LINE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
