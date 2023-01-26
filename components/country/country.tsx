import React, { forwardRef, MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from "./country.module.scss";
import stylesItm from "../continent-menu/item/Item.module.scss";
 
interface CountryPanelProps {
    imgSrc : string;
    titleCountry : string
    target:MouseEventHandler<HTMLDivElement>


}



let tab =  []
const country = ({imgSrc, titleCountry,target}: CountryPanelProps,ref ) => {

          function catchCount(e){
            target
          }
    return (
        <div className={`${styles["country"]} `} onClick={catchCount}  ref={ref}  >
            <img className={styles["country__icon"]} src={imgSrc}/>
            <div className={styles["country__name"]}  >{titleCountry}</div>

        </div>
    )
}

let fowardingRef = forwardRef(country)

export default fowardingRef