import styles from "./ProjectsLayout.module.scss";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import ContinentMenu from "@components/continent-menu/ContinentMenu";
import React, { useEffect, useState } from "react";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Footer from "@components/footer/Footer";
import { useRouter } from "next/router";
import MenuCountry from "@components/menuCountry/MenuCountry";

interface IProjectsLayout {
  children: React.ReactNode;
}

const ProjectsLayout = ({ children }: IProjectsLayout) => {

  let [title, settitle] = useState('EUROPE')
  let [accTittle, setAccTitle] = useState('')

  let [titleCountry, settitleCountry] = useState('')
  let [bolean,setbolean] = useState(false)


  const router = useRouter()


  function SwitchTitle(titles) {
    setbolean(false)

    switch (titles) {
      case 'AFRICA':
        settitle('AFRIQUE')
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
 
      setbolean(true)
    
    settitleCountry(e.target.innerText)
  }



  useEffect(() => {

    SwitchTitle(router.query.index)
    ChooseTitle()
    console.log(bolean)
  },[bolean]);
   

  function ChooseTitle(){
     if(bolean){
      console.log(bolean,'bol1 true')

     }else{
      // setbolean(false)
      console.log(bolean,'bol2 true')
    } 
  }



  return (
    <>
      <div className={styles["wrapper"]}> 
        <MainNavigation />
        <MenuBurger />
        <div className={styles["banner"]}>
          <h1 className={styles["banner__title"]}>{!bolean  ? title : titleCountry}</h1>
          <div className={styles["stats-container"]}>
            <Stats />
          </div>
        </div>
        <div className={styles["wrapper__content"]}>
          <div className={styles["causes-wrapper"]}>
           
            <MenuCountry select={menuClicked}/>
            <div className={styles["children-container"]}>{children}</div>
          </div>
        </div>
        <div className={styles["custom-shape"]}></div>
        <div className={styles["map"]}>
          <div className={styles["map__title"]}>Ça bouge dans le monde</div>
          <div className={styles["map__subtitle"]}>
            Choisissez votre continent
          </div>
          <div className={styles["map__display"]}></div>
        </div>
        <div className={styles["continent-menu-wrapper"]}>
          <ContinentMenu   />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectsLayout;
