import React from 'react'

interface PropsImage{
    image : string,
    classN : string
}

const Picture = ({image,classN}:PropsImage)=> {
  return (
    <>
     <img className={classN} src={image} alt="" />
    </>
  )
}

export default Picture