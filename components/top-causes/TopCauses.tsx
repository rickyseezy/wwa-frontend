import styles from "./TopCauses.module.scss";
import ScrollList from "@components/scroll-list/ScrollList";
import ControlPane from "@components/control-pane/ControlPane";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import ProjectRepository from 'domain/repositories/project';
import { DB } from '../../firebase/configApp';
import path from "path";
import fsPromises from 'fs/promises';


// interface dataDirection {
//   direction: String;
//   id: number;
// }

function RightNumberContinent(cont: string | string[]){
  let num = 0
    switch(cont){
    case  'europe' :
      return num = 4
    case "africa":
      return  num = 1
    case 'north-america':
      return  num = 2
    case 'south-america' : 
    return num =  7
    case  'asia' :
    return  num = 3

    case   'oceania' : 
    return  num = 5
  }

}



const TopCauses = () => {
  


  let directionMoveCardOne = null;
  let directionMoveCardTwo = null;
  let directionMoveCardThree = null;
  let router = useRouter();
  let projectRepository = new ProjectRepository(DB)

  let [subtitle, setsubtitle] = useState<string>("Europe");
  let [contriesCause,setcontriesCauses] = useState([])

  let [arrow, setarrow] = useState<Object>({});

  // carousel 1

  function parentToChild(data, id) {
    directionMoveCardOne = data;
    let updateVal = {};
    //  update de la direction et id  du carousel
    updateVal = {
      direction: directionMoveCardOne,
      id,
    };

    setarrow({
      ...arrow,
      ...updateVal,
    });
  }

  // function qui capitalise le title
  function CapitalizeTitle(str) {

    switch (str) {
      case "north-america":
        str = "Amérique du nord";
        break;
      case "south-america":
        str = "Amérique du sud";
        break;
      case "asia":
        str = "Asie";
        break;
      case "oceania":
        str = "Océanie";
        break;
      case "europe":
        str = "Europe";
        break;
      case "africa":
        str = "Afrique";
        break;
      default:
    }

    setsubtitle(str);
  }


  useEffect(() => {
    

    if (router.query.continent) {
      CapitalizeTitle(router.query.continent);
    }
    projectRepository.List().then((causes)=>{
      let currentCauses  =  causes.filter(el => Number(el.continent) === RightNumberContinent(router.query.continent) )
      // console.log(currentCauses,'current')
//       let causesnew  =  causes.filter(el => Number(el.continent) === 5 )
// console.log(causesnew,'yeah')
      setcontriesCauses([...currentCauses])
      console.log(currentCauses)
    })
    console.log(RightNumberContinent(router.query.continent),'continent')
  }, [router.query.continent]);
  

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
            func={parentToChild}
          />
        </div>
       
        <div className={styles["scroll-list__list"]}>
          <ScrollList data_card={contriesCause} dir={arrow} id={2} />
        </div>
      </div>

    </div>
  );
};



export default TopCauses;
