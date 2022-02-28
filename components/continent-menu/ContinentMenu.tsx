import styles from "./ContinentMenu.module.scss";
import ContinentMenuItem from "@components/continent-menu/item/Item";

enum Continent {
  Europe = "EUROPE",
  Africa = "AFRICA",
  NorthUS = "AMÉRIQUE DU NORD",
  SouthAmerica = "AMÉRIQUE DU SUD",
  Asia = "ASIA",
  Oceania = "OCEANIA",
}

const ContinentMenu = () => {
  return (
    <div className={styles["menu"]}>
      <ContinentMenuItem continent={Continent.Europe} />
      <ContinentMenuItem continent={Continent.Africa} />
      <ContinentMenuItem continent={Continent.Europe} />
      <ContinentMenuItem continent={Continent.Europe} />
      <ContinentMenuItem continent={Continent.Europe} />
      <ContinentMenuItem continent={Continent.Europe} />
    </div>
  );
};

export default ContinentMenu;
