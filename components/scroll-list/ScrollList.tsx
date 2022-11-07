import styles from "./ScrollList.module.scss";
import Card from "@components/card/Card";
import {useRef,useEffect, useState} from "react"






interface IControlSwitch {
  direction:Object,
  id:Number
  
}

const ScrollList = ({direction,id}:IControlSwitch) => {
  let[move,setmove] = useState(0)
  let containerCard = useRef(null)
 useEffect(()=>{
  

  if(direction.id){
    console.log(direction,id ,'test')

  }

    if(direction.id === id){

      if(direction.directiono === 'right'){
        setmove(el => el += 365)
    
        containerCard.current.style = `transform:translateX(${move}px);transition:.5s`
        console.log('right',move)
      
      }
      else if(direction.directiono === 'left'){
  
      
        setmove(el => el -= 365)
        console.log(move)

        containerCard.current.style = `transform:translateX(${move}px);transition:.5s`
        console.log('left',move)
      
      }


    }
  
    
 },[direction])


  return (
    <div className={styles['container-scroll']}>
    <ul className={styles["scroll-list"]} ref={containerCard}>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
      <li>
        <Card />
      </li>
    </ul>
    </div>
  );
};

export default ScrollList;
