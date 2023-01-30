import styles from "./ProjectsLayout.module.scss";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import ContinentMenu from "@components/continent-menu/ContinentMenu";
import React, { useEffect, useRef, useState } from "react";
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
 let banner = useRef<HTMLDivElement>(null)
 let wrapper = useRef(null)

  const router = useRouter()


  function SwitchTitle(titles) {

    switch (titles) {
      case 'AFRICA':
        settitle('AFRIQUE')
        // if(banner) banner.current.style = `background:url('images/africa-back.png')`
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

    }

  }

  



  useEffect(() => {
  // let size =   window.matchMedia("(min-width: 1025px)").matches
      SwitchTitle(router.query.index)
console.log(banner.current)
  if(router.pathname === '/projects' || router.pathname === '/projects/countries/[index]'){
    if(window.matchMedia("(min-width: 1025px)").matches){
      wrapper.current.style = 'height : 1080px'

    }
    else if(window.matchMedia("(max-width: 480px)").matches){
      wrapper.current.style = 'height : 800px'

    }

    else if(window.matchMedia("(max-width: 768px)").matches){
      wrapper.current.style = 'height : 872px'

    }

    else if(window.matchMedia("(max-width: 1024px)").matches){
      wrapper.current.style = 'height : 1037px'

    }
  }
 
  },[router.query.index]);
   




  return (
    <>
      <div className={styles["wrapper"]} > 
        <MainNavigation />
        <MenuBurger />
        <div className={styles["banner"]} ref={banner}>
          <h1 className={styles["banner__title"]}>{title}</h1>
          <div className={styles["stats-container"]}>
            <Stats />
          </div>
        </div>
        <div className={styles["wrapper__content"]} ref={wrapper}>
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
