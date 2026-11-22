import { footer, hero, nav, site } from "@/content/site";
import { HeartbeatLine } from "./HeartbeatLine";
import l from "./layout.module.css";
import styles from "./SiteFooter.module.css";

/**
 * Bookend to the hero: the heartbeat line (already drawn), a sign-off, the section links again
 * (the desktop nav is not sticky), optional professional details, then copyright and back to top.
 */
export function SiteFooter() {
  const { profiles, registration, availability } = footer;
  const hasExtras = profiles.length > 0 || registration.value !== "" || availability !== "";

  return (
    <footer className={`${styles.footer} surface-dark`}>
      <div className={l.wrap}>
        <HeartbeatLine drawn />

        <div className={styles.grid}>
          <div className={styles.signoff}>
            <p className={styles.name}>
              {site.shortName} <span className={styles.post}>{site.postNominal}</span>
            </p>
            <p className={styles.tagline}>{hero.eyebrow}</p>
            {availability && <p className={styles.availability}>{availability}</p>}
          </div>

          <nav aria-label={footer.navLabel} className={styles.nav}>
            <p className={styles.heading}>{footer.sectionsLabel}</p>
            <ul className={styles.links}>
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {hasExtras && (
            <div className={styles.extras}>
              {profiles.length > 0 && (
                <ul className={styles.links}>
                  {profiles.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} rel="me noopener" target="_blank">
                        {p.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
              {registration.value && (
                <p className={styles.registration}>
                  <span className={styles.heading}>{registration.label}</span>
                  {registration.value}
                </p>
              )}
            </div>
          )}
        </div>

        <div className={styles.bottom}>
          <span>{footer.copyright}</span>
          <a href="#top" className={styles.top}>
            {footer.backToTop}
          </a>
        </div>
      </div>
    </footer>
  );
}
