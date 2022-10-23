import styles from "./Home.module.scss";
import Stats from "@components/stats/Stats";
import PopularProjects from "@components/popular-projects/PopularProjects";
import HomeLayout from "@components/layouts/home/HomeLayout";
import { useEffect, useRef,useState } from "react";

const Home = () => {
    // let [taille,settaille] = useState(0)
    let cont_btn = useRef(null)

   useEffect(()=>{
 
   function ScrollButton(styleOff){
    if(cont_btn.current === null){
      return
    }

    //  si écran arrive au top du button position fixed sinon le laisse a l'endroit basic
    if(cont_btn.current.getBoundingClientRect().top < window.scrollY){
     console.log('yoyoyo')
     cont_btn.current.style = `position:fixed !important;
     bottom:0 !important;
     transition:.5s
     `
    }else{
      cont_btn.current.style = styleOff

    }
   }
    
    
    function handleResize() {
      console.log('resized to: ', window.innerWidth, 'x', window.innerHeight)
   
      if(window.innerWidth < 500){
        console.log('hpoppppppp')
        window.addEventListener('scroll',ScrollButton)
      }else{
        // enleve le scroll 
        window.removeEventListener('scroll', ScrollButton);
        // cont_btn.current.style = `position:relative`
            if(window.innerWidth <= 1024){
              cont_btn.current.style = `position:absolute !important;bottom350px`

            }
      }
     }
    handleResize( )
     window.addEventListener('resize', handleResize)
   })


  return (
    <HomeLayout>
      <div className={styles["content"]}>
        <div className={styles["pusher--l"]} />
        <h1 className={styles["content__title"]}>
          Tell the world
          <span>we act.</span>
        </h1>
        <h3 className={styles["content__subtitle"]}>
          1 600 000 causes à soutenir. Faites de votre connexion une force, un
          soutien.
        </h3>
        <div className={styles.pusher} />
        <Stats />
        <div className={styles.pusher} />
        <div ref={cont_btn} className={styles["cont-button"]}>
        <div className={styles.button}>
          <div className={styles.button__text}>Je crée ma cause</div>
        </div>
        </div>
        <div className={styles["pick-continent"]}>
          Choisissez votre continent
        </div>
        <div className={styles.map} />
        <div className={styles["pusher--l"]} />
        <PopularProjects />
      </div>
    </HomeLayout>
  );
};

export default Home;
