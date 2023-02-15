import Card from "@components/card/Card";
import styles from './countrycard.module.scss'
import React, { useEffect, useRef} from "react";

let tab = []

for(let i = 0 ; i < 15 ; i++){
    tab.push(i)

}

const CountryCard = () => {
    let cardContainer = useRef(null)
     


    return ( 
      <div className={styles['grid-card'] }  ref={cardContainer} >
      {tab.map((el,i)=>{
            return <Card key={i}/>
          })}
       </div> 

     );
}

export default CountryCard;