import React, { forwardRef, MouseEventHandler, useEffect, useRef, useState } from 'react'
import styles from "./country.module.scss";
import stylesItm from "../continent-menu/item/Item.module.scss";
 
interface continentPanelProps {
    imgSrc : string;
    titleContinent : string
    target:MouseEventHandler<HTMLDivElement>


}



let tab =  []
const country = ({imgSrc, titleContinent,target}: continentPanelProps,ref ) => {

        
    return (
        <div className={`${styles["continent"]} `} onClick={target}  ref={ref}  >
            <img className={styles["continent__icon"]} src={imgSrc}/>
            <div className={styles["continent__name"]}  >{titleContinent}</div>

        </div>
    )
}

let fowardingRef = forwardRef(country)

export default fowardingRef