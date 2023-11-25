import styles from "./ScrollList.module.scss";
import Card from "@components/card/Card";
import { useRef, useEffect, useState, useMemo } from "react";

interface Direction {
  direction?: String;
  id?: Number;
}

interface IControlSwitch {
  dir: Direction;

  id: Number;
  data_card: Array<Object>;
}

type CarousselsIds = {
  [id: string]: number;
};

let compte = 0;
let limited = true;
let tabId = [];
let idobj: CarousselsIds = {};
let array = new Array(10).fill(0);
const ScrollList = ({ dir, id, data_card }: IControlSwitch) => {

    
  let containerCard = useRef(null);
  let scroll_list = useRef(null);
  let in_slider = useRef(null);
  let firstcard = null;

  // let [limited,setlimit] = useState(true) function qui garde la derniére
  // position en mémoire
  function memoiseDiection(idDir: Number, obj: CarousselsIds) {
    if (obj[`id${idDir}`] === undefined) {
      obj[`id${idDir}`] = 0;
      compte = obj[`id${idDir}`];
    } else {
      compte = obj[`id${idDir}`];
    }
  }

  useEffect(() => {
    let left = null;
    let taillCard = scroll_list.current.children[0]?.clientWidth;
    let limit = window.innerWidth;

    //   si les fleches qui ont été cliqué correspondent au carrousel
    if (dir?.id === id) {
      if (containerCard != null) {
        left = containerCard.current.getBoundingClientRect().left;
      }
      //  si la dir cliquer est droite avancé le carousel d'une carte
      if (dir?.direction === "right") {
        tabId.push(id);

        if (scroll_list.current) {
          firstcard =
            scroll_list.current.firstChild.getBoundingClientRect().left;
        }

        if (left > firstcard) {
          // si la dir d'une autre gallerie a été cliqué
          if (tabId[tabId.length - 2] != tabId[tabId.length - 1]) {
            if (
              tabId[tabId.length - 2] === 1 ||
              tabId[tabId.length - 1] === 1
            ) {
              compte = 0;
              idobj = {};
            }
            memoiseDiection(id, idobj);
          }

          compte += taillCard;
          idobj[`id${id}`] = compte;

          if (left < firstcard) {
            compte = left;
          }
          in_slider.current.style = `transform:translateX(${compte}px);transition:.5s ease`;
        }
      } else if (dir?.direction === "left") {
        //  remet la valeur de compte a zero si la précdente valeur de id est diffetente
        // de la current console.log('call')

        tabId.push(id);
        let mediaMatch = window.matchMedia("(max-width: 500px)");

        // si la dir d'une autre gallerie a été cliqué
        if (tabId[tabId.length - 2] != tabId[tabId.length - 1]) {
          if (tabId[tabId.length - 2] === 1 || tabId[tabId.length - 1] === 1) {
            compte = 0;
            idobj = {};
          }
          memoiseDiection(id, idobj);
        }

        if (mediaMatch.matches) {
          console.log("hey");
          limit = window.innerWidth + taillCard;
        }
        if (in_slider?.current.getBoundingClientRect().right >= limit) {
          compte -= taillCard;

          idobj[`id${id}`] = compte;
          in_slider.current.style = `transform:translateX(${compte}px);transition:.5s ease`;
          // if(Math.abs(compte) > window.innerWidth){
          // console.log('yooooooooooooooooooo')       limited = false }
        }
      }
    }

    if (
      window.matchMedia("(max-width: 481px)").matches &&
      containerCard.current
    ) {
      // Viewport is less or equal to 700 pixels wide
      if (id === 1) {
        containerCard.current.style = " transform: translateX(-14px);";
      }
    }
  }, [dir, id]);

  return (
    <div className={styles["container-scroll"]} ref={containerCard}>
      <div className={styles["inner--slider"]} ref={in_slider}>
        <ul className={styles["scroll-list"]} ref={scroll_list}>
          {data_card?.length === 0
            ? array.map((el) => {
                return <Card content={null} />;
              })
            : data_card?.map((contentCard) => {
                return <Card content={contentCard} />;
              })}
        </ul>
      </div>
    </div>
  );
};

export default ScrollList;
