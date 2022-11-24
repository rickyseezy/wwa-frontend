import styles from "./ContinentMenu.module.scss";
import ContinentMenuItem from "@components/continent-menu/item/Item";

enum Continent {
    Europe = "EUROPE",
    Africa = "AFRICA",
    NorthUS = "NORTH-US",
    SouthAmerica = "SOUTH-AMERICA",
    Asia = "ASIA",
    Oceania = "OCEANIA"
}

const ContinentMenu = () => {
    function Select(e: { target:HTMLDivElement; }){
         console.log(e.target)
    }
    return (
        <div className={styles["menu"]}>
            <ContinentMenuItem continent={Continent.Europe} blur={Select}/>
            <ContinentMenuItem continent={Continent.Africa} blur={Select}/>
            <ContinentMenuItem continent={Continent.NorthUS} blur={Select}/>
            <ContinentMenuItem continent={Continent.SouthAmerica} blur={Select}/>
            <ContinentMenuItem continent={Continent.Asia} blur={Select}/>
            <ContinentMenuItem continent={Continent.Oceania} blur={Select}/>
        </div>
    );
};

export default ContinentMenu;
