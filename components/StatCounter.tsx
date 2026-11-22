"use client";

import { useEffect, useRef } from "react";
import { onceInView, prefersReducedMotion, runCountUp } from "@/lib/countUp";
import styles from "./StatCounter.module.css";

type Stat = { readonly value: number; readonly suffix: string; readonly text: string };

const DURATION = 1400;

/** Stats row. Server-renders final values; counts up from 0 the first time it is 40% in view. */
export function StatCounter({ stats }: { stats: readonly Stat[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root || prefersReducedMotion()) return;
    const nums = Array.from(root.querySelectorAll<HTMLElement>("[data-count]"));
    let cancel = () => {};
    const disconnect = onceInView(root, 0.4, () => {
      cancel = runCountUp(nums, DURATION);
    });
    return () => {
      disconnect();
      cancel();
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
