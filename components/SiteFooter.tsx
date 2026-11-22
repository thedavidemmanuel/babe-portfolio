import { footer } from "@/content/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={`${styles.footer} surface-dark`}>
      <div className={styles.inner}>
        <span>{footer.copyright}</span>
      </div>
    </footer>
  );
}
