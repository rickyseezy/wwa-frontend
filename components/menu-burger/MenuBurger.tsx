import React, { useEffect } from 'react'
import styles from './menu-burger.module.scss'
import { useState } from 'react'
import MenuMobile from "@components/MenuMobile/MenuMobile";
import AccountMobile from '@components/AccountMobilepage/AccountMobile';
import Connect from '@components/connectionrequest/Connect';
import Reinit from '@components/reinitialiser/Reinit';
import LinkReinit from '@components/linkreinit/LinkReinit';

function MenuBurger(props) {
  let [menuDisplay,setmenuDisplay] = useState<number>(0)
  let [showmenu,setmenu] = useState<boolean>(false)
  let [showLogin,setShowlogin] = useState<number>(0)

  function ChangeDisplay(){
    setmenuDisplay(()=> menuDisplay += 1)

  }

  function HandleLogin(){

      setShowlogin(el => el +1)
  //  console.log(showLogin)
  }



  
  return (
    <div className={styles['menuBurger-content']}>
        <div className={styles["menuBurger-content___burger"]}>
            <img onClick={ChangeDisplay} src='/icons/menu-burger.png' alt="" />
        </div>
        <div className={styles["menuBurger-content__logo"]}>
           <img src="/images/Dark.png" alt="" />
        </div>
        <div className={styles["menuBurger-content__searchNcontact"]}>
             <img src="/images/search.png" alt="search icone" />
            <img onClick={HandleLogin} src="/icons/Vector.png" alt="login icone" />
        </div>
        <MenuMobile   displayMenu={menuDisplay} />
        {showLogin >= 1 &&  <Connect show={showLogin} />}
   
    </div>
  )
}

export default MenuBurger