# Animations — desktop, mobile and reduced motion

There are seven animations. Red is reserved for them: it marks things that pulse or flow. Every one is CSS (keyframes or transitions); JavaScript only sets a few classes and one CSS variable.

Watch them in `reference/index.html` before building. The CSS in that file's `<style>` block has the exact keyframes; the values below are copied from it.

## The mobile idea: scroll is the pulse

A phone has no hover and no room for a wide decorative vein, so the page hands those two jobs to scrolling:

- The **vein** moves to the left edge and becomes the spine of the experience timeline. It **grows as you scroll**, reaching each role as you reach it, and each role's node wakes up when the vein arrives.
- The **cards** light up one at a time: whichever card is nearest the middle of the screen gets the hover state.

Everything else (heartbeat line, counting numbers, map) already works at any width and stays the same.

The stacked layout and the vein spine switch on at `max-width: 920px`. The card-in-focus behaviour switches on at `(hover: none), (max-width: 920px)` so touch tablets get it too.

## Shared client logic: `MotionRoot`

One client component wraps the page, adds a single passive `scroll` listener and a `resize` listener, and throttles with `requestAnimationFrame`. On each frame it does three things:

```ts
const vh = window.innerHeight;
const line = vh * 0.72;                      // the "reach line", 72% down the viewport

// 1. Vein progress, 0..1, written to the experience list
const r = list.getBoundingClientRect();
const p = clamp((line - r.top) / r.height, 0, 1);
list.style.setProperty("--vein-p", p.toFixed(4));

// 2. A role is reached when its top edge + 52px has passed the reach line
items.forEach((el) => el.classList.toggle("is-reached", el.getBoundingClientRect().top + 52 < line));

// 3. The card whose centre is nearest the viewport centre is active,
//    but only if that centre is within 30% of the viewport height
cards.forEach((el, i) => el.classList.toggle("is-active", i === best && bestDistance < vh * 0.3));
```

- If `prefers-reduced-motion: reduce` matches, `MotionRoot` does nothing and does not add the `js-motion` class.
- Otherwise it adds `js-motion` to the page root. All scroll-linked CSS is scoped under `.js-motion`, so the page is complete and fully visible without JavaScript.
- The script runs at every width. CSS media queries decide where its output is used.

## 1. Heartbeat line (hero)

An ECG trace that draws itself once above the facts strip, then a short red pulse sweeps along it on a loop.

- **Markup:** a 48px-tall box with `overflow: hidden` holding an SVG 2400 × 48 (wider than any screen, so no scaling). Two `<path>`s share this `d`: `M0 30H150q7 -9 14 0h12l5 5l9 -31l9 40l6 -14h18q10 -11 20 0H2400`. The blip sits 150–250px from the left, so it is visible on every screen.
- **Base line:** stroke `--on-dark` at 40% opacity, 1.5px, round joins. `stroke-dasharray: 2700; stroke-dashoffset: 2700`, animated to `0` over **3.6s linear**, delay **0.3s**, `forwards`. Runs once.
- **Sweep:** stroke `--accent-bright`, 2.5px, `stroke-dasharray: 80 2700`, `stroke-dashoffset` from `80` to `-1400` over **6s linear infinite**, delay **3.9s** (it starts when the draw finishes).
- **Mobile:** identical.
- **Reduced motion:** base line fully drawn and static; sweep hidden.

## 2. Counting numbers (profile)

- The three stats (50+, 5, 3) count from 0 to their value the first time the stats row is 40% in view (`IntersectionObserver`, `threshold: 0.4`, then disconnect).
- Duration **1400ms**, ease-out cubic (`1 - (1 - t)^3`), `Math.round` each frame, suffix appended.
- Server-render the final values so the page is correct without JavaScript; the count-up resets to 0 only at the moment it starts. Use tabular numerals so the width does not jump.
- **Mobile:** identical. **Reduced motion:** final values, no count.

## 3. Map (profile)

Path data is in `assets/map.ts` (viewBox `0 0 300 248`).

- **Land:** fill `--map-land`, 1px stroke `--map-stroke`.
- **Route:** Maiduguri → Billiri → Abuja, 1.5px accent stroke, `stroke-dasharray: 3 5`, round caps. The dashes march toward Abuja: `stroke-dashoffset` to `-8` over **1.4s linear infinite**.
- **Dots:** accent fill, radius 4 (Maiduguri, Billiri) and 5.5 (Abuja, the current location).
- **Pings:** behind each dot, an unfilled circle (radius 5, 5, 6; 1.5px accent stroke) scaling from 1 to 2.8 while fading from 0.7 to 0, reaching the end state at 70% of a **2.4s ease-out infinite** loop. Delays 0s, 0.8s, 1.6s so the pulse travels along the route. Needs `transform-box: fill-box; transform-origin: center`.
- **Labels:** mono 12px in `--text`, positions in `assets/map.ts`.
- **Mobile:** identical, centred. **Reduced motion:** static.

## 4. The vein (experience)

Path data is in `assets/vein.ts`. The SVG is 120px wide and 7500px tall, drawn at natural size and clipped by its container, so it never scales and never needs to know the section's height. The vessel wanders ±5px around x = 88.

### Layers (bottom to top, all `fill: none`, round caps, colour `--accent`)

| Layer | Stroke | Animation |
|---|---|---|
| Branches (desktop set **or** mobile set) | 1.4px | opacity breathes 0.2 ↔ 0.55, **4s ease-in-out infinite alternate** |
| Vessel | 2.5px, opacity 0.3 | none |
| Flow | 3px, `stroke-dasharray: 70 330` | `stroke-dashoffset` to `-400`, **3.6s linear infinite** (long pulses moving down) |
| Cells | 2px, opacity 0.7, `stroke-dasharray: 6 194` | `stroke-dashoffset` to `-200`, **1.8s linear infinite** (small fast dots) |

Vessel, flow and cells use the same `d`.

### Container

The five roles sit in one `position: relative` list. The vein container is its first child: `position: absolute; top: 0; bottom: 0; width: 120px; overflow: hidden; pointer-events: none`, with a fade at both ends: `mask-image: linear-gradient(to bottom, transparent 0, #000 48px, #000 calc(100% - 96px), transparent 100%)`. Each role is `position: relative` so it paints above the vein.

### Desktop (> 920px)

- **Position:** `left: calc(25% - 47px)`. With the split-layout flex recipe, the centre of the 64px gutter is at `25% + 41px` of the list width, and the vessel is at x = 88 inside the SVG.
- **Branches:** the desktop set (long capillaries reaching up to 60px left into the empty part of the label column).
- **Node per role:** a short twig from the vessel to a dot beside the role title: `position: absolute; left: calc(25% + 35px); top: 52px; width: 30px; height: 10px`. It is a 2px line at 50% opacity followed by a 10px dot, both accent. Inside the dot, a ring (2px accent border) pings with the same keyframes as the map: scale 1 → 2.8, opacity 0.7 → 0, **2.4s ease-out infinite**. Stagger the delays down the list (0s, 0.3s, 0.6s, 1.2s, 1.8s in the reference).
- The vein is fully visible and always flowing. `--vein-p` and `.is-reached` are ignored at this width.

### Mobile (≤ 920px): the spine

- Each role gets `padding-left: 44px`.
- **Position:** `left: 0; width: 44px`, and the SVG gets `margin-left: -74px`, which puts the vessel 14px from the list's left edge.
- **Branches:** hide the desktop set and show the mobile set (short twigs: at most 16px to the right and 10px to the left, so nothing touches the text or the screen edge).
- **Node per role:** `left: 8px; top: 46px; width: 28px`, aligned with the dates line.
- **Scroll-linked growth** (only under `.js-motion`):
  - The vein container is revealed from the top: `clip-path: inset(0 0 calc((1 - var(--vein-p, 1)) * 100%) 0)`. Flow and cells keep moving inside the revealed part.
  - A node that is not yet reached is dimmed: twig `opacity: 0.25` and its ring has no animation and `opacity: 0`.
  - When its role gets `.is-reached`, the twig fades to `opacity: 1` over **0.4s ease** and the ring starts pinging.
  - Scrolling back up reverses both.

### Reduced motion

All four layers and the rings are static. Without `js-motion` the vein is fully revealed and every node is at full opacity.

### If roles are added later

The static path is 7500px tall. Five roles need about 5,000px at 390px wide and about 6,200px at 320px. If the list ever outgrows the path, extend the `d` strings by repeating the segment pattern (`s<dx> 100 <dx> 150`, with `dx` between −9 and 7 and the running x kept within 83–93).

## 5. Cards (areas of practice)

- **Markup:** each card is `position: relative; overflow: hidden` and contains an empty `aria-hidden` span for the top-edge line: `position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: var(--accent-bright); transform: scaleX(0); transform-origin: left`.
- **Lit state:** border colour becomes `--accent-bright`, the card lifts `translateY(-3px)` (both **0.25s ease**), and the top-edge line grows to `scaleX(1)` over **0.5s ease**.
- **Desktop:** the lit state is `:hover`.
- **Touch and ≤ 920px:** the lit state is `.is-active` (border and line only, no lift), set by `MotionRoot` on the card nearest the middle of the screen. Only one card is lit at a time, and none when no card is near the middle.
- **Reduced motion:** state changes still apply but without transitions.

## 6. Small touches

- `html { scroll-behavior: smooth }` for the anchor links (off under reduced motion).
- Links dim to 78% opacity on hover.
- **Contact chips** fill white with `--text` on hover and focus over **0.2s ease** (no opacity dim).
- **Phone menu (≤ 920px):** the panel fades in over **0.25s ease**; its links rise 8px and fade in over **0.3s ease**, staggered **40ms** each after a **60ms** delay; the button's two lines fold into a cross over **0.25s ease**. All instant under reduced motion.

## 7. Research dot field

One dot per infant (see `SPEC.md`, 04 Research). Red marks a low-zinc infant, so the dots join the vein and the map in the "pulse" language.

- **Entrance:** server-render view A with its 123 dots red, so the section is correct without JavaScript. When motion is allowed (and `IntersectionObserver` exists), `ZincField` sets `data-wave="armed"` on the field, which shows those dots in `--line`. The first time the field is **40%** in view it sets `data-wave="playing"`: each red dot's colour transitions over **0.3s ease** with a delay of **index × 6ms**, so red sweeps through the dots in order. At the same moment "123" counts up from 0 with the shared count-up (ease-out cubic) over **123 × 6 + 300 = 1038ms**, so the wave and the number finish together. Runs once.
- **Switching views:** the two views share one grid cell and cross-fade over **0.25s ease** (the hidden one also gets `visibility: hidden` after the fade). Dots never fly between positions. Switching does not replay the wave or the count.
- **Mobile:** identical; the grid drops from 30 to 20 columns at ≤ 560px.
- **Reduced motion:** final state immediately: no wave, no count, no cross-fade.

## Reduced-motion summary

Under `@media (prefers-reduced-motion: reduce)`: no keyframe animation runs, the heartbeat line is shown fully drawn, the sweep is hidden, transitions are removed, and `MotionRoot`, the count-ups and the dot-field wave do not run. Nothing is hidden or left half-revealed.
