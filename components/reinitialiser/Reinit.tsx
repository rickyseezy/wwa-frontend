import React from 'react'
import styles from './reinit.module.scss'
function Reinit() {
  return (
    <div className={styles["reinit"]}>
        <h1>Réinitialiser mon mdp </h1>

        <form action="" className={styles["reinit__form"]}>
            <label htmlFor="">
          <input type="text" placeholder='E-mail' />
            </label>
            <button>Envoyer</button>
        </form>


    </div>
  )
}

export default Reinit