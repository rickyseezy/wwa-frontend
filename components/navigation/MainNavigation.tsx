import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import Connect from '@components/connectionrequest/Connect'
import Logo from '@components/logo/Logo'
import Searchbar from '@components/searchbar/SearchBar'
import { connect } from 'http2'
import { useRouter } from 'next/router'
import {useEffect, useState} from 'react'
import { getAuth, signOut } from "firebase/auth";

import styles from './MainNavigation.module.scss'
import AuthenticatorRepository from 'domain/repositories/authenticator'
function Menu() {

  const router = useRouter()

   let [showConnect,setConnect] = useState(0)
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
    const pageConnection = ()=>{
         
    
          setConnect(numb =>  numb  + 1)
     
      
   
      }

      const UserLeaving = () =>{
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
        setConneted(null)
      }

      const connected = async () =>{
        try{
         const data = await authenticatorRepository.currentLogged()
         let infos = {
           email : data?.email,
           id : data?.uid
         }
         setConneted(infos)
    
        }catch(error){
            console.log(error)
        }
        }  


      useEffect(()=>{
 

 
          connected()

        
        console.log(userConnected)
      },[])
      console.log(userConnected)

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
          <li><a href="#" onClick={pageCompte}>Mon Compte</a></li>
          <li><a href="#" onClick={()=>{
            if(userConnected !== null){
              UserLeaving()
            }else{
              pageConnection()
            }
          }}>{userConnected !== null? 'deconnexion' : 'connexion'}</a></li>
        </ul>
       </div>
{/* input */}
     <Searchbar />
     { showConnect > 0  ? <Connect show={showConnect}/> : null}
    </div>

    
  )
}

export default Menu