import Mesprojets from '@components/MesprojetsCompo/Mesprojets'
import React, { useEffect } from 'react'
import {objo} from '../../components/Volet/Volet'


function Switch() {
useEffect(()=>{
    console.log(objo)

},[objo])

  return (
<>
<Mesprojets objMesporjets={[]} img={''} tile={''} p={''} bjectEstand={[]} />

</>

  )
}

export default Switch