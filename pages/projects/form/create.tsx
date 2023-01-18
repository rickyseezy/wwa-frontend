import { Fragment, useEffect, useRef, useState} from "react";
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
let stylesbol = ""

interface IProjet {
    focus: string,
    web: string,
    title: string
    subtitle: string
    description: string
    Theme:string
    files: File[]
   }

   interface File {
    filename: string // dbeudbe.jpg
    url: string // http://aws.cloud/dbeudbe.jpg
    type: string // image/video
   }
   let createAccount = {
    focus: '',
    web: '',
    title: '',
    subtitle: '',
    description: '',
    conntinent: '',
    Theme:'',
    files: []
   }

   let tabprofil = []

const CreateForm = () => {
      

    let [profil,setprofil] = useState<IProjet>({...createAccount})
    const [bol,
        setbol] = useState(true)
    const show = useRef(null)
    const hide = useRef(null)
    let router = useRouter()

    let countryEuro= useRef()
    let countryAfri= useRef()
    let countryUsNorth= useRef()
    let countryUsSouth= useRef()
    let countryAsia= useRef()
    let countryOcea= useRef()
    let individuel = useRef<HTMLDivElement | null>(null)
    let assosiation = useRef<HTMLDivElement | null >(null)
    type test = typeof assosiation

    let [card1Style,setcard1Style] = useState("")


    // l'option du site indiv || assos
        function OptionWebsite(e){
            console.log(e.target,individuel.current)
            
     
            // if(e.target === individuel.current){
            //     createAccount.focus = 'individuel'
            //     setprofil({...createAccount})


            //     e.target.style = 'background : #1D53B7'
                
            //     if(assosiation.current !== undefined){
            //         let asos =  assosiation.current 

            //     asos.style = 'background :white'
            //      }
            // }else{
            //     createAccount.focus = 'associate'
            //     setprofil({...createAccount})

            //     e.target.style = 'background : #1D53B7'
            //     if(individuel.current){
            //     individuel.current.style  = 'background :white'
            //      }
            // }
        }

        // récupére le continent selectionné
     function ContinentSelected(continent){
      console.log(continent)
      createAccount.conntinent = continent
      setprofil({...createAccount})
      
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

        } else if (e.currentTarget.classList.contains("card2")) {
            stylesbol = "card2"

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

        if(profil.Theme != "" && profil.description != "" && profil.files.length != 0 && profil.focus != "" && profil.subtitle != "" && profil.title != "" && profil.web != ""){
             router.push('/')
             for(let key in createAccount){
                console.log(key)
                key = ''
             }
             setprofil({...createAccount})
        }
    }

    useEffect(()=>{
        console.log(profil)
        console.log(document.querySelector(''))
     })

// récupére l'information des chans selon le placeholder 
    function InputValue(e){
      
       let expr = e.target.placeholder

       switch (expr) {
        case 'Description de votre project':
          createAccount.description = e.target.value
          setprofil({...createAccount})
          break;
        case 'Le titre de votre cause':
            createAccount.title = e.target.value
            setprofil({...createAccount})

            break;
        case 'Sous-titre de votre project':
            createAccount.subtitle = e.target.value
            setprofil({...createAccount})

          break;
        default:
          console.log(`Sorry, we are out of ${expr}.`);
      }
      
    
    }

// récupére le theme
    function CatchTheme(e){
       console.log(e.target.children[1].innerText)
       createAccount.Theme = e.target.children[1].innerText
       setprofil({...createAccount})
    }

    function CatchFile(file){
     console.log(file,'file create')
     createAccount.files = [...file]
     setprofil({...createAccount})
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
                                createAccount.web = e.target.value
                               setprofil({...createAccount})
                                
                                }}/>

                        <InputNtexterea
                            titleInput="2. Titre du project"
                            placeholder={`Le titre de votre cause`}
                            bolea={true} val={InputValue}  fileSelect={null}  />
                             <InputNtexterea
                            titleInput="3. Sous-titre du projet"
                            placeholder={`Sous-titre de votre project`}
                            bolea={true} val={InputValue} fileSelect={null}  />
                        <InputNtexterea
                            titleInput="4. Description de votre projet"
                            placeholder={`Description de votre project`}
                            bolea={true} val={InputValue} fileSelect={null}  />
                        <InputNtexterea
                            titleInput="4. Ajoutez une image a votre projet"
                            placeholder={``}
                            bolea={false} val={InputValue} fileSelect={CatchFile}  />

                        <div className={styles["form-container__step"]}>5. Ou ça ?</div>
                        <div className={styles["countries"]}>

                            <Country titleCountry="EUROPE" imgSrc="/icons/europe-icon.svg" div={countryEuro} contSelect={ContinentSelected}   />

                            <Country titleCountry="AFRIQUE" imgSrc='/icons/africa-icon.svg' div={countryAfri} contSelect={ContinentSelected}/>

                            <Country titleCountry="AMÉRIQUE DU NORD" imgSrc='/icons/na-icon.svg' div={countryUsNorth} contSelect={ContinentSelected}/>

                            <Country titleCountry="AMÉRIQUE DU SUD" imgSrc='/icons/sa-icon.svg' div={countryUsSouth} contSelect={ContinentSelected}/>

                            <Country titleCountry="ASIE" imgSrc='/icons/asia-icon.svg' div={countryAsia} contSelect={ContinentSelected}/>

                            <Country titleCountry="OCÉANIE" imgSrc='/icons/oceania-icon.svg' div={countryOcea}  contSelect={ContinentSelected}/>

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
                        <div className={`${styles["button"]} ${styles[card1Style === "card1" || card1Style === "card2" ? "bkg" : "" ]}`} onClick={onContinueClick}>Continuer</div>
                    </div>
                </div>
            </form>
            <Footer/>
        </Fragment>
    );
};

export default CreateForm;