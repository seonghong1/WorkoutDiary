import styles from "./Header.module.scss";

export function HeaderComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.weather}></div>
      <div className={styles.workoutCount}></div>.
    </div>
  );
}
