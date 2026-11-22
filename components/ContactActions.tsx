"use client";

import { useEffect, useRef, useState } from "react";
import { Arrow } from "./Arrow";
import styles from "./ContactActions.module.css";

type Props = {
  email: string;
  href: string;
  cta: string;
  copied: string;
  copiedNote: string;
  copyAddressLabel: string;
};

/** How long the "Copied" state shows before the button settles back. */
const HOLD = 2600;

async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers without the async clipboard API.
    const field = document.createElement("textarea");
    field.value = text;
    field.setAttribute("readonly", "");
    field.style.position = "fixed";
    field.style.opacity = "0";
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand("copy");
    field.remove();
    return ok;
  }
}

/**
 * "Email me" opens the mail app and also copies the address; the address itself copies only.
 * On copy, the button label slides away and a small ECG trace draws in before "Copied",
 * and a note confirms it (also announced to screen readers).
 */
export function ContactActions({ email, href, cta, copied, copiedNote, copyAddressLabel }: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const [round, setRound] = useState(0);
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    if (!(await copyText(email))) return;
    setIsCopied(true);
    setRound((r) => r + 1); // restarts the trace on repeat clicks
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setIsCopied(false), HOLD);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <a href={href} className={styles.button} data-copied={isCopied || undefined} onClick={() => void copy()}>
          <span className={styles.labels}>
            <span className={styles.default}>
              {cta} <Arrow />
            </span>
            <span key={round} className={styles.done} aria-hidden="true">
              <svg className={styles.blip} width="40" height="16" viewBox="0 0 40 16" aria-hidden="true">
                <path d="M1 9h9l3-6l4 12l3-8l2 2h17" />
              </svg>
              {copied}
            </span>
          </span>
        </a>
        <button
          type="button"
          className={styles.email}
          aria-label={`${copyAddressLabel}: ${email}`}
          onClick={() => void copy()}
        >
          {email}
        </button>
      </div>
      <p className={styles.note} role="status">
        {isCopied && (
          <span key={round} className={styles.noteText}>
            {copiedNote}
          </span>
        )}
      </p>
    </div>
  );
}
