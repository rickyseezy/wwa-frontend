import styles from "./TopCauses.module.scss";
import ScrollList from "@components/scroll-list/ScrollList";
import ControlPane from "@components/control-pane/ControlPane";
import { useEffect, useState } from "react";

const listWidth = 1825; // ToDo :: It has to be dynamic card size (365) * number of card
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
          />
        </div>
        <div
          className={styles["scroll-list__list"]}
          style={{ width: `${listWidth}px` }}
        >
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
            buttonColor="white"
          />
        </div>
        <div
          className={styles["scroll-list__list"]}
          style={{ width: `${listWidth}px` }}
        >
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
            buttonColor="white"
          />
        </div>
        <div
          className={styles["scroll-list__list"]}
          style={{ width: `${listWidth}px` }}
        >
          <ScrollList />
        </div>
      </div>
    </div>
  );
};

export default TopCauses;
