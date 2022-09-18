import EStand from '@components/Estand/EStand'
import Footer from '@components/footer/Footer'
import Mesprojets from '@components/MesprojetsCompo/Mesprojets'
import MainNavigation from '@components/navigation/MainNavigation'
import type { NextPage } from 'next'

import styles from '@components/layouts/Account/AccountLayout.module.scss'
import {  ReactChild, ReactFragment, ReactPortal, useEffect, useRef, useState } from 'react'
import CardSoutien from '@components/cardSoutien/cardSoutien'
import Deconnecter from '@components/deconnecter/Deconnecter'
import InfoForm from '@components/Mesinfos/InfoForm'
import MenuBurger from '@components/menu-burger/MenuBurger'
import MenuVoletCompte from '@components/menuVoletCompte/MenuVoletCompte'
import SwitchCompte from '@components/switchcompte/SwitchCompte'


export  let handlePageEstand  = null

const Home: NextPage = (props) => {

// bolean pour le changement de page 
  let [contSwitch,setcontswitch] = useState(false)

let [page,setPage] = useState<number>(1)

// fonction qui change de pages lorsque  l'on click
  const handlePageMesProj = (e: any) =>{ 
  setPage(()=>{
 return page = 1
 
  })
  }

  const handlePageEstand = (e: any) =>{
  setPage(()=>{
  
  return page =  2     
  })
  console.log('hey',page)

  }

  const handlePageMesInfo = (e: any) =>{
    setPage(()=>{
 
      return page = 4
      })
    

  }

  const handlePageMesSoutiens = (e: any) =>{
  setPage(()=>{
 
  return page = 3
  })

  }


  const handlePageMeDeconnecter = (e: any) =>{
    setPage(()=>{
 
      return page = 5
      })
  }


  
  let taille: Window & typeof globalThis

useEffect(()=>{
  console.log(page,'effect')
  let taille = window.matchMedia("(min-width: 400px)").matches
  console.log(taille,'taille')
  // change la valeur de contswich (bolean)  si ell est inférieur a 400px
    if(taille){
      setcontswitch(false)

    }else{
      setcontswitch(true)
    }


  
},[taille,page])

  return (
  <>
{/* menu haut desktop */}
    <MainNavigation />
    {/* menu haut mobile */}
    <MenuBurger />

    {/* <MenuVoletCompte /> */}
    <div className={styles['gridAccount']}>

      <div className={styles['voletcontainer']}>
        <div className={styles['containervolet']}>
          <div className={styles['imageprojet']}>
            <img src='/images/Hand raise web 1.png' alt="" />
          </div>
          <div className={styles['projetsection']} onClick={handlePageMesProj} about='/'>
            <h2>Mes projets </h2>
          </div>
          <div className={styles['Estandsection']} onClick={handlePageEstand}>
            <h2>Mes e-stand</h2>
          </div>
          <div className={styles['solutionSection']} onClick={handlePageMesSoutiens}>
            <h2>Mes soutiens</h2>
          </div>
          <div className={styles['infoSection']} onClick={handlePageMesInfo}>
            <h2>Mes informations</h2>
          </div>
          <div className={styles['deconnecterSection']} onClick={handlePageMeDeconnecter}>
            <h2>Me déconnecter</h2>
          </div>
        </div>
      </div>
      
      {/* si la taille de l'écran est plus pettit que 400px le voleMobile s'affiche sinon le desktop prend le pas  */}
    {contSwitch ?  <MenuVoletCompte />  : <SwitchCompte  props={page}/> }
     
      
      


                 
    </div>
    <Footer />

  </>

  )
  }

  export default Home