import React from 'react'
import FaqAccordion from '../components/Security_Audits/FaqAccordion'
import GetInTouch_SecurityAudits from '../components/Security_Audits/GetInTouch_SecurityAudits'
import Security_services from '../components/Security_Audits/Security_services'
import HeroSecurity_Audits from '../components/Security_Audits/HeroSecurity_Audits'
import Why_TenSentinel from '../components/Security_Audits/Why_TenSentinel'


const Security_Audits = () => {
  return (
   <>

  <HeroSecurity_Audits/>
  <Security_services />
  <Why_TenSentinel />
    <GetInTouch_SecurityAudits />
  <FaqAccordion />

   </>
  )
}

export default Security_Audits;