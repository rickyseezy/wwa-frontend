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
    let twoLastScroll = useRef(null)
    twoLastScroll.current = []
    let router = useRouter()

    let [arrow,
        setarrow] = useState < Object > ({})
    let [arrowTwo,
        setarrowTwo] = useState < Object > ({})
    let [arrowThree,
        setarrowThree] = useState < Object > ({})
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

    // carousel 2

    function parentToChildTwo(data : any, id : number) {
        directionMoveCardTwo = data
        let updateVal = {}
        //  update de la direction et id  du carousel
        updateVal = {
            direction: directionMoveCardTwo,
            id
        }
        setarrowTwo({
            ...arrowTwo,
            ...updateVal
        })
    }

    // carousel 3
    function parentToChildThree(data : any, id : number) {
        directionMoveCardThree = data
        let updateVal = {}
        //  update de la direction et id  du carousel
        updateVal = {
            direction: directionMoveCardThree,
            id
        }
        setarrowThree({
            ...arrowThree,
            ...updateVal
        })
    }

    useEffect(()=>{
      console.log(router.pathname,twoLastScroll)
      if(router.pathname === '/projects' || router.pathname === '/projects/countries/[index]'){
        twoLastScroll.current.map(el =>{
            console.log(el)
            if(el){
                el.style = 'display:none'
            }
        })
      }
    },[])
    console.log(router)

    function RefScroll(e){
      console.log(e)
      if(!twoLastScroll.current.includes(e)){
        twoLastScroll.current.push(e)
      }
    }

    return (
        <div className={styles["causes"]}>
            <div className={styles["scroll-list"]}>
                <div className={styles["scroll-list__control-pane"]}>
                    <ControlPane
                        titleColor="#0A6AAF"
                        subtitleColor="black"
                        title=" TOP CAUSES"
                        subTitle="Europe"
                        buttonColor="white"
                        id={2}
                        func={parentToChild}/>
                </div>
                <div className={styles["scroll-list__list"]}>
                    <ScrollList dir={arrow} id={2}/>
                </div>
            </div>
            <div className={styles["scroll-list"]} ref={RefScroll}>
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
            </div>
        </div>
    );
};

export default TopCauses;
