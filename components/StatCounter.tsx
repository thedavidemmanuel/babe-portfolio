"use client";

import { useEffect, useRef } from "react";
import styles from "./StatCounter.module.css";

type Stat = { readonly value: number; readonly suffix: string; readonly text: string };

const DURATION = 1400;

/** Stats row. Server-renders final values; counts up from 0 the first time it is 40% in view. */
export function StatCounter({ stats }: { stats: readonly Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const nums = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    let frame = 0;

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return;
        io.disconnect();
        let start: number | null = null;
        const step = (ts: number) => {
          if (start === null) start = ts;
          const t = Math.min(1, (ts - start) / DURATION);
          const p = 1 - Math.pow(1 - t, 3);
          nums.forEach((n) => {
            n.textContent = `${Math.round(Number(n.dataset.count) * p)}${n.dataset.suffix ?? ""}`;
          });
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    io.observe(root);

    return () => {
      io.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className={styles.stats}>
      {stats.map((s) => (
        <div key={s.text} className={styles.stat}>
          <span className={styles.number} data-count={s.value} data-suffix={s.suffix}>
            {`${s.value}${s.suffix}`}
          </span>
          <span className={styles.text}>{s.text}</span>
        </div>
      ))}
    </div>
  );
}
