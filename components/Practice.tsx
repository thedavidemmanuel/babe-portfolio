import { practice } from "@/content/site";
import { SectionLabel } from "./SectionLabel";
import { PracticeCard } from "./PracticeCard";
import l from "./layout.module.css";
import styles from "./Practice.module.css";

export function Practice() {
  return (
    <section
      id="practice"
      aria-labelledby="practice-h"
      className={`${l.section} ${styles.section} surface-dark`}
    >
      <div className={l.wrap}>
        <div className={`${l.headerRow} ${styles.headerRow}`}>
          <div className={l.labelCol}>
            <SectionLabel number={practice.number} label={practice.label} tone="muted" />
          </div>
          <div className={l.contentCol}>
            <h2 id="practice-h" className={`${l.h2} ${styles.heading}`}>
              {practice.heading}
            </h2>
            <p className={styles.intro}>{practice.intro}</p>
          </div>
        </div>

        <div className={styles.grid}>
          {practice.cards.map((card, i) => (
            <PracticeCard
              key={card.title}
              index={String(i + 1).padStart(2, "0")}
              title={card.title}
              text={card.text}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
