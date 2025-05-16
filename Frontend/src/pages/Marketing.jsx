import React from "react";
import FaqAccordion_marketing from "../components/Marketing/FaqAccordion_marketing";
import GetInTouch from "../components/Security_Audits/GetInTouch";
import AwarenessSection from "../components/Marketing/AwarenessSection";
import  Hero_marketing  from "../components/Marketing/hero_marketing";

const Marketing = () => {
  return (
    <>

      <Hero_marketing />
      <AwarenessSection />
      <GetInTouch />
      <FaqAccordion_marketing />
    </>
  );
};

export default Marketing;
