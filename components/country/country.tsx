import React from 'react'
import styles from "./country.module.scss";


interface CountryPanelProps{
    imgSrc : string;
    titleCountry : string

}

const  country = ({
imgSrc,
titleCountry
}: CountryPanelProps) =>{
  return (
    <div className={styles["country"]}>
                <img
                  className={styles["country__icon"]}
                  src={imgSrc}
                />
                <div className={styles["country__name"]}>{titleCountry}</div>
                
</div>
  )
}

export default country