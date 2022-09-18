import React from 'react'
import styles from './BarreLogoFooter.module.scss'

interface PropsBarreLogo {
  styleBarreInfo : string,
}


const BarreLogoFooter = ({styleBarreInfo} : PropsBarreLogo) => {
  return (
  
    <div className={`${styles[styleBarreInfo]}`}>
          <div className={styles['barre-infofooter__logofooter']}>
              <div></div>
          </div>
          <div className={styles['barre-infofooter__logofooter']}>
              <img src="/images/white.png" alt="" />
          </div>
          <div className={styles['barre-infofooter__logofooterr']}>
              <div></div>
          </div>
     </div>
  )
}

export default BarreLogoFooter