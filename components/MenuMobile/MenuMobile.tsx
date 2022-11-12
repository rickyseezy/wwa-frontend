import React from 'react'
import styles  from './Menumobile.module.scss'

import { useRef,useEffect, } from 'react'
import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import { useRouter } from 'next/router'

function MenuMobile(props) {
 
    let menuContainer = useRef(null)
    let menuClose = useRef(null)
    
    const router = useRouter()


    function FowardProject(){
        router.push('/')
    }
    function FowardCauses(){
      router.push('/projects')
  }

  function FowardMNcompte(){
    router.push('/Mon-compte')
}



   useEffect(() => {
     if(props.displayMenu > 0){
        menuContainer.current.style = 'display : block'
     }
     
   }, [props.displayMenu])


   
   function Close(){
    menuContainer.current.style = 'display:none'
 
   }

  return (
    <div ref={menuContainer} className={styles['menuMobile']}>
    <div>
    <img onClick={Close} className={styles['menuMobile__cross']} src="/images/cross.png" alt=""></img>

    </div>
     <input placeholder='Rechercher une cause à soutenir ' className={styles['menuMobile__input']}  type="text" />
      <ul className={styles['menuMobile__ul']}>
        <li onClick={FowardCauses}>Causes </li>
        <li onClick={FowardProject}>Projets </li>
        <li onClick={FowardMNcompte}>Mon Compte</li>
        <li>Actualités </li>
        <li>Connexion </li>
      </ul>
      <button className={styles['menuMobile__btn']}>Je crée ma cause</button>
    </div>
  )
}

export default MenuMobile