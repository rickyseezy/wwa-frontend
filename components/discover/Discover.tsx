import styles from "./Discover.module.scss";

const Discover = () => {
  return (
    <div className={styles["discover"]}>
      <div className={styles["discover__title"]}>Découvrez World We Act</div>
      <div className={styles["video"]}>
        <div className={styles["play-button"]}>
          <img
            className={styles["play-button__icon"]}
            src="/icons/video-play-btn.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Discover;
