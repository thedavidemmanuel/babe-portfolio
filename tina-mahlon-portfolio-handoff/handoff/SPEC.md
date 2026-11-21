# Build spec — Dr. Tina Nimrod Mahlon portfolio

A single-page portfolio for a medical doctor, aimed at prospective employers (hospitals, NGOs, humanitarian health programmes). The design is finished; this document tells you how to rebuild it as a Next.js site.

## 1. What you are given

| File | Use it for |
|---|---|
| `reference/index.html` | The design itself. Open it in a browser and resize it. It is the visual and motion truth at every width. |
| `reference/screenshots/` | Per-section captures at 1440px (`desktop/`) and 390px (`mobile/`), plus phone motion states (`mobile-motion/`). |
| `content.ts` | Every word on the page, typed. Move it to `content/site.ts` and render from it. |
| `tokens.css` | Colours, fonts, layout and radius tokens. |
| `assets/portrait.jpg` | The hero photo (1500 × 1933). |
| `assets/map.ts` | Nigeria outline path, city positions and route path for the map. |
| `assets/vein.ts` | SVG path data for the vein. |
| `ANIMATIONS.md` | Exact behaviour and timings for every animation, desktop and mobile. |

The reference HTML was exported from a design canvas, so it uses inline styles and `!important` overrides. **Match how it looks and moves; do not copy how it is written.** Rebuild it as components with clean CSS driven by the tokens.

## 2. Stack

- Next.js (current stable) with the App Router, React, TypeScript in strict mode.
- Styling: CSS Modules plus one `app/globals.css` holding the tokens, base styles and keyframes. No Tailwind and no UI kit unless the user asks.
- No animation library. Everything is CSS keyframes and transitions, plus two small client hooks (count-up and scroll-linked motion).
- Fonts through `next/font/google`: Bricolage Grotesque (variable, weights 500–700 used), Instrument Sans (400–600), IBM Plex Mono (400, 500). Expose them as CSS variables and map them to `--font-display`, `--font-body`, `--font-mono`.
- Portrait through `next/image` with `priority`, a `sizes` attribute, and `object-position: 50% 18%`.
- The page is fully static. It must work with `next build` and deploy to Vercel with no environment variables.

## 3. Suggested structure

```
app/
  layout.tsx          fonts, metadata, <html lang="en">
  page.tsx            composes the sections in order
  globals.css         tokens.css + base + keyframes
  icon.tsx            simple generated favicon: "TM" in cream on --ink
content/
  site.ts             content.ts from this package
components/
  SiteHeader.tsx      brand + nav
  Hero.tsx            eyebrow, name, statement, intro, CTAs, portrait
  HeartbeatLine.tsx   ECG trace above the facts strip
  FactsStrip.tsx
  Profile.tsx
  NigeriaMap.tsx
  StatCounter.tsx     client component (count-up)
  Experience.tsx
  ExperienceItem.tsx
  Vein.tsx            the SVG layers
  Practice.tsx / PracticeCard.tsx
  Research.tsx
  Training.tsx
  Contact.tsx
  SiteFooter.tsx
  MotionRoot.tsx      client component: one scroll listener for the whole page
lib/
  map.ts, vein.ts     from assets/
public/
  portrait.jpg
```

Keep everything a Server Component except `StatCounter` and `MotionRoot`.

## 4. Layout system

- **Container:** `max-width: 1264px`, centred, `padding-inline: 32px` (20px at ≤ 560px). Content width is 1200px on a 1440px screen.
- **Split layout:** most sections are a label column and a content column: `display: flex; flex-wrap: wrap; gap: 24px 64px`, label column `flex: 1 1 220px`, content column `flex: 3 1 560px`, both `min-width: 0`. On a 1200px container that gives 309px and 827px. Keep this exact flex recipe: the vein's horizontal position is derived from it (see `ANIMATIONS.md`).
- **Section rhythm:** `padding-block: clamp(64px, 8vw, 104px)`; the contact band uses `clamp(72px, 9vw, 120px)`.
- **Surface order:** hero `--ink` → profile `--cream` → experience `--sand` → areas of practice `--ink` → research `--cream` → training `--sand` → contact `--accent` → footer `--ink`.
- **Breakpoints:** 920px and 560px (see `tokens.css`). Nothing may scroll sideways at 320px.

## 5. Type scale

| Role | Family | Size | Weight | Line height | Tracking |
|---|---|---|---|---|---|
| Name (h1) | display | `clamp(44px, 6vw, 84px)` | 700 | 0.98 | −0.03em |
| Hero statement | display | `clamp(20px, 2vw, 26px)` | 500 | 1.32 | −0.01em |
| Section heading (h2) | display | `clamp(32px, 4vw, 52px)` | 700 | 1.05 | −0.03em |
| Contact heading | display | `clamp(36px, 5vw, 68px)` | 700 | 1.02 | −0.03em |
| Lead paragraph / research title | display | `clamp(24px, 2.5vw, 34px)` | 500 / 600 | 1.24 | −0.02em |
| Role title (h3) | display | 30px | 700 | 1.15 | −0.02em |
| Card title | display | 23px | 600 | 1.2 | −0.01em |
| Stat number | display | 56px (48px at ≤ 920px) | 700 | 1 | −0.03em, tabular numerals |
| Body base | body | 17px | 400 | 1.6 | 0 |
| Role summary, section intro | body | 18px | 400 | 1.6 | 0 |
| List item, card text | body | 16px | 400 | 1.55–1.6 | 0 |
| Organisation line | body | 17px | 600 | 1.6 | 0 |
| Place, small meta | body | 14–15px | 400 | 1.5 | 0 |
| Section label, eyebrow, facts label | mono | 13–14px, uppercase | 400–500 | 1.6 | 0.1em |
| Dates | mono | 14px | 400 | 1.6 | 0.04em |
| Pills, "Current role" tag | mono | 13px | 400 | 1.6 | 0 / 0.06em uppercase |

Use `text-wrap: balance` on headings and `text-wrap: pretty` on paragraphs. Cap paragraph measure at 720px inside the content column.

## 6. Sections

Each section lists the desktop layout first, then what changes on a phone. Check every one against the matching screenshot.

### Header and hero (`--ink`)
- **Nav:** brand ("Tina Nimrod Mahlon" in display 700 19px, then "MBBS" in mono 13px) on the left, five anchor links on the right (15px, weight 500, 44px tall hit areas). Not sticky.
- **Hero row:** text column `flex: 1.25 1 520px`, portrait `flex: 1 1 380px`, `gap: 48px 64px`, vertically centred, `padding: 40px 0 72px`.
- **Text column:** eyebrow with a 10px accent square, the name, the statement (max 600px), the intro (max 560px, `--on-dark-body`), then the CTA row.
- **CTAs:** primary is an accent-filled `mailto:` link with a right arrow, 52px tall, 4px radius. Secondary is an underlined text link to `#experience`. The primary action is the only filled button in the hero.
- **Portrait:** 4:5 box, 6px radius, `object-fit: cover`. Mono caption underneath with the photo credit.
- **Heartbeat line** then the **facts strip**: four label/value pairs in an auto-fit grid, minimum column 230px.
- **Phone:** the nav links become one horizontally scrollable row under the brand (no wrapping, scrollbar hidden). Text stacks above the portrait. The facts strip is two columns at ≤ 560px.

### 01 Profile (`--cream`)
- **Label column:** "01 Profile" (the number in accent), then the map (max 300px) with its caption, 40px below the label.
- **Content column:** lead paragraph, body paragraph (max 700px), then three stats in an auto-fit grid (minimum 220px), each with a strong top rule, a 56px accent number and a 16px description.
- **Phone:** order becomes label → lead → body → stats → map. Stats turn into rows: number on the left (min-width 104px, 48px), description on the right. The map is centred, max 340px wide.

### 02 Experience (`--sand`)
- **Header row:** label column "02 Experience", content column the h2.
- **Roles:** five `<article>`s, newest first, each a split layout with `padding-block: 40px` and a top rule (`--line-strong` on the first, `--line` on the rest; no bottom padding on the last).
  - Label column: dates (mono), place (muted), and on the first role only the "Current role" tag (accent fill, white mono text).
  - Content column: role title (h3), organisation, summary, highlight list with a decorative "—" marker (`aria-hidden`), then the skill pills (`<ul aria-label="Skills used">`).
- **The vein** runs down the gutter between the two columns. See `ANIMATIONS.md`.
- **Phone:** each role is indented 44px to make room for the vein on the left edge. Dates and place sit on one wrapping row. Everything else stacks.

### 03 Areas of practice (`--ink`)
- Header row with h2 and a one-line intro, then six cards in an auto-fit grid (minimum 320px, 24px gap; three columns on desktop).
- **Card:** `--ink-panel` fill, 1px `--card-border`, 6px radius, 28px padding; mono index "01"–"06", title, text.
- **Phone:** one column.

### 04 Research (`--cream`)
- Split layout: label, then the study title in the lead style (max 780px) and a one-line note.

### 05 Training (`--sand`)
- Header row, then four columns in an auto-fit grid (minimum 250px, 40px gap), each with a strong top rule, a mono column title and name/detail pairs.
- **Phone:** one column.

### 06 Contact (`--accent`) and footer (`--ink`)
- Left-aligned: mono label, large heading (max 900px), 20px paragraph (max 620px), then a white `mailto:` button (56px tall, ink text, right arrow) and the email address as an underlined mono link.
- **Footer:** copyright on the left, portrait credit on the right, 14px, `--on-dark-muted`.

## 7. Accessibility and quality bar

- One `h1` (the name); each section has an `h2` (the mono section label is the `h2` where there is no larger heading); roles and cards use `h3`.
- Add a "Skip to content" link and visible `:focus-visible` styles: 2px outline in `--accent` on light surfaces, white on dark and on the contact band, 3px offset. The reference does not show these; add them.
- All decorative SVG (heartbeat line, vein, list dashes, arrows) is `aria-hidden`. The map is `role="img"` with the alt text from `content.ts`.
- Interactive elements are real `<a>` elements. Hit areas are at least 44px tall.
- Text contrast is at least 4.5:1 everywhere. `--accent` carries white text; `--accent-bright` is for lines only, never text.
- Honour `prefers-reduced-motion` exactly as described in `ANIMATIONS.md`.
- Metadata from `content.ts`: title, description, Open Graph and Twitter card. Generate the OG image with `next/og` (name and role on `--ink`), not from the portrait.
- Targets: Lighthouse accessibility ≥ 95 and performance ≥ 90 on mobile; no layout shift from fonts or the portrait; no hydration warnings.

## 8. Acceptance checklist

- [ ] At 1440px each section matches `reference/screenshots/desktop/`.
- [ ] At 390px each section matches `reference/screenshots/mobile/`.
- [ ] At 820px the layout is the stacked (phone) variant with the vein on the left edge.
- [ ] No horizontal scroll at 320px, 390px, 820px or 1440px.
- [ ] All six animations behave as in `reference/index.html` on desktop and on a touch device.
- [ ] With reduced motion on, nothing moves and nothing is hidden.
- [ ] All copy comes from `content/site.ts` and matches `content.ts` in this package word for word.
- [ ] `next build` passes with no type or lint errors.

## 9. Out of scope

Do not add any of these unless the user asks: a CMS, a blog, a contact form, analytics, a dark-mode toggle, a CV download, extra sections, stock imagery, or icons beyond the two arrows in the design.

## 10. Content still to confirm with Dr. Mahlon

Build with the copy as written. These are open and may change, so keep them easy to edit in `content/site.ts`:

1. **MSF dates.** The CV dates the MSF role March–May 2022 with the title "Medical Doctor", but the MBBS is dated 2024.
2. **Job title at Royal Orthopedic Hospital.** "Medical Doctor" is assumed.
3. **Hospital name spelling.** "Royal Orthopedic Hospital" is as given; confirm the official spelling.
4. **M3 Clinic and Maternity location.** Written as "Lugbe, Abuja" from a spoken note.
5. **Phone number and referees.** Deliberately left off the public page.
6. **Domain name.** Not chosen yet.
