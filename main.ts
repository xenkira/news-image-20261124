// News image, 24 November 2026 — make.fun news-image-20261124.
//
// The entry is one picture: entry.png beside this file. The program does
// nothing but copy that picture to the output directory, so the run is
// deterministic by construction — the same input bytes come out every time,
// with no network, no clock, no randomness and no other input involved.
//
// The picture itself is a four-panel newspaper front page for Tuesday
// 24 November 2026, composed from a flat illustration and crisp text
// labels: mines in the Strait of Hormuz, Huawei found guilty in a US
// court, 25 hostages held in Cartagena, and Pakistan's first astronaut
// named to China's Shenzhou 24 crew, plus a footer strip with Ukraine's
// strikes on Russian ships, the Turkish helicopter crash, and FIFA naming
// the 2031 Women's World Cup hosts. The date is printed in the header so
// the day the image sums up is named on the image itself.
//
// Run it (outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Node 22, standard library only.

import { copyFileSync, existsSync, mkdirSync, statSync } from "node:fs";
import { join } from "node:path";

// The picture shipped in the repository, resolved relative to this file
// so the program works wherever the repository is checked out.
const source = new URL("./entry.png", import.meta.url);

// The grader sets MAKEFUN_OUTPUT_DIR; without it, write to /output,
// which is where the grader reads the entry from.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (!existsSync(source)) {
  throw new Error("entry.png is missing from the repository root");
}

const target = join(outDir, "entry.png");
copyFileSync(source, target);

// A copy that silently truncated would still be a PNG the gate reads, so
// check the sizes match before reporting success. This keeps the run
// honest without changing its output: the bytes are still just the copy.
if (statSync(source).size !== statSync(target).size) {
  throw new Error("entry.png copy is incomplete: size mismatch");
}
