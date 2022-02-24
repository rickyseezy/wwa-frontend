import styles from "./PopularProjects.module.scss";
import ControlPane from "@components/control-pane/ControlPane";
import ScrollList from "@components/scroll-list/ScrollList";

const PopularProjects = () => {
  return (
    <>
      <div className={styles["popular-projects"]}>
        <ControlPane />
        <div className={styles["pusher"]} />
      </div>
      <ScrollList />
    </>
  );
};

export default PopularProjects;
