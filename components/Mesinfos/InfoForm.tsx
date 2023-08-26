import TittleAccount from '@components/titleAccount/TittleAccount'
import React, { useEffect,useState } from 'react'
import styles from './infoForm.module.scss'
import AccountRepository from 'domain/repositories/account';
import { DB } from '../../firebase/configApp';
import { getAuth,onAuthStateChanged } from "firebase/auth";


function InfoForm() {
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
    <div className={styles["container-info"]}>

      <TittleAccount titleH1={'Mes informations'} />

        <div className={styles["cardInfo"]}>
            <img src="/images/Hand raise web 1.png" alt="" />
            <input type="text"  placeholder={profil?.pseudo}/>
            <input type="text" placeholder={profil?.email}/>
            <input type="text" placeholder='1983'/>
            <input type="text"  placeholder={profil?.ville}/>
            <button>Modifier mes informations</button>
        </div>
    </div>
  )
}

export default InfoForm