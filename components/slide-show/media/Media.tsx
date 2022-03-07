import styles from "./Media.module.scss";

const Media = () => {
  return (
    <li>
      <div className={styles["media"]}>
        <img src="/icons/play-circle.svg" />
      </div>
    </li>
  );
};

export default Media;
