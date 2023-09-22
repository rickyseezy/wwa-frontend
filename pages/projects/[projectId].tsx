import styles from "./ProjectPage.module.scss";
import { Fragment, useEffect, useState } from "react";
import MainNavigation from "@components/navigation/MainNavigation";
import Stats from "@components/stats/Stats";
import Footer from "@components/footer/Footer";
import SlideShow from "@components/slide-show/SlideShow";
import Discover from "@components/discover/Discover";
import MenuScroll from "@components/menu-scroll/MenuScroll";
import Actions from "@components/actions/Actions";
import Title from "@components/title/Ttile";
import MenuBurger from "@components/menu-burger/MenuBurger";
import Statstwo from "@components/stats/Statstwo";
import { useRouter } from "next/router";
import  ProjectRepository   from "domain/repositories/project";
import { DB } from "../../firebase/configApp";


  
const ProjectPage = () => {
  const [show, setShowScrollMenu] = useState(false);
  const router = useRouter();
  let projectRepository  = new ProjectRepository(DB)
  let [contentProject,setContentProject] = useState({title:'',name:'',subtitle:'',description:''})
  

 async function GetInfosFromId(id: string){

    try{
      let dataProoject = await projectRepository.Get(id)
 
      setContentProject(dataProoject)

    }catch(e){
       console.log(e)
    }

  }
  


  useEffect(() => {

    let idProject = router.query?.projectId?.toString()
    GetInfosFromId(idProject)

console.log(contentProject,'contegnt effect')
    function handleScroll(e) {

   
      if (window.matchMedia("(max-width: 400px)").matches) {
        /* the view port is at least 400 pixels wide */
      }else if(window.matchMedia("(min-width: 400px)").matches){
        if ( window.scrollY >= 50 ) {
          setShowScrollMenu(true);
          return;
        }
      }
      if ( window.scrollY <= 85 ) {
        setShowScrollMenu(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
  },[router.query,contentProject.hasOwnProperty('title')]);
  return (
    <Fragment>
      <div
        className={styles["menu-scroll"]}
        style={show ? { display: "flex" } : { display: "none" }}
      >
        <MenuScroll title=" Les champs de Maïs de Moussa" />
      </div>
      <MainNavigation />
      <MenuBurger />
      <div className={styles["project"]}>
        <div className={styles["banner"]}>
          <div className={styles["overlay"]}></div>
          <div className={styles["content"]}>
            <h1 className={styles["content__title"]}>
              {contentProject?.title}
            </h1>
            <div className={styles["author-info"]}>
              <div className={styles["author-info__picture"]}>
                <img src="/todelete/profilepicture.png" />
              </div>
              <div className={styles["author-info__name"]}>   {contentProject?.name}</div>
              <div className={styles["author-info__certified"]}>
                <img src="/icons/check.svg" />
              </div>
            </div>
            <div className={styles["stats"]}>
              <Statstwo />
            </div>
            <div className={styles["actions"]}>
              <Actions />
            </div>
          </div>
        </div>
        <div className={styles["project__content"]}>
          <div className={styles["intro"]}>
            <Title text="l'HISTOIRE" />
            <div className={styles["intro__title"]}>
              {contentProject?.subtitle}
            </div>
            <div className={styles["intro__description"]}>
              {   contentProject?.description}
            </div>
          </div>
          <div className={styles["live-indicator"]}>
            <div className={styles["indicator"]}>
              <div className={styles["indicator__text"]}>
              {contentProject?.name.substring(0,5)} est en live
              </div>
            </div>
          </div>
          <SlideShow />
          <div className={styles["discover-container"]}>
            <Discover />
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};
export default ProjectPage;
