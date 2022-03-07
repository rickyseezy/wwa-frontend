import styles from "./ProjectPage.module.scss";
import { Fragment } from "react";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import Footer from "@components/footer/Footer";
import SlideShow from "@components/slide-show/SlideShow";
import Discover from "@components/discover/Discover";

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
        <div className={styles["project__content"]}>
          <div className={styles["intro"]}>
            <div className={styles["subtitle"]}>
              <span className={styles["subtitle__dash"]} />
              <div className={styles["subtitle__text"]}>L'HISTOIRE</div>
            </div>
            <div className={styles["intro__title"]}>
              Des champs de maïs vitaux
            </div>
            <div className={styles["intro__description"]}>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.Lorem ipsum dolor amet, consectetur adipiscing
              elit. Mattis et sed nam sem tellus erat. Lorem ipsum dolor amet,
              consectetur adipiscing elit. Mattis et sed nam sem tellus
              erat.Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis
              et sed nam sem tellus erat Lorem ipsum dolor amet, consectetur
              adipiscing elit. Mattis et sed nam sem tellus erat.Lorem ipsum
              dolor amet, consectetur adipiscing elit. Mattis et sed nam sem
              tellus erat. Lorem ipsum dolor amet, consectetur adipiscing elit.
              Mattis et sed nam sem tellus erat.
            </div>
          </div>
          <div className={styles["live-indicator"]}>
            <div className={styles["indicator"]}>
              <div className={styles["indicator__text"]}>
                Moussa est en live
              </div>
            </div>
          </div>
          <SlideShow />
          <div className={styles["discover-container"]}>
            <Discover />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
