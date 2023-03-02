import { useRouter } from "next/router";
import { useEffect, useState, useRef, MouseEventHandler } from "react";
import styles from "../layouts/projects/ProjectsLayout.module.scss";

interface MenuCountryProps {
  select: MouseEventHandler<HTMLLIElement>;
  continent: string;
}

const continentConfig = new Map([
  [
    "EUROPE",
    {
      pays: ["Italie", "Espagne", "Portugal", "Allemagne"],
    },
  ],
  [
    "AFRICA",
    {
      pays: ["Sénégale", "Mali", "Nigéria", "Congo"],
    },
  ],
  [
    "AMÉRIQUE DU NORD",
    {
      pays: ["New York", "Atlanta", "Philadelphie", "Chicago"],
    },
  ],
  [
    "AMÉRIQUE DU SUD",
    {
      pays: ["Brésil", "Colombie", "Venezuela", "Mexique"],
    },
  ],
  [
    "ASIE",
    {
      pays: ["Japon", "Chine", "Inde", "Thailande"],
    },
  ],
  [
    "OCÈANIE",
    {
      pays: ["Australie", "Fidji", "Micronésie", "Tonga"],
    },
  ],
]);

function MenuCountry({ select, continent }: MenuCountryProps) {
  const [isShown, toggleButton] = useState(false);
  let [tabcountry, settabcountry] = useState([]);
  let [continenttab, setcontinenttab] = useState<string>();

  let scrollable = useRef();
  let router = useRouter();
  let pays = useRef(null);
  pays.current = [];
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
  function SwithRoute(e) {
    let country = e.target.innerText;
    country = country.toLowerCase()
    if (continent) {
      router.push({
        pathname: `/projects`,
        query: { country, continent:continenttab },
      });
    }
  }
  // change le background des items menu
  function MenuSelected(e) {
    pays.current.map((pay) => {
      pay.classList.remove("ProjectsLayout_menu__link--selected__Is402");
    });
    e.target.classList.add("ProjectsLayout_menu__link--selected__Is402");
  }
  useEffect(() => {
    const scroll = scrollable.current;
    showScrollableMenu(scroll);
    changeUrl(continent)

    // select le pays avec un background blue
    if (continent) {
      pays.current[0].classList.add(
        "ProjectsLayout_menu__link--selected__Is402"
      );
    }

    // select les pays par rapport au continents
    let tabPays = continentConfig.get(continent).pays;
    settabcountry(tabPays);
  }, [continent]);

  // ajoute une ref a chaque pays
  function ChangePays(e) {
    if (!pays.current.includes(e)) {
      pays.current.push(e);
      pays.current = pays.current.filter((e) => e !== null);
    }
  }

  return (
    <div className={styles["menu-container"]}>
      <ul className={styles["menu"]} id={styles["scrollable"]} ref={scrollable}>
        <li
          onClick={(e) => {
            select(e);
            MenuSelected(e);
          }}
          ref={ChangePays}
          className={`${styles["menu__link"]} ${styles["menu__link--selected"]} `}
        >
          Top causes
        </li>
        {tabcountry.map((country) => {
          return (
            <li
              onClick={(e) => {
                select(e);
                MenuSelected(e);
                SwithRoute(e);
              }}
              ref={ChangePays}
              key={country}
              className={styles["menu__link"]}
            >
              {country}
            </li>
          );
        })}
      </ul>
      <div className={styles["menu-container__icon"]}>
        {isShown ? scrollButton : null}
      </div>
    </div>
  );
}

export default MenuCountry;
