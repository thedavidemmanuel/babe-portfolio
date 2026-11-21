import styles from "./HeartbeatLine.module.css";

const ECG_PATH = "M0 30H150q7 -9 14 0h12l5 5l9 -31l9 40l6 -14h18q10 -11 20 0H2400";

export function HeartbeatLine() {
  return (
    <div aria-hidden="true" className={styles.ecg}>
      <svg aria-hidden="true" width="2400" height="48" viewBox="0 0 2400 48" className={styles.svg}>
        <path className={styles.line} d={ECG_PATH} />
        <path className={styles.sweep} d={ECG_PATH} />
      </svg>
    </div>
  );
}
