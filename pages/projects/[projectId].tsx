import styles from "./ProjectPage.module.scss";
import { Fragment, useEffect, useState } from "react";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import Footer from "@components/footer/Footer";
import SlideShow from "@components/slide-show/SlideShow";
import Discover from "@components/discover/Discover";
import MenuScroll from "@components/menu-scroll/MenuScroll";
import Actions from "@components/actions/Actions";
import Title from "@components/title/Ttile";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Statstwo from "@components/stats/Statstwo";


const ProjectPage = () => {
  const [show, setShowScrollMenu] = useState(false);

  useEffect(() => {
    function handleScroll(e) {
      console.log(window.scrollY);
   
      if (window.matchMedia("(max-width: 400px)").matches) {
        /* the view port is at least 400 pixels wide */
      }else if(window.matchMedia("(min-width: 400px)").matches){
        if ( window.scrollY >= 50 ) {
          setShowScrollMenu(true);
          return;
        }
      }
      if ( window.scrollY <= 85 ) {
        setShowScrollMenu(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  });
  return (
    <Fragment>
      <div
        className={styles["menu-scroll"]}
        style={show ? { display: "flex" } : { display: "none" }}
      >
        <MenuScroll title=" Les champs de Maïs de Moussa" />
      </div>
      <MainNavigation />
      <MenuBurger />
      <div className={styles["project"]}>
        <div className={styles["banner"]}>
          <div className={styles["overlay"]}></div>
          <div className={styles["content"]}>
            <h1 className={styles["content__title"]}>
              Les champs de Maïs de Moussa
            </h1>
            <div className={styles["author-info"]}>
              <div className={styles["author-info__picture"]}>
                <img src="/todelete/profilepicture.png" />
              </div>
              <div className={styles["author-info__name"]}>@moussa223</div>
              <div className={styles["author-info__certified"]}>
                <img src="/icons/check.svg" />
              </div>
            </div>
            <div className={styles["stats"]}>
              <Statstwo />
            </div>
            <div className={styles["actions"]}>
              <Actions />
            </div>
          </div>
        </div>
        <div className={styles["project__content"]}>
          <div className={styles["intro"]}>
            <Title text="l'HISTOIRE" />
            <div className={styles["intro__title"]}>
              Des champs de maïs vitaux
            </div>
            <div className={styles["intro__description"]}>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed
              nam sem tellus erat.Lorem ipsum dolor amet, consectetur adipiscing
              elit. Mattis et sed nam sem tellus erat. Lorem ipsum dolor amet,
              consectetur adipiscing elit. Mattis et sed nam sem tellus
              erat.Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis
              et sed nam sem tellus erat Lorem ipsum dolor amet, consectetur
              adipiscing elit. Mattis et sed nam sem tellus erat.Lorem ipsum
              dolor amet, consectetur adipiscing elit. Mattis et sed nam sem
              tellus erat. Lorem ipsum dolor amet, consectetur adipiscing elit.
              Mattis et sed nam sem tellus erat.
            </div>
          </div>
          <div className={styles["live-indicator"]}>
            <div className={styles["indicator"]}>
              <div className={styles["indicator__text"]}>
                Moussa est en live
              </div>
            </div>
          </div>
          <SlideShow />
          <div className={styles["discover-container"]}>
            <Discover />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
