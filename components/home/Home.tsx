import styles from "./Home.module.scss";
import Stats from "@components/stats/Stats";
import PopularProjects from "@components/popular-projects/PopularProjects";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header__first-block"]} />
        <div className={styles["header__second-block"]} />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>
            Tell the world
            <span>we act.</span>
          </h1>
          <h3 className={styles.top__subtitle}>
            1 600 000 causes à soutenir. Faites de votre connexion une force, un
            soutien.
          </h3>
          <div className={styles.pusher} />
          <Stats />
          <div className={styles.pusher} />
          <div className={styles.button}>
            <div className={styles.button__text}>Je crée ma cause</div>
          </div>
          <div className={styles["pusher--xl"]} />
          <div className={styles["pick-continent"]}>
            Choisissez votre continent
          </div>
          <div className={styles.pusher} />
          {/* MAP */}
          <div className={styles.map} />
          <div className={styles["pusher--l"]} />
          <PopularProjects />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles["bottom__title"]}>Découvrez World We Act</div>
        <div className={styles["pusher--l"]} />
        <div className={styles["poster"]}>
          <div className={styles["play-button"]}>
            <div className={styles["play-button__icon"]}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
