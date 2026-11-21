import { nav, site } from "@/content/site";
import styles from "./Hero.module.css";

export function SiteHeader() {
  return (
    <nav aria-label="Primary" className={styles.nav}>
      <a href="#top" className={styles.brand}>
        {site.shortName} <span className={styles.brandPost}>{site.postNominal}</span>
      </a>
      <div className={styles.navLinks}>
        {nav.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
