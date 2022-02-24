import styles from "./Card.module.scss";

const Card = () => {
  return (
    <div className={styles["card"]}>
      <div className={styles["banner"]}>
        <img src="/images/default-cause.png" />
        <div className={styles["banner__indicator"]}>600 459 actors</div>
      </div>
      <div className={styles["pusher"]} />
      <div className={styles["card__title"]}>
        Des logements décents et fonctionnels
      </div>
      <div className={styles["pusher"]} />
      <div className={styles["card__description"]}>
        Lorem Ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam
        sem tellus erat.Lorem Ipsum dolor amet, consectetur adipiscing elit.
        Mattis et sed nam sem tellus erat.Lorem Ipsum dolor amet, consectetur
        adipiscing elit. Mattis et sed nam sem tellus erat.Lorem Ipsum dolor
        amet, consectetur adipiscing elit.
      </div>
      <div className={styles["pusher--l"]} />
      <div className={styles["button"]}>
        <div className={styles["button__text"]}>Voir</div>
      </div>
    </div>
  );
};

export default Card;
