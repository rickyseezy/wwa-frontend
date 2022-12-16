import styles from "./HelpCard.module.scss";
import { MouseEventHandler, useState } from "react";

interface TypeHelpCard {
  title: string,
  backgroundColorCard : string,
  imgValid : string,
  valid : string,
  imgCard : string,
  select:MouseEventHandler<HTMLDivElement>,



}


const HelpCard = ({title,backgroundColorCard,imgValid,valid,imgCard,select}: TypeHelpCard ) => {
  

  return (
    <div className={`${styles["help-card"]} ${styles[backgroundColorCard]}`} onClick={select}>
      <img
        className={styles["help-card__img"]}
        src={imgCard}
      />
      <div className={styles["help-card__text"]}>{title}</div>
      <div className={styles["help-card__description"]}>
        Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et sed nam
        sem tellus erat.Lorem ipsum dolor amet, consectetur adipiscing elit.
      </div>
      <div className={styles[valid]}>
        <img src={imgValid} />
      </div>
    </div>
  );
};

export default HelpCard;
