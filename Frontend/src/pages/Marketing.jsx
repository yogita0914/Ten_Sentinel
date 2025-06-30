import React from "react";
import FaqAccordion_marketing from "../components/Marketing/FaqAccordion_marketing";
import GetInTouch_Section from "../components/Marketing/GetInTouch_Section";
import AwarenessSection from "../components/Marketing/AwarenessSection";
import Hero_marketing from "../components/Marketing/Hero_marketing";

const Marketing = () => {
  return (
    <>
      <Hero_marketing />
      <AwarenessSection />
      <GetInTouch_Section />
      <FaqAccordion_marketing />
    </>
  );
};

export default Marketing;
