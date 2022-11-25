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
  
    return (
        <div className={styles["menu"]}>
            <ContinentMenuItem continent={Continent.Europe} />
            <ContinentMenuItem continent={Continent.Africa} />
            <ContinentMenuItem continent={Continent.NorthUS} />
            <ContinentMenuItem continent={Continent.SouthAmerica} />
            <ContinentMenuItem continent={Continent.Asia} />
            <ContinentMenuItem continent={Continent.Oceania} />
        </div>
    );
};

export default ContinentMenu;
