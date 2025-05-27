import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeaderSection } from "../components/WebDesign/HeaderSection";
import { HomeSection } from "../components/WebDesign/HomeSection";
import { ServicesSection } from "../components/WebDesign/ServicesSection";
import { ImportanceSection } from "../components/WebDesign/ImportanceSection";
import { DeliverSection } from "../components/WebDesign/DeliverSection";
import { ContactSection } from "../components/WebDesign/ContactSection";
import FaqSection from "../components/WebDesign/FaqSection";
import { initialFaqs } from "../components/WebDesign/WebDesignData";

export const WebDesignPage = () => {
  const [faqs, setFaqs] = useState(
    initialFaqs.map((faq) => ({ ...faq, isOpen: false }))
  );

  const [, setIsPopUpOpen] = useState(false);

  const handleSetFaqs = (e, key) => {
    e.preventDefault();
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, index) =>
        index === key ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="flex flex-col">
      <HeaderSection />

      <motion.div
        className="space-y-8"
      >
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <HomeSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ServicesSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ImportanceSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <DeliverSection setIsPopUpOpen={setIsPopUpOpen} />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <ContactSection />
        </motion.div>

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <FaqSection faqs={faqs} handleSetFaqs={handleSetFaqs} />
        </motion.div>
      </motion.div>
    </div>
  );
};
