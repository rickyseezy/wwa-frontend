import React from 'react'
import styles from "./input&texterea.module.scss";

function InputFile({select,classtyle}) {
  return (
    <>
     <input type="file"  onChange={select} className={styles[classtyle]} />
    </>
  )
}

export default InputFile