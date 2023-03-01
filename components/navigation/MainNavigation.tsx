import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import Connect from '@components/connectionrequest/Connect'
import Logo from '@components/logo/Logo'
import Searchbar from '@components/searchbar/SearchBar'
import { connect } from 'http2'
import { useRouter } from 'next/router'
import {useState} from 'react'

import styles from './MainNavigation.module.scss'
function Menu() {

  const router = useRouter()

   let [showConnect,setConnect] = useState(0)


  const pageCause = ()=>{
   router.push('/projects')

   }

   const pageProjet = ()=>{
    router.push('/')
 
    }

    
  const pageCompte = ()=>{
    router.push('/Mon-compte')
 
    }
    const pageConnection = ()=>{
      console.log('yo')
     setConnect(numb =>  numb  + 1)
         console.log(showConnect)
      }

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
          <li><a href="#" onClick={pageConnection}>Connexion</a></li>
        </ul>
       </div>
{/* input */}
     <Searchbar />
     { showConnect > 0  ? <Connect show={showConnect}/> : null}
    </div>

    
  )
}

export default Menu