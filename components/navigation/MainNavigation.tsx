import Logo from '@components/logo/Logo'
import Searchbar from '@components/searchbar/SearchBar'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './MainNavigation.module.scss'
function Menu() {

  const router = useRouter()


  const pageCause = ()=>{
   router.push('/projects')

   }

   const pageProjet = ()=>{
    router.push('/')
 
    }

    
  const pageCompte = ()=>{
    router.push('/Mon-compte')
 
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
          <li><a href="#" onClick={pageProjet}>Projects</a> <img src="/images" alt="" /></li>
          <li><a href="#" onClick={pageCause}>Causes</a></li>
          <li><a href="#" onClick={pageCompte}>Mon Compte</a></li>

        </ul>
       </div>
{/* input */}
     <Searchbar />
    </div>

    
  )
}

export default Menu