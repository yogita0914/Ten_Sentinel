import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "What is Cloud Security?",
    answer:
      "Cloud Security involves protecting cloud-based infrastructure, applications, and data using a combination of policies, controls, and technologies. TEN Sentinel ensures that cloud environments are safe from data breaches, intrusions, and misconfigurations."
  },
  {
    question: "Which cloud platforms does TEN Sentinel support?",
    answer:
      "TEN Sentinel supports AWS, Microsoft Azure, and Google Cloud Platform (GCP), offering tailored security solutions for each to address platform-specific threats and configurations."
  },
  {
    question: "How does TEN Sentinel help startups secure their cloud?",
    answer:
      "We design practical, scalable security strategies based on the startup’s architecture and growth stage — including secure IAM practices, encryption, real-time monitoring, and automated compliance."
  },
  {
    question: "What makes TEN Sentinel different from generic cloud security tools?",
    answer:
      "Unlike one-size-fits-all tools, TEN Sentinel provides entrepreneur-focused solutions with expert guidance, deep cloud platform knowledge, and personalized risk assessments designed for dynamic business environments."
  },
  {
    question: "Does TEN Sentinel offer compliance support?",
    answer:
      "Yes, we help businesses align with regulations like ISO 27001, GDPR, and HIPAA through policy design, risk management, and technical controls — especially for industries like fintech, healthtech, and SaaS."
  },
  {
    question: "Can I request a free cloud security assessment?",
    answer:
      "Absolutely. TEN Sentinel offers a no-risk cloud security assessment. If vulnerabilities are found, we deliver a detailed report. If none are detected, you gain peace of mind — at no cost."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-5 px-6 m-0 lg:m-10 sm:px-12 lg:px-24">
      <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
        Cloud Security FAQs – TEN Sentinel
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start m-10">
        {/* Right Side - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Side - Image */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src="https://img.freepik.com/premium-vector/cyber-security-logo-with-keyhole-symbol-keyhole_602671-1674.jpg?ga=GA1.1.1858429720.1745583539&semt=ais_hybrid&w=740"
            alt="FAQ Illustration"
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
