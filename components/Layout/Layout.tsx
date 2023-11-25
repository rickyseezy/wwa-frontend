import { useRouter } from 'next/router'
import React, { Children, ReactNode, useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Menu from '../Menu/Menu'
import VoletAccout from '../Voletaccount/VoletAccout'
import styles from './layout.module.scss'


interface Layoutprops{
   children: ReactNode
   pageTitle : string
}

const Layout : React.FC<Layoutprops> = (props) =>{
    let router = useRouter()
    const [title,settitle] = useState('')

    // h1 tittle on every pages
    useEffect(()=>{
      // console.log(router.route,'layout')
       settitle(()=>{
         let value 
         switch(router.route){
           case '/' :
           value = 'Mes projets'
           break;
           case '/Mesestand' :
           value = 'Mes E-stand'
           break;
           case '/Mesinformations' :
           value = 'Mes informations'
           break;
           case '/Messoutients' :
           value = 'Mes Soutiens'
           break;
           case '/Messoutients' :
           value = 'Mes Soutiens'
           break;
           case '/Medeconnecter' :
           value = 'Me déconnecter'
           break;
           default:
             console.log('value error')
         }

         return value
       })
    },[])
    console.log(title)
  return (
    <>
      <Menu />
      <div className={styles['contentItemaccount']}>
          <div className={styles['contentVolet']}>
          <VoletAccout />  
          </div>
          <div className={styles['contentPages']}>
         <main className={styles['gridlayout']} >
         <div className={styles['h4compte']}>
          <span></span><h4>MON COMPTE</h4>
        </div>
        <h1 className={styles['h1pages']}>{title}</h1>

         {props.children}
         </main>
         
     </div>
     </div>
     <Footer />

    </>
  )
}

export default Layout