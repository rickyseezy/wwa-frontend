import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import React, {useEffect, useRef} from 'react'
import styles from './connect.module.scss'
import {useState} from 'react'
import Reinit from '@components/reinitialiser/Reinit'

function Connect(props) {
    let connect = useRef(null)
    let [showAccount,
        setShowAccount] = useState < Boolean > (false)

    // reinit
    let [reinit,
        setReinit] = useState < Boolean > (false)
    let [connetShow,
        setConnectshow] = useState < Boolean > (false)

    function handleSub() {
        setShowAccount(el => el = !el)
        console.log(showAccount)
    }

    function handleReinit() {
        setReinit(el => el = !el)
        console.log(reinit)

    }
    useEffect(() => {
        console.log(reinit, showAccount)
        //  si le props.show change la valeur de show Account revient a false
        if (props.show > 1) {
            setShowAccount(el => el = !el)

        }
    }, [props.show])

    if (reinit) {

        return <Reinit/>
    }

    if (showAccount) {

        return <AccountMobile/>

    }

    return (
        <div className={styles['back-connect']}>
            <div ref={connect} className={styles['connect']}>
                <h1>Connectez-vous</h1>
                <form action="" className={styles["connect__form"]}>
                    <label htmlFor="">
                        <input type="text" placeholder="email"/>

                    </label>
                    <label htmlFor="">
                        <input type="text" placeholder="mot de passe"/>

                    </label>

                    <p onClick={handleReinit}>Mot de passe oublier ?</p>

                    <button >Connexion</button>
                </form>
                <div className={styles['connect__band']}>

                    <p onClick={handleSub}>Pas encore de compte ?
                        <span>s'inscrire</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Connect