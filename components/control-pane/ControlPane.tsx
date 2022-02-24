import styles from "./ControlPane.module.scss";

const ControlPane = () => {
  return (
    <div className={styles["control-pane"]}>
      <div className={styles["control-header"]}>
        <div className={styles["control-header__title"]}>
          <span className={styles.dash} />
          <div>MOST POPULAR ISSUES</div>
        </div>
        <div className={styles["control-header__subtitle"]}>
          Ils ont besoin de vous !
        </div>
      </div>
      <div className={styles["controllers"]}>
        <div
          className={`${styles["controllers__left"]} ${styles["bullet"]} ${styles["bullet--white"]}`}
        >
          <img
            className={styles["bullet__arrow"]}
            src="/icons/left-arrow.svg"
            alt="left arrow"
          />
        </div>
        <div
          className={`${styles["controllers__right"]} ${styles["bullet"]} ${styles["bullet--white"]}`}
        >
          <img
            className={styles["bullet__arrow"]}
            src="/icons/right-arrow.svg"
            alt="right arrow"
          />
        </div>
      </div>
    </div>
  );
};

export default ControlPane;
