import styles from "./TopCauses.module.scss";
import ScrollList from "@components/scroll-list/ScrollList";
import ControlPane from "@components/control-pane/ControlPane";

const TopCauses = () => {
  return (
    <div className={styles["causes"]}>
      <div className={styles["menu-container"]}>
        <ul className={styles["menu"]}>
          <li
            className={`${styles["menu__link"]} ${styles["menu__link--selected"]} `}
          >
            Top causes
          </li>
          <li className={styles["menu__link"]}>Les plus suivies</li>
          <li className={styles["menu__link"]}>Italie</li>
          <li className={styles["menu__link"]}>Espagne</li>
          <li className={styles["menu__link"]}>Portugal</li>
          <li className={styles["menu__link"]}>Allemagne</li>
          <li className={styles["menu__link"]}>Grèce</li>
        </ul>
        <div className={styles["menu-container__icon"]}></div>
      </div>
      <div className={styles["scroll-list"]}>
        <ControlPane
          titleColor="#0A6AAF"
          subtitleColor="black"
          title=" TOP CAUSES"
          subTitle="Europe"
          buttonColor="white"
        />
        <ScrollList />
      </div>
      <div className={styles["scroll-list"]}>
        <ControlPane
          titleColor="#0A6AAF"
          subtitleColor="black"
          title=" TOP CAUSES"
          subTitle="Europe"
          buttonColor="white"
        />
        <ScrollList />
      </div>
      <div className={styles["scroll-list"]}>
        <ControlPane
          titleColor="#0A6AAF"
          subtitleColor="black"
          title=" TOP CAUSES"
          subTitle="Europe"
          buttonColor="white"
        />
        <ScrollList />
      </div>
    </div>
  );
};

export default TopCauses;
