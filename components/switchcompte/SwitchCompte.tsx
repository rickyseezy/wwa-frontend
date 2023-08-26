import React, { useEffect } from 'react'
import EStand from '@components/Estand/EStand'
import Mesprojets from '@components/MesprojetsCompo/Mesprojets'

import CardSoutien from '@components/cardSoutien/cardSoutien'
import Deconnecter from '@components/deconnecter/Deconnecter'
import InfoForm from '@components/Mesinfos/InfoForm'



function SwitchCompte({props}) {

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