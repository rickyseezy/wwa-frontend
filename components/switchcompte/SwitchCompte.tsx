import React, { useEffect } from 'react'
import EStand from '@components/Estand/EStand'
import Mesprojets from '@components/MesprojetsCompo/Mesprojets'

import CardSoutien from '@components/cardSoutien/cardSoutien'
import Deconnecter from '@components/deconnecter/Deconnecter'
import InfoForm from '@components/Mesinfos/InfoForm'
import MenuBurger from '@components/menu-burger/MenuBurger'
import MenuVoletCompte from '@components/menuVoletCompte/MenuVoletCompte'


function SwitchCompte({props}) {
    console.log(props)

    useEffect(()=>{
       console.log(props,'swtiwh')
    },[props])
    
  return (
    <>
    {(()=>{
        switch (props){
        case 2 :
        return <EStand />
        case 1 :
        return <Mesprojets objMesporjets={[]} img={''} tile={''} p={''} bjectEstand={[]} />
        case 3 :
        return  <CardSoutien />
        case 4 :
        return <InfoForm />
        case 5 :
        return <Deconnecter />
        }
        })()}

        </>
  )
}

export default SwitchCompte