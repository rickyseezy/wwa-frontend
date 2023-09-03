import React, { useEffect, useState } from 'react'
import styles from './volet.module.scss'

import { useRouter } from 'next/router'
import { objSoutient  } from '../cardSoutien/cardSoutien'

export let markerofPage
interface switchPage{
    pageNumber : number,

}



function Volet({pageNumber} : switchPage) {

    let [page,setpage] = useState<number>(0)

    const router = useRouter()

    const handlePageMesProj = (e) =>{
          router.push('/')
    }

    const handlePageEstand = (e) =>{
       
   setpage(()=>{
   
       return  page++
   }) 
markerofPage = page
  }
    
  const handlePageMesInfo = (e) =>{
    router.push('/Mesinformations')
}

const handlePageMesSoutiens = (e) =>{
    router.push('/Messoutients')
}


const handlePageMeDeconnecter = (e) =>{
    router.push('/Medeconnecter')
}


useEffect(()=>{
   markerofPage =page   
   console.log(markerofPage)
},[markerofPage])
    
    return (
    <div className={styles['containervolet']}>
       <div className={styles['imageprojet']}>
           <img src='/images/Hand raise web 1.png' alt="" />
       </div>
       <div className={styles['projetsection']} onClick={handlePageMesProj} about='/'>
           <h2>Mes projets (2) </h2>
       </div>
       <div className={styles['Estandsection']} onClick={handlePageEstand}>
           <h2>Mes e-stand</h2>
       </div>
       <div className={styles['solutionSection']} onClick={handlePageMesSoutiens}>
           <h2>Mes soutiens ({objSoutient.length})</h2>
       </div>
       <div className={styles['infoSection']} onClick={handlePageMesInfo}>
           <h2>Mes informations</h2>
       </div>
       <div className={styles['deconnecterSection']} onClick={handlePageMeDeconnecter}>
           <h2>Me déconnecter</h2>
       </div>
    </div>
  )
}

export default Volet

