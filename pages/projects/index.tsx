import MainNavigation from "@components/layout/navigation/MainNavigation";
import styles from "./ProjectPage.module.scss";
import Stats from "@components/stats/Stats";
import Footer from "@components/footer/Footer";
import TopCauses from "@components/top-causes/TopCauses";

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
      </div>
      <Footer />
    </>
  );
}

export default ProjectsPage;
