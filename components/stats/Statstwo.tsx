import React from 'react'
import styles from "./Stats.module.scss";


const Statstwo = ()=> {
  return (
    <div className={styles.stattwo}>
    <div className={styles.stat}>
        <div >
          <span ></span>
          <div >192 348</div>
        </div>
        <div  className={styles.statP}>Acteurs en ligne en direct</div>
      </div>
      <div className={styles.stat} >
        <div >
          <div >13k</div>
        </div>
        <div >Projets soutenus</div>
      </div>
    </div>
  )
}

export default Statstwo