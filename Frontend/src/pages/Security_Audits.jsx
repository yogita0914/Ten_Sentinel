import React from 'react'
import FaqAccordion from '../components/Security_Audits/FaqAccordion'
import GetInTouch from '../components/Security_Audits/GetInTouch'
import Why_CyberSapiens from '../components/Security_Audits/Why_CyberSapiens'
import Security_services from '../components/Security_Audits/Security_services'
import HeroSecurity_Audits from '../components/Security_Audits/HeroSecurity_Audits'

const Security_Audits = () => {
  return (
   <>

  <HeroSecurity_Audits/>
  <Security_services />
  <Why_CyberSapiens />
  <GetInTouch />
  <FaqAccordion />

   </>
  )
}

export default Security_Audits;