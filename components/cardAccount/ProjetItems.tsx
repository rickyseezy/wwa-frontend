
import Items from './Items'
import { DB } from '../../firebase/configApp';

import React, {useEffect, useState} from 'react'

import { getAuth, signOut,onAuthStateChanged } from "firebase/auth";
import ProjectRepository from 'domain/repositories/project';

import { useRouter } from 'next/router';

interface Data {
  img: string,
  title: string,
  p: string,
  targetCard: number,
  id: number,
  bjectEstand : []
}


export const objMesprojet = [{
  img: '/images/champdemoussa.png',
  title: 'Les champs mais de moussa',
  p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est facere, eos esse, dicta quos alias debitis .',
  id: 1
}, {
  img: '/images/champdemoussa.png',
  title: 'Les champs mais de moussa',
  p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est facere, eos esse, dicta quos alias debitis .',
  id: 2
}, {
  img: '/images/champdemoussa.png',
  title: 'Les champs mais de moussa',
  p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est facere, eos esse, dicta quos alias debitis .',
  id: 3
}, {
  img: '/images/champdemoussa.png',
  title: 'Les champs mais de moussa',
  p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est facere, eos esse, dicta quos alias debitis .',
  id: 4
}, {
  img: '/images/champdemoussa.png',
  title: 'Les champs mais de moussa',
  p: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni est facere, eos esse, dicta quos alias debitis .',
  id: 5
}]

  
  




const ProjetItems = ({img,p,title,id}: Data) => {
  //  card
  let projectRepository = new ProjectRepository(DB)

  let [userConnected,setConneted] = useState(null)
  let [allcausesFromId,setallcausesfromid] = useState([])
  let router = useRouter()
  useEffect(()=>{
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
            
            router.push('/')
      
        
        }
      });
      }  

    if(userConnected === null){
      connected()

    }

console.log(userConnected,' + userConnected')
if(userConnected){
  projectRepository.List().then((causes)=>{
  let currentCauses =  causes.filter(el => el.createdBy === userConnected.uid)

  console.log(currentCauses,'curr cause')
  setallcausesfromid(currentCauses)
  })

}

    },[userConnected == null])
console.log(allcausesFromId)
  return <Items  objMesprojet={allcausesFromId} img={'/images/champdemoussa.png'} title={''} p={''} targetCard={0} id={0} dataProject={[]} setback={()=>{}}  />
 
}

export default ProjetItems


