import React from 'react'
import styles from "./input&texterea.module.scss";

function InputFile({select,classtyle}) {
  return (
    <>
     <input type="file"  onClick={(e) => {
        // console.log("ON CLICKED ", e)
         //select(e)
     }} className={styles[classtyle]} onChange={(e) => {
         console.log("BOO")
         select(e)
     }}/>
    </>
  )
}

export default InputFile