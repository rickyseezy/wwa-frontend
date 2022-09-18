import TittleAccount from '@components/titleAccount/TittleAccount'
import React from 'react'
import styles from './InfoForm.module.scss'
function InfoForm() {
  return (
    <div className={styles["container-info"]}>

      <TittleAccount titleH1={'Mes informations'} />

        <div className={styles["cardInfo"]}>
            <img src="/images/Hand raise web 1.png" alt="" />
            <input type="text"  placeholder='Moussa223'/>
            <input type="text" placeholder='moussa223@gmail.com'/>
            <input type="text" placeholder='1983'/>
            <input type="text"  placeholder='Orleans'/>
            <button>Modifier mes informations</button>
        </div>
    </div>
  )
}

export default InfoForm