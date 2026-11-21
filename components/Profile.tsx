import { profile } from "@/content/site";
import { SectionLabel } from "./SectionLabel";
import { NigeriaMap } from "./NigeriaMap";
import { StatCounter } from "./StatCounter";
import l from "./layout.module.css";
import styles from "./Profile.module.css";

export function Profile() {
  return (
    <section id="profile" aria-labelledby="profile-h" className={`${l.section} ${styles.section}`}>
      <div className={`${l.wrap} ${l.split}`}>
        <div className={`${l.labelCol} ${styles.aside}`}>
          <SectionLabel
            as="h2"
            id="profile-h"
            number={profile.number}
            label={profile.label}
            className={styles.label}
          />
          <figure className={styles.map}>
            <NigeriaMap alt={profile.map.alt} />
            <figcaption className={styles.caption}>{profile.map.caption}</figcaption>
          </figure>
        </div>

        <div className={`${l.contentCol} ${styles.body}`}>
          <p className={`${l.lead} ${styles.lead}`}>{profile.lead}</p>
          <p className={styles.text}>{profile.body}</p>
          <StatCounter stats={profile.stats} />
        </div>
      </div>
    </section>
  );
}
