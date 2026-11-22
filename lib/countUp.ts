/**
 * Count-up shared by the profile stats and the research figure.
 * Each element carries data-count (target) and optional data-suffix.
 * Ease-out cubic, Math.round each frame. Returns a cancel function.
 */
export function runCountUp(nums: HTMLElement[], duration: number): () => void {
  let frame = 0;
  let start: number | null = null;
  const step = (ts: number) => {
    if (start === null) start = ts;
    const t = Math.min(1, (ts - start) / duration);
    const p = 1 - Math.pow(1 - t, 3);
    nums.forEach((n) => {
      n.textContent = `${Math.round(Number(n.dataset.count) * p)}${n.dataset.suffix ?? ""}`;
    });
    if (t < 1) frame = requestAnimationFrame(step);
  };
  frame = requestAnimationFrame(step);
  return () => cancelAnimationFrame(frame);
}

/** Calls onEnter once, the first time el is at least `threshold` in view. Returns a disconnect function. */
export function onceInView(el: Element, threshold: number, onEnter: () => void): () => void {
  if (!("IntersectionObserver" in window)) return () => {};
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      onEnter();
    },
    { threshold },
  );
  io.observe(el);
  return () => io.disconnect();
}

export const prefersReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
