import React, { useEffect, useRef, useState } from 'react'
import styles from "./country.module.scss";
import stylesItm from "../continent-menu/item/Item.module.scss";
 
interface CountryPanelProps {
    imgSrc : string;
    titleCountry : string
    div : any
    contSelect : any


}


interface IContinentConfig {
    title: string;
    imgSrc: string;
    custom: string;
}


const continentConfig = new Map<string, IContinentConfig>([
    [
        "EUROPE", {
            title: "EUROPE",
            imgSrc: "/images/europe-item.png",
            custom: `${stylesItm["item--europe"]}`
        }
    ],
    [
        "AFRICA", {
            title: "AFRIQUE",
            imgSrc: "/images/africa-item.png",
            custom: `${stylesItm["item--africa"]}`
        }
    ],
    [
        "NORTH-US", {
            title: "AMÉRIQUE DU NORD",
            imgSrc: "/images/north-us-item.png",
            custom: `${stylesItm["item--northus"]}`
        }
    ],
    [
        "SOUTH-AMERICA", {
            title: "AMÉRIQUE DU SUD",
            imgSrc: "/images/south-america-item.png",
            custom: `${stylesItm["item--southamerica"]}`
        }
    ],
    [
        "ASIA", {
            title: "ASIE",
            imgSrc: "/images/asia-item.png",
            custom: `${stylesItm["item--asia"]}`
        }
    ],
    [
        "OCEANIA", {
            title: "OCÉANIE",
            imgSrc: "/images/oceania-item.png",
            custom: `${stylesItm["item--oceania"]}`
        }
    ]
]);
let tab =  []
const country = ({imgSrc, titleCountry,div,contSelect} : CountryPanelProps) => {


    let [divContinent,setcontinent] = useState([])

    
// enléve le style des précédents country 
    function Removecustom(){
        console.log('remove',divContinent)
        continentConfig.forEach(continent =>{
 

            divContinent.map(removeback =>{
                removeback.classList.remove(continent.custom)
              })
           })
      
    }

    function Country(e){
        Removecustom()

     continentConfig.forEach(continent =>{
 

      if(continent.title === e.target.children[1].innerText){
        // la div targetté ainsi que la style custom associé dans l'array
        e.target.classList.add(continent.custom)

        // console.log(continent.title)
        contSelect(continent.title)
        }
     })



     }
     
       useEffect(()=>{
        console.log('useeffect out',tab)
               if(tab.length <= 5){
                tab.push(div.current)
                setcontinent([...tab])
               }

           
       },[])

console.log(divContinent)
    return (
        <div className={`${styles["country"]} `} onClick={Country} ref={div}  >
            <img className={styles["country__icon"]} src={imgSrc}/>
            <div className={styles["country__name"]}>{titleCountry}</div>

        </div>
    )
}

export default country