import { CITIES, MAP_VIEWBOX, NIGERIA_OUTLINE, ROUTE } from "@/lib/map";
import styles from "./NigeriaMap.module.css";

const anchorClass = { start: undefined, middle: styles.mid, end: styles.end } as const;

export function NigeriaMap({ alt }: { alt: string }) {
  return (
    <svg role="img" aria-label={alt} viewBox={MAP_VIEWBOX} className={styles.map}>
      <path className={styles.land} d={NIGERIA_OUTLINE} />
      <path className={styles.route} d={ROUTE} />
      {CITIES.map((c) => (
        <circle
          key={`ping-${c.name}`}
          className={styles.ping}
          cx={c.x}
          cy={c.y}
          r={c.pingRadius}
          style={{ animationDelay: `${c.pingDelay}s` }}
        />
      ))}
      {CITIES.map((c) => (
        <circle key={`dot-${c.name}`} className={styles.dot} cx={c.x} cy={c.y} r={c.dotRadius} />
      ))}
      {CITIES.map((c) => (
        <text
          key={`label-${c.name}`}
          className={[styles.label, anchorClass[c.label.anchor]].filter(Boolean).join(" ")}
          x={c.label.x}
          y={c.label.y}
        >
          {c.name}
        </text>
      ))}
    </svg>
  );
}
