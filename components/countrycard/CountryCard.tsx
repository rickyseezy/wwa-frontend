import Card from "@components/card/Card";
import styles from './countrycard.module.scss'
import React, { useEffect, useRef} from "react";

let tab = new Array(15).fill(0)

const CountryCard = ({data_countries}) => {
    let cardContainer = useRef(null)
     


    return ( 
      <div className={styles['grid-card'] }  ref={cardContainer} >
      { data_countries.length > 0 ?
          data_countries.map(data => <Card content={data} />)
      
      :
      tab.map((el,i)=>{
            return <Card key={i} content={null}/>
          })}
       </div> 

     );
}

export default CountryCard;