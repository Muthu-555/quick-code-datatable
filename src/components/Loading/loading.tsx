import styles from "./Loading.module.css";

export function Loading() {
  return (
    <div className={styles.loading}>
      Loading Users...
      <div className={styles.loadingBar}></div>
    </div>
  );
}
