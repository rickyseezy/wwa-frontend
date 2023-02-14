import React, { useState } from 'react'
import styles  from './Menumobile.module.scss'
import {motion} from 'framer-motion'

import { useRef,useEffect, } from 'react'
import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import { useRouter } from 'next/router'

type variable = {
  open : {},
  closed: {}
}
const variants : variable = {
  open: {  width: '100%',  padding: '2em',visibility:'visible !important' },
  closed: { width: '0%', padding: '0' ,  transition: { delay: .4 }}
};
const variantsInp : variable = {
  open: { opacity:1},
  closed: { opacity:0 }
};
const variantsCross : variable = {
  open: { opacity:1},
  closed: { opacity:0}
};
const variantsli : variable = {
  open: { x: '0%'},
  closed: { x: '-160px'}
};

const variantsbtn : variable = {
  open: { opacity:1},
  closed: { opacity:0 }
};
function MenuMobile({displayMenu,func}) {
 
    let [isOpen,setOpen] = useState(false)
    
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
function CreateCause(){
  router.push('/projects/form/create')
}


   useEffect(() => {

       if(displayMenu.push){
        setOpen(true)
     }
console.log(isOpen,displayMenu.push)
   })


   
   function Close(){
      func(displayMenu)
    setOpen(false)
   }

  return (
    <motion.div animate={isOpen ? "open" : "closed"}   variants={variants} className={styles['menuMobile']}>
    <div>
    <motion.img animate={isOpen ? "open" : "closed"}  variants={variantsCross} onClick={Close} className={styles['menuMobile__cross']} src="/images/cross.png" alt=""></motion.img>

    </div>
     <motion.input animate={isOpen ? "open" : "closed"}  variants={variantsInp} placeholder='Rechercher une cause à soutenir ' className={styles['menuMobile__input']}  type="text" />
      <ul className={styles['menuMobile__ul']}>
      <motion.li animate={isOpen ? "open" : "closed"}  variants={variantsli} transition={{ ease: "backInOut", duration: .4 }} onClick={FowardProject}>Projets </motion.li>

        <motion.li animate={isOpen ? "open" : "closed"}  variants={variantsli} transition={{ ease: "backInOut", duration: .3 }} onClick={FowardCauses}>Causes </motion.li>
        <motion.li animate={isOpen ? "open" : "closed"}  variants={variantsli} transition={{ ease: "backInOut", duration: .5 }} onClick={FowardMNcompte}>Mon Compte</motion.li>
        <motion.li animate={isOpen ? "open" : "closed"}  variants={variantsli} transition={{ ease: "backInOut", duration: .6 }}  >Connexion </motion.li>
      </ul>
      <motion.button animate={isOpen ? "open" : "closed"}  variants={variantsbtn} className={styles['menuMobile__btn']} onClick={CreateCause}>Je crée ma cause</motion.button>
    </motion.div>
  )
}

export default MenuMobile