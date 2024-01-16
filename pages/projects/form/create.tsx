import {
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback,
  MouseEventHandler,
} from "react";
import stylesItm from "../../../components/continent-menu/item/Item.module.scss";

import MainNavigation from "@components/navigation/MainNavigation";
import styles from "./Create.module.scss";
import Steps from "@components/steps/Steps";
import Title from "@components/title/Ttile";
import HelpCard from "@components/help-card/HelpCard";
import Footer from "@components/footer/Footer";
import Country from "@components/country/country";
import InputNtexterea from "@components/Input&texterea/InputNtexterea";
import { useRouter } from "next/router";
import MenuMobile from "@components/MenuMobile/MenuMobile";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Connect from "@components/connectionrequest/Connect";
import ProjectRepository from "domain/repositories/project";
import { DB, auth } from "../../../firebase/configApp";
import AuthenticatorRepository from "domain/repositories/authenticator";
import { onAuthStateChanged, Auth } from "@firebase/auth";
import countries from "../../../public/data/countries.json";
import request from "../../../context/request";

interface IProjet {
  focus: string;
  web: string;
  country: "";
  title: string;
  subtitle: string;
  description: string;
  Theme: string;
  files: string[];
  continent: string;
}

interface File {
  filename: string; // dbeudbe.jpg
  url: string; // http://aws.cloud/dbeudbe.jpg
  type: string; // image/video
}

interface Array2 {
  title: string;
  img: string;
}

let tabTitle: Array2[] = [
  {
    title: "EUROPE",
    img: "/icons/europe-icon.svg",
  },
  {
    title: "AFRIQUE",
    img: "/icons/africa-icon.svg",
  },
  {
    title: "AMÉRIQUE DU NORD",
    img: "/icons/na-icon.svg",
  },
  {
    title: "AMÉRIQUE DU SUD",
    img: "/icons/sa-icon.svg",
  },
  {
    title: "ASIE",
    img: "/icons/asia-icon.svg",
  },
  {
    title: "OCÉANIE",
    img: "/icons/oceania-icon.svg",
  },
];

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
      custom: `${stylesItm["item--europe"]}`,
    },
  ],
  [
    "AFRIQUE",
    {
      title: "AFRIQUE",
      imgSrc: "/images/africa-item.png",
      custom: `${stylesItm["item--africa"]}`,
    },
  ],
  [
    "AMÉRIQUE DU NORD",
    {
      title: "AMÉRIQUE DU NORD",
      imgSrc: "/images/north-us-item.png",
      custom: `${stylesItm["item--northus"]}`,
    },
  ],
  [
    "AMÉRIQUE DU SUD",
    {
      title: "AMÉRIQUE DU SUD",
      imgSrc: "/images/south-america-item.png",
      custom: `${stylesItm["item--southamerica"]}`,
    },
  ],
  [
    "ASIE",
    {
      title: "ASIE",
      imgSrc: "/images/asia-item.png",
      custom: `${stylesItm["item--asia"]}`,
    },
  ],
  [
    "OCÉANIE",
    {
      title: "OCÉANIE",
      imgSrc: "/images/oceania-item.png",
      custom: `${stylesItm["item--oceania"]}`,
    },
  ],
]);

const CreateForm = () => {
  let [infosUser, setInfosUser] = useState(null);
  let projectRepository = new ProjectRepository(DB);

  let [profil, setprofil] = useState<IProjet>({
    focus: "associate",
    web: "",
    title: "",
    subtitle: "",
    description: "",
    continent: "",
    country: "",
    Theme: "",
    files: [],
  });
  let [fullprofil, setfullprofil] = useState<boolean>(false);
  let [count, setcount] = useState<number>(0);
  const [bol, setbol] = useState(2);
  const [projectDone, setProjectDone] = useState(false);
  const [profilfullfilled, setprofilfullfilled] = useState(true);
  let requestCounties = new request(countries);
  const refThemes = useRef([])
  refThemes.current = []
  const show = useRef(null);
  const hide = useRef(null);
  let router = useRouter();
  let countryRef = useRef([]);
  countryRef.current = [];
  let individuel = useRef<HTMLDivElement | null>(null);
  let assosiation = useRef<HTMLDivElement | null>(null);

  // countries && continent pour select option

  const themes = (e) =>{
    if(e){
      if(!refThemes.current.includes(e)){
        refThemes.current.push(e)
      }  
    }
  

  }

  console.log(refThemes,'thems')
  const contryAsia = countries.reduce((_prev = [], _curr) => {
    const { region, id, name } = _curr;
    if (region === "Asia") {
      _prev.push({ region, id, name });
    }
    return _prev;
  }, []);

  const conutryEurope = countries.reduce((_prev = [], _curr) => {
    const { region, id, name } = _curr;
    if (region === "Europe") {
      _prev.push({ region, id, name });
    }

    return _prev;
  }, []);

  const conutryAfrica = countries.reduce((_prev = [], _curr) => {
    const { region, id, name } = _curr;
    if (region === "Africa") {
      _prev.push({ region, id, name });
    }
    return _prev;
  }, []);

  const conutryOceania = countries.reduce((_prev = [], _curr) => {
    const { region, id, name } = _curr;
    if (region === "Oceania") {
      _prev.push({ region, id, name });
    }
    return _prev;
  }, []);
  const conutryNorthAmerica = [...requestCounties.countryAmericaNorth()];
  const countrySouthAmerica = [
    ...requestCounties
      .countryAmericaSouth()
      .concat(requestCounties.countryAmericaCentral()),
  ];

  //  console.log(conutryOceania ,'jlkjlkj')

  // l'option du site indiv || assos
  function OptionWebsite(e) {
    if (e.target === individuel.current) {
      setprofil({
        ...profil,
        focus: "individuel",
      });

      e.target.style = "background : #1D53B7";

      if (assosiation.current !== undefined) {
        let asos = assosiation.current;

        asos.style.setProperty("background", "white");
      }
    } else {
      setprofil({
        ...profil,
        focus: "associate",
      });

      e.target.style = "background : #1D53B7";
      if (individuel.current != undefined) {
        individuel.current.style.setProperty("background", "white");
      }
    }
  }

  // récupére le continent selectionné
  function ContinentSelected(continent) {
    let whiteback = `${stylesItm["item--white-back"]}`;
    let continentVal = continent.target.children[1].innerText;
    let continentStyle = continentConfig.get(continentVal).custom;

    countryRef.current.forEach((continent1) => {
      continent1.classList.add(whiteback);
      continent1.classList.remove(
        continentConfig.get(continent1.children[1].innerText).custom
      );
    });

    continent.target.classList.remove(whiteback);

    continent.target.classList.add(continentStyle);
    // transform les continents en numbre
    switch (continentVal) {
      case "EUROPE":
        continentVal = 0;
      case "AFRIQUE":
        continentVal = 1;
      case "AMÉRIQUE DU NORD":
        continentVal = 2;
      case "AMÉRIQUE DU SUD":
        continentVal = 3;
      case "ASIE":
        continentVal = 4;
      case "OCÉANIE":
        continentVal = 5;
    }
    setprofil({
      ...profil,
      continent: continentVal,
    });
  }

  const onContinueClick = () => {
    if (
      profil.Theme != "" &&
      profil.description != "" &&
      profil.files.length != 0 &&
      profil.focus != "" &&
      profil.subtitle != "" &&
      profil.title != "" &&
      profil.web != ""
    ) {
      // tabprofil.push(profil)
      setcount((el) => el + 1);

      if (!infosUser?.uid) {
        setfullprofil(true);
      } else {
        setfullprofil(false);
        alert("data send");
      }
      router.push("/");
      setprofilfullfilled(true)

      return projectRepository
        .Create({
          name: infosUser?.email,
          description: profil.description,
          published: true,
          createdBy: infosUser?.uid,
          goal: profil.focus,
          title: profil.subtitle,
          subtitle: profil.title,
          liveSupporters: 0,

          thematics: [],
          comments: [],
          supporters: [],
          medias: [],

          createdAt: new Date(),
          updatedAt: new Date(),
          projectAccountType: 0,
          country: profil.country,
          continent: profil.continent,
        })
        .then((el) => {
          console.log(el);
        });
    }else{
        
      setprofilfullfilled(false);
    }
  };

  // récupére l'information des chans selon le placeholder
  function InputValue(e) {
    let expr = e.target.placeholder;

    switch (expr) {
      case "Description de votre project":
        setprofil({
          ...profil,
          description: e.target.value,
        });
        break;

      case "Choisissez votre pays":
        setprofil({
          ...profil,
          country: e.target.value,
        });
        break;

      case "Description de votre cause":
        setprofil({
          ...profil,
          description: e.target.value,
        });
        break;
      case "Le titre de votre cause":
        setprofil({
          ...profil,
          title: e.target.value,
        });
        break;
      case "Le titre de votre project":
        setprofil({
          ...profil,
          title: e.target.value,
        });
        break;

      case "Le titre de votre cause`":
        setprofil({
          ...profil,
          title: e.target.value,
        });
        break;
      case "Sous-titre de votre cause":
        setprofil({
          ...profil,
          subtitle: e.target.value,
        });
        break;

      default:
    }
  }

  // récupére le theme
  function CatchTheme(e) {
    
    refThemes.current.forEach( theme => theme.children[0].style = 'opacity : 1')

    e.target.children[0].style = 'opacity:.5'
    console.log(e.target.children[0])
    setprofil({
      ...profil,
      Theme: e.target.children[1].innerText,
    });
  }

  function CatchFile(file) {
    setprofil({
      ...profil,
      files: profil.files.concat(file),
    });
  }

  //   pays choisie

  const findCountries = (e) => {
    console.log(e.target.value);
    let id = e.target.value;
    const findcontinent = countries.find(
      (country) => Number(country.id) === Number(id)
    );
    console.log(findcontinent.region, "finddddddd");
    setprofil({
      ...profil,
      country: id,
      continent: findcontinent.region_id,
    });
  };

  useEffect(() => {
    console.log(profil);
    if (infosUser === null) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setInfosUser(user);
        }
      });
      console.log("yooo");
    }

  });

  // boucle sur les ref de country
  function CatchCountry(e) {
    if (!countryRef.current.includes(e) && countryRef.current) {
      countryRef.current.push(e);
      countryRef.current = countryRef.current.filter(
        (country) => country != null
      );
    }
  }

  const thematics = [...Array(25)];
  const Theme = [
    "Culture",
    "Démocratie",
    "Economie",
    "Éducation",
    "Égalité F/H",
    "Europe",
    "Familles",
    "Inclusion",
    "International",
    "Jeunesse",
    "Justice",
    "Mobilités",
    "Numérique",
    "Puissance publique",
    "Répuclique",
    "Ruralité",
    "Santé",
    "Séxurité et Défense",
    "Solidarités",
    "Sport",
    "Théme autre",
    "Transition écologique",
    "Travail",
    "Villes et Quartier",
  ];

  return (
    <Fragment>
      <MainNavigation />
      <MenuBurger />

      <form className={styles["form"]}>
        <div className={styles["form__steps"]}>
          <Steps step={bol} />
        </div>
        <div className={styles["content"]}>
          <div className={styles["form-container"]} ref={hide}>
            <div className={styles["form-container__step"]}>1. Vous êtes</div>
            <div className={styles["select-box"]}>
              <div className={styles["choice"]}>
                <div className={styles["choice__checkbox"]}>
                  <span
                    onClick={OptionWebsite}
                    style={{
                      background: "white",
                    }}
                    ref={individuel}
                  />
                </div>
                <div className={styles["choice__text"]}>Individuel</div>
              </div>
              <div className={styles["choice"]}>
                <div className={styles["choice__checkbox"]}>
                  <span onClick={OptionWebsite} ref={assosiation} />
                </div>
                <div className={styles["choice__text"]}>Association</div>
              </div>
            </div>
            <input
              className={styles["form-container__input"]}
              placeholder="Votre site web"
              onChange={(e) => {
                setprofil({
                  ...profil,
                  web: e.target.value,
                });
              }}
            />

            <InputNtexterea
              titleInput={`2. Titre du cause`}
              placeholder={`Le titre de votre cause`}
              bolea={true}
              val={InputValue}
              fileSelect={null}
              removefile={null}
            />
            <InputNtexterea
              titleInput={`3. Sous-titre de votre cause`}
              placeholder={`Sous-titre de votre cause`}
              bolea={true}
              val={InputValue}
              fileSelect={null}
              removefile={null}
            />
            <InputNtexterea
              titleInput={`4. Description de votre cause`}
              placeholder={`Description de votre cause`}
              bolea={true}
              val={InputValue}
              fileSelect={null}
              removefile={null}
            />
            <InputNtexterea
              titleInput={`5. Ajoutez une image à votre cause`}
              placeholder={``}
              bolea={false}
              val={InputValue}
              fileSelect={CatchFile}
              files={profil.files}
              removefile={null}
            />

            <div className={styles["form-container__step"]}>6. Ou ça ?</div>
            <div className={styles["continents"]}>
              {tabTitle.map(({ title, img }, i) => (
                <Country
                  titleContinent={title}
                  imgSrc={img}
                  ref={CatchCountry}
                  key={i}
                  target={ContinentSelected}
                />
              ))}
            </div>

            <div className={styles["select-countries"]}>
              <label htmlFor="country">Choisir un pays :</label>

              <select
                onClick={findCountries}
                name="country"
                className={styles["select-countries__select"]}
              >
                <option disabled value="">
                  --Pays-
                </option>
                {contryAsia && (
                  <>
                    <option
                      disabled
                      value=""
                      className={styles["select-countries__continent-select"]}
                    >
                      Asia
                    </option>
                    {contryAsia.map((Asiacountry) => {
                      const { name, id } = Asiacountry;
                      return <option value={id}>{name} </option>;
                    })}
                  </>
                )}
                {conutryEurope && (
                  <>
                    <option
                      disabled
                      value=""
                      className={styles["select-countries__continent-select"]}
                    >
                      Europe
                    </option>
                    {conutryEurope.map((Europecountry) => {
                      const { name, id } = Europecountry;
                      return <option value={id}>{name} </option>;
                    })}
                  </>
                )}
                {conutryAfrica && (
                  <>
                    <option
                      disabled
                      value=""
                      className={styles["select-countries__continent-select"]}
                    >
                      {" "}
                      Africa
                    </option>
                    {conutryAfrica.map((Oceaniacountry) => {
                      const { name, id } = Oceaniacountry;
                      return <option value={id}>{name} </option>;
                    })}
                  </>
                )}

                {conutryOceania && (
                  <>
                    <option
                      value=""
                      className={styles["select-countries__continent-select"]}
                    >
                      {" "}
                      Oceania
                    </option>
                    {conutryOceania.map((Oceaniacountry) => {
                      const { name, id } = Oceaniacountry;
                      return <option value={id}>{name} </option>;
                    })}
                  </>
                )}

                {countrySouthAmerica && (
                  <>
                    <option
                      value=""
                      className={styles["select-countries__continent-select"]}
                    >
                      {" "}
                      South America
                    </option>
                    {countrySouthAmerica.map((Oceaniacountry) => {
                      const { name, id } = Oceaniacountry;
                      return <option value={id}>{name} </option>;
                    })}
                  </>
                )}

                {conutryNorthAmerica && (
                  <>
                    <option
                      value=""
                      className={styles["select-countries__continent-select"]}
                    >
                      North America
                    </option>
                    {conutryNorthAmerica.map((Oceaniacountry) => {
                      const { name, id } = Oceaniacountry;
                      return <option value={id}>{name} </option>;
                    })}
                  </>
                )}
              </select>
            </div>

            {/*Todo :: Text should be dynamic either project or cause*/}
            <div className={styles["form-container__step"]}>
              8. Le thème principal de votre cause
            </div>
            <div className={styles["thematics"]}>
              {thematics.map((_, i) => (
                <div
                  className={styles["thematic"]}
                  key={i}
                  ref={themes}
                  onClick={CatchTheme}
                >
                  <div className={styles["thematic__image"]} />
                  <div className={styles["thematic__name"]}>{Theme[i]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTON*/}
          <div className={styles["button-container"]}>
            <div
              className={`${styles["button"]} ${
                styles[projectDone ? "bkg" : ""]
              }`}
              onClick={onContinueClick}
            >
              Continuer
            </div>
            {fullprofil && (
              <Connect
                onClose={() => setfullprofil(false)}
                children={undefined}
                title={undefined}
              />
            )}
             

             {
          !profilfullfilled    && (
              <div className={styles['profil-notfull']}>
                 <h4>vous devez remplir obligatoirement <br /> tous les champs </h4>
                 <button  onClick={()=> setprofilfullfilled(true)} >
                  Fermer
                 </button>
               </div>
              )
             }

          </div>
        </div>
      </form>
      <Footer />
    </Fragment>
  );
};

export default CreateForm;
