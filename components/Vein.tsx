import { VEIN_BRANCHES_DESKTOP, VEIN_BRANCHES_MOBILE, VEIN_VESSEL, VEIN_VIEWBOX } from "@/lib/vein";
import styles from "./Experience.module.css";

const { width, height } = VEIN_VIEWBOX;

export function Vein() {
  return (
    <div aria-hidden="true" className={styles.vein}>
      <svg
        aria-hidden="true"
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className={styles.veinSvg}
      >
        <path className={styles.branchMobile} d={VEIN_BRANCHES_MOBILE} />
        <path className={styles.branch} d={VEIN_BRANCHES_DESKTOP} />
        <path className={styles.vessel} d={VEIN_VESSEL} />
        <path className={styles.flow} d={VEIN_VESSEL} />
        <path className={styles.cells} d={VEIN_VESSEL} />
      </svg>
    </div>
  );
}
