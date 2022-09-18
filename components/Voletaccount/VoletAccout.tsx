import React from 'react'
import Volet from '../Volet/Volet'
import styles from './voletaccount.module.scss'
function VoletAccout() {
  return (
    <div className={styles['voletcontainer']}>
      <Volet pageNumber={0} />
    </div>
  )
}

export default VoletAccout