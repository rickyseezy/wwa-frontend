import styles from "./Item.module.scss";
import {string} from "prop-types";

interface IContinentMenuItemProps {
    continent : string;
    blur:any
}

interface IContinentConfig {
    title : string;
    imgSrc : string;
    custom : string;
}

// ToDo :: Keep adding continents
const continentConfig = new Map < string,IContinentConfig > ([
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

const ContinentMenuItem = ({continent,blur} : IContinentMenuItemProps) => {
    const config = continentConfig.get(continent);
    const classes : string[] = [styles["item"]];
    classes.push(config.custom);
    console.log(classes)

    return (
        <div className={classes.join(" ")} onClick={blur} >
            <div className={styles["item__img"]}>
                <img src={config.imgSrc}/>
            </div>
            <div className={styles["item__title"]}>{config.title}</div>
        </div>
    );
};

export default ContinentMenuItem;
