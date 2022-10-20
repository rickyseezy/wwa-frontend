import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import React from 'react'
import styles from './connect.module.scss'
import { useState } from 'react'


function Connect() {
   
  let  [showAccount,setShowAccount] = useState(false)
  
  function handleSub(){
    setShowAccount(el => el = !el)
    console.log(showAccount
      )
  }

  return (
 <div className={styles['connect']}>
  <h1>Connectez-vous</h1>
  <form action="" className={styles["connect__form"]}>
    <label htmlFor="">
      <input type="text" placeholder="email" />

    </label>
    <label htmlFor="">
    <input type="text" placeholder="mot de passe" />

    </label>

    <p><a href="">Mot de passe oublier ?</a></p>

    <button >Connexion</button>
  </form>
  <div className={styles['connect__band']}>
        
    <p onClick={handleSub}>Pas encore de compte ? <a href="#"  > s'inscrire</a></p>
  </div>
 <AccountMobile  data={handleSub}/>
 </div>
  )
}

export default Connect