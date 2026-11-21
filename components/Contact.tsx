import { contact, site } from "@/content/site";
import { mailto, mailtoWithSubject } from "@/lib/mailto";
import { Arrow } from "./Arrow";
import l from "./layout.module.css";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-h" className={`${styles.section} surface-dark`}>
      <div className={`${l.wrap} ${styles.inner}`}>
        <p className={`${l.sectionLabel} ${styles.label}`}>
          {contact.number} {contact.label}
        </p>
        <h2 id="contact-h" className={styles.heading}>
          {contact.heading}
        </h2>
        <p className={styles.body}>{contact.body}</p>
        <div className={styles.actions}>
          <a href={mailtoWithSubject} className={styles.button}>
            {contact.cta} <Arrow />
          </a>
          <a href={mailto} className={styles.email}>
            {site.email}
          </a>
        </div>
      </div>
    </section>
  );
}
