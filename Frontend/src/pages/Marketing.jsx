import React from "react";
import FaqAccordion_marketing from "../components/Marketing/FaqAccordion_marketing";
import GetInTouch from "../components/Security_Audits/GetInTouch";
import Herosection from "../components/Security_Audits/Herosection";

import AwarenessSection from "../components/Marketing/AwarenessSection";
import { Hero_marketing } from "../components/Marketing/hero_marketing";

const Marketing = () => {
  return (
    <>
      <br></br>
      <br></br>

      <Hero_marketing />
      <AwarenessSection />
      {/* <Security_services />
       <Why_CyberSapiens /> */}
      <GetInTouch />
      <FaqAccordion_marketing />
    </>
  );
};

export default Marketing;
