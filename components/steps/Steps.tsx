import styles from "./Steps.module.scss";

const Steps = () => {
  return (
    <div className={styles["steps"]}>
      <div
        className={`${styles["steps__step"]} ${styles["steps__step--selected"]}`}
      >
        1
      </div>
      <div className={styles["steps__line"]} />
      <div className={styles["steps__step"]}>2</div>
      <div className={styles["steps__line"]} />
      <div className={styles["steps__step"]}>3</div>
    </div>
  );
};

export default Steps;
