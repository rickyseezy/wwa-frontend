import React from 'react'
import styles from './titleAccount.module.scss'


interface PropsTittleAccount{
  
    titleH1 :string
 

}


const TittleAccount = ({titleH1} : PropsTittleAccount) => {
return (

<div className={styles['Container-title']}>
    <div className={styles["Container-title__h4compte"]}>
        <span></span>
        <h3>mon compte</h3>
    </div>

    <h1>{titleH1}</h1>


</div>

)
}

export default TittleAccount