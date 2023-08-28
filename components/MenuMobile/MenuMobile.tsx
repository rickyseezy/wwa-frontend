import React, {useState} from 'react'
import styles from './Menumobile.module.scss'
import {motion} from 'framer-motion'
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import {useRef, useEffect} from 'react'
import AccountMobile from '@components/AccountMobilepage/AccountMobile'
import {useRouter} from 'next/router'
import Connect from '@components/connectionrequest/Connect';

type variable = {
    open: {},
    closed: {}
}
const variants : variable = {
    open: {
        width: '100%',
        padding: '2em',
        visibility: 'visible'
    },
    closed: {
        width: '0%',
        padding: '0',
        visibility: 'hidden',
        transition: {
            delay: .4
        }
    }
};
const variantsInp : variable = {
    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
};
const variantsCross : variable = {
    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
};
const variantsli : variable = {
    open: {
        x: '0%',
        opacity: 1
    },
    closed: {
        x: '-160px',
        opacity: 0
    }
};

const variantsbtn : variable = {
    open: {
        opacity: 1
    },
    closed: {
        opacity: 0
    }
};
function MenuMobile({displayMenu, func}) {
  let [userConnected,setConneted] = useState(null)

    let [isOpen,
        setOpen] = useState(false)

    const router = useRouter()

    const FowardProject = () => {
        router.push('/')
    }
    const FowardCauses = () => {
        router.push('/projects?continent=europe')
    }

    const FowardMNcompte = () => {
        router.push('/Mon-compte')
    }
    const CreateCause = () => {
        router.push('/projects/form/create')
    }

    const UserLeaving = () =>{
      const auth = getAuth();
      signOut(auth).then(() => {
        // Sign-out successful.
        setConneted(null)
      }).catch((error) => {
        // An error happened.
      });
  
    }

    useEffect(() => {

        if (displayMenu.push) {
            setOpen(true)
        } else {
            setOpen(false)
        }


        const connected = async () =>{
          onAuthStateChanged(getAuth(), (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
      
              setConneted(user)
              // ...
            } else {
              // User is signed out
              // ...
            }
          });
          }  
  
        if(userConnected === null){
          connected()

        }

    console.log(userConnected,'user co')
    },[userConnected == null,displayMenu.push])

    function Close() {
        func(displayMenu)
        setOpen(false)
    }

    return (
        <motion.div
            animate={isOpen
            ? "open"
            : "closed"}
            variants={variants}
            className={styles['menuMobile']}>
            <div>
                <motion.img
                    animate={isOpen
                    ? "open"
                    : "closed"}
                    variants={variantsCross}
                    onClick={Close}
                    className={styles['menuMobile__cross']}
                    src="/images/cross.png"
                    alt=""></motion.img>

            </div>
            <motion.input
                animate={isOpen
                ? "open"
                : "closed"}
                variants={variantsInp}
                placeholder='Rechercher une cause à soutenir '
                className={styles['menuMobile__input']}
                type="text"/>
            <ul className={styles['menuMobile__ul']}>
                <motion.li
                    animate={isOpen
                    ? "open"
                    : "closed"}
                    variants={variantsli}
                    transition={{
                    ease: "backInOut",
                    duration: .4
                }}
                    onClick={FowardProject}>Home
                </motion.li>

                <motion.li
                    animate={isOpen
                    ? "open"
                    : "closed"}
                    variants={variantsli}
                    transition={{
                    ease: "backInOut",
                    duration: .3
                }}
                    onClick={FowardCauses}>Causes
                </motion.li>
              { userConnected && <motion.li
                    animate={isOpen
                    ? "open"
                    : "closed"}
                    variants={variantsli}
                    transition={{
                    ease: "backInOut",
                    duration: .5
                }}
                    onClick={FowardMNcompte}>Mon Compte</motion.li>}
               {userConnected === null && <motion.li
               onClick={()=> <Connect show={(el: number)=> el++} />}
                    animate={isOpen
                    ? "open"
                    : "closed"}
                    variants={variantsli}
                    transition={{
                    ease: "backInOut",
                    duration: .6
                }}>Connexion
                </motion.li>}
                { userConnected && <motion.li
                onClick={UserLeaving}
                    animate={isOpen
                    ? "open"
                    : "closed"}
                    variants={variantsli}
                    transition={{
                    ease: "backInOut",
                    duration: .6
                }}>Deconnexion
                </motion.li>}
            </ul>
            <motion.button
                animate={isOpen
                ? "open"
                : "closed"}
                variants={variantsbtn}
                className={styles['menuMobile__btn']}
                onClick={CreateCause}>Je crée ma cause</motion.button>
        </motion.div>
    )
}

export default MenuMobile