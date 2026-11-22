"use client";

import { useEffect, useRef } from "react";
import { onceInView, prefersReducedMotion, runCountUp } from "@/lib/countUp";
import styles from "./ZincField.module.css";

type Group = { low: number; total: number; caption: string };
export type ZincView = "all" | "groups";

export type ZincFieldProps = {
  low: number;
  total: number;
  of: string;
  line: string;
  views: { label: string; all: string; groups: string; allShort: string; groupsShort: string };
  groups: Group[];
  figureLabels: { all: string; groups: string };
};

type Props = ZincFieldProps & {
  view: ZincView;
  onViewChange: (view: ZincView) => void;
};

/** Entrance wave: ms between dots, and each dot's colour transition. The count-up lasts as long as the wave. */
const STAGGER = 6;
const FADE = 300;

function Dots({ total, low, wave = false }: { total: number; low: number; wave?: boolean }) {
  return (
    <div className={styles.grid}>
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={i < low ? `${styles.dot} ${styles.low}` : styles.dot}
          style={wave && i < low ? ({ "--n": i } as React.CSSProperties) : undefined}
        />
      ))}
    </div>
  );
}

/**
 * One dot per infant. Server-renders view A in its final state. With motion allowed, the red dots
 * reset to grey, then sweep red as a wave the first time the field is 40% in view, while the number counts up.
 * The view is controlled by the parent (the research slides), and the switch buttons can change it too.
 */
export function ZincField({ low, total, of, line, views, groups, figureLabels, view, onViewChange }: Props) {
  const fieldRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const field = fieldRef.current;
    const num = numRef.current;
    if (!field || !num || prefersReducedMotion() || !("IntersectionObserver" in window)) return;

    field.dataset.wave = "armed";
    let cancel = () => {};
    const disconnect = onceInView(field, 0.4, () => {
      field.getBoundingClientRect(); // commit the grey state before the transition starts
      field.dataset.wave = "playing";
      cancel = runCountUp([num], low * STAGGER + FADE);
    });
    return () => {
      disconnect();
      cancel();
    };
  }, [low]);

  return (
    <div className={styles.figure}>
      <div className={styles.top}>
        <p className={styles.stat}>
          <span className={styles.statFigure}>
            <span ref={numRef} className={styles.statNum} data-count={low}>
              {low}
            </span>{" "}
            <span className={styles.statOf}>
              {of} {total}
            </span>
          </span>
          <span className={styles.statLine}>{line}</span>
        </p>

        <div role="group" aria-label={views.label} className={styles.switch}>
          <button type="button" aria-pressed={view === "all"} onClick={() => onViewChange("all")}>
            <span className={styles.long}>{views.all}</span>
            <span className={styles.short}>{views.allShort}</span>
          </button>
          <button type="button" aria-pressed={view === "groups"} onClick={() => onViewChange("groups")}>
            <span className={styles.long}>{views.groups}</span>
            <span className={styles.short}>{views.groupsShort}</span>
          </button>
        </div>
      </div>

      <div ref={fieldRef} role="img" aria-label={figureLabels[view]} className={styles.field}>
        <div className={`${styles.view} ${styles.viewAll} ${view === "all" ? "" : styles.hidden}`}>
          <Dots total={total} low={low} wave />
        </div>
        <div className={`${styles.view} ${styles.viewGroups} ${view === "groups" ? "" : styles.hidden}`}>
          {groups.map((g) => (
            <div key={g.caption}>
              <p className={styles.caption}>{g.caption}</p>
              <Dots total={g.total} low={g.low} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
