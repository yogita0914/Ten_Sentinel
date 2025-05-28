import React from "react";
import HeroSection from "../components/cloud-security/HeroSection";
import Introduction from "../components/cloud-security/Introduction";
import WhatCloudSecurity from "../components/cloud-security/WhatCloudSecurity";
import KeyFocus from "../components/cloud-security/KeyFocus";
import CloudServices from "../components/cloud-security/CloudServices";
import CallToAction from "../components/cloud-security/CallToAction";
import Benefits from "../components/cloud-security/Benefits";
import { hero as cloudHero } from "../components/data/cloudSecurity";
import Faq from "../components/cloud-security/Faq";

const CloudSecurity = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <HeroSection
        title={cloudHero.title}
        subtitle={cloudHero.subtitle}
        backgroundImage={cloudHero.backgroundImage}
        Icon={cloudHero.Icon}
      />
      <Introduction />
      <WhatCloudSecurity />
      <KeyFocus />
      <CloudServices />
      <CallToAction />
      <Benefits />
      <Faq />
    </div>
  );
};

export default CloudSecurity;
