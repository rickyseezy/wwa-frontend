import styles from "./Item.module.scss";
import { string } from "prop-types";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

interface IContinentMenuItemProps {
    continent: string;

}

interface IContinentConfig {
    title: string;
    imgSrc: string;
    custom: string;
}

// ToDo :: Keep adding continents
// const continentConfig = new Map<string, IContinentConfig>([
//     [
//         "EUROPE", {
//             title: "EUROPE",
//             imgSrc: "/images/europe-item.png",
//             custom: `${styles["item--europe"]}`
//         }
//     ],
//     [
//         "AFRICA", {
//             title: "AFRICA",
//             imgSrc: "/images/africa-item.png",
//             custom: `${styles["item--africa"]}`
//         }
//     ],
//     [
//         "NORTH-US", {
//             title: "AMÉRIQUE DU NORD",
//             imgSrc: "/images/north-us-item.png",
//             custom: `${styles["item--northus"]}`
//         }
//     ],
//     [
//         "SOUTH-AMERICA", {
//             title: "AMÉRIQUE DU SUD",
//             imgSrc: "/images/south-america-item.png",
//             custom: `${styles["item--southamerica"]}`
//         }
//     ],
//     [
//         "ASIA", {
//             title: "ASIE",
//             imgSrc: "/images/asia-item.png",
//             custom: `${styles["item--asia"]}`
//         }
//     ],
//     [
//         "OCEANIA", {
//             title: "OCÈANIE",
//             imgSrc: "/images/oceania-item.png",
//             custom: `${styles["item--oceania"]}`
//         }
//     ]
// ]);
const continentConfig = new Map<string, IContinentConfig>([
    [
        "EUROPE", {
            title: "EUROPE",
            imgSrc: "/images/europe-item.png",
            custom: `${styles["item--europe"]}`
        }
    ],
    [
        "AFRICA", {
            title: "AFRICA",
            imgSrc: "/images/africa-item.png",
            custom: `${styles["item--africa"]}`
        }
    ],
    [
        "NORTH-US", {
            title: "AMÉRIQUE DU NORD",
            imgSrc: "/images/north-us-item.png",
            custom: `${styles["item--northus"]}`
        }
    ],
    [
        "SOUTH-AMERICA", {
            title: "AMÉRIQUE DU SUD",
            imgSrc: "/images/south-america-item.png",
            custom: `${styles["item--southamerica"]}`
        }
    ],
    [
        "ASIA", {
            title: "ASIE",
            imgSrc: "/images/asia-item.png",
            custom: `${styles["item--asia"]}`
        }
    ],
    [
        "OCEANIA", {
            title: "OCÈANIE",
            imgSrc: "/images/oceania-item.png",
            custom: `${styles["item--oceania"]}`
        }
    ]
]);

let tabItems = [] 

const ContinentMenuItem = ({ continent }: IContinentMenuItemProps) => {   
    
    let [selectCountry,setSelectCountry] = useState()
    const router = useRouter()
    const config = continentConfig.get(continent);
    const classes: string[] = [styles["item"]];
    classes.push(config.custom);
    let divItems = useRef(null)

    useEffect(() => {
        tabItems.push(divItems.current)
           

        // reset les classes background white

        tabItems.map((el, i) => {
            if (i != 0) {
                el.style = `  background-color: white !important;
        border: none !important;
        color: black !important;`
            }
         })
 
        return () => {
            tabItems.length = 0
        }
    }, [])

    function Select(e) {
        let tabItemsClasses : Object[]  = Array.from(continentConfig.values())
        const target = e.target as HTMLDivElement;



        // reset les classes bacground white
        tabItemsClasses.forEach((_el, i) => {
             

            tabItems[i].style = `  background-color: white !important;
               border: none !important;
                color: black !important;
               `
        })




        // met la classe target du background correspondant 

         e.target.style = 'border: 1px solid transparent'
        target.classList.add(classes[1])
        target.classList.remove('back')
        router.push('/projects/countries/'+ config.title)
       

    }


    return (
        <div className={classes.join(" ")} onClick={Select} ref={divItems}>
            <div className={styles["item__img"]}>
                <img src={config.imgSrc} />
            </div>
            <div className={styles["item__title"]}>{config.title}</div>
        </div>
    );
};

export default ContinentMenuItem;
