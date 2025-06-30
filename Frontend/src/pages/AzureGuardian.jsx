import React from "react";
import Hero from '../components/azureguardian/Hero';
import WhatIsPenTesting from '../components/azureguardian/WhatIsPenTesting';
import WhyChooseUs from '../components/azureguardian/WhyChooseUs';
import Tools from '../components/azureguardian/Tools';
import WhatWeProvide from '../components/azureguardian/WhatWeProvide';
import InteractiveCircleDiagram from '../components/azureguardian/InteractiveCircleDiagram';
import NeedOfSecuring from '../components/azureguardian/NeedOfSecuring';
import PenTestTypes from '../components/azureguardian/PentestTypes';
import GetInTouch_Section from "../components/Marketing/GetInTouch_Section";
import FAQ from '../components/azureguardian/FAQ';

const AzureGuardian = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <WhatIsPenTesting />
      <WhyChooseUs />
      <Tools />
      <WhatWeProvide />
      <InteractiveCircleDiagram />
      <NeedOfSecuring />
      <PenTestTypes />
      <GetInTouch_Section/>
      <FAQ />
    </div>
  );
};

export default AzureGuardian;
