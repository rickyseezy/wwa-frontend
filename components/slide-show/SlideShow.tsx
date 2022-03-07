import styles from "./SlideShow.module.scss";
import Media from "@components/slide-show/media/Media";

const SlideShow = () => {
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <div className={styles["slideshow-container"]}>
      <div className={styles["slideshow"]}>
        <img src="/todelete/sample-project.jpg" />
        <div className={styles["controllers"]}>
          <div className={styles["controller"]}>
            <img src="/icons/slideshow-arrow-left.svg" />
          </div>
          <div className={styles["controller"]}>
            <img src="/icons/slideshow-arrow-right.svg" />
          </div>
        </div>
      </div>
      <ul className={styles["medias"]}>
        {dummy.map((p, i) => (
          <Media key={i} index={i} /> // ToDo :: Remove index props (just for demo purpose)
        ))}
      </ul>
    </div>
  );
};

export default SlideShow;
