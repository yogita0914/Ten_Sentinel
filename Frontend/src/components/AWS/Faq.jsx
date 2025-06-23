import React from 'react'
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FAQ from "../../assets/FAQ.png";

const faqs = [
  {
    question: "What is AWS Penetration Testing?",
    answer: "AWS Penetration Testing is the process of simulating cyberattacks on your AWS infrastructure to identifyvulnerabilities and misconfigurations."
  },
  {
    question: "Is penetration testing allowed on AWS?",
    answer:  <>
      Yes, AWS allows penetration testing on certain services without prior approval. However, it's important to follow their{" "}
      <a
        href="https://aws.amazon.com/security/penetration-testing/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        https://aws.amazon.com/security/penetration-testing/
      </a>.
    </>
  },
  {
    question: "Which tools can I use for AWS testing?",
    answer: "Common tools include Prowler, Kube-Bench, Pacu, ScoutSuite, and CloudSploit for auditing and security assessments."
  },
  {
    question: "Can I automate AWS security testing?",
    answer: "Yes, tools like AWS Inspector, Prowler CI/CD integration, and custom Lambda scripts allow you to automate testing processes."
  },
  {
    question: "What are the main objectives of AWS Pen Test ?",
    answer: "The primary objectives are to identify vulnerabilities, assess the effectiveness of security controls, and provide actionable  recommendations to enhance your AWS environment's security."
  },
  {
    question: "How can AWS penetration testing enhance cloud security?",
    answer: "AWS penetration testing helps organizations proactively identify vulnerabilities, apply security patches, and strengthen overall defenses. CyberSapiens provides detailed reports and recommendations to enhance your AWS security posture."
  }
];

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
      const toggle = (index) => {
        setOpenIndex((prev) => (prev === index ? null : index));
      };
    
  return (
    <>
      <section className="bg-white py-8 px-0 sm:px-12 lg:px-6 m-5 lg:m-10">
      <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start m-10">
        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 min-w-[20px] min-h-[20px] transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`px-6 overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
                  }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image - hidden on small screens */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src={FAQ}
            alt="FAQ Illustration"
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
    </>
  )
}

export default Faq;
