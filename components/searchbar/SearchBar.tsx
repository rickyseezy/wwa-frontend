import React from 'react'
import styles from './SearchBar.module.scss'
import { ChangeEvent, ChangeEventHandler } from "react";
import { useRouter } from "next/router";


function Searchbar() {

   let router = useRouter()

    function CreateCause(){
      router.push('/projects/form/create')
    }

    function onType(event: ChangeEvent<HTMLInputElement>) {
        console.log(event.target.value);
      }
  return (
  <div className={styles["inputsearch"]}>
    <div className={styles["inputsearch__input"]}>
    <input type="text" placeholder='Recherche une cause a soutenir' className={styles["inputsearch__inputmenu"]} />
      <button  className={styles["inputsearch__btn_input"]}>
        <img src="/images/search_bt.png" alt="" />
      </button>
    </div>
  <div>
  <button className={styles["inputsearch__btnmenu"]} onClick={CreateCause}>Je crée ma cause</button>
  </div>
</div> 
  )
}

export default Searchbar