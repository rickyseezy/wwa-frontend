import { ChangeEvent, Fragment, MouseEventHandler, useRef, useState } from "react";
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


const CreateForm = () => {
  const [bol,setbol] = useState(true)
  const show = useRef(null)
  const hide = useRef(null)


  let [backgound1,setbackgound] = useState( "help-card--selected")
  let [img1,setimg1] = useState(  '/icons/check.svg' )
  let [background2,setbackgoundnot] = useState( "help-card--selectedRight")
  let [img2,setimg2] = useState(  '/icons/check.svg' )

  function SelectCause(e: { currentTarget: { classList: { contains: (arg0: string) => any; }; }; }){
   
    // const target = e.currentTarget as HTMLAnchorElement;
    if(e.currentTarget.classList.contains('HelpCard_help-card--selectedRight__pm8m0')){
      console.log('clicked')
      if(backgound1 === "help-card--selectedRight"){
        setbackgoundnot("help-card--selectedRight")
        setbackgound("help-card--selected" )
        // setimg1('/icons/check.svg')
        // setimg2('')
      }else{
        setbackgoundnot("help-card--selected")
        setbackgound("help-card--selectedRight")
        // setimg1('')
        // setimg2('/icons/check.svg')

      }
    

    }


  }

  const onContinueClick = () =>{
     console.log(bol,'bolean')
    if(!bol){
      show.current.style = 'display :flex'
      hide.current.style = 'display : none'
    }
    
    if(bol){
      show.current.style = 'display :none'
      hide.current.style = 'display : block'
    }
   
    setbol(!bol)

  }

const thematics = [...Array(30)];
return (
<Fragment>
  <MainNavigation />
  <MenuBurger />
  
  <form className={styles["form"]}>
    <div className={styles["form__steps"]}>
      <Steps />
    </div>
    <div className={styles["content"]}>
      <Title text="VOTRE CAUSE" />
      <div className={styles["content__question"]} >
        Quel est le type de votre cause ?
      </div>
      {/* Todo :: Remove display: none to display the card type */}
      <div className={styles["help-types"]} ref={show} >
        <HelpCard title='Un project' backgroundColorCard={backgound1} select={SelectCause} imgValid={img1} valid="select-icon" imgCard="/images/project-type.png"  />
        <div className={styles["help-types__separator"]} />
        <HelpCard title='Un e-stand' backgroundColorCard={background2} imgValid={img2} valid=""  imgCard="/images/Group.png" select={SelectCause} />
      </div>
      {/*  form page */}
      <div className={styles["form-container"]} ref={hide} style={{ display: "none" }}>
        <div className={styles["form-container__step" ]} >1. Vous êtes</div>
        <div className={styles["select-box"]}>
          <div className={styles["choice"]}>
            <div className={styles["choice__checkbox"]}>
              <span style={{ display: "none" }} />
            </div>
            <div className={styles["choice__text"]}>Individuel</div>
          </div>
          <div className={styles["choice"]}>
            <div className={styles["choice__checkbox"]}>
              <span />
            </div>
            <div className={styles["choice__text"]}>Association</div>
          </div>
        </div>
        <input className={styles["form-container__input"]} placeholder="Votre site web" />

        <InputNtexterea titleInput="2. L'objectif du projet" placeholder={`L'objectif de votre cause`} bolea={true} />
        <InputNtexterea titleInput="3. Description de votre projet" placeholder={`Description de votre project`}  bolea={true} />
        <InputNtexterea titleInput="4. Ajoutez une image a votre projet" placeholder={``} bolea={false} />

        <div className={styles["form-container__step"]}>5. Ou ça ?</div>
        <div className={styles["countries"]}>

          <Country titleCountry="EUROPE" imgSrc="/icons/europe-icon.svg" />

          <Country titleCountry="AFRIQUE" imgSrc='/icons/africa-icon.svg' />

          <Country titleCountry="AMÉRIQUE DU NORD" imgSrc='/icons/na-icon.svg' />

          <Country titleCountry="AMÉRIQUE DU SUD" imgSrc='/icons/sa-icon.svg' />

          <Country titleCountry="ASIE" imgSrc='/icons/asia-icon.svg' />

          <Country titleCountry="OCÉANIE" imgSrc='/icons/oceania-icon.svg' />

        </div>
        {/*Todo :: Text should be dynamic either project or cause*/}
        <div className={styles["form-container__step"]}>
          6. Le thème principal de votre projet
        </div>
        <div className={styles["thematics"]}>
          {thematics.map((_, i) => (
          <div className={styles["thematic"]} key={i}>
            <div className={styles["thematic__image"]} />
            <div className={styles["thematic__name"]}>Culture</div>
          </div>
          ))}
        </div>
      </div>

      {/* SUBMIT BUTTON*/}
      <div className={styles["button-container"]}>
        <div className={styles["button"]} onClick={onContinueClick}  >Continuer</div>
      </div>
    </div>
  </form>
  <Footer />
</Fragment>
);
};

export default CreateForm;