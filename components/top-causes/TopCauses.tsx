import styles from "./TopCauses.module.scss";
import ScrollList from "@components/scroll-list/ScrollList";
import ControlPane from "@components/control-pane/ControlPane";
import {useEffect, useRef, useState} from "react";
import { useRouter } from "next/router";
interface dataDirection{
    direction:String,
    id:number
}



const TopCauses = () => {
    
    let directionMoveCardOne = null
    let directionMoveCardTwo = null
    let directionMoveCardThree = null
    let router = useRouter()

    let [subtitle,setsubtitle] = useState('Europe')


    let [arrow,
        setarrow] = useState < Object > ({})

    // carousel 1

    function parentToChild(data : any, id : number) {
        directionMoveCardOne = data
        let updateVal = {}
        //  update de la direction et id  du carousel
        updateVal = {
            direction: directionMoveCardOne,
            id
        }

        setarrow({
            ...arrow,
            ...updateVal
        })
    }


    // function qui capitalise le title 
   function CapitalizeTitle(str){
    let r = []
    if(str === "northus"){
      str = "North Us"
    }

    else if(str === "southamerica"){
        str = "South America"
    }
    str = str.split("").forEach((el, i) => {
      if(i < 1){
        r.push(el.toUpperCase())
  
      }else{
        r.push(el.toLowerCase())
   
      }
    });
    setsubtitle(r.join(''));
   }

   
    useEffect(()=>{
      if(router.query.continent){
      CapitalizeTitle(router.query.continent)
    }
    },[router.query.continent])


    // récupére les deux dernier caroussel


    return (
        <div className={styles["causes"]}>
            <div className={styles["scroll-list"]}>
                <div className={styles["scroll-list__control-pane"]}>
                    <ControlPane
                        titleColor="#0A6AAF"
                        subtitleColor="black"
                        title=" TOP CAUSES"
                        subTitle={subtitle}
                        buttonColor="white"
                        id={2}
                        func={parentToChild}/>
                </div>
                <div className={styles["scroll-list__list"]}>
                    <ScrollList dir={arrow} id={2}/>
                </div>
            </div>
            {/* <div className={styles["scroll-list"]} ref={RefScroll}>
                <div className={styles["scroll-list__control-pane"]}>
                    <ControlPane
                        titleColor="#0A6AAF"
                        subtitleColor="black"
                        title=" TOP CAUSES"
                        subTitle="France"
                        buttonColor="white"
                        id={3}
                        func={parentToChildTwo}/>
                </div>
                <div className={styles["scroll-list__list"]}>
                    <ScrollList dir={arrowTwo} id={3}/>
                </div>
            </div>
            <div className={styles["scroll-list"]} ref={RefScroll} >
                <div className={styles["scroll-list__control-pane"]}>
                    <ControlPane
                        titleColor="#0A6AAF"
                        subtitleColor="black"
                        title=" TOP CAUSES"
                        subTitle="Italie"
                        buttonColor="white"
                        id={4}
                        func={parentToChildThree}/>
                </div>
                <div className={styles["scroll-list__list"]}>
                    <ScrollList dir={arrowThree} id={4}/>
                </div>
            </div> */}
        </div>
    );
};

export default TopCauses;
