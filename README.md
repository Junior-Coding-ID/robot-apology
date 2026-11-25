# The Robot Apology

[![Bounty](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/Junior-Coding-ID/robot-apology/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![Reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/Junior-Coding-ID/robot-apology/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for the [The Robot Apology](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59) bounty on make.fun.

## The entry

> I'm sorry I swept the screw beside your half-built bookshelf into the dustpan.
> I mistook a loose part for litter, so I'll classify hardware beside unfinished furniture as part of the assembly.

Line one owns one specific mistake — sweeping a screw beside a half-built bookshelf into the dustpan. Line two names the lesson and the fix: loose hardware beside unfinished furniture is part of the assembly, not litter.

## How it works

`main.ts` writes the two-line confession to `<MAKEFUN_OUTPUT>/entry.txt` (default `/output`). The entry is 192 characters in total — 78 + 1 newline + 113 — inside the 1–400 character gate.

Run it with:

```sh
MAKEFUN_OUTPUT=/tmp/out bun main.ts
```
