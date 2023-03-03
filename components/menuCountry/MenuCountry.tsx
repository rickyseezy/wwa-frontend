import { Router, useRouter } from "next/router";
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
    "AMÉRIQUEDUNORD",
    {
      pays: ["New York", "Atlanta", "Philadelphie", "Chicago"],
    },
  ],
  [
    "AMÉRIQUEDUSUD",
    {
      pays: ["Brésil", "Colombie", "Venezuela", "Mexique"],
    },
  ],
  [
    "ASIA",
    {
      pays: ["Japon", "Chine", "Inde", "Thailande"],
    },
  ],
  [
    "OCEANIA",
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

  // scroll droite a gauche
  function showScrollableMenu(element: HTMLElement) {
    toggleButton(
      element.scrollHeight > element.clientHeight ||
        element.scrollWidth > element.clientWidth
    );
  }

  function MapCheck(url) {
    if (url) {
      let tabPays = continentConfig.get(url.toUpperCase()).pays;
      settabcountry(tabPays);
    }else{
      let tabPays = continentConfig.get('EUROPE').pays;
      settabcountry(tabPays);
    }
  }

  // change le continent dans un format acceptable pour ajouter dans la route
  function changeUrl(url) {
    console.log(url)
    if (url) {
      switch (url) {
        case "NORTH-US":
          setcontinenttab("amériquedunord");
          break;

        case "SOUTH-AMERICA":
          setcontinenttab("amériquedusud");
  
 
          break;
        default:
          setcontinenttab(url);
      }
    }else{
      setcontinenttab('europe')
    }
  }

  //  ajoute la route dans l'url avec country et continent
  function SwithRoute(e) {
    let country = e.target.innerText;
    country = country.toLowerCase();
   console.log(continenttab)
    if (continent) {
      router.push({
        pathname: `/projects`,
        query: { country, continent: continenttab },
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

  // ajoute une ref a chaque pays
  function ChangePays(e) {
    if (!pays.current.includes(e)) {
      pays.current.push(e);
      pays.current = pays.current.filter((e) => e !== null);
    }
  }

  useEffect(() => {
    const scroll = scrollable.current;
    showScrollableMenu(scroll);
    // changeUrl(continent)
    changeUrl(router.query.continent);
    MapCheck(router.query.continent);
    // select le pays avec un background blue
      pays.current[0].classList.add(
        "ProjectsLayout_menu__link--selected__Is402"
      )
    
  }, [continent, router.query.continent]);

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
