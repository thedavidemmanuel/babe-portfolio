import { research } from "@/content/site";
import { mailtoSubject } from "@/lib/mailto";
import { SectionLabel } from "./SectionLabel";
import { ZincField } from "./ZincField";
import l from "./layout.module.css";
import styles from "./Research.module.css";

const listFormat = new Intl.ListFormat("en-GB", { type: "conjunction" });

export function Research() {
  const { coauthors } = research;

  return (
    <section id="research" aria-labelledby="research-h" className={`${l.section} ${styles.section}`}>
      <div className={`${l.wrap} ${l.split}`}>
        <div className={l.labelCol}>
          <SectionLabel number={research.number} label={research.label} />
        </div>
        <div className={l.contentCol}>
          <h2 id="research-h" className={`${l.lead} ${styles.headline}`}>
            {research.headline}
          </h2>
          <p className={styles.formal}>{research.formalTitle}</p>
          <p className={styles.intro}>{research.intro}</p>

          <ZincField
            low={research.stat.low}
            total={research.stat.total}
            of={research.stat.of}
            line={research.stat.line}
            views={research.views}
            groups={research.groups}
            figureLabels={research.figureLabels}
          />

          <p className={styles.factorsLabel}>{research.factorsLabel}</p>
          <ul className={styles.pills}>
            {research.factors.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>

          <p className={styles.takeaway}>{research.takeaway}</p>

          {coauthors.length > 0 && (
            <p className={styles.credits}>
              {research.coauthorsPrefix} {listFormat.format(coauthors)}
            </p>
          )}
          <p className={styles.credits}>{research.credits}</p>
          <a href={mailtoSubject(research.reportLink.subject)} className={styles.reportLink}>
            {research.reportLink.label}
          </a>
        </div>
      </div>
    </section>
  );
}
