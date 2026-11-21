"use client";

import { useEffect, useRef } from "react";

/**
 * One scroll listener for the whole page. Writes --vein-p on the experience list,
 * toggles .is-reached on roles and .is-active on the card nearest the viewport centre.
 * CSS media queries decide where that output is used. Does nothing under reduced motion.
 */
export function MotionRoot({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const list = root.querySelector<HTMLElement>("[data-exp-list]");
    const items = Array.from(root.querySelectorAll<HTMLElement>("[data-exp-item]"));
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-card]"));
    let frame = 0;

    root.classList.add("js-motion");

    const update = () => {
      frame = 0;
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const line = vh * 0.72;

      if (list) {
        const r = list.getBoundingClientRect();
        const p = r.height ? Math.max(0, Math.min(1, (line - r.top) / r.height)) : 1;
        list.style.setProperty("--vein-p", p.toFixed(4));
      }

      items.forEach((el) => {
        el.classList.toggle("is-reached", el.getBoundingClientRect().top + 52 < line);
      });

      const mid = vh / 2;
      let best = -1;
      let bestDistance = Infinity;
      cards.forEach((card, i) => {
        const c = card.getBoundingClientRect();
        const d = Math.abs((c.top + c.bottom) / 2 - mid);
        if (c.bottom > 0 && c.top < vh && d < bestDistance) {
          bestDistance = d;
          best = i;
        }
      });
      cards.forEach((card, i) => {
        card.classList.toggle("is-active", i === best && bestDistance < vh * 0.3);
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove("js-motion");
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
