import Image from "next/image";
import { hero } from "@/content/site";
import { Arrow } from "./Arrow";
import { HeartbeatLine } from "./HeartbeatLine";
import { FactsStrip } from "./FactsStrip";
import l from "./layout.module.css";
import styles from "./Hero.module.css";
import portrait from "@/public/portrait.jpg";

export function Hero() {
  return (
    <section aria-labelledby="hero-name" className={`${styles.header} surface-dark`}>
      <div className={l.wrap}>
        <div className={styles.row}>
          <div className={styles.text}>
            <p className={styles.eyebrow}>
              <span aria-hidden="true" className={styles.square} />
              {hero.eyebrow}
            </p>
            <h1 id="hero-name" className={styles.name}>{hero.title}</h1>
            <p className={styles.statement}>{hero.statement}</p>
            <p className={styles.intro}>{hero.intro}</p>
            <div className={styles.ctas}>
              <a href={hero.primaryCta.href} className={styles.primary}>
                {hero.primaryCta.label} <Arrow />
              </a>
              <a href={hero.secondaryCta.href} className={styles.secondary}>
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <figure className={styles.figure}>
            <div className={styles.frame}>
              <Image
                src={portrait}
                alt={hero.portraitAlt}
                fill
                preload
                placeholder="blur"
                sizes="(max-width: 1027px) calc(100vw - 40px), 500px"
                className={styles.portrait}
              />
            </div>
          </figure>
        </div>

        <HeartbeatLine />
        <FactsStrip />
      </div>
    </section>
  );
}
