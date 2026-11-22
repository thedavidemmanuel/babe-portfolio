"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Arrow } from "./Arrow";
import styles from "./SiteHeader.module.css";

type Props = {
  openLabel: string;
  closeLabel: string;
  navLabel: string;
  links: { label: string; href: string; number: string }[];
  cta: { label: string; href: string };
  email: string;
};

/** Menu button + full-screen section list. Only rendered visibly at ≤ 920px (see CSS). */
export function MobileMenu({ openLabel, closeLabel, navLabel, links, cta, email }: Props) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    const desktop = window.matchMedia("(min-width: 921px)");
    root.classList.add("menu-open");
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current || !buttonRef.current) return;
      // Keep focus inside the button + panel while the menu covers the page.
      const focusable = [buttonRef.current, ...panelRef.current.querySelectorAll<HTMLElement>("a")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    const onBreakpoint = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      root.classList.remove("menu-open");
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        className={styles.toggle}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={styles.toggleLabel}>{open ? closeLabel : openLabel}</span>
        <span aria-hidden="true" className={styles.glyph} />
      </button>

      <div id={panelId} ref={panelRef} className={`${styles.panel} ${open ? styles.panelOpen : ""}`}>
        <nav aria-label={navLabel}>
          <ul className={styles.list}>
            {links.map((link, i) => (
              <li key={link.href} style={{ "--i": i } as React.CSSProperties}>
                <a href={link.href} onClick={close}>
                  <span className={styles.num}>{link.number}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.panelFoot}>
          <a href={cta.href} className={styles.cta} onClick={close}>
            {cta.label} <Arrow />
          </a>
          <a href={`mailto:${email}`} className={styles.email} onClick={close}>
            {email}
          </a>
        </div>
      </div>
    </>
  );
}
