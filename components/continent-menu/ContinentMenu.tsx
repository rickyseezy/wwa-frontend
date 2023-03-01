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


const ContinentMenu = ({select}) => {
  
    return (
        <div className={styles["menu"]}>
            <ContinentMenuItem continent={Continent.Europe}  select={select} />
            <ContinentMenuItem continent={Continent.Africa} select={select} />
            <ContinentMenuItem continent={Continent.NorthUS} select={select} />
            <ContinentMenuItem continent={Continent.SouthAmerica} select={select} />
            <ContinentMenuItem continent={Continent.Asia} select={select} />
            <ContinentMenuItem continent={Continent.Oceania} select={select} />
        </div>
    );
};

export default ContinentMenu;
