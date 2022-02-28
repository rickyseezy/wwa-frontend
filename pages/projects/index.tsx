import MainNavigation from "@components/layout/navigation/MainNavigation";
import styles from "./ProjectPage.module.scss";
import Stats from "@components/stats/Stats";
import Footer from "@components/footer/Footer";
import TopCauses from "@components/top-causes/TopCauses";
import ContinentMenu from "@components/continent-menu/ContinentMenu";

function ProjectsPage() {
  return (
    <>
      <div className={styles["wrapper"]}>
        <MainNavigation />
        <div className={styles["banner"]}>
          <h1 className={styles["banner__title"]}>EUROPE</h1>
          <div className={styles["stats-container"]}>
            <Stats />
          </div>
        </div>
        <div className={styles["wrapper__content"]}>
          <div className={styles["causes-wrapper"]}>
            <TopCauses />
          </div>
        </div>
        <div className={styles["custom-shape"]}></div>
        <div className={styles["map"]}>
          <div className={styles["map__title"]}>Ça bouge dans le monde</div>
          <div className={styles["map__subtitle"]}>
            Choisissez votre continent
          </div>
          <div className={styles["map__display"]}></div>
        </div>
        <div className={styles["continent-menu-wrapper"]}>
          <ContinentMenu />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectsPage;
