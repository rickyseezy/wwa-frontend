import React from 'react'

interface MenuItmsProps{
    text:string,
    img:string,
}


const MenuItems = ({text,img }: MenuItmsProps)=> {
  return (
    <>
     <p>{text}</p>  <img src={img} alt="" />
    </>
  )
}

export default MenuItems