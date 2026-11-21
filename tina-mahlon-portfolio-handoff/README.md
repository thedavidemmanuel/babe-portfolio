# Handoff package — Dr. Tina Nimrod Mahlon portfolio

This folder is everything Claude Code needs to build the portfolio design as a Next.js site.

## How to use it

1. Unzip this folder and use it as the project folder (or copy its contents into an empty one).
2. Open a terminal in that folder and start Claude Code.
3. Paste this prompt:

   > Read CLAUDE.md and everything it points to in handoff/. Then scaffold a Next.js App Router project in this folder (TypeScript, CSS Modules, no Tailwind) and build the portfolio exactly as specified. Work section by section, checking each against the reference at 1440px and 390px before moving on. When you finish, run through the acceptance checklist in handoff/SPEC.md and tell me what passes and what does not.

## What is inside

```
CLAUDE.md                      Rules Claude Code picks up automatically
handoff/
  SPEC.md                      Build spec: stack, layout, sections, acceptance checklist, open questions
  ANIMATIONS.md                Every animation with timings, on desktop and mobile
  content.ts                   All the copy, typed
  tokens.css                   Colours, fonts, spacing, radii
  assets/
    portrait.jpg               Hero photo
    map.ts                     Nigeria outline, city positions, route
    vein.ts                    Vein path data
  reference/
    index.html                 The design, working in a browser: open it and resize the window
    screenshots/desktop/       Each section at 1440px
    screenshots/mobile/        Each section at 390px
    screenshots/mobile-motion/ Phone captures with the animations mid-flight
```

## To see the design yourself

Open `handoff/reference/index.html` in a browser. Narrow the window below 920px (or use the browser's phone preview) to see the mobile version, and scroll through the experience section to watch the vein grow.

## Before going live

`handoff/SPEC.md` ends with a short list of content points to confirm with Dr. Mahlon (dates, job title, spellings). None of them block the build.
