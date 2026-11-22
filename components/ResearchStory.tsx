"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { ZincField, type ZincFieldProps, type ZincView } from "./ZincField";
import styles from "./ResearchStory.module.css";

type Slide = { view: ZincView; headline: string; body: string; pills?: string[] };

type Props = {
  slides: Slide[];
  controls: { label: string; slide: string; of: string; pause: string; play: string };
  field: ZincFieldProps;
};

/**
 * Text slides above a constant dot field. Each slide sets the field's view. Slides advance on their own
 * (timed by the progress bar's CSS animation) only while the section is on screen, not hovered or focused,
 * not paused, and motion is allowed. Clicking a bar jumps to that slide; the field's own switch pauses autoplay.
 */
export function ResearchStory({ slides, controls, field }: Props) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [viewOverride, setViewOverride] = useState<ZincView | null>(null);
  const [userPaused, setUserPaused] = useState(false);
  const [held, setHeld] = useState(false);
  const [inView, setInView] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.5 });
    io.observe(root);
    return () => io.disconnect();
  }, []);

  const autoplay = !reduced;
  const running = autoplay && inView && !userPaused && !held;
  const view = viewOverride ?? slides[index].view;
  const n = slides.length;

  const goTo = (i: number) => {
    setIndex(i);
    setViewOverride(null);
  };

  return (
    <div
      ref={rootRef}
      className={styles.story}
      onPointerEnter={() => setHeld(true)}
      onPointerLeave={() => setHeld(false)}
      onFocus={() => setHeld(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setHeld(false);
      }}
    >
      <div role="region" aria-roledescription="carousel" aria-label={controls.label}>
        <div className={styles.slides} aria-live={running ? "off" : "polite"}>
          {slides.map((slide, i) => {
            const state = i === index ? styles.active : i < index ? styles.before : styles.after;
            return (
              <div
                key={slide.headline}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} ${controls.of} ${n}`}
                aria-hidden={i !== index}
                inert={i !== index}
                className={`${styles.slide} ${state}`}
              >
                <p className={styles.headline}>{slide.headline}</p>
                <p className={styles.body}>{slide.body}</p>
                {slide.pills && (
                  <ul className={styles.pills}>
                    {slide.pills.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        <div className={styles.controls}>
          <div className={styles.bars}>
            {slides.map((slide, i) => (
              <button
                key={slide.headline}
                type="button"
                className={styles.bar}
                aria-label={`${controls.slide} ${i + 1} ${controls.of} ${n}`}
                aria-current={i === index ? "true" : undefined}
                onClick={() => goTo(i)}
              >
                <span className={styles.track}>
                  {i === index ? (
                    <span
                      key={index}
                      className={`${styles.fill} ${autoplay ? styles.timed : ""}`}
                      style={{ animationPlayState: running ? "running" : "paused" }}
                      onAnimationEnd={() => goTo((index + 1) % n)}
                    />
                  ) : (
                    i < index && <span className={styles.fill} />
                  )}
                </span>
              </button>
            ))}
          </div>
          {autoplay && (
            <button type="button" className={styles.pause} onClick={() => setUserPaused((p) => !p)}>
              {userPaused ? controls.play : controls.pause}
            </button>
          )}
        </div>
      </div>

      <ZincField
        {...field}
        view={view}
        onViewChange={(v) => {
          setViewOverride(v);
          setUserPaused(true);
        }}
      />
    </div>
  );
}
