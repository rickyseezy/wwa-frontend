import TittleAccount from '@components/titleAccount/TittleAccount'
import React from 'react'
import styles from  '../deconnecter/deconnecter.module.scss'


function Deconnecter() {
  return (
    <div className={styles["Container-deconnecter"]}>
      <TittleAccount titleH1='Me deconnecter'/>
          <div className={styles["Container-deconnecter__card"]}>
            <img src="/images/Hand raise web 1.png" alt="" />
            <input type="text"  placeholder='Moussa223'/>
            <input type="text" placeholder='moussa223@gmail.com'/>
            <input type="text" placeholder='1983'/>
            <input type="text"  placeholder='Orleans'/>
            <div className={styles['btnDec']}>
                <button>Valider</button><button>Annuler</button>
            </div>
        </div>
    </div>
  )
}

export default Deconnecter