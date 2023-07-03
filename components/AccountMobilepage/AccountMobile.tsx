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
  let [pseudo, setpseudo] = useState('');
  let [mail, setmail] = useState('');
  let [ville, setville] = useState('');
  let [birth, setbirth] = useState('');
  let [password, setpassword] = useState('');

  let [account,setaccount] = useState({
    pseudo:'',
    mail:'',
    ville:'',
    birth: '',
    gender:'',
    password:""
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

  function getpseudo(e){
    setpseudo(e.target.value)

  }
  function getpassword(e){
    setpassword(e.target.value)

  }
  
  
  function getmail(e){
    setmail(e.target.value)

  }

  
  function getville(e){
    setville(e.target.value)

  }

  function getbirth(e){
    setbirth(e.target.value)

  }

  function getaccount(){

     console.log(account)
     authenticatorRepository.CreateUser(mail,password ).then(user =>{

      accountRepository.Create({
        id: user,
        firstName: '',
  
      certified: false,
       activated: true,
      birthdate: new Date(),
      pseudo: pseudo,
      email: mail,
      password: password,
      roles: [],
      updatedAt: new Date(),
      ville: ville,
      gender: gender,
      createdAt: new Date(),
      lastName: "",
      phoneNumber: "",
      addressID: ""
      })
     })

     
     setbirth('')
     setmail('')
     setpassword('')
     setpseudo('')
     setville('')

    //  'accounts'


     
     accountMobile.current.style = "display:none";

  }  


  useEffect(() => {
    // accountMobile.current.style = "display:flex";
    setaccount({...account,pseudo,mail:mail,birth:birth,gender:gender,ville:ville,password})
    console.log(account)

  },[pseudo,ville,birth,gender,mail,password]);

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
              value={pseudo}
              name="pseudo"
              onChange={getpseudo}
              placeholder="Prénom / Pseudo"
            />
            <input
              type="text"
              value={mail}
              name="mail"
              onChange={getmail}
              placeholder="Adresse email"
            />
            <input
              type="text"
              value={birth}
              name="birth"
              onChange={getbirth}
              placeholder="Année de naissance"
            />
            <input
              type="text"
              value={ville}
              name="ville"
              onChange={getville}
              placeholder="Ville ou Pays hors France"
            />
             <input
              type="text"
              value={password}
              name="password"
              onChange={getpassword}
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
