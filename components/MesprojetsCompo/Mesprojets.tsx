import TittleAccount from '@components/titleAccount/TittleAccount'
import React from 'react'
import ProjetItems, { objMesprojet } from '../cardAccount/ProjetItems'
import styles from './mesprojets.module.scss'

interface Data  {
  objMesporjets : [],
 img : string,
 tile : string,
 p : string
 bjectEstand : []
 
}




function Mesprojets(props : Data) {

 console.log(props,'dazdaz')
 
  return (
    <div className={styles['containerprojet']}>

      <TittleAccount titleH1={'Mes projets'} />

        
        <div className={styles['containerCard']}>
            <ProjetItems img={''} title={''} p={''} targetCard={0} id={0} bjectEstand={[]}   />
        </div>
    </div>
  )
}

export default Mesprojets