import styles from "./HelpCard.module.scss";

const HelpCard = () => {
  return (
    <div className={`${styles["help-card"]} ${styles["help-card--selected"]}`}>
      <img
        className={styles["help-card__img"]}
        src="/images/project-type.png"
      />
      <div className={styles["help-card__text"]}>Un projet</div>
      <div className={styles["help-card__description"]}>
        Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam
        sem tellus erat.Lorem ipsum dolor amet, consectetur adipiscing elit.
      </div>
      <div className={styles["select-icon"]}>
        <img src="/icons/check.svg" />
      </div>
    </div>
  );
};

export default HelpCard;
