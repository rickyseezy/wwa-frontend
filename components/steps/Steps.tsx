import styles from "./Steps.module.scss";
type Step ={
  step :number
}
const Steps = ({step} : Step) => {
    return (
        <div className={styles["steps"]}>
            <div className={`${styles["steps__step"]} ${styles["steps__step--selected"]}`}>
                 1
            </div>
            <div className={`${styles["steps__line"]} ${styles[step == 2 || step == 3 ? "steps__line--selected" : ""]}`}/>
            <div className={`${styles["steps__step"]} ${styles[step == 2  || step == 3 ? "steps__step--selected" : ""]}`}>
                 2
            </div>
            <div className={`${styles["steps__line"]} ${styles[step == 3 ? "steps__line--selected" : ""]}`}/>
            <div className={`${styles["steps__step"]} ${styles[step == 3 ? "steps__step--selected" : ""]}`}>
                 3
            </div>
        </div>
    );
};

export default Steps;
