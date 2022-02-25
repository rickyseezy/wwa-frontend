import styles from "./NewsletterInput.module.scss";

const NewsletterInput = () => {
  return (
    <div className={styles["newsletter"]}>
      <input
        className={styles["newsletter__input"]}
        type="text"
        placeholder="Votre email"
      />
      <div className={styles["icon"]}>
        <img src="/icons/send-icon.svg" />
      </div>
    </div>
  );
};

export default NewsletterInput;
