import SwitchCompte from '@components/switchcompte/SwitchCompte'
import { Console } from 'console'
import { useRouter } from 'next/router'
import React, { useEffect,useRef, useState, } from 'react'
import MenuItems from './items/MenuItems'
import styles from './Menu-Volet-Compte.module.scss'







function MenuVoletCompte() {
     const route = useRouter()

     const  itemstab =["Mes projets(2)","Mes e-stand (0)","Mes soutiens (23)","Mes informations",' Me deconnecte']

     const itemmenu = useRef([]) 
    
      let [page,setpage] = useState(1)
    // le volet dessant  a true
     const [ItemsDown,setItemsDown] = useState(false)
 


 function handleChangeVolet(e){

      //  met volet en bas ou en haut (toggle)
      setItemsDown(boleanHB => boleanHB = !ItemsDown)    
        
// met la valeur page props de composant switchcompte 
      itemmenu.current.forEach( (liMenu,i) =>{
        if(liMenu == e.target){
            // change la page du compte 
          switch (i) {
            case 0:
              setpage( _=> page = 1)
              break;
             case 1:
              setpage( _=> page = 2)
              break
             case 2:
              setpage( _=> page = 3)
               break;
              case 3:
                setpage( _=> page = 4)
                break;
              case 4:
                setpage(el => page = 5)
                break;
            default:
              console.log(`Sorry`);
          }
          // donne le text du lien qui a été clické dans le premier lien
          itemmenu.current[0].children[0].textContent = itemstab[i]
          
          console.log(itemmenu.current[0].children[0], e.target.children[0],itemstab[i],'targeteeeeeee')

        }


   
      })

   
        
    }
     
   

    useEffect(()=>{
      
      itemmenu.current.forEach((li,i )=>{
        if(!ItemsDown){
     
          li.children[1].src='/icons/chevron-up.png'
          if(i > 0){
            li.style  = `display : none`
              }

        }else{
          li.children[1].src='/icons/chevron-down.png'
            li.style  = `display : flex`
            // tt les lien sauf le premier 
                if(i > 0){
            li.style  = `background:white; color:#0A6AAF`
            li.children[1].style ='color:#0A6AAF'
              }
        }
    
      })


    },[itemmenu,ItemsDown])



  return (
    <>
    {/*  titre du volet de mon compte */}
    <div className={styles["title-Mc"]}>
      <h2>Mon compte</h2>
    </div>
    {/* contenu du volet avec les pages */}
    <div className={styles['container-menu']}>
  
    
        <ul >
         {/* itemtab = les page du menu volet */}
         {itemstab.map((textcontnt,i)=>(
            <li key={i} ref={el => itemmenu.current[i] = el} onClick={handleChangeVolet} >
            {/* le text et l'icone génré par itemtab  */}
            <MenuItems  data-king={i} text={textcontnt}  img='/icons/chevron-down.png' />
            </li>
         ))}

        </ul>

    </div>
    {/* retourne sur la page sur laquel le click a été effectuer  */}
    <SwitchCompte props={page} />
    </>
  )
}

export default MenuVoletCompte