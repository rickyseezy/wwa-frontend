import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import React, {useEffect, useRef} from 'react'

import styles from './connect.module.scss'
import {useState} from 'react'
import Reinit from '@components/reinitialiser/Reinit'
import AuthenticatorRepository from '../../domain/repositories/authenticator'
import {useRouter} from 'next/router';

function Connect({onClose, children, title}) {
    const handleCloseClick = () => {
        onClose();
    };
    let connect = useRef(null)
    let [showAccount,
        setShowAccount] = useState < Boolean > (false)
    let authenticatorRepository = new AuthenticatorRepository()

    let router = useRouter()
    let [reinit,
        setReinit] = useState < Boolean > (false)
    let [email,
        setemail] = useState('')
    let [password,
        setpassword] = useState('')


    let backClick = useRef(null)

    function handleReinit() {
        setReinit(true)
    }
    function sendLoggin() {
        authenticatorRepository.Login(email, password)
     handleCloseClick()
    }
    function handleSub() {
        setShowAccount(true)
    }


    if (reinit) {
       connect.current.style = 'display:none'
    }


    useEffect(() => {
        // click on the back ground  back to menu
        backClick.current.addEventListener('click', (e) => {
            const {className} = e.target as HTMLDivElement;

            // console.log('click', className, backClick.current
            //     ?.classList[0])
            if (className === backClick.current
                ?.classList[0]) {
                handleCloseClick()
            }
            // console.log(e.target,'targe')
        })

        // window.removeEventListener('click',()=>{

        // })
    })

    return (
        <div ref={backClick} className={styles['back-connect']}>
            {!showAccount  ?
            <div ref={connect} className={styles['connect']}>
          
                <h1>
                    Connectez - vous
                </h1>
                <form action="" className={styles["connect__form"]}>
                    <label htmlFor="">
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                            placeholder="email"/>
                    </label>
                    < label htmlFor="">
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="mot de passe"/>
                    </label>
                    <p onClick={handleReinit}>
                        Mot de passe oublier ?
                    </p>
                    <button onClick={sendLoggin}>
                        Connexion
                    </button>
                </form >
                <div className={styles['connect__band']}>
                    < p onClick={handleSub}>
                        Pas encore de compte ?
                        <span>
                            s 'inscrire</span>
                    </p>

                </div >
            </div> :
            ''
            }
        
            {showAccount && <AccountMobile close={handleCloseClick}/>}
            {reinit && <Reinit close={handleCloseClick}/>}


        </div>
    )
}

export default Connect
