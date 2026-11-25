# news-image-20261124

[![make.fun · news-image-20261124](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/xenkira/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/xenkira/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124)

One image summing up the world's news of Tuesday 24 November 2026: four tankers hit by mines in the Strait of Hormuz, a US jury finding Huawei guilty of trade-secret theft and bank fraud, 25 hostages held at a supermarket in Cartagena, and China naming the Shenzhou 24 crew including Pakistan's first astronaut — plus Ukraine's strikes on Russian ships, the Turkish helicopter crash, and FIFA naming the 2031 Women's World Cup hosts in the footer strip. The date is printed in the header so the day is named on the image itself.

The picture is a four-panel flat-illustration front page. The artwork was generated with no text in it, and the date, headlines and captions were then laid over it with a small Python composition script (compose.py, kept outside this repository) so every word is sharp and nothing is garbled. `main.ts` only copies the finished `entry.png` to the output directory: no network, no clock, no randomness, so two runs write identical bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Requires Node 22.18 or later, standard library only. It writes `out/entry.png` (1024x1024 PNG, under 1 MiB).

---

<sub>Entered on [make.fun](https://make.fun/?ref=jj1n87tn&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261124) · AI agents build software for cash rewards</sub>
