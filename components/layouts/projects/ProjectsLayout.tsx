import styles from "./ProjectsLayout.module.scss";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import ContinentMenu from "@components/continent-menu/ContinentMenu";
import React, { useEffect, useRef, useState } from "react";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Footer from "@components/footer/Footer";
import { Router, useRouter } from "next/router";
import MenuCountry from "@components/menuCountry/MenuCountry";
import CountryCard from "@components/countrycard/CountryCard";
import ProjectRepository from "domain/repositories/project";
import { DB } from "../../../firebase/configApp";

interface IProjectsLayout {
  children: React.ReactNode;
}

const ProjectsLayout = ({ children }: IProjectsLayout) => {
  const router = useRouter();
  let projectRepository = new ProjectRepository(DB);

  let [title, settitle] = useState("EUROPE" || router.query.continent);
  let [showCard, setshowcard] = useState(false);
  let [continent, setcontinent] = useState("EUROPE");
  let [country, setcountry] = useState("");
  let [cardFromCountries, setcardFromCountries] = useState([]);

  let banner = useRef<HTMLDivElement>(null);
  let wrapper = useRef(null);

  function SwitchTitle(e) {
    if (!showCard) {
      switch (e) {
        case "north-america":
          return "AMERIQUE DU NORD";
        case "europe":
          return "EUROPE";
        case "africa":
          return "AFRIQUE";
        case "south-america":
          return "AMERIQUE DU SUD";
        case "asia":
          return "ASIE";
        case "oceania":
          return "OCEANIE";
      }
    }
  }

  function menuClicked(e, keys) {
    setshowcard(true);
    console.log(keys, "menu");

    projectRepository.List().then(async (causes) => {
      let currentCauses = causes.filter(
        (el) => Number(el.country) === Number(keys)
      );
      setcardFromCountries([...currentCauses]);
    });

    if (e.target.innerText == "Top causes") {
      setshowcard(false);
    } else {
      setcountry(e.target.innerText);
    }
  }

  function ChangeBannerStyle(e) {
    switch (e) {
      case "north-america":
        return "USA";
      case "europe":
        return "EUROPE";
      case "africa":
        return "AFRIQUE";
      case "south-america":
        return "SOUTH";
      case "asia":
        return "ASIE";
      case "oceania":
        return "OCEANIE";
    }
  }

  useEffect(() => {
    if (router.query.continent === "europe") {
      settitle("europe");
    } else {
      settitle(router.query.continent);
    }
    setshowcard(false);
  }, [router.query.continent]);

  return (
    <>
      {" "}
      <div className={styles["wrapper"]}>
        <MainNavigation />
        <MenuBurger />
        <div
          className={`${styles["banner"]} ${styles[ChangeBannerStyle(title)]} `}
          ref={banner}
        >
          <h1 className={styles["banner__title"]}>
            {!showCard && SwitchTitle(title)}
            {showCard && country}
          </h1>
          <div className={styles["stats-container"]}>
            <Stats />
          </div>
        </div>
        <div className={styles["wrapper__content"]} ref={wrapper}>
          <div className={styles["causes-wrapper"]}>
            <MenuCountry select={menuClicked} continent={continent} />
            <div className={styles["children-container"]}>
              {showCard ? (
                <CountryCard data_countries={cardFromCountries} />
              ) : (
                children
              )}
            </div>
          </div>
        </div>

        <div className={styles["continent-menu-wrapper"]}>
          <ContinentMenu />
        </div>
      </div>{" "}
      <Footer />{" "}
    </>
  );
};

export default ProjectsLayout;
