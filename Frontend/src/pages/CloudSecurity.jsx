import React, { useEffect, useState, useRef } from "react";
import HeroSection from "../components/cloud-security/HeroSection";
import Introduction from "../components/cloud-security/Introduction";
import WhatCloudSecurity from "../components/cloud-security/WhatCloudSecurity";
import KeyFocus from "../components/cloud-security/KeyFocus";
import CloudServices from "../components/cloud-security/CloudServices";
import CallToAction from "../components/cloud-security/CallToAction";
import Benefits from "../components/cloud-security/Benefits";
import { hero as cloudHero } from "../components/data/cloudSecurity";
import Faq from "../components/cloud-security/Faq";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronRight, ChevronDown, ShieldCheck } from "lucide-react";
import FAQ from "../assets/FAQ.png";

const CloudSecurity = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const answerVariants = {
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
  };

  // Optional: fade/slide variant for entire FAQ container
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const initialFaqs = [
    {
      question: "What is Cloud Security?",
      answer:
        "Cloud Security involves protecting cloud-based infrastructure, applications, and data using a combination of policies, controls, and technologies. TEN Sentinel ensures that cloud environments are safe from data breaches, intrusions, and misconfigurations.",
    },
    {
      question: "Which cloud platforms does TEN Sentinel support?",
      answer:
        "TEN Sentinel supports AWS, Microsoft Azure, and Google Cloud Platform (GCP), offering tailored security solutions for each to address platform-specific threats and configurations.",
    },
    {
      question: "How does TEN Sentinel help startups secure their cloud?",
      answer:
        "We design practical, scalable security strategies based on the startup’s architecture and growth stage — including secure IAM practices, encryption, real-time monitoring, and automated compliance.",
    },
    {
      question:
        "What makes TEN Sentinel different from generic cloud security tools?",
      answer:
        "Unlike one-size-fits-all tools, TEN Sentinel provides entrepreneur-focused solutions with expert guidance, deep cloud platform knowledge, and personalized risk assessments designed for dynamic business environments.",
    },
    {
      question: "Does TEN Sentinel offer compliance support?",
      answer:
        "Yes, we help businesses align with regulations like ISO 27001, GDPR, and HIPAA through policy design, risk management, and technical controls — especially for industries like fintech, healthtech, and SaaS.",
    },
    {
      question: "Can I request a free cloud security assessment?",
      answer:
        "Absolutely. TEN Sentinel offers a no-risk cloud security assessment. If vulnerabilities are found, we deliver a detailed report. If none are detected, you gain peace of mind — at no cost.",
    },
  ];
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

      {/* FAQ Section */}

      <motion.section
        className="bg-white py-12 px-4 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-gray-800 mb-12">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Accordion */}
          <div className="space-y-5">
            {initialFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
                  >
                    {faq.question}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={answerVariants}
                        className="px-6 overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm py-3">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Image (hidden on small screens) */}
          <div className="hidden md:flex justify-center items-start">
            <img
              src={FAQ}
              alt="FAQ Illustration"
              className="max-h-[400px] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default CloudSecurity;
