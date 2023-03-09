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
  let [continenttab, setcontinenttab] = useState<string>();

  const router = useRouter();
  const config = continentConfig.get(continent);
  const classes: string[] = [styles["item"]];
  classes.push(config.custom);
  let divItems = useRef(null);




  function Clean(page) {
    // si page est sur cause
let style = page.continent

    if (Object.keys(page).length === 0) {
      tabItems.map((el, i) => {
        if (i != 0) {
          el.style = `  background-color: white !important;
        border: none !important;
        color: black !important;`;
        }
      });
    }else{

      switch(style){
        case 'amériquedunord':
          style ='northus'
          break
      
        case'amériquedusud':
        style = 'southamerica'
      
        break
       default :
    style = page.continent
       }

      tabItems.map((el, i) => {

        if(el.className.match(style)){
          if(style === 'northus' ){
           return el.classList.add(continentConfig.get("NORTH-US").custom)

          }
          else if(style === 'southamerica'){
           return el.classList.add(continentConfig.get("SOUTH-AMERICA").custom)
          }
          el.classList.add(continentConfig.get(style.toUpperCase()).custom)
        }else{
          el.style = `  background-color: white !important;
          border: none !important;
          color: black !important;`;
          
        }
      });
    }
  }


  function Select(e) {
    let tabItemsClasses: Object[] = Array.from(continentConfig.values());
    const target = e.target as HTMLDivElement;
    // récupére le text dans la barre continent 
      select(e.target.innerText)

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



    router.push({
      pathname: `/projects`,
      query: {continent : continenttab },
    });
  }


 function changeUrl(url){
   switch(url){
    case "NORTH-US":
      setcontinenttab('northus')
      break

    case"SOUTH-AMERICA":
    setcontinenttab('southamerica')

    break
   default :
    setcontinenttab(()=> url.toLowerCase())
   }
 }


  useEffect(() => {
    tabItems.push(divItems.current);
    changeUrl(continent)
    // reset les classes background white sauf la premiere
    // tabItems[0].classList.add("item--europe");
    Clean(router.query);
    //  Mapclicked(router.query)
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
