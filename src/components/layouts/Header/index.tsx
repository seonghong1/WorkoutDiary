import { UtilService } from "services/util-service";
import styles from "./Header.module.scss";

export function HeaderComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.weather}></div>
      <div className={styles.today}>{UtilService.getToday()}</div>
      <div className={styles.workoutCount}></div>
    </div>
  );
}
