import { useEffect, useState,useRef } from "react";
import styles from "../layouts/projects/ProjectsLayout.module.scss";

interface MenuCountryProps{
    select : Function
}

function MenuCountry({select}:MenuCountryProps) {
    const [isShown, toggleButton] = useState(false);
    let scrollable = useRef()

    const scrollButton = (
        <div className={`${styles["bullet"]}`}>
          <img
            className={styles["bullet__arrow"]}
            src={`/icons/right-arrow-blue.svg`}
            alt="left arrow"
          />
        </div>
      )
    function showScrollableMenu(element: HTMLElement) {
        toggleButton(
          element.scrollHeight > element.clientHeight ||
          element.scrollWidth > element.clientWidth
        );
      }

      useEffect(()=>{
        const scroll =  scrollable.current


        showScrollableMenu(scroll);
      })


      

    return ( 

        <div className={styles["menu-container"]}>
        <ul className={styles["menu"]} id={styles["scrollable"]}  ref={scrollable}>
          {/* <li onClick={select}
            className={`${styles["menu__link"]} ${styles["menu__link--selected"]} `}
          >
            Top causes
          </li>
          <li onClick={select} className={styles["menu__link"]}>Les plus suivies</li>
          <li onClick={select} className={styles["menu__link"]}>Italie</li>
          <li onClick={select} className={styles["menu__link"]}>Espagne</li>
          <li onClick={select} className={styles["menu__link"]}>Portugal</li>
          <li onClick={select} className={styles["menu__link"]}>Allemagne</li>
          <li onClick={select} className={styles["menu__link"]}>Gréce</li> */}

        </ul>
        <div className={styles["menu-container__icon"]}>
          {isShown ? scrollButton : null}
        </div>
      </div>
     );
}

export default MenuCountry;