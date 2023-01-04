import React, { useRef,useEffect,useState } from 'react'
import styles from './AccountMobile.module.scss'




const AccountMobile = (props: any) =>  {
  console.log(props,'eeeddddd')

  const accountMobile = useRef(null)
  let [leave,setleave] = useState(false)

  function LeaveCompte(){
    console.log(props.data)

    accountMobile.current.style = 'display:none'

   
  }
    
  useEffect(()=>{
 

    accountMobile.current.style = 'display:flex'

  

  },[props.data])

  
  return (
    <div className={styles['back-account']} ref={accountMobile}>
    <div className={styles['AccountMobile']} >
      <img onClick={LeaveCompte} className={styles['AccountMobile__cross']} src="/images/cross.png" alt="" />
        <div className={styles['AccountMobile__container']}>
            <h1>Créer un compte</h1>
            <div className={styles['AccountMobile__radio']}>
            <label htmlFor="Homme">
                <input type="radio" />
                <p>Homme</p>
            </label>
            <label htmlFor="Femme">
                <input type="radio" />
                <p>Femme</p>
            </label>
            <label htmlFor="Autre">
                <input type="radio" />
                <p>Autre</p>
            </label>
            </div>

            <div className={styles['AccountMobile__input']}>
              <input type="text" placeholder='Prénom / Pseudo' />
              <input type="text"  placeholder='Adresse email'/>
              <input type="text" placeholder="Année de naissance"/>
              <input type="text" placeholder="Ville ou Pays hors France"/>
            </div>

            <div className={styles['AccountMobile__textCheck']}>
                <div className={styles['Actualités']}>
                <label htmlFor="">
                  <input type="checkbox" />
                  </label>
             
                 <p>Tenez-moi informé(e) par email de l’actualité des causes que je soutiens </p>
                </div>
                <div className={styles['Diffamation']}>
                  <label htmlFor="">
                  <input type="checkbox" />
                  </label>
             
                 <p>Je confirme que ma cause n’est pas injurieuse ou diffamante lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet </p>


                </div>

            </div>
            <div className={styles['AccountMobile__btn-div']}>
            <button className={styles['btn']}>Connexion</button>

            </div>

        </div>
   
    </div>
    </div>
  )
}

export default AccountMobile