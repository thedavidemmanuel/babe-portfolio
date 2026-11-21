import { research } from "@/content/site";
import { SectionLabel } from "./SectionLabel";
import l from "./layout.module.css";
import styles from "./Research.module.css";

export function Research() {
  return (
    <section id="research" aria-labelledby="research-h" className={`${l.section} ${styles.section}`}>
      <div className={`${l.wrap} ${l.split}`}>
        <div className={l.labelCol}>
          <SectionLabel number={research.number} label={research.label} />
        </div>
        <div className={l.contentCol}>
          <h2 id="research-h" className={`${l.lead} ${styles.title}`}>
            {research.title}
          </h2>
          <p className={styles.note}>{research.note}</p>
        </div>
      </div>
    </section>
  );
}
