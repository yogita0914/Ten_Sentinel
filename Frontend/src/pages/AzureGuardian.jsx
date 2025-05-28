import React from "react";
import Hero from '../components/azureguardian/Hero';

import WhatIsPenTesting from '../components/azureguardian/WhatIsPenTesting';
import WhyChooseUs from '../components/azureguardian/WhyChooseUs';
import Tools from '../components/azureguardian/Tools';
import WhatWeProvide from '../components/azureguardian/WhatWeProvide';

import InteractiveCircleDiagram from '../components/azureguardian/InteractiveCircleDiagram';
import NeedOfSecuring from '../components/azureguardian/NeedOfSecuring';
import PentestTypes from '../components/azureguardian/PentestTypes';
import FreeAssessmentForm from '../components/azureguardian/FreeAssessmentForm';
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
      <PentestTypes />
      <FreeAssessmentForm />
      <FAQ />
      {/* Footer is intentionally omitted as per request */}
    </div>
  );
};

export default AzureGuardian;
