import { Fragment } from "react";
import MainNavigation from "@components/navigation/MainNavigation";
import styles from "./Create.module.scss";
import Steps from "@components/steps/Steps";
import Title from "@components/title/Ttile";
import HelpCard from "@components/help-card/HelpCard";
import Footer from "@components/footer/Footer";

const CreateForm = () => {
  return (
    <Fragment>
      <MainNavigation />
      <form className={styles["form"]}>
        <div className={styles["form__steps"]}>
          <Steps />
        </div>
        <div className={styles["content"]}>
          <Title text="VOTRE AIDE" />
          <div className={styles["content__question"]}>
            Quel est le type de votre aide ?
          </div>
          <div className={styles["help-types"]}>
            <HelpCard />
            <div className={styles["help-types__separator"]} />
            <HelpCard />
          </div>
          <div className={styles["button-container"]}>
            <div className={styles["button"]}>Continuer</div>
          </div>
        </div>
      </form>
      <Footer />
    </Fragment>
  );
};

export default CreateForm;
