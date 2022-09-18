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
     const [ItemsDown,setItemsDown] = useState(false)
 
     function handleChangeVolet(e){
      e.preventDefault()
      setItemsDown(el => el = !ItemsDown)    
        

      itemmenu.current.forEach( (el,i) =>{

        if(el == e.target){
          console.log(i)
            // change la page du compte 
          switch (i) {
            case 0:
              setpage(el => page = 1)
              break;
             case 1:
              setpage(el => page = 2)
              break
             case 2:
              setpage(el => page = 3)
               break;
              case 3:
                setpage(el => page = 4)
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

          if(el == e.target){
            el.children[1].src = '/icons/chevron-up.png'

          }
           el.style = `background-color:white;color:#0A6AAF`

        } 
   
        // met la fleche vers le bas
        if(!ItemsDown && el != e.target){
          e.target.children[1].src = '/icons/chevron-down.png'

          el.style = `display:none`
        }
          
        e.target.style = `background-color:#0A6AAF;color:white`

      })
            
        
    }
     
   

    useEffect(()=>{
      
// change le logo de signe haut ou bas
        for(let i = 0 ; i  < itemmenu.current.length ;i++){
            if(i > 0){
                itemmenu.current[i].style = 'display:none'

            }else if(i < 0 || ItemsDown){
               itemmenu.current[i].children[1].src = '/icons/chevron-down.png'
               itemmenu.current[i].style = `background-color:#0A6AAF;color:white`

            }
        }
    },[itemmenu])



  return (
    <>
    <div className={styles["title-Mc"]}>
      <h2>Mon compte</h2>
    </div>
    <div className={styles['container-menu']}>
  
    
        <ul >
         
         {itemstab.map((textcontnt,i)=>(
            <li key={i} ref={el => itemmenu.current[i] = el} onClick={handleChangeVolet} >
            <MenuItems  data-king={i} text={textcontnt}  img='/icons/chevron-down.png' />
            </li>
         ))}

        </ul>

    </div>
    <SwitchCompte props={page} />
    </>
  )
}

export default MenuVoletCompte