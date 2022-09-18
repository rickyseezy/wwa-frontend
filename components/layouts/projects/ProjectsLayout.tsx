import styles from "./ProjectsLayout.module.scss";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import ContinentMenu from "@components/continent-menu/ContinentMenu";
import React, { useEffect, useState } from "react";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Footer from "@components/footer/Footer";

interface IProjectsLayout {
  children: React.ReactNode;
}

const ProjectsLayout = ({ children }: IProjectsLayout) => {
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
    <>
      <div className={styles["wrapper"]}>
        <MainNavigation />
        <MenuBurger />
        <div className={styles["banner"]}>
          <h1 className={styles["banner__title"]}>EUROPE</h1>
          <div className={styles["stats-container"]}>
            <Stats />
          </div>
        </div>
        <div className={styles["wrapper__content"]}>
          <div className={styles["causes-wrapper"]}>
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
            <div className={styles["children-container"]}>{children}</div>
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
};

export default ProjectsLayout;
