import React, { useRef, useState } from 'react'
import Items from './Items'
import { faker } from '@faker-js/faker';

interface Data {
  img: string,
  title: string,
  p: string,
  targetCard: number,
  id: number,
  bjectEstand : []
}

// Mesprojet's data
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
   

  return(
    <>
    <Items  objMesprojet={objMesprojet} img={img} title={''} p={''} targetCard={0} id={0} dataProject={[]}   setback={()=>{}}/>
    </>
  )



}

export default ProjetItems


