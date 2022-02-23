import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles["header__first-block"]}></div>
        <div className={styles["header__second-block"]}></div>
      </div>
      <div className={styles.bottom}></div>
      <div className={styles.content}>
        <div className={styles.top}>
          <h1 className={styles.top__title}>
            Tell the world
            <span>we act.</span>
          </h1>
          <h3 className={styles.top__subtitle}>
            1 600 000 causes à soutenir. Faites de votre connexion une force, un
            soutien.
          </h3>
          <div className={styles.pusher}></div>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.number}>
                <span className={styles.number__bullet}></span>
                <div className={styles.number__value}>192 348</div>
              </div>
              <div className={styles.stat__title}>
                Acteurs en ligne en direct
              </div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>
                <div className={styles.number__value}>13k</div>
              </div>
              <div className={styles.stat__title}>Projets soutenus</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.number}>
                <div className={styles.number__value}>300</div>
              </div>
              <div className={styles.stat__title}>Causes en cours</div>
            </div>
          </div>
          <div className={styles.pusher}></div>
          <div className={styles.button}>
            <div className={styles.button__text}>Je crée ma cause</div>
          </div>
          <div className={styles["pusher--xl"]}></div>
          <div className={styles["pick-continent"]}>
            Choisissez votre continent
          </div>
          <div className={styles.pusher}></div>
          <div className={styles.map}></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
