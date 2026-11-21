import { training } from "@/content/site";
import { SectionLabel } from "./SectionLabel";
import l from "./layout.module.css";
import styles from "./Training.module.css";

export function Training() {
  return (
    <section id="training" aria-labelledby="training-h" className={`${l.section} ${styles.section}`}>
      <div className={l.wrap}>
        <div className={l.headerRow}>
          <div className={l.labelCol}>
            <SectionLabel number={training.number} label={training.label} />
          </div>
          <div className={l.contentCol}>
            <h2 id="training-h" className={l.h2}>
              {training.heading}
            </h2>
          </div>
        </div>

        <div className={styles.grid}>
          {training.columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h3 className={styles.colTitle}>{col.title}</h3>
              {col.items.map((item) => (
                <div key={item.name} className={styles.item}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.detail}>{item.detail}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
