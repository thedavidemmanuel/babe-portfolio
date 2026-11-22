import { a11y, contact, experience, hero, menu, nav, practice, profile, research, site, training } from "@/content/site";
import { mailtoWithSubject } from "@/lib/mailto";
import { MobileMenu } from "./MobileMenu";
import l from "./layout.module.css";
import styles from "./SiteHeader.module.css";

/** Section numbers for the phone menu, keyed by nav href. */
const SECTION_NUMBERS: Record<string, string> = {
  "#profile": profile.number,
  "#experience": experience.number,
  "#practice": practice.number,
  "#research": research.number,
  "#training": training.number,
  "#contact": contact.number,
};

/**
 * Desktop: a plain row of links above the hero (not sticky).
 * Phone and tablet (≤ 920px): a slim sticky bar with the name and a menu button
 * that opens a full-screen list of the sections plus the call to action.
 */
export function SiteHeader() {
  return (
    <header className={`${styles.bar} surface-dark`}>
      <div className={`${l.wrap} ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          {site.shortName} <span className={styles.brandPost}>{site.postNominal}</span>
        </a>

        <nav aria-label={a11y.primaryNav} className={styles.links}>
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <MobileMenu
          openLabel={menu.open}
          closeLabel={menu.close}
          navLabel={a11y.menuNav}
          links={nav.map((item) => ({ ...item, number: SECTION_NUMBERS[item.href] ?? "" }))}
          cta={{ label: hero.primaryCta, href: mailtoWithSubject }}
          email={site.email}
        />
      </div>
    </header>
  );
}
