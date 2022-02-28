import styles from "./Item.module.scss";
import { string } from "prop-types";

interface IContinentMenuItemProps {
  continent: string;
}

interface IContinentConfig {
  title: string;
  imgSrc: string;
  custom: string;
}

// ToDo :: Keep adding continents
const continentConfig = new Map<string, IContinentConfig>([
  [
    "EUROPE",
    {
      title: "EUROPE",
      imgSrc: "/images/europe-item.png",
      custom: `${styles["item--europe"]}`,
    },
  ],
  [
    "AFRICA",
    {
      title: "AFRICA",
      imgSrc: "/images/africa-item.png",
      custom: `${styles["item--africa"]}`,
    },
  ],
]);

const ContinentMenuItem = ({ continent }: IContinentMenuItemProps) => {
  const config = continentConfig.get(continent);
  const classes: string[] = [styles["item"]];
  classes.push(config.custom);

  return (
    <div className={classes.join(" ")}>
      <div className={styles["item__img"]}>
        <img src={config.imgSrc} />
      </div>
      <div className={styles["item__title"]}>{config.title}</div>
    </div>
  );
};

export default ContinentMenuItem;
