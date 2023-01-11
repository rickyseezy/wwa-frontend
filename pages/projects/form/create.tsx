import {ChangeEvent, Fragment, MouseEventHandler, useEffect, useRef, useState} from "react";
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
    files: File[]
   }

   interface File {
    filename: string // dbeudbe.jpg
    url: string // http://aws.cloud/dbeudbe.jpg
    type: string // image/video
   }

const CreateForm = () => {
    let [profil,setprofil] = useState({
        focus:'',
        setweb:'',
        title: '',
        subtitle: '',
        description: '',
        files:'',

    })
    const [bol,
        setbol] = useState(true)
    const show = useRef(null)
    const hide = useRef(null)

    let countryEuro= useRef()
    let countryAfri= useRef()
    let countryUsNorth= useRef()
    let countryUsSouth= useRef()
    let countryAsia= useRef()
    let countryOcea= useRef()
    let individuel = useRef()
    let assosiation = useRef()

    let [card1Style,setcard1Style] = useState("")

        function OptionWebsite(e){
            console.log(e.target,individuel.current)
            

            // if(e.target === individuel.current){

            //     setprofil({focus:'individuel'})
            //     e.target.style = 'background : #1D53B7'
                
            //     if(assosiation.current){
            //     assosiation.current.style = 'background :white'
            //      }
            // }else{
            //     setprofil({focus:'association'})

            //     e.target.style = 'background : #1D53B7'
            //     if(individuel.current){
            //       individuel.current.style = 'background :white'
            //      }
            // }
        }
     function ClickTime(){
      // setcard1Style("")
      console.log(card1Style)
     }

     
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
    }

    useEffect(()=>{
        console.log(profil)
    })

    const thematics = [...Array(25)];
    const Theme = ['Culture','Démocratie','Economie','Éducation','Égalité F/H','Europe','Familles','Inclusion','International','Jeunesse','Justice','Mobilités',
    'Numérique','Puissance publique','Répuclique','Ruralité','Santé','Séxurité et Défense','Solidarités','Sport','Théme autre','Transition écologique','Travail','Villes et Quartier']
    return (
        <Fragment>
            <MainNavigation/>
            <MenuBurger/>

            <form className={styles["form"]} onClick={ClickTime}>
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
                                console.log(e.target.value)
                                
                                }}/>

                        <InputNtexterea
                            titleInput="2. Titre du project"
                            placeholder={`Le titre de votre cause`}
                            bolea={true}/>
                             <InputNtexterea
                            titleInput="3. Sous-titre du projet"
                            placeholder={`Sous-titre de votre project`}
                            bolea={true}/>
                        <InputNtexterea
                            titleInput="4. Description de votre projet"
                            placeholder={`Description de votre project`}
                            bolea={true}/>
                        <InputNtexterea
                            titleInput="4. Ajoutez une image a votre projet"
                            placeholder={``}
                            bolea={false}/>

                        <div className={styles["form-container__step"]}>5. Ou ça ?</div>
                        <div className={styles["countries"]}>

                            <Country titleCountry="EUROPE" imgSrc="/icons/europe-icon.svg" div={countryEuro}   />

                            <Country titleCountry="AFRIQUE" imgSrc='/icons/africa-icon.svg' div={countryAfri}/>

                            <Country titleCountry="AMÉRIQUE DU NORD" imgSrc='/icons/na-icon.svg' div={countryUsNorth}/>

                            <Country titleCountry="AMÉRIQUE DU SUD" imgSrc='/icons/sa-icon.svg' div={countryUsSouth}/>

                            <Country titleCountry="ASIE" imgSrc='/icons/asia-icon.svg' div={countryAsia}/>

                            <Country titleCountry="OCÉANIE" imgSrc='/icons/oceania-icon.svg' div={countryOcea}/>

                        </div>
                        {/*Todo :: Text should be dynamic either project or cause*/}
                        <div className={styles["form-container__step"]}>
                            6. Le thème principal de votre projet
                        </div>
                        <div className={styles["thematics"]}>
                            {thematics.map((_, i) => (
                                <div className={styles["thematic"]} key={i}>
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