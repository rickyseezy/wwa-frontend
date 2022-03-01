import styles from "./TopCauses.module.scss";
import ScrollList from "@components/scroll-list/ScrollList";
import ControlPane from "@components/control-pane/ControlPane";
import { useEffect, useState } from "react";

const listWidth = 1825; // ToDo :: It has to be dynamic card size (365) * number of card
const TopCauses = () => {
  const scrollButton = (
    <div className={`${styles["bullet"]}`}>
      <img
        className={styles["bullet__arrow"]}
        src={`/icons/right-arrow-blue.svg`}
        alt="left arrow"
      />
    </div>
  );

  function showScrollableMenu(element: HTMLElement) {
    console.log(
      "showScrollableMenu ",
      element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    );
    toggleButton(
      element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    );
  }

  const [isShown, toggleButton] = useState(false);

  useEffect(() => {
    console.log("Hello ", isShown);
    const scrollable = document.getElementById(`${styles["scrollable"]}`);
    console.log(
      scrollable.scrollHeight > scrollable.clientHeight ||
        scrollable.scrollWidth > scrollable.clientWidth
    );
    showScrollableMenu(scrollable);
  });

  return (
    <div className={styles["causes"]}>
      <div className={styles["menu-container"]}>
        <ul className={styles["menu"]} id={styles["scrollable"]}>
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
          {/*<li className={styles["menu__link"]}>Allemagne</li>
          <li className={styles["menu__link"]}>Grèce</li>
          <li className={styles["menu__link"]}>Grèce</li>
          <li className={styles["menu__link"]}>Grèce</li>
          <li className={styles["menu__link"]}>Grèce</li>
          <li className={styles["menu__link"]}>Grèce</li>
          <li className={styles["menu__link"]}>Grèce</li>
          <li className={styles["menu__link"]}>Grèce</li>
          <li className={styles["menu__link"]}>Grèce</li>*/}
        </ul>
        <div className={styles["menu-container__icon"]}>
          {isShown ? scrollButton : null}
        </div>
      </div>
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
