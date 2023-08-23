import React, {useEffect, useRef, useState} from 'react'
import styles from './projetitems.module.scss'
import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
interface Data {
    objMesprojet : any
    img : string,
    title : string,
    p : string,
    targetCard : number,
    id : number,
    dataProject : [],
    setback : () => void
}

function Items(props : Data) {

    let cardRef = useRef([])
    cardRef.current = []
 


    function AllCard(e : any) {
        if (!cardRef.current.includes(e)) {
            cardRef
                .current
                .push(e);
            cardRef.current = cardRef
                .current
                .filter((e) => e !== null);
        }

    }

    function ChangeView(ide : string) {
        let result = cardRef
            .current
            .find((el) => Number(el.id) === Number(ide));
        cardRef
            .current
            .forEach(el => {})

        if (result.firstChild.classList.contains("projetitems_visible__O_tc3")) {

            result
                .firstChild
                .classList
                .remove("projetitems_visible__O_tc3");
            result
                .firstChild
                .classList
                .add("projetitems_hidden__tCuId");
            result.style = 'transform:rotateY(360deg)'
            result
                .lastChild
                .classList
                .remove("projetitems_hidden__tCuId");
            result
                .lastChild
                .classList
                .add("projetitems_visible__O_tc3");
        } else {
            result
                .firstChild
                .classList
                .remove("projetitems_hidden__tCuId");
            result
                .firstChild
                .classList
                .add("projetitems_visible__O_tc3");
            result.style = 'transform:rotateY(0deg)'

            result
                .lastChild
                .classList
                .remove("projetitems_visible__O_tc3");
            result
                .lastChild
                .classList
                .add("projetitems_hidden__tCuId");
        }
        // result.children[0].style = "visibility:hidden"; result.children[1].style =
        // "visibility:visible";
    }



    return (
        <> 
    {/* ref={(element) => deleteRef.current[index] = element} */}
    {
        props
            .objMesprojet
            .map((data : {
                img: any;
                title: any;
                description:string,

                id?: any
            }, index : number) => {
                let {img, title, description, id} = data
                return (

                    <div className={styles["main"]} id={id} key={index} ref={AllCard}>
                        {/* front card */}
                        <div className={`${styles['main__frontcard']} ${styles['visible']}`}>
                            <div className={styles['main__imgProjet']}>
                                <img src='/images/champdemoussa.png' alt=""/>
                            </div>
                            <h2>{title}</h2>
                            <p>{description}</p>
                            {/* card'button */}
                             < div className = {styles['main__btn']} > 
                             <div className={styles['btnprojet']}>Voir</div> < div className = { styles['btnprojet']} > 
                             <img src="/images/edit.png" alt=""/> 
                            </div>
                           <div className={styles['btnprojet']} onClick={()=> ChangeView(id)}>
                           <img src="/images/trash-2.png " alt=" " />
                           </div>
                          </div > 
                          </div>

                        {/* delete */} 
                        < div className = { `${styles['main__containerdelete']} ${styles["hidden"]}`}
                        key = {index + 1} > <h2>Supprimer
                            <br/>
                            &quot;Des logements décents et
                            <br/>
                            fonctionnels&quot; ?</h2> < div className = {
                            styles["btndelete"]
                        } > <button>Oui, supprimer</button> <button onClick = {
                            () => ChangeView(id)
                        } > Annuler </button>
                  </div >
                  </div> 
                  </div>
                  

                )
                })
                 } 
           </>
           )
        
        }

          export default Items