import styles from "./TopCauses.module.scss";
import ScrollList from "@components/scroll-list/ScrollList";
import ControlPane from "@components/control-pane/ControlPane";


const TopCauses = () => {
 


  return (
    <div className={styles["causes"]}>
      <div className={styles["scroll-list"]}>
        <div className={styles["scroll-list__control-pane"]}>
          <ControlPane
            titleColor="#0A6AAF"
            subtitleColor="black"
            title=" TOP CAUSES"
            subTitle="Europe"
            buttonColor="white"
            id={1}
          />
        </div>
        <div className={styles["scroll-list__list"]}>
          <ScrollList />
        </div>
      </div>
      <div className={styles["scroll-list"]}>
        <div className={styles["scroll-list__control-pane"]}>
          <ControlPane
            titleColor="#0A6AAF"
            subtitleColor="black"
            title=" TOP CAUSES"
            subTitle="France"
            buttonColor="white" id={2}  
          />
        </div>
        <div className={styles["scroll-list__list"]}>
          <ScrollList />
        </div>
      </div>
      <div className={styles["scroll-list"]}>
        <div className={styles["scroll-list__control-pane"]}>
          <ControlPane
            titleColor="#0A6AAF"
            subtitleColor="black"
            title=" TOP CAUSES"
            subTitle="Italie"
            buttonColor="white" id={3}
          />
        </div>
        <div className={styles["scroll-list__list"]}>
          <ScrollList />
        </div>
      </div>
    </div>
  );
};

export default TopCauses;
