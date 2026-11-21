import styles from "./Practice.module.css";

type Props = { index: string; title: string; text: string };

export function PracticeCard({ index, title, text }: Props) {
  return (
    <div className={styles.card} data-card>
      <span aria-hidden="true" className={styles.pulse} />
      <span className={styles.index}>{index}</span>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
