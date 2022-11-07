import styles from "./TopCauses.module.scss";
import ScrollList from "@components/scroll-list/ScrollList";
import ControlPane from "@components/control-pane/ControlPane";
import { useState } from "react";


const TopCauses = () => {
  let directionMoveCardOne = null
  let directionMoveCardTwo = null
  let directionMoveCardThree = null

  let [arrow,setarrow] = useState({})
  let [arrowTwo,setarrowTwo] = useState({})
  let [arrowThree,setarrowThree] = useState({})

  function parentToChild(data: any,id:number){
     directionMoveCardOne = data
     console.log(directionMoveCardOne,id)
     let updateVal = {}
 
      updateVal = {directiono : directionMoveCardOne,id}
    
      setarrow({...arrow,...updateVal})
   }

   
   function parentToChildTwo(data: any,id:number){
    directionMoveCardTwo = data
    console.log(directionMoveCardTwo,id)
    let updateVal = {}

     updateVal = {directiono : directionMoveCardTwo,id}
    setarrowTwo({...arrowTwo,...updateVal})
  }


  function parentToChildThree(data: any,id:number){
    directionMoveCardThree = data
    console.log(directionMoveCardThree,id)
    let updateVal = {}

     updateVal = {directiono : directionMoveCardThree,id}
    setarrowThree({...arrowThree,...updateVal})
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
            
            func={parentToChild} 
          />
        </div>
        <div className={styles["scroll-list__list"]}>
          <ScrollList direction={arrow} id={2} />
        </div>
      </div>
      <div className={styles["scroll-list"]}>
        <div className={styles["scroll-list__control-pane"]}>
          <ControlPane
            titleColor="#0A6AAF"
            subtitleColor="black"
            title=" TOP CAUSES"
            subTitle="France"
            buttonColor="white" 
            id={3}
            
            func={parentToChildTwo} 
         />
        </div>
        <div className={styles["scroll-list__list"]}>
          <ScrollList direction={arrowTwo} id={3} />
        </div>
      </div>
      <div className={styles["scroll-list"]}>
        <div className={styles["scroll-list__control-pane"]}>
          <ControlPane
            titleColor="#0A6AAF"
            subtitleColor="black"
            title=" TOP CAUSES"
            subTitle="Italie"
            buttonColor="white"
             id={4}
            func={parentToChildThree}            
          />
        </div>
        <div className={styles["scroll-list__list"]}>
          <ScrollList direction={arrowThree}  id={4}/>
        </div>
      </div>
    </div>
  );
};

export default TopCauses;
