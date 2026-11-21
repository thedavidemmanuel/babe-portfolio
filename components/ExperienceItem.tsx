import { a11y, type Role } from "@/content/site";
import styles from "./Experience.module.css";

type Props = {
  role: Role;
  first: boolean;
  currentTag: string;
  ringDelay: number;
};

export function ExperienceItem({ role, first, currentTag, ringDelay }: Props) {
  return (
    <article className={`${styles.item} ${first ? styles.first : ""}`} data-exp-item>
      <div className={styles.meta}>
        <span className={styles.dates}>{role.dates}</span>
        <span aria-hidden="true" className={styles.twig}>
          <span className={styles.twigLine} />
          <span className={styles.twigDot}>
            <span className={styles.ring} style={{ animationDelay: `${ringDelay}s` }} />
          </span>
        </span>
        <span className={styles.place}>{role.place}</span>
        {role.current && <span className={styles.tag}>{currentTag}</span>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{role.title}</h3>
        <p className={styles.org}>{role.organisation}</p>
        <p className={styles.summary}>{role.summary}</p>
        <ul className={styles.highlights}>
          {role.highlights.map((h) => (
            <li key={h}>
              <span aria-hidden="true" className={styles.dash}>
                —
              </span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <ul aria-label={a11y.skillsLabel} className={styles.pills}>
          {role.tags.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
