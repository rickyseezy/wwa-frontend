import TittleAccount from '@components/titleAccount/TittleAccount'
import React, { useState } from 'react'
import Items from '../cardAccount/Items'
import styles from './EStand.module.scss'


export let objEstand = [{
    img: '/images/champdemoussa.png',
    title: 'Les champs mais de moussa',
    p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est facere, eos esse, dicta quos alias debitis .',
    id: 1
  },{
    img: '/images/champdemoussa.png',
    title: 'Les champs mais de moussa',
    p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est facere, eos esse, dicta quos alias debitis .',
    id: 2
  }]


function EStand() {

  return (
   <div className={styles["Container-soutients"]}>
      <TittleAccount  titleH1='Mes E-stand'/>

       <div className={styles['Container-soutients__grid']}>

      <Items objMesprojet={objEstand} img={''} title={''} p={''} targetCard={0} id={0} dataProject={[]} setback={() => { } } deleteProject={function (card: string): void {
          throw new Error('Function not implemented.')
        } }/>
     </div>
      
  </div>
  )
}

export default EStand