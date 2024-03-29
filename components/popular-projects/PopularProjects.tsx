import styles from "./PopularProjects.module.scss";
import ControlPane from "@components/control-pane/ControlPane";
import ScrollList from "@components/scroll-list/ScrollList";
import {useEffect, useState} from "react";

const PopularProjects = () => {
    let directionMoveCard = null

    let [arrow,
        setarrow] = useState < Object > ({})

    function parentToChild(data : any, id : Number) {
        directionMoveCard = data
        let updateVal = {}

        updateVal = {
            direction: directionMoveCard,
            id
        }
        setarrow({
            ...arrow,
            ...updateVal
        })
    }

    return (
         <>
          <div className={styles["popular-projects"]}>
        <ControlPane
            title="MOST POPULAR PROJECTS"
            subTitle="Ils ont besoin de vous ! "
            titleColor="#FFFF"
            subtitleColor="#FFFF"
            buttonColor="blue"
            id={1}
            func={parentToChild}
            />
        <div className={styles["pusher"]}/>
       </div>
        < ScrollList data_card={[]} dir = {arrow} id = { 1 } />
     </>
     );
};

export default PopularProjects;
