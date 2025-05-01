import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";
import security_bg from "../../assets/security_bg.jpg"; // Adjust path if needed
import FAQ from "../../assets/FAQ.png"; // Adjust path if needed

const faqs = [
  {
    question: "What services does TEN Sentinel provide?",
    answer: "TEN Sentinel provides Cyber Security Consultation, Training, ISO 27001 Certification support, Vulnerability Assessment and Penetration Testing (VAPT), Phishing Simulation, and Cyber Attack Analysis."
  },
  {
    question: "What is the ISO 27001 Certification service?",
    answer: "TEN Sentinel makes it easy for businesses to get ISO 27001 certified, helping them stand out from competitors with improved information security management."
  },
  {
    question: "How does TEN Sentinel help prevent cyber attacks?",
    answer: "Through VAPT services, TEN Sentinel identifies vulnerabilities in systems, networks, and applications to prevent potential cyber attacks before they happen."
  },
  {
    question: "Why is employee training important in cybersecurity?",
    answer: "Employees are often the weakest link in security. TEN Sentinel's specialized training programs help employees recognize and resist phishing and other cyber threats."
  },
  {
    question: "What industries does TEN Sentinel serve?",
    answer: "TEN Sentinel serves various industries including Healthcare, Banking, Education, Government, Technology, Manufacturing, and Service sectors."
  },
  {
    question: "What is a No-Risk Security Assessment?",
    answer: "TEN Sentinel offers a No-Risk Assessment where they attempt ethical hacking. If vulnerabilities are found, detailed reports are shared. If not, it confirms your system’s strength — and you pay nothing."
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
        Frequently Asked Questions (FAQs)
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
                className="flex  justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
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

        {/* Left Side - Image (hidden on small devices) */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src={FAQ}
            alt="FAQ Illustration"
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
