import { hero } from "@/content/site";
import styles from "./FactsStrip.module.css";

export function FactsStrip() {
  return (
    <dl className={styles.facts}>
      {hero.facts.map((fact) => (
        <div key={fact.label} className={styles.fact}>
          <dt className={styles.label}>{fact.label}</dt>
          <dd className={styles.value}>{fact.value}</dd>
        </div>
      ))}
    </dl>
  );
}
