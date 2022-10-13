import Mesprojets from '@components/MesprojetsCompo/Mesprojets'
import React, { useEffect } from 'react'
import {markerofPage} from '../../components/Volet/Volet'


function Switch() {
useEffect(()=>{
    console.log(markerofPage,'marquerofpage')

},[markerofPage])

  return (
<>
<Mesprojets objMesporjets={[]} img={''} tile={''} p={''} bjectEstand={[]} />

</>

  )
}

export default Switch