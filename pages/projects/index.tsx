import MainNavigation from "@components/layout/navigation/MainNavigation";
import styles from "./ProjectPage.module.scss";
import Stats from "@components/stats/Stats";
import Footer from "@components/footer/Footer";

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
        <div className={styles["content"]}></div>
        <div className={styles["custom-shape"]}></div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectsPage;
