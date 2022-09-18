import React from 'react'
import Picture from '../images/Picture'
import styles from './infofooter.module.scss'

interface PropsInfoFooter{
  facebook : string,
  Instagram : string,
  Twitter: string,
  Youtube : string
}


const Infofooter = ({facebook,Instagram,Twitter,Youtube} : PropsInfoFooter) => {
  return (
<div className={styles['infofooter']}>
             <div className={styles['imagYlogofooter']}>
                 <div className={styles.containerimgFooter}>
                 <Picture classN={styles.imgFooter} image='/images/Dark.png' />

                <Picture classN=''  image='/images/world we act img.png' />
                 </div>
            
                <ul>
                    <li><img src={facebook} alt="" /></li>
                    <li><img src={Instagram} alt="" /></li>
                    <li><img src={Twitter} alt="" /></li>
                    <li><img src={Youtube} alt="" /></li>
                </ul>
             </div>
         </div>
  )
}

export default Infofooter