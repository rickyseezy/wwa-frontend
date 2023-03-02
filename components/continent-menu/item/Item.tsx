import styles from "./Item.module.scss";
import { string } from "prop-types";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

interface IContinentMenuItemProps {
  continent: string;
  select: MouseEventHandler<HTMLLIElement>;
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

let tabItems = [];

const ContinentMenuItem = ({ continent, select }: IContinentMenuItemProps) => {
  let [selectCountry, setSelectCountry] = useState();
  let [continenttab, setcontinenttab] = useState<string>();

  const router = useRouter();
  const config = continentConfig.get(continent);
  const classes: string[] = [styles["item"]];
  classes.push(config.custom);
  let divItems = useRef(null);



  function Mapclicked(continent){
    // console.log(continent.match('ameriquedunord'))
    console.log(continent)

     tabItems.map(tab =>{
      if(tab.innerText.toLowerCase().match('africa')){
        tab.classList.add("item--africa");
      }
     })
    
  }

  function Clean() {
    // si page est sur cause
    if (router.query.index === undefined) {
      tabItems.map((el, i) => {
        if (i != 0) {
          el.style = `  background-color: white !important;
        border: none !important;
        color: black !important;`;
        }
      });
    // } else {
    //   tabItems.map((el, i) => {
    //     // si la page est sur countries reset le styles des elements qui ne sont pas égale a l'index
    //     if (router.query.index != el.children[1].innerText) {
    //       el.style = `  background-color: white !important;
    //     border: none !important;
    //     color: black !important;`;
    //     }
    //   });
    }
  }
  function Select(e) {
    let tabItemsClasses: Object[] = Array.from(continentConfig.values());
    const target = e.target as HTMLDivElement;
      select(e.target.innerText)
    setSelectCountry(e.target);

    // reset les classes bacground white
    tabItemsClasses.forEach((_el, i) => {
      tabItems[i].style = `  background-color: white !important;
               border: none !important;
                color: black !important;
               `;
    });

    // met la classe target du background correspondant

    e.target.style = "border: 1px solid transparent";
    target.classList.add(classes[1]);


console.log(continenttab)
    router.push({
      pathname: `/projects`,
      query: {continent : continenttab },
    });
  }
 function changeUrl(url){
  console.log(url)
   switch(url){
    case "NORTH-US":
      setcontinenttab('amériquedunord')
      break

    case"SOUTH-AMERICA":
    setcontinenttab('amériquedusud')

    break
   default :
    setcontinenttab(()=> url.toLowerCase())
   }
 }


  useEffect(() => {
    tabItems.push(divItems.current);
    changeUrl(continent)
    // reset les classes background white sauf la premiere
    tabItems[0].classList.add("item--europe");
    Clean();
     Mapclicked(router.query.continent)

    return () => {
      tabItems.length = 0;
    };
  }, [continent]);


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
