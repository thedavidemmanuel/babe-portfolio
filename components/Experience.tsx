import { experience } from "@/content/site";
import { SectionLabel } from "./SectionLabel";
import { Vein } from "./Vein";
import { ExperienceItem } from "./ExperienceItem";
import l from "./layout.module.css";
import styles from "./Experience.module.css";

/** Ping delays for each role's node, staggered down the list. */
const RING_DELAYS = [0, 0.3, 0.6, 1.2, 1.8];

export function Experience() {
  return (
    <section id="experience" aria-labelledby="experience-h" className={`${l.section} ${styles.section}`}>
      <div className={l.wrap}>
        <div className={l.headerRow}>
          <div className={l.labelCol}>
            <SectionLabel number={experience.number} label={experience.label} />
          </div>
          <div className={l.contentCol}>
            <h2 id="experience-h" className={l.h2}>
              {experience.heading}
            </h2>
          </div>
        </div>

        <div className={styles.list} data-exp-list>
          <Vein />
          {experience.roles.map((role, i) => (
            <ExperienceItem
              key={`${role.organisation}-${role.dates}`}
              role={role}
              first={i === 0}
              currentTag={experience.currentTag}
              ringDelay={RING_DELAYS[i] ?? i * 0.3}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
