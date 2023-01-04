import React, { useRef,useEffect,useState } from 'react'
import styles from './reinit.module.scss'
function Reinit(props) {
  
    // console.log(props,'reinit')

    const reinit = useRef(null)
  

    useEffect(()=>{
//    console.log(reinit.current,props.show)

    
    } )
  
    


  return (
    <div className={styles['back-Reinit']}>
    <div ref={reinit} className={styles["reinit"]}>
        <h1>Réinitialiser mon mdp </h1>

        <form action="" className={styles["reinit__form"]}>
            <label htmlFor="">
          <input type="text" placeholder='E-mail' />
            </label>
            <button>Envoyer</button>
        </form>
    </div>
    </div>
  )
}

export default Reinit