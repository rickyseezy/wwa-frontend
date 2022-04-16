import { Fragment } from "react";
import MainNavigation from "@components/navigation/MainNavigation";
import styles from "./Create.module.scss";
import Steps from "@components/steps/Steps";
import Title from "@components/title/Ttile";
import HelpCard from "@components/help-card/HelpCard";
import Footer from "@components/footer/Footer";

const CreateForm = () => {
  const thematics = [...Array(30)];
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
          {/* Todo :: Remove display: none to display the card type */}
          <div className={styles["help-types"]} style={{ display: "none" }}>
            <HelpCard />
            <div className={styles["help-types__separator"]} />
            <HelpCard />
          </div>
          <div className={styles["form-container"]}>
            <div className={styles["form-container__step"]}>1. Vous êtes</div>
            <div className={styles["select-box"]}>
              <div className={styles["choice"]}>
                <div className={styles["choice__checkbox"]}>
                  <span style={{ display: "none" }} />
                </div>
                <div className={styles["choice__text"]}>Individuel</div>
              </div>
              <div className={styles["choice"]}>
                <div className={styles["choice__checkbox"]}>
                  <span />
                </div>
                <div className={styles["choice__text"]}>Association</div>
              </div>
            </div>
            <input
              className={styles["form-container__input"]}
              placeholder="Votre site web"
            />
            <div className={styles["form-container__step"]}>
              2. L'objectif du projet
            </div>
            <textarea
              className={styles["form-container__textarea"]}
              placeholder="L'objectif de votre cause"
            />
            <div className={styles["form-container__step"]}>
              3. Description de votre projet
            </div>
            <textarea
              className={styles["form-container__textarea"]}
              placeholder="Description de votre projet"
            />
            <div className={styles["form-container__step"]}>
              4. Ajoutez une image a votre projet
            </div>
            <div className={styles["files"]}>
              <img
                className={styles["files__icon"]}
                src="/icons/add-file-icon.svg"
              />
              <div className={styles["files__text"]}>
                Importez des photos et des vidéos depuis votre appareil
              </div>
            </div>

            <div className={styles["form-container__step"]}>5. Ou ça ?</div>
            <div className={styles["countries"]}>
              <div className={styles["country"]}>
                <img
                  className={styles["country__icon"]}
                  src="/icons/europe-icon.svg"
                />
                <div className={styles["country__name"]}>EUROPE</div>
              </div>
              <div className={styles["country"]}>
                <img
                  className={styles["country__icon"]}
                  src="/icons/africa-icon.svg"
                />
                <div className={styles["country__name"]}>AFRIQUE</div>
              </div>
              <div className={styles["country"]}>
                <img
                  className={styles["country__icon"]}
                  src="/icons/na-icon.svg"
                />
                <div className={styles["country__name"]}>AMÉRIQUE DU NORD</div>
              </div>
              <div className={styles["country"]}>
                <img
                  className={styles["country__icon"]}
                  src="/icons/sa-icon.svg"
                />
                <div className={styles["country__name"]}>AMÉRIQUE DU SUD</div>
              </div>
              <div className={styles["country"]}>
                <img
                  className={styles["country__icon"]}
                  src="/icons/asia-icon.svg"
                />
                <div className={styles["country__name"]}>ASIE</div>
              </div>
              <div className={styles["country"]}>
                <img
                  className={styles["country__icon"]}
                  src="/icons/oceania-icon.svg"
                />
                <div className={styles["country__name"]}>OCÉANIE</div>
              </div>
            </div>
            {/*Todo :: Text should be dynamic either project or cause*/}
            <div className={styles["form-container__step"]}>
              6. Le thème principal de votre projet
            </div>
            <div className={styles["thematics"]}>
              {thematics.map((_, i) => (
                <div className={styles["thematic"]} key={i}>
                  <div className={styles["thematic__image"]} />
                  <div className={styles["thematic__name"]}>Culture</div>
                </div>
              ))}
            </div>
          </div>

          {/* SUBMIT BUTTON*/}
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
