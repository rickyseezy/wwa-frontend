import React, { useState } from 'react'
import styles from "./input&texterea.module.scss";

interface ControlInputNtextera{
  titleInput :string,
  placeholder: string,
  bolea : boolean
}


const InputNtexterea = ({titleInput,placeholder,bolea}:ControlInputNtextera) => {
  
    
     if(bolea){
      console.log(bolea)

      return (
        <div className={styles["form-container1__step"]}>
        {titleInput}
        <textarea
        className={styles["form-container1__textarea"]}
        placeholder={placeholder}
      />
      </div>
      )
     }
     
     if(!bolea){
       console.log('hey')
       return(
         <>       
        <div className={styles["form-container1__step"]}>
        4. Ajoutez une image a votre projet
      </div>
      <div className={styles["files"]}>
        <img
          className={styles["files__icon"]}
          src="/icons/socials-yt.png"
        />
        <div className={styles["files__text"]}>
          Importez des photos et des vidéos depuis votre appareil
        </div>
      </div>
         </>
       )
     }

}

export default InputNtexterea