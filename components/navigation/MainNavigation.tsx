import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import Connect from '@components/connectionrequest/Connect'
import Logo from '@components/logo/Logo'
import Searchbar from '@components/searchbar/SearchBar'
import { connect } from 'http2'
import { useRouter } from 'next/router'
import {createContext, useEffect, useState} from 'react'
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";

import styles from './MainNavigation.module.scss'
import AuthenticatorRepository from 'domain/repositories/authenticator'

function Menu() {

  const router = useRouter()

   let [showConnect,setShow] = useState(false)
   let authenticatorRepository = new AuthenticatorRepository()
   let [userConnected,setConneted] = useState(null)

 

  const pageCause = ()=>{
   router.push('/projects?continent=europe')

   }

   const pageProjet = ()=>{
    router.push('/')
 
    }
        
  const pageCompte = ()=>{
    router.push('/Mon-compte')
 
    }
    const pageConnection = (e)=>{
         
    
       e ?   setShow(true) : setShow(false)
     

   
   
      }

      const UserLeaving = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          setConneted(null)
        }).catch((error) => {
          // An error happened.
        });
    
      }

      

      useEffect(()=>{
        const connected = async () =>{
          onAuthStateChanged(getAuth(), (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
      
              setConneted(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          }  
  
        if(userConnected === null){
          connected()

        }

    
        },[userConnected == null])
 

  return (
    <div className={styles['containerMenu']}>
      {/* logo */}
    <div className={styles['containerMenu__logo']}>
    <Logo src={'/images/wwa-logo-black.png'} />
 
    </div>
      {/* menu */}
    <div className={styles['containerMenu__itemmenu']}>
        <ul>
          <li><a href="#" onClick={pageProjet}>Home</a> <img src="/images" alt="" /></li>
          <li><a href="#" onClick={pageCause}>Cause</a></li>
       {userConnected !== null  ? <li><a href="#" onClick={pageCompte}>Mon Compte</a></li> : '' }
          <li><a href="#" onClick={()=>{
            if(userConnected !== null){
              UserLeaving()
              setConneted(null)
            }else{
              setShow(true)
            }
          }}>{userConnected !== null? 'deconnexion' : 'connexion'}</a></li>
        </ul>
       </div> 
{/* input */}
     <Searchbar />
     { showConnect  && <Connect onClose={() => setShow(false)} children={undefined} title={undefined}/>}
    </div>

    
  )
}

export default Menu