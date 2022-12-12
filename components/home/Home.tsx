import styles from "./Home.module.scss";
import Stats from "@components/stats/Stats";
import PopularProjects from "@components/popular-projects/PopularProjects";
import HomeLayout from "@components/layouts/home/HomeLayout";
import { ChangeEvent, useEffect, useRef,useState } from "react";
import { useRouter } from "next/router";

const Home = () => {
    // let [taille,settaille] = useState(0)
    let cont_btn = useRef(null)

    let router = useRouter()

   function CreateCause( ){

    router.push('/projects/form/create')
   }


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
          <div className={styles.button__text} onClick={CreateCause}>Je crée ma cause</div>
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

    function createmycause({cont_btn}) {
      return (<div ref={cont_btn} className={styles["cont-button"]}>
        <div className={styles.button}>
          <div className={styles.button__text}>Je crée ma cause</div>
        </div>
        </div>);
    }
  