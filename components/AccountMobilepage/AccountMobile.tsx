import React, { useRef, useEffect, useState } from "react";
import styles from "./AccountMobile.module.scss";
import AuthenticatorRepository from '../../domain/repositories/authenticator'
import AccountRepository from "domain/repositories/account";
import { DB } from '../../firebase/configApp';



const AccountMobile = (props: any) => {
 
  const accountMobile = useRef(null);
  let [leave, setleave] = useState(false);
  let authenticatorRepository = new AuthenticatorRepository()
  let accountRepository = new AccountRepository(DB)
  let [gender, setgender] = useState('');


  let [account,setaccount] = useState({
    pseudo:'',
    mail:'',
    ville:'',
    birth: '',
    gender:'',
    password:''
  })

  let genderRef = useRef(null)
  genderRef.current = []

  function InputRef(e){
      if(!genderRef.current.includes(e)){
        if(e){
          genderRef.current.push(e)

        }
      }
  }



  function LeaveCompte() {
    console.log(props.data);

    accountMobile.current.style = "display:none";
  }

  function getgender(e){
     setgender(e.target.name)
     genderRef.current.forEach((input)=>{
          if(e.target.name === input.name){
            
            input.checked = true
          }else{
            input.checked = false
          }
     }) 

  }

  function getaccount(){

     console.log(account)
     authenticatorRepository.CreateUser(account.mail,account.password ).then(user =>{

      accountRepository.Create({
        id: user,
        firstName: '',
  
      certified: false,
       activated: true,
      birthdate: new Date(),
      pseudo: account.pseudo,
      email: account.mail,
      password: account.password,
      roles: [],
      updatedAt: new Date(),
      ville: account.ville,
      gender: gender,
      createdAt: new Date(),
      lastName: "",
      phoneNumber: "",
      addressID: ""
      })
     })

     


    //  'accounts'


     
     accountMobile.current.style = "display:none";

  }  



  return (
    <div className={styles["back-account"]} ref={accountMobile}>
      <div className={styles["AccountMobile"]}>
        <img
          onClick={LeaveCompte}
          className={styles["AccountMobile__cross"]}
          src="/images/cross.png"
          alt=""
        />
        <div className={styles["AccountMobile__container"]}>
          <h1>Créer un compte</h1>
          <div className={styles["AccountMobile__radio"]}>
            <label htmlFor="Homme"  >
              <input type="radio"  name="homme" ref={InputRef}  onClick={(e)=>{
  
                getgender(e)
              }}/>
              <p>Homme</p>
            </label>
            <label htmlFor="Femme">
              <input type="radio" name="femme" ref={InputRef}  onClick={(e)=>{

                getgender(e)
              }}/>
              <p>Femme</p>
            </label>
            <label htmlFor="Autre">
              <input type="radio" name="autre" ref={InputRef} onClick={(e)=>{
     
                getgender(e)
              }}/>
              <p>Autre</p>
            </label>
          </div>

          <div className={styles["AccountMobile__input"]}>
            <input
              type="text"
              name="pseudo"
              onChange={(e)=> setaccount({...account,pseudo:e.target.value})}
              placeholder="Prénom / Pseudo"
            />
            <input
              type="text"
              name="mail"
              onChange={(e)=> setaccount({...account,mail:e.target.value})}
              placeholder="Adresse email"
            />
            <input
              type="text"
              name="birth"
              onChange={(e)=> setaccount({...account,birth:e.target.value})}
              placeholder="Année de naissance"
            />
            <input
              type="text"
              name="ville"
              onChange={(e)=> setaccount({...account,ville:e.target.value})}
              placeholder="Ville ou Pays hors France"
            />
             <input
              type="text"
              name="password"
              onChange={(e)=> setaccount({...account,password:e.target.value})}
              placeholder="Password"
            />
          </div>

          <div className={styles["AccountMobile__textCheck"]}>
            <div className={styles["Actualités"]}>
              <label htmlFor="">
                <input type="checkbox" />
              </label>

              <p>
                Tenez-moi informé(e) par email de l’actualité des causes que je
                soutiens{" "}
              </p>
            </div>
            <div className={styles["Diffamation"]}>
              <label htmlFor="">
                <input type="checkbox" />
              </label>

              <p>
                Je confirme que ma cause n’est pas injurieuse ou diffamante
                lorem ipsum dolor sit amet lorem ipsum dolor sit ametlorem ipsum
                dolor sit ametlorem ipsum dolor sit amet{" "}
              </p>
            </div>
          </div>
          <div className={styles["AccountMobile__btn-div"]}>
            <button className={styles["btn"] } onClick={getaccount}>Connexion</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountMobile;
