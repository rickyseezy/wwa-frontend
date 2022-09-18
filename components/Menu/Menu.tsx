import React from 'react'
import Searchbar from '../searchbar/SearchBar'
import styles from './menu.module.scss'
function Menu() {
  return (
    <div className={styles['containerMenu']}>
      {/* logo */}
    <div className={styles['containerMenu__logo']}>
    <img src="/images/Dark.png" alt="" />

    </div>
{/* menu */}
    <div className={styles['containerMenu__itemmenu']}>
        <ul>
          <li><a href="#">Soutenir</a> <img src="/images/chevron-down.png" alt="" /></li>
          <li><a href="#">E-stand</a></li>
          <li><a href="#">Actualités</a></li>
          <li><a href="#">Mon compte</a></li>
        </ul>
    </div>
{/* input */}
    <Searchbar />
    </div>
  )
}

export default Menu