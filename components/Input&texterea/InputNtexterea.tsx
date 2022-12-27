import React, { useState ,  useEffect} from 'react'
import styles from "./input&texterea.module.scss";

interface ControlInputNtextera{
  titleInput :string,
  placeholder: string,
  bolea : boolean
}

let tab = []
const InputNtexterea = ({titleInput,placeholder,bolea}:ControlInputNtextera) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const  [file,setfile] = useState([])
    // console.log(selectedFile,file)

    useEffect(()=>{
      if(selectedFile){
        console.log('yep')
        tab.push(selectedFile)
        setfile(tab)
      }

    },[selectedFile])

console.log(tab,"ggjk",file)
     if(bolea){
     

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
        <input type="file" className={styles["files__input"]} 
          onChange={(e) => setSelectedFile(e.target.files[0])}/>
      </div>
         </>
       )
     }

}

export default InputNtexterea