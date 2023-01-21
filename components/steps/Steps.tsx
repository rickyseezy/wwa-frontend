import styles from "./Steps.module.scss";
type Step ={
  step :boolean
}
const Steps = ({step} : Step) => {
    return (
        <div className={styles["steps"]}>
            <div className={`${styles["steps__step"]} ${styles["steps__step--selected"]}`}>
                 1
            </div>
            <div className={`${styles["steps__line"]} ${styles[!step ? "steps__line--selected" : ""]}`}/>
            <div className={`${styles["steps__step"]} ${styles[!step ? "steps__step--selected" : ""]}`}>
                 2
            </div>
            <div className={`${styles["steps__line"]}`}/>
            <div className={styles["steps__step"]}>
                 3
            </div>
        </div>
    );
};

export default Steps;
