import { contact, site } from "@/content/site";
import { mailtoWithSubject } from "@/lib/mailto";
import { ContactActions } from "./ContactActions";
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
        <ContactActions
          email={site.email}
          href={mailtoWithSubject}
          cta={contact.cta}
          copied={contact.copied}
          copiedNote={contact.copiedNote}
          copyAddressLabel={contact.copyAddressLabel}
        />
      </div>
    </section>
  );
}
