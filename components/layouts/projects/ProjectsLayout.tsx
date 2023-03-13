import styles from "./ProjectsLayout.module.scss";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import ContinentMenu from "@components/continent-menu/ContinentMenu";
import React, {useEffect, useRef, useState} from "react";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Footer from "@components/footer/Footer";
import {useRouter} from "next/router";
import MenuCountry from "@components/menuCountry/MenuCountry";
import CountryCard from "@components/countrycard/CountryCard";

interface IProjectsLayout {
    children : React.ReactNode;
}

const ProjectsLayout = ({children} : IProjectsLayout) => {

    let [title,
        settitle] = useState('EUROPE')
    let [showCard,
        setshowcard] = useState(false)
    let [continent,
        setcontinent] = useState('EUROPE')
        let [country,
          setcountry] = useState('')

    let [bolean,
        setbolean] = useState(false)
    let banner = useRef < HTMLDivElement > (null)
    let wrapper = useRef(null)

    const router = useRouter()

    //  récupére le text de l'item du menu continent
    function catchContinent(cont : any) {}

    function SwitchTitle(e) {

      if(!showCard){
        switch (e) {
          case "northus":
              return "AMERIQUE DU NORD"
          case "europe":
              return "EUROPE"
          case "africa":
              return "AFRIQUE"
          case "southamerica":
              return "AMERIQUE DU SUD"
          case "asia":
            return "ASIE"
          case  "oceania":
            return "OCEANIE"
      }
      }
 

    }

    function menuClicked(e) {
     setshowcard(true)
     console.log(e.target.innerText,'menucountry')
    setcountry(e.target.innerText)
    }

    function ChangeBannerStyle(e) {
        switch (e) {
            case "northus":
                return "USA"
            case "europe":
                return "EUROPE"
            case "africa":
                return "AFRIQUE"
            case "southamerica":
                return "SOUTH"
            case "asia":
              return "ASIE"
            case  "oceania":
              return "OCEANIE"
        }
    }

    useEffect(() => {
        console.log(router.query.continent)
        if(router.query.continent === undefined){
          console.log('yooooo')
          settitle('europe')
        }else{
          settitle(router.query.continent)

        }
        setshowcard(false)
       
    }, [router.query.continent]);

    return ( <> <div className={styles["wrapper"]}>
        <MainNavigation/>
        <MenuBurger/>
        <div
            className={`${styles["banner"]} ${styles[ChangeBannerStyle(title)]} `}
            ref={banner}>
            <h1 className={styles["banner__title"]}>
              { !showCard && SwitchTitle(title)}
              { showCard && country}

            </h1>
            <div className={styles["stats-container"]}>
                <Stats/>
            </div>
        </div>
        <div className={styles["wrapper__content"]} ref={wrapper}>
            <div className={styles["causes-wrapper"]}>

                <MenuCountry select={menuClicked} continent={continent}/>
                <div className={styles["children-container"]}>
                    {showCard
                        ? <CountryCard/>

                        : children
                    }
                </div>
            </div>
        </div>

        <div className={styles["continent-menu-wrapper"]}>
            <ContinentMenu select={catchContinent}/>
        </div>
    </div> < Footer /> </>);
};

export default ProjectsLayout;
