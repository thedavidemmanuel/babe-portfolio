import { research } from "@/content/site";
import { mailtoSubject } from "@/lib/mailto";
import { Arrow } from "./Arrow";
import { SectionLabel } from "./SectionLabel";
import { ResearchStory } from "./ResearchStory";
import l from "./layout.module.css";
import styles from "./Research.module.css";

const listFormat = new Intl.ListFormat("en-GB", { type: "conjunction" });

/**
 * Desktop: fits one screen. Left column: label, then the study-at-a-glance slip, credits and report link.
 * Right column: constant kicker and title, text slides, and the constant dot field below them.
 * Phone: label -> title, slides and dots -> slip and credits.
 */
export function Research() {
  const { coauthors, slip } = research;
  const slipRows = (
    <dl className={styles.slipRows}>
      {slip.rows.map((row) => (
        <div key={row.term} className={styles.slipRow}>
          <dt>{row.term}</dt>
          <dd>{row.value}</dd>
        </div>
      ))}
    </dl>
  );

  return (
    <section id="research" aria-labelledby="research-h" className={styles.section}>
      <div className={`${l.wrap} ${l.split}`}>
        <div className={`${l.labelCol} ${styles.aside}`}>
          <SectionLabel number={research.number} label={research.label} className={styles.label} />

          <div className={styles.glance}>
            {/* Study at a glance, styled as a lab request form. Always open on desktop;
                on phones and tablets it folds into a <details> row (works without JavaScript). */}
            <div className={`${styles.slip} ${styles.slipDesktop}`}>
              <p className={styles.slipHeading}>{slip.heading}</p>
              {slipRows}
            </div>
            <details className={`${styles.slip} ${styles.slipMobile}`}>
              <summary className={styles.slipHeading}>
                {slip.heading}
                <span aria-hidden="true" className={styles.slipToggle}>
                  <Arrow />
                </span>
              </summary>
              {slipRows}
            </details>

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

        <div className={`${l.contentCol} ${styles.main}`}>
          <p className={styles.kicker}>{research.kicker}</p>
          <h2 id="research-h" className={`${l.h2} ${styles.title}`}>
            {research.title}
          </h2>

          <ResearchStory
            slides={research.slides}
            controls={research.slideControls}
            field={{
              low: research.stat.low,
              total: research.stat.total,
              of: research.stat.of,
              line: research.stat.line,
              views: research.views,
              groups: research.groups,
              figureLabels: research.figureLabels,
            }}
          />
        </div>
      </div>
    </section>
  );
}
