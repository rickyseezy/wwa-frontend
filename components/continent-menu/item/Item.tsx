import styles from "./Item.module.scss";
import { string } from "prop-types";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Items from "@components/cardAccount/Items";
import { ParsedUrlQuery } from "querystring";

interface IContinentMenuItemProps {
  continent: string;
}

interface IContinentConfig {
  title: string;
  imgSrc: string;
  custom: string;
}

const continentConfig = new Map<string, IContinentConfig>([
  [
    "EUROPE",
    {
      title: "EUROPE",
      imgSrc: "/images/europe-item.png",
      custom: `${styles["item--europe"]}`,
    },
  ],
  [
    "AFRICA",
    {
      title: "AFRICA",
      imgSrc: "/images/africa-item.png",
      custom: `${styles["item--africa"]}`,
    },
  ],
  [
    "NORTH-US",
    {
      title: "AMÉRIQUE DU NORD",
      imgSrc: "/images/north-us-item.png",
      custom: `${styles["item--northus"]}`,
    },
  ],
  [
    "SOUTH-AMERICA",
    {
      title: "AMÉRIQUE DU SUD",
      imgSrc: "/images/south-america-item.png",
      custom: `${styles["item--southamerica"]}`,
    },
  ],
  [
    "ASIA",
    {
      title: "ASIE",
      imgSrc: "/images/asia-item.png",
      custom: `${styles["item--asia"]}`,
    },
  ],
  [
    "OCEANIA",
    {
      title: "OCÈANIE",
      imgSrc: "/images/oceania-item.png",
      custom: `${styles["item--oceania"]}`,
    },
  ],
]);

let obj = {
  EUROPE: "europe",
  AFRICA: "africa",
  "AMÉRIQUE DU SUD": "south-america",
  "AMÉRIQUE DU NORD": "north-america",
  ASIE: "asia",
  OCÈANIE: "oceania",
};

let tabItems = [];

const ContinentMenuItem = ({ continent }: IContinentMenuItemProps) => {
  let [continenttab, setcontinenttab] = useState<string>();

  const router = useRouter();
  const config = continentConfig.get(continent);
  const classes: string[] = [styles["item"]];
  classes.push(config.custom);
  let divItems = useRef(null);

  let backgroundWhite = `  background-color: white !important;
  border: none !important;
   color: black !important;
  `;
  let backgroundEurope = `  background-color: #FFE2C1 !important;
  border: 1px solid transparent;
   color: #F49D3B !important;
  `;

  if (router.query.continent === "europe") {
    if (tabItems) {
      tabItems.forEach((item, i) => {
        if (i == 0) {
          item.style = backgroundEurope;
        }
      });
    }
  }

  // mets le bacground white pour les continenets non concerné
  function Clean(page: ParsedUrlQuery) {
    let route = page.continent;
    if (route) {
      tabItems.forEach((item) => {
        if (obj[item.innerText] !== route) {
          item.style = backgroundWhite;
        }
      });
    }
  }

  //  change le background quand l'item est selectionné
  function Select(e) {
    const target = e.target as HTMLDivElement;

    // reset les classes background white
    tabItems.forEach((item) => {
      item.style = backgroundWhite;
    });
    // met la classe target du background correspondant

    e.target.style = "border: 1px solid transparent";
    target.classList.add(classes[1]);

    router.push({
      pathname: `/projects`,
      query: { continent: continenttab },
    });
  }

  // rajoute le continent dans l'url
  function changeUrl(url: string) {
    console.log(router.query,'url')

    switch (url) {
      case "NORTH-US":
        setcontinenttab("north-america");
        break;

      case "south-america":
        setcontinenttab("south-america");

        break;
      default:
        setcontinenttab(() => url.toLowerCase());
    }
  }

  useEffect(() => {
    tabItems.push(divItems.current);
    changeUrl(continent);
    Clean(router.query);

  }, [
    router.query.continent === undefined,
    router.query.continent === "europe",
  ]);

  return (
    <div className={classes.join(" ")} onClick={Select} ref={divItems}>
      <div className={styles["item__img"]}>
        <img src={config.imgSrc} />
      </div>
      <div className={styles["item__title"]}>{config.title}</div>
    </div>
  );
};

export default ContinentMenuItem;
