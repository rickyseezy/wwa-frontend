import SwitchCompte from '@components/switchcompte/SwitchCompte'
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
      e.preventDefault()
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
        }

        //  met la fleche vers me haut
        if(ItemsDown){

          if(liMenu == e.target){
            liMenu.children[1].src = '/icons/chevron-up.png'

          }
        }
   
        // met la fleche vers le bas
        if(!ItemsDown && liMenu != e.target){
          e.target.children[1].src = '/icons/chevron-down.png'
          
        }

      })


      for(let i = 0 ; i  < itemmenu.current.length ;i++){

        if(ItemsDown){
          console.log('cest bas')  
       
            itemmenu.current[i].style = `display:flex`

          
        }else{
          console.log('c\'est haut')
          if(i > 0){

            itemmenu.current[i].style = `display : none`
          }
        }
      }
            
        
    }
     
   

    // useEffect(()=>{
      

    //   //   for(let i = 0 ; i  < itemmenu.current.length ;i++){

    //   //   if(ItemsDown){
    //   //     console.log('cest bas')
     
    //   //       itemmenu.current[i].style = 'display : flex;background-color:white;color:#0A6AAF !important'

          
    //   //   }else{
    //   //     console.log('c\'est haut')
    //   //     if(i > 0){

    //   //       itemmenu.current[i].style = `display : none;background-color:#0A6AAF;color:white !important`
    //   //     }
    //   //   }
    //   // }
    // },[itemmenu,ItemsDown])



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