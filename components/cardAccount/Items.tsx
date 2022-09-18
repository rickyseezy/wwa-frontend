import React, { useEffect, useRef, useState } from 'react'
import styles from './projetitems.module.scss'
import { faker } from '@faker-js/faker';


console.log(faker.name.firstName(),'faker')

interface Data {
objMesprojet: any
img: string,
title: string,
p: string,
targetCard: number,
id: number,
dataProject : [],
setback : () => void
}


function Items(props : Data) {
const [display, setdisplay] = useState(false)
const [back, setback] = useState<void>()



  let deleteRef = useRef([])
  let indexbtnfront = useRef<number>(null)
    const objProjet = props.objMesprojet


    const handclick = (e: React.Dispatch<React.SetStateAction<string>> | React.MouseEvent<HTMLElement>) => {
        // @ts-ignore
    let front = e?.nativeEvent.path[3].children[0]
        // @ts-ignore
      let back = e?.nativeEvent.path[3].children[1]
      setback(()=>{
      back.style = 'display: block'
      front.style = 'display: none'
      })

      console.log(indexbtnfront,'hey')


      }



      const handclickDelete = (e: React.Dispatch<React.SetStateAction<string>> | React.MouseEvent<HTMLElement>) => {
          // @ts-ignore
    let front = e?.nativeEvent.path[3].children[0]
          // @ts-ignore
          let back = e?.nativeEvent.path[3].children[1]

          setback(()=>{
          front.style = 'display: block'
          back.style = 'display: none'
          })


          }


          if (!display) {
          return (
          <>
            {/* ref={(element) => deleteRef.current[index] = element} */}
            {props.objMesprojet.map((data: { img: any; title: any; p: any; id?: any },index:number) => {
            let {img ,title,p,id} = data
            return(
            <>
              <div className={styles["main"]}>
                {/* front card */}
                <div className={styles['main__frontcard']} key={index}>
                  <div className={styles['main__imgProjet']}>
                    <img src={img=data.img} alt="" />
                  </div>
                  <h2>{title = data.title}</h2>
                  <p>{p = data.p}</p>
                  {/* card'button */}
                  <div className={styles['main__btn']}>
                    <div className={styles['btnprojet']}>Voir</div>
                    <div className={styles['btnprojet']}>
                      <img src="/images/edit.png" alt="" />
                    </div>
                    <div className={styles['btnprojet']} onClick={handclick}>
                      <img src="/images/trash-2.png" alt="" />

                    </div>
                  </div>
                </div>

                {/* delete */}
                <div className={styles['main__containerdelete']} key={index + 1}>
                  <h2>Supprimer <br /> "Des logements décents et <br /> fonctionnels"</h2>
                  <div className={styles["btndelete"]}>
                    <button>Oui,supprimer</button>
                    <button onClick={handclickDelete}>Annuler</button>
                  </div>
                </div>

              </div>

            </>
            )})}
          </>
          )
          }


          }

          export default Items