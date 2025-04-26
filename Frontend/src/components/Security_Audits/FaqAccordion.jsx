import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

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
  },
  {
    question: "Why choose TEN Sentinel over other cybersecurity companies?",
    answer: "With over 500 clients, 5,000+ threats solved, and 1,000,000+ users trained, TEN Sentinel offers advanced security solutions with a client-centric, tailored approach and 24/7 support."
  },
  {
    question: "What kind of cybersecurity training programs does TEN Sentinel offer?",
    answer: "They offer Cyber Security Internship Programs and Cyber Security Courses specifically designed for working professionals to enhance their knowledge and readiness."
  },
  {
    question: "How effective are TEN Sentinel’s phishing simulations?",
    answer: "TEN Sentinel’s phishing simulations help organizations reduce phishing click rates significantly, helping businesses avoid major security breaches caused by employee errors."
  },
  {
    question: "What sets TEN Sentinel apart in penetration testing (VAPT)?",
    answer: "TEN Sentinel’s VAPT service not only detects vulnerabilities but also provides a detailed remediation plan, helping companies secure their systems effectively and efficiently."
  },
  {
    question: "How can I contact TEN Sentinel for services?",
    answer: "You can reach TEN Sentinel at info@entrepreneurshipnetwork.net or visit their office at India Accelerator, Noida 201301, UP, India."
  },
  {
    question: "What kind of client success has TEN Sentinel achieved?",
    answer: "Clients like TechSolutions, FinTrust Bank, and HealthCare Plus have seen remarkable improvements like zero compliance findings, reduced phishing rates, and prevention of ransomware attacks."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Frequently Asked Questions (FAQs)</h2>
      <div className="max-w-4xl mx-auto space-y-4">
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
    </section>
  );
}
