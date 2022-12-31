import React from 'react'
import styles from "./country.module.scss";


interface CountryPanelProps {
    imgSrc : string;
    titleCountry : string

}

const country = ({imgSrc, titleCountry} : CountryPanelProps) => {
    function Country(e){
        let target = e.target.children[0].src
        if(target.match('asia')){
            console.log('yo')

        }

        switch(target){
            case target.match('asia') :
                console.log('yeah')
        }

    }

    return (
        <div className={styles["country"]} onClick={Country}>
            <img className={styles["country__icon"]} src={imgSrc}/>
            <div className={styles["country__name"]}>{titleCountry}</div>

        </div>
    )
}

export default country