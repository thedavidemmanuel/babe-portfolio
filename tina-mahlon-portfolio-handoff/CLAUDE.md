# Dr. Tina Nimrod Mahlon — portfolio site

You are building a one-page portfolio site in Next.js from a finished design. Everything you need is in `handoff/`.

## Read first, in this order

1. `handoff/SPEC.md` — stack, structure, layout, every section, acceptance checklist.
2. `handoff/ANIMATIONS.md` — the six animations, including how they adapt on phones.
3. `handoff/reference/index.html` — open it in a browser and resize it. This is what the finished site must look and move like.
4. `handoff/content.ts`, `handoff/tokens.css`, `handoff/assets/` — copy, tokens and path data to use as-is.

## Rules

- **Match the reference, not its code.** The reference HTML is a design export full of inline styles and `!important`. Rebuild it as clean components and CSS Modules driven by the tokens.
- **Do not redesign.** No new colours, fonts, sections, icons, copy or animations. If something in the spec seems wrong or is missing, ask instead of improvising.
- **Copy comes from `content/site.ts`** (moved from `handoff/content.ts`). Never hard-code or reword text in components.
- **Red means pulse.** `--accent` is only for the animated elements, the section numbers, the stat numbers, the "Current role" tag and the call to action. Do not spread it elsewhere.
- **Mobile is part of the design**, not an afterthought. Build and check 390px alongside 1440px for every section.
- **Respect reduced motion** exactly as specified.
- Keep components as Server Components unless they need the browser (`StatCounter`, `MotionRoot`).
- Keep `handoff/` in the repo untouched as the design record.

## Verify before you say it is done

Run the site and compare it with `handoff/reference/index.html` and the screenshots at 1440px, 820px, 390px and 320px. Check the animations on a touch-emulated device and with reduced motion on. Then go through the acceptance checklist in `handoff/SPEC.md` item by item.
