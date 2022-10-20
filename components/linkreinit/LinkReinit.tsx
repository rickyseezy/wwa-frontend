import React, { useRef } from 'react'
import styles from './linkreinit.module.scss'


function LinkReinit() {
let linkreint = useRef(null)
function handleclose(){
     linkreint.current.style = 'display:none'
}

  return (
    <div ref={linkreint} className={styles['link-reinit']}>

        <h1>Un lien de réinitialisation 
        vient de vous être envoyé</h1>

        <button onClick={handleclose}>Fermer</button>

    </div>
  )
}

export default LinkReinit