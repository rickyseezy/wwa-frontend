import styles from "./PopularProjects.module.scss";
import ControlPane from "@components/control-pane/ControlPane";
import ScrollList from "@components/scroll-list/ScrollList";

const PopularProjects = () => {
  return (
    <>
      <div className={styles["popular-projects"]}>
        <ControlPane
          title="MOST POPULAR PROJECTS"
          subTitle="Ils ont besoin de vous !"
          titleColor="#FFFF"
          subtitleColor="#FFFF"
          buttonColor="blue"
          loc='home-page'
        />
        <div className={styles["pusher"]} />
      </div>
      <ScrollList />
    </>
  );
};

export default PopularProjects;
