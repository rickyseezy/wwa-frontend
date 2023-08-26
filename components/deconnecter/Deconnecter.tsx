import TittleAccount from '@components/titleAccount/TittleAccount'
import styles from  '../deconnecter/deconnecter.module.scss'
import React, { useEffect,useState } from 'react'
import AccountRepository from 'domain/repositories/account';
import { DB } from '../../firebase/configApp';
import { getAuth,onAuthStateChanged } from "firebase/auth";

function Deconnecter() {

  let [userConnected,setConneted] = useState(null)
  let [profil,setprofil] = useState(null)

  let accountRepository = new AccountRepository(DB) 
  useEffect(()=>{
    const connected = async () =>{
      onAuthStateChanged(getAuth(), (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const uid = user.uid;
            
        
          setConneted(user)
          // ...
        }
      });
      }  

    if(userConnected === null){
      connected()

    }

    if(userConnected){
     accountRepository.Get(userConnected.uid).then((data)=>{
        setprofil(data)
     })
      }

  },[userConnected == null])


  return (
    <div className={styles["Container-deconnecter"]}>
      <TittleAccount titleH1='Me deconnecter'/>
          <div className={styles["Container-deconnecter__card"]}>
            <img src="/images/Hand raise web 1.png" alt="" />
            <input type="text"  placeholder={profil?.pseudo}/>
            <input type="text" placeholder={profil?.email}/>
            <input type="text" placeholder='1983'/>
            <input type="text"  placeholder={profil?.ville}/>
            <div className={styles['btnDec']}>
                <button>Valider</button><button>Annuler</button>
            </div>
        </div>
    </div>
  )
}

export default Deconnecter