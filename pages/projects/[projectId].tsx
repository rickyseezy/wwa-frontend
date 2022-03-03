import styles from "./ProjectPage.module.scss";
import { Fragment } from "react";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";

const ProjectPage = () => {
  return (
    <Fragment>
      <MainNavigation />
      <div className={styles["project"]}>
        <div className={styles["banner"]}>
          <div className={styles["overlay"]}></div>
          <div className={styles["content"]}>
            <h1 className={styles["content__title"]}>
              Les champs de Maïs de Moussa
            </h1>
            <div className={styles["author-info"]}>
              <div className={styles["author-info__picture"]}>
                <img src="/todelete/profilepicture.png" />
              </div>
              <div className={styles["author-info__name"]}>@moussa223</div>
              <div className={styles["author-info__certified"]}>
                <img src="/icons/check.svg" />
              </div>
            </div>
            <div className={styles["stats"]}>
              <Stats />
            </div>
            <div className={styles["actions"]}>
              <div
                className={`${styles["action"]} ${styles["action--donate"]}`}
              >
                <div className={styles["action__text"]}>Faire un don</div>
              </div>
              <div className={`${styles["action"]} ${styles["action--share"]}`}>
                <div className={styles["action__text"]}>Partager</div>
              </div>
              <div
                className={`${styles["action"]} ${styles["action--support"]}`}
              >
                <div className={styles["action__text"]}>Soutenir</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ProjectPage;
