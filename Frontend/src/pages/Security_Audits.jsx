import React from 'react'
import FaqAccordion from '../components/Security_Audits/FaqAccordion'
import GetInTouch from '../components/Security_Audits/GetInTouch'
import Herosection from '../components/Security_Audits/Herosection'
import Why_CyberSapiens from '../components/Security_Audits/Why_CyberSapiens'
import Security_services from '../components/Security_Audits/Security_services'

const Security_Audits = () => {
  return (
   <>

 
<Herosection />
  <Security_services />
  <Why_CyberSapiens />
  <GetInTouch />
  <FaqAccordion />

   </>
  )
}

export default Security_Audits