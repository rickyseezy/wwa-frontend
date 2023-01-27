import { Fragment, useEffect, useRef, useState,useCallback, MouseEventHandler} from "react";
import stylesItm from "../../../components/continent-menu/item/Item.module.scss";

import MainNavigation from "@components/navigation/MainNavigation";
import styles from "./Create.module.scss";
import Steps from "@components/steps/Steps";
import Title from "@components/title/Ttile";
import HelpCard from "@components/help-card/HelpCard";
import Footer from "@components/footer/Footer";
import Country from "@components/country/country";
import InputNtexterea from "@components/Input&texterea/InputNtexterea";
import {useRouter} from "next/router";
import MenuMobile from "@components/MenuMobile/MenuMobile";
import MenuBurger from "@components/menu-burger/MenuBurger";
import { Console } from "console";
let stylesbol = ""

interface IProjet {
    project: string;
    focus: string,
    web: string,
    title: string
    subtitle: string
    description: string
    Theme:string
    files: string[]
    conntinent: string
   }

   interface File {
    filename: string // dbeudbe.jpg
    url: string // http://aws.cloud/dbeudbe.jpg
    type: string // image/video
   }
   
   interface Array2  {
     title : string,
     img : string
   }

   let tabTitle : Array2[] = [
    {title : 'EUROPE',
    img :    "/icons/europe-icon.svg"
    },
    {title : 'AFRIQUE',
    img :    '/icons/africa-icon.svg' 
    },
    {title : 'AMÉRIQUE DU NORD',
    img :    '/icons/na-icon.svg'
    },
    {title : 'AMÉRIQUE DU SUD',
    img :    '/icons/sa-icon.svg' 
    },
    {title : 'ASIE',
    img :    '/icons/asia-icon.svg'
    },
    {title : 'OCÉANIE',
    img :    '/icons/oceania-icon.svg'
    },
   ]


   interface IContinentConfig {
    title: string;
    imgSrc: string;
    custom: string;
}

   
const continentConfig = new Map<string, IContinentConfig>([
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

const CreateForm = () => {

    let createAccount = {
        focus: '',
        web: '',
        title: '',
        subtitle: '',
        description: '',
        conntinent: '',
        Theme:'',
        project : "",
        files: [],
    }

    let [profil,setprofil] = useState<IProjet>(createAccount)
    let [fullprofil,setfullprofil] = useState<boolean>(false)
    let [count,setcount] = useState<number>(0)

    const [bol,
        setbol] = useState(true)
    const show = useRef(null)
    const hide = useRef(null)
    let router = useRouter()

    let countryRef = useRef([])
    countryRef.current = []
    let individuel = useRef<HTMLDivElement|null>(null)
    let assosiation = useRef<HTMLDivElement | null >(null)

    let [card1Style,setcard1Style] = useState("")


    // l'option du site indiv || assos
     function OptionWebsite(e){
            
     
            if(e.target === individuel.current){
                setprofil({...profil, focus: 'individuel'})


                e.target.style = 'background : #1D53B7'
                
                if(assosiation.current !== undefined){
                    let asos =  assosiation.current 

                asos.style.setProperty('background','white')
                 }
            }else{
                setprofil({...profil, focus: 'associate'})

                e.target.style = 'background : #1D53B7'
                if(individuel.current != undefined){
                individuel.current.style.setProperty('background','white')
                 }
            }
        }

        // récupére le continent selectionné
     function ContinentSelected(continent){
        let whiteback = `${stylesItm["item--white-back"]}`
        let continentVal = continent.target.children[1].innerText
        let continentStyle = continentConfig.get(continentVal).custom
     



        countryRef.current.forEach(continent1 => {
             continent1.classList.add(whiteback)
             continent1.classList.remove(continentConfig.get(continent1.children[1].innerText).custom)
        })
  
        console.log(continentVal,'continent val')   

            continent.target.classList.remove(whiteback)

        continent.target.classList.add(continentStyle)
      setprofil({...profil, conntinent: continentVal})
     }

 // selctionne les cartes pour les cause 
    
    function SelectCause(e : {
        currentTarget: {
            classList: {
                contains: (arg0 : string) => any;
            };
        };
    }) {

        if (e.currentTarget.classList.contains("card1")) {
            stylesbol = "card1"
            setcard1Style(stylesbol)
            createAccount.project = 'project'
            setprofil({...profil, ...createAccount})

        } else if (e.currentTarget.classList.contains("card2")) {
            stylesbol = "card2"
            createAccount.project = 'cause'
            setprofil({...profil, ...createAccount})
            setcard1Style(stylesbol)

        }

    }

    // bouton pour changer de page de cause a formulaire de formulaire a profil
    const onContinueClick = () => {
        setcard1Style("")
          if(card1Style === 'card1' || card1Style === 'card2'){
        if (!bol) {
            show.current.style = 'display :flex'
            hide.current.style = 'display : none'
        }

        if (bol) {
            show.current.style = 'display :none'
            hide.current.style = 'display : block'
        }

        setbol(!bol)
        }

        if(profil.Theme != "" && profil.description != "" && profil.files.length != 0 && profil.focus != "" && profil.subtitle != "" && profil.title != "" && profil.web != "" && profil.project != ""){
            // tabprofil.push(profil)
            setcount(el => el +1)

            router.push('/')
        
        }
    }

// récupére l'information des chans selon le placeholder 
    function InputValue(e){
      
       let expr = e.target.placeholder

       switch (expr) {
        case 'Description de votre project':
          setprofil({...profil, description: e.target.value})
          break;
        case 'Le titre de votre cause':
            setprofil({...profil, title: e.target.value})

            break;
        case 'Sous-titre de votre project':
            setprofil({...profil, subtitle: e.target.value})

          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
      
    
    }

// récupére le theme
    function CatchTheme(e){
       setprofil({...profil, Theme: e.target.children[1].innerText})
    }

    function CatchFile(file){


        setprofil({...profil, files:  profil.files.concat(file)})
    }

    useEffect(()=>{
        if(profil.Theme != "" && profil.description != "" && profil.files.length != 0 && profil.focus != "" && profil.subtitle != "" && profil.title != "" && profil.web != "" && profil.project != ""){
                setfullprofil(true)
        } 


       
    })

// boucle sur les ref de country 
    function CatchCountry(e){
      if(!countryRef.current.includes(e) && countryRef.current){
        
         
            countryRef.current.push(e)
          countryRef.current =  countryRef.current.filter( country => country != null)

        
      }

 
    }


  

    const thematics = [...Array(25)];
    const Theme = ['Culture','Démocratie','Economie','Éducation','Égalité F/H','Europe','Familles','Inclusion','International','Jeunesse','Justice','Mobilités',
    'Numérique','Puissance publique','Répuclique','Ruralité','Santé','Séxurité et Défense','Solidarités','Sport','Théme autre','Transition écologique','Travail','Villes et Quartier']

    return (
        <Fragment>
            <MainNavigation/>
            <MenuBurger/>

            <form className={styles["form"]} >
                <div className={styles["form__steps"]}>
                    <Steps step={bol}/>
                </div>
                <div className={styles["content"]}>
                    <Title text="VOTRE CAUSE"/>
                    <div className={styles["content__question"]}>
                       {bol ? 'Quel est le type de cause ?' : 'Dites nous tout'}
                    </div>
                    {/* Todo :: Remove display: none to display the card type */}
                    <div className={styles["help-types"]} ref={show}>
                        <HelpCard
                            title='Un project'
                            id="card1"
                            backgroundColorCard={card1Style === "card1"
                            ? "help-card--selected"
                            : ""}
                            select={SelectCause}
                            imgValid={"/icons/check.svg"}
                            valid={card1Style === "card1"
                            ? "select-icon"
                            : ""}
                            imgCard="/images/project-type.png"/>
                        <div className={styles["help-types__separator"]}/>
                        <HelpCard
                            title='Une cause'
                            id="card2"
                            backgroundColorCard={card1Style === "card2"
                            ? "help-card--selected"
                            : ""}
                            imgValid={"/icons/check.svg"}
                            valid={card1Style === "card2"
                            ? "select-icon"
                            : ""}
                            imgCard="/images/Group.png"
                            select={SelectCause}/>
                    </div>
                    {/*  form page */}
                    <div
                        className={styles["form-container"]}
                        ref={hide}
                        style={{
                        display: "none"
                    }}>
                        <div className={styles["form-container__step"]}>1. Vous êtes</div>
                        <div className={styles["select-box"]}>
                            <div className={styles["choice"]}>
                                <div className={styles["choice__checkbox"]}>
                                    <span  onClick={OptionWebsite}
                                        style={{
                                       background:"white"}} ref={individuel}/>
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
                            placeholder="Votre site web" onChange={(e)=> {
                            setprofil({...profil, web: e.target.value})
                                }}/>

                        <InputNtexterea
                            titleInput="2. Titre du project"
                            placeholder={`Le titre de votre cause`}
                            bolea={true} val={InputValue}  fileSelect={null} removefile={null} />
                             <InputNtexterea
                            titleInput="3. Sous-titre du projet"
                            placeholder={`Sous-titre de votre project`}
                            bolea={true} val={InputValue} fileSelect={null} removefile={null} />
                        <InputNtexterea
                            titleInput="4. Description de votre projet"
                            placeholder={`Description de votre project`}
                            bolea={true} val={InputValue} fileSelect={null} removefile={null}  />
                        <InputNtexterea
                            titleInput="4. Ajoutez une image a votre projet"
                            placeholder={``}
                            bolea={false} val={InputValue} fileSelect={CatchFile}  files={profil.files} removefile={null}  />

                        <div className={styles["form-container__step"]}>5. Ou ça ?</div>
                        <div className={styles["countries"] }>

                    

                            {tabTitle.map(({title,img},i) =>(
                                <Country titleCountry={title} imgSrc={img} ref={CatchCountry} key={i} target={ContinentSelected} />
                            ))

                            }

                        </div>
                        {/*Todo :: Text should be dynamic either project or cause*/}
                        <div className={styles["form-container__step"]}>
                            6. Le thème principal de votre projet
                        </div>
                        <div className={styles["thematics"]}>
                            {thematics.map((_, i) => (
                                <div className={styles["thematic"]} key={i} onClick={CatchTheme}>
                                    <div className={styles["thematic__image"]}/>
                                    <div className={styles["thematic__name"]}>{Theme[i]}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* SUBMIT BUTTON*/}
                    <div className={styles["button-container"]}>
                        <div className={`${styles["button"]} ${styles[card1Style === "card1" || card1Style === "card2" || fullprofil ? "bkg" : "" ]}`} onClick={onContinueClick}>Continuer</div>
                    </div>
                </div>
            </form>
            <Footer/>
        </Fragment>
    );
};

export default CreateForm;