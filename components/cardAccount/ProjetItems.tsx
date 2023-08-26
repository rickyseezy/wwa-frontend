
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


  




const ProjetItems = () => {
  //  card
  let [cardErase,setCardErase] = useState(false)
  let projectRepository = new ProjectRepository(DB)
  const deleteProject = (card : string) =>{
    projectRepository.Delete(card)
    setCardErase(true)
  }

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

  setallcausesfromid(currentCauses)
  })

}
    setCardErase(false)
    },[userConnected == null,cardErase])

    
console.log(allcausesFromId)
  return <Items  objMesprojet={allcausesFromId} img={'/images/champdemoussa.png'} title={''} p={''} targetCard={0} id={0} deleteProject={deleteProject}/>
 
}

export default ProjetItems


