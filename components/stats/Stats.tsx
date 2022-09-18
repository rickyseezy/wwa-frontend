import styles from "./Stats.module.scss";

const Stats = () => {
  return (
    <div className={styles.stats}>
      <div className={styles.stat}>
        <div className={styles.number}>
          <span className={styles.number__bullet}></span>
          <div className={styles.number__value}>192 348</div>
        </div>
        <div className={styles.stat__title}>Acteurs en ligne en direct</div>
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
      <div className={styles.stat}>
        <div className={styles.number}>
        <span className={styles.number__bullet2}></span>
          <div className={styles.number__value}>231</div>
        </div>
        <div className={styles.stat__title}>E-stand en direct</div>
      </div>
    </div>
  );
};

export default Stats;
