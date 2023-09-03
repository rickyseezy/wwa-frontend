import {
  Fragment,
  useEffect,
  useRef,
  useState,
  useCallback,
  MouseEventHandler
} from "react";
import stylesItm from "../../../../components/continent-menu/item/Item.module.scss";
import MainNavigation from "@components/navigation/MainNavigation";
import styles from "../Create.module.scss";
import Steps from "@components/steps/Steps";
import Footer from "@components/footer/Footer";
import Country from "@components/country/country";
import InputNtexterea from "@components/Input&texterea/InputNtexterea";
import {useRouter} from "next/router";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Connect from "@components/connectionrequest/Connect";
import ProjectRepository from "domain/repositories/project";
import {DB, auth} from "../../../../firebase/configApp";


interface IProjet {

  focus : string,
  web : string,
  country:'',
  title : string,
  subtitle : string,
  description : string,
  Theme : string,
  files : string[]
  continent : string
}
interface IContinentConfig {
  title : string;
  imgSrc : string;
  custom : string;
}


interface Array2 {
  title : string,
  img : string
}
let tabTitle : Array2[] = [
  {
      title: 'EUROPE',
      img: "/icons/europe-icon.svg"
  }, {
      title: 'AFRIQUE',
      img: '/icons/africa-icon.svg'
  }, {
      title: 'AMÉRIQUE DU NORD',
      img: '/icons/na-icon.svg'
  }, {
      title: 'AMÉRIQUE DU SUD',
      img: '/icons/sa-icon.svg'
  }, {
      title: 'ASIE',
      img: '/icons/asia-icon.svg'
  }, {
      title: 'OCÉANIE',
      img: '/icons/oceania-icon.svg'
  }
]

const continentConfig = new Map < string,
IContinentConfig > ([
    [
        "EUROPE", {
            title: "EUROPE",
            imgSrc: "/images/europe-item.png",
            custom: `${stylesItm["item--europe"]}`
        }
    ],
    [
        "AFRIQUE", {
            title: "AFRIQUE",
            imgSrc: "/images/africa-item.png",
            custom: `${stylesItm["item--africa"]}`
        }
    ],
    [
        "AMÉRIQUE DU NORD", {
            title: "AMÉRIQUE DU NORD",
            imgSrc: "/images/north-us-item.png",
            custom: `${stylesItm["item--northus"]}`
        }
    ],
    [
        "AMÉRIQUE DU SUD", {
            title: "AMÉRIQUE DU SUD",
            imgSrc: "/images/south-america-item.png",
            custom: `${stylesItm["item--southamerica"]}`
        }
    ],
    [
        "ASIE", {
            title: "ASIE",
            imgSrc: "/images/asia-item.png",
            custom: `${stylesItm["item--asia"]}`
        }
    ],
    [
        "OCÉANIE", {
            title: "OCÉANIE",
            imgSrc: "/images/oceania-item.png",
            custom: `${stylesItm["item--oceania"]}`
        }
    ]
]);


function ModifyProject() {
  let [infosUser,
    setInfosUser] = useState(null)
let projectRepository = new ProjectRepository(DB)
let [idOfProject,setIdOfProject] = useState(null)
let [profil,
    setprofil] = useState < IProjet > ({
    focus: 'associate',
    web: '',
    title: '',
    subtitle: '',
    description: '',
    continent:'',
    country: '',
    Theme: '',
    files: []
})
let [fullprofil,
    setfullprofil] = useState < boolean > (false)
let [count,
    setcount] = useState < number > (0)

const [ModifyAction,
    setModifyAction] = useState(true)


const hide = useRef(null)
let router = useRouter()
let countryRef = useRef([])
let [contentProject,setContentProject] = useState(null)

countryRef.current = []
let individuel = useRef < HTMLDivElement | null > (null)
let assosiation = useRef < HTMLDivElement | null > (null)

// l'option du site indiv || assos
function OptionWebsite(e) {

    if (e.target === individuel.current) {
        setprofil({
            ...profil,
            focus: 'individuel'
        })

        e.target.style = 'background : #1D53B7'

        if (assosiation.current !== undefined) {
            let asos = assosiation.current

            asos
                .style
                .setProperty('background', 'white')
        }
    } else {
        setprofil({
            ...profil,
            focus: 'associate'
        })

        e.target.style = 'background : #1D53B7'
        if (individuel.current != undefined) {
            individuel
                .current
                .style
                .setProperty('background', 'white')
        }
    }
}

// récupére le continent selectionné
function ContinentSelected(continent) {
    let whiteback = `${
    stylesItm["item--white-back"]}`
    let continentVal = continent.target.children[1].innerText
    let continentStyle = continentConfig
                                        .get(continentVal)
                                        .custom

    countryRef
              .current
              .forEach(continent1 => {
            continent1
                .classList
                .add(whiteback)
            continent1
                .classList
                .remove(continentConfig.get(continent1.children[1].innerText).custom)
                })

    continent
             .target
             .classList
             .remove(whiteback)

    continent
             .target
             .classList
             .add(continentStyle)



    // transform les continents en numbre
    switch (continentVal) {
        case 'EUROPE':
            continentVal = 0
        case 'AFRIQUE':
            continentVal = 1
        case 'AMÉRIQUE DU NORD':
            continentVal = 2
        case 'AMÉRIQUE DU SUD':
            continentVal = 3
        case 'ASIE':
            continentVal = 4
        case 'OCÉANIE':
            continentVal = 5
    }
    setprofil({
              ...profil,
              continent: continentVal
     })
}


// récupére l'information des chans selon le placeholder
function InputValue(e) {

    let expr = e.target.placeholder

    switch (expr) {
        case 'Description de votre project':
            setprofil({
                ...profil,
                description: e.target.value
            })
            break;


            case 'Choisissez votre pays':
                setprofil({
                    ...profil,
                    country: e.target.value
                })
                break;

        case 'Description de votre cause':
            setprofil({
                ...profil,
                description: e.target.value
            })
            break;
        case 'Le titre de votre cause':
            setprofil({
                ...profil,
                title: e.target.value
            })
            break;
        case 'Le titre de votre project':
            setprofil({
                ...profil,
                title: e.target.value
            })
            break;

        case 'Le titre de votre cause`':
            setprofil({
                ...profil,
               title: e.target.value
            })
            break;
        case 'Sous-titre de votre cause':
            setprofil({
                ...profil,
                subtitle: e.target.value
            })
            break;

        default:
    }

}

// récupére le theme
function CatchTheme(e) {
    setprofil({
        ...profil,
        Theme: e.target.children[1].innerText
    })
}

function CatchFile(file) {

    setprofil({
        ...profil,
        files: profil
            .files
            .concat(file)
    })
}
async function GetInfosFromId(id: string){

  try{
    let dataProoject = await projectRepository.Get(id)
    
    setContentProject(dataProoject)

  }catch(e){
     console.log(e)
  }

}

function ModifyData(id: string){
projectRepository.Update(id,profil)
router.push('/Mon-compte')
}

useEffect(() => {

  let idProject = router.query?.modifyId?.toString()
  setIdOfProject(idProject)
  GetInfosFromId(idProject)
  setprofil({...profil,...contentProject})

  
},[router.query,contentProject !== null])


// boucle sur les ref de country
function CatchCountry(e) {
    if (!countryRef.current.includes(e) && countryRef.current) {

        countryRef
            .current
            .push(e)
        countryRef.current = countryRef
            .current
            .filter(country => country != null)

    }

}

const thematics = [...Array(25)];
const Theme = [
    'Culture',
    'Démocratie',
    'Economie',
    'Éducation',
    'Égalité F/H',
    'Europe',
    'Familles',
    'Inclusion',
    'International',
    'Jeunesse',
    'Justice',
    'Mobilités',
    'Numérique',
    'Puissance publique',
    'Répuclique',
    'Ruralité',
    'Santé',
    'Séxurité et Défense',
    'Solidarités',
    'Sport',
    'Théme autre',
    'Transition écologique',
    'Travail',
    'Villes et Quartier'
]
    return (
        <Fragment>
            <MainNavigation/>
            <MenuBurger/>

            <form className={styles["form"]}>
                <div className={styles["form__steps"]}>
                    <Steps step={3}/>
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
                                        background: "white"
                                    }}
                                        ref={individuel}/>
                                </div>
                                <div className={styles["choice__text"]}>Individuel</div>
                            </div>
                            <div className={styles["choice"]}>
                                <div className={styles["choice__checkbox"]}>
                                    <span onClick={OptionWebsite} ref={assosiation}/>
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
                                web: e.target.value
                            })
                        }}/>

                        <InputNtexterea
                            titleInput={`2. Titre du cause`}
                            placeholder={`Le titre de votre cause`}
                            bolea={true}
                            val={InputValue}
                            fileSelect={null}
                            removefile={null}/>
                        <InputNtexterea
                            titleInput={`3. Sous-titre de votre cause`}
                            placeholder={`Sous-titre de votre cause`}
                            bolea={true}
                            val={InputValue}
                            fileSelect={null}
                            removefile={null}/>
                        <InputNtexterea
                            titleInput={`4. Description de votre cause`}
                            placeholder={`Description de votre cause`}
                            bolea={true}
                            val={InputValue}
                            fileSelect={null}
                            removefile={null}/>
                        <InputNtexterea
                            titleInput={`5. Ajoutez une image à votre cause`}
                            placeholder={``}
                            bolea={false}
                            val={InputValue}
                            fileSelect={CatchFile}
                            files={profil.files}
                            removefile={null}/>

                        <div className={styles["form-container__step"]}>6. Ou ça ?</div>
                        <div className={styles["countries"]}>

                            {tabTitle.map(({
                                title,
                                img
                            }, i) => (<Country
                                titleCountry={title}
                                imgSrc={img}
                                ref={CatchCountry}
                                key={i}
                                target={ContinentSelected}/>))
}
                        </div>
                        <InputNtexterea
                            titleInput={`7. Quel est votre pays ?`}
                            placeholder={`Choisissez votre pays`}
                            bolea={true}
                            val={InputValue}
                            fileSelect={null}
                            removefile={null}/> {/*Todo :: Text should be dynamic either project or cause*/}
                        <div className={styles["form-container__step"]}>
                            8. Le thème principal de votre cause
                        </div>
                        <div className={styles["thematics"]}>
                            {thematics.map((_, i) => (
                                <div className={styles["thematic"]} key={i} onClick={CatchTheme}>
                                    <div className={styles["thematic__image"]}/>
                                    <div className={styles["thematic__name"]}>
                                        {Theme[i]
}</div>
                                </div>
                            ))
}
                        </div>
                    </div>

                    {/* SUBMIT BUTTON*/}
                    <div className={styles["button-container"]}>
                        <div
                            className={`${styles["button"]} ${styles[ModifyAction
                                ? "bkg"
                                : ""]}`}
                            onClick={()=> ModifyData(idOfProject)}>Modifier</div>
                        {fullprofil && <Connect/>
}
                    </div>
                </div>
            </form>
            <Footer/>
        </Fragment>
    )
}

export default ModifyProject