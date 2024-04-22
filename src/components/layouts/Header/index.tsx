import styles from "./Header.module.scss";

function HeaderComponent() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Workout Diary</div>
    </div>
  );
}

export default HeaderComponent;
