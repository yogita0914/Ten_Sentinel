import React from "react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import FAQ from "../../assets/FAQ.png";

const faqs = [
    {
      question: "What is VAPT and why does my organization need it?",
      answer:
        "VAPT stands for Vulnerability Assessment and Penetration Testing. It’s a systematic process used to identify, evaluate, and mitigate security vulnerabilities in your IT infrastructure, applications, and networks. Organizations need VAPT to proactively defend against cyberattacks, comply with industry regulations, and ensure the safety of sensitive data.",
    },
    {
      question: "How often should VAPT be performed?",
      answer:
        "The frequency of VAPT depends on the nature of your business, compliance requirements, and the rate of infrastructure changes. As a best practice, organizations should conduct VAPT annually or after any significant system updates, infrastructure changes, or application deployments to ensure consistent security.",
    },
    {
      question: "Will VAPT disrupt my business operations?",
      answer:
        "No, our VAPT process is designed to be non-intrusive. While Penetration Testing involves simulating real-world attacks, we coordinate closely with your team to avoid downtime and minimize impact. Testing can also be scheduled during off-peak hours to ensure business continuity.",
    },
    {
      question:
        "What is the difference between Vulnerability Assessment and Penetration Testing?",
      answer:
        "A Vulnerability Assessment identifies and reports known security flaws, while Penetration Testing goes a step further by actively exploiting those flaws to understand the depth of potential damage. Both are essential—one highlights what’s weak, and the other tests how those weaknesses can be used against you.",
    },
    {
      question: "What do I receive after the VAPT is complete?",
      answer:
        "Upon completion, you'll receive a comprehensive report detailing identified vulnerabilities, categorized by severity (Critical, High, Medium, Low). The report includes technical findings, risk assessments, and tailored remediation guidance. If all issues are resolved, we also provide a Safe-to-Host certificate.",
    },
    {
      question: "Who performs the VAPT audits?",
      answer:
        "Our VAPT audits are carried out by certified cybersecurity experts with extensive experience in manual and automated testing. Our team uses advanced tools along with deep manual analysis to ensure even the most complex vulnerabilities are discovered and properly addressed.",
    },
  
];

export default function FaqAccordionMarketing() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
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
  );
}