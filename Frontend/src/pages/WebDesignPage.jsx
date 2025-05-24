import React, { useState } from "react";
import { HeaderSection } from "../components/WebDesign/HeaderSection";
import { HomeSection } from "../components/WebDesign/HomeSection";
import { ServicesSection } from "../components/WebDesign/ServicesSection";
import { ImportanceSection } from "../components/WebDesign/ImportanceSection";
import { DeliverSection } from "../components/WebDesign/DeliverSection";
import { ContactSection } from "../components/WebDesign/ContactSection";
import FaqSection from "../components/WebDesign/FaqSection";
// import { PopupModal } from "../components/WebDesign/PopupModal";
import { initialFaqs } from "../components/WebDesign/WebDesignData";

export const WebDesignPage = () => {
  const [faqs, setFaqs] = useState(
    initialFaqs.map(faq => ({ ...faq, isOpen: false }))
  );
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);

  const handleSetFaqs = (e, key) => {
    e.preventDefault();
    setFaqs(prevFaqs =>
      prevFaqs.map((faq, index) =>
        index === key ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className="flex flex-col">
      {/* <PopupModal isOpen={isPopUpOpen} setIsPopUpOpen={setIsPopUpOpen} /> */}
      <HeaderSection />
      <div>
        <HomeSection />
        <ServicesSection />
        <ImportanceSection />
        <DeliverSection setIsPopUpOpen={setIsPopUpOpen} />
        <ContactSection />
        <FaqSection faqs={faqs} handleSetFaqs={handleSetFaqs} />
      </div>
    </div>
  );
};