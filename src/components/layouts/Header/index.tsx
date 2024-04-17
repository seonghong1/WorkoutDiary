import { UtilService } from "services/util-service";
import styles from "./Header.module.scss";

export function HeaderComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Workout Diary</div>
    </div>
  );
}
