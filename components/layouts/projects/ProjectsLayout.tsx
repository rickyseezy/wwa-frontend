import styles from "./ProjectsLayout.module.scss";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import ContinentMenu from "@components/continent-menu/ContinentMenu";
import React, { useEffect, useRef, useState } from "react";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Footer from "@components/footer/Footer";
import { useRouter } from "next/router";
import MenuCountry from "@components/menuCountry/MenuCountry";
import CountryCard from "@components/countrycard/CountryCard";

interface IProjectsLayout {
  children: React.ReactNode;
}

const ProjectsLayout = ({ children }: IProjectsLayout) => {

  let [title, settitle] = useState('EUROPE')
  let [showCard,setshowcard] = useState(false)
  let [continent,setcontinent] = useState('EUROPE')

  let [sizeCardCont, setsize] = useState('')
 let [bolean,setbolean] = useState(false)
 let banner = useRef<HTMLDivElement>(null)
 let wrapper = useRef(null)

  const router = useRouter()
   console.log(router.query.continent)

  //  récupére le text de l'item du menu continent 
  function catchContinent(cont: any){
setcontinent(cont)
  }

  function SwitchTitle(titles) {
    setshowcard(false)
    console.log(titles)
    switch (titles) {
      case 'AFRICA':
        settitle('AFRIQUE')
        // if(banner) banner.current.classList.add('africa')
        break;
      case 'ASIE':
        settitle('ASIE')
        break;
      case 'AMÉRIQUE DU NORD':
        settitle('AMERIQUE DU NORD')
        break;
      case 'AMÉRIQUE DU SUD':
        settitle('AMERIQUE DU SUD')
        break;
      case 'EUROPE':
        settitle('EUROPE')
        break;
      case 'OCÈANIE':
        settitle('OCEANIE')
        break;

    }


  }

  function menuClicked(e){

    if(!bolean){
      settitle(e.target.innerText)
      setshowcard(true)
    }

  }

  
  function ChangeBannerStyle(e){
    console.log(e,'yiu')
if(!showCard){
  switch (e) {
    
    case 'AMERIQUE DU NORD':
      e = "USA"

      break;
    case 'AMERIQUE DU SUD':
      e = "SOUTH"
      break;
  }
  return e
}else{
  let DiRoute = continent
  switch (DiRoute) {
    case 'AFRICA':
      DiRoute = 'AFRIQUE'

      break;
    case 'AMÉRIQUE DU NORD':
      DiRoute = "USA"

      break;
    case 'AMÉRIQUE DU SUD':
      DiRoute = "SOUTH"
      break;
      case 'OCÈANIE':
        DiRoute = "OCEANIE"
        break;
  }

  return DiRoute == undefined ? 'EUROPE' : DiRoute
}
    
  }


  useEffect(() => {
    
      SwitchTitle(continent)
  },[continent]);

  return (
    <>
      <div className={styles["wrapper"]} > 
        <MainNavigation />
        <MenuBurger />
        <div className={`${styles["banner"]} ${styles[ChangeBannerStyle(title)]} `} ref={banner}>
          <h1 className={styles["banner__title"]}>{title}</h1>
          <div className={styles["stats-container"]}>
            <Stats />
          </div>
        </div>
        <div className={styles["wrapper__content"]} ref={wrapper}>
          <div className={styles["causes-wrapper"]}>
           
            <MenuCountry select={menuClicked} continent={continent}/>
            <div className={styles["children-container"]}>
              {
            
          showCard   ?

          <CountryCard   /> 

          : 
          
          children
            
            
            }
            </div>
          </div>
        </div>
    
        <div className={styles["continent-menu-wrapper"]}>
          <ContinentMenu  select={catchContinent}  />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsLayout;
