import { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import React from "react";

const faqs = [
  {
    question: "Ethical Hacking",
    answer: `Want to become a Certified Ethical Hacker?

                Our Ethical Hacking course is designed to prepare for the best of best Ethical Hackers.

                This course contains everything from the scratch and covers exploiting many real-time vulnerabilities. Mainly for the ones who have less exposure to Cyber Security and Ethical Hacking, making it the perfect certification to learn and gain a career.

                At a high level, it covers:

                Android Hacking
                System Hacking
                WiFi Hacking
                Social Media Hacking
                Web Hacking
                Bug Bounty Hunting
                Also, get to work in a real-time environment.

                This course will also help you to earn from bug bounty programs.

                Build your Cyber career now…`,
    link: "/intern-trainee",
    linkText: "Click here to know the training modules!",
  },
  {
    question: "Cyber Security & Threat Hunting",
    answer: `Learn Cyber Security, Threat Hunting & Bug Bounty

                The CSTH training is a career-oriented and job-guarantee program to help candidates understand Cyber Security and all of its domains.

                The training covers both the Technical and Compliance side, wherein the Technical module covers Network Security, SOC, Digital Forensics, Web Application security and 30+ Web Vulnerabilities and the Compliance modules cover the Standards – ISO 27001:2013, PCIDSS, HIPAA, SOX), Security Auditing – SOC1,2&3, Compliance Management, Risk Management, Cyber Law, etc.,

                Overall, this course curriculum covers every aspect of Cyber Security.

                This training comes with an Internship opportunity that will help you to gain real-time experience and with this training and internship, you will not be a Fresher anymore. 

                Build your Cyber career now…`,
    link: "/intern-trainee",
    linkText:
      "Click here to know the details about the Internship and Training opportunity!",
  },
];

export default function TrainingDetails() {
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const getMaxHeight = (index) => {
    if (openIndex === index && contentRefs.current[index]) {
      return contentRefs.current[index].scrollHeight + 48; // increased padding space
    }
    return 0;
  };

  return (
    <section className="bg-white py-6 m-5 lg:m-10 px-0">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start m-10">
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-800 leading-tight">
          <span>Join us NOW</span>
          <br />
          {/* className="whitespace-nowrap" */}
          <span>to become a Cyber Professional!</span>
          <br />
          <span>The World Needs YOU.....</span>
        </h1>

        {/* FAQ Accordion */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border border-gray-200 rounded-lg overflow-hidden transition-all duration-500 ${
                openIndex === index
                  ? "shadow-lg bg-gray-50 ring-1 ring-blue-100"
                  : "shadow-sm"
              } hover:shadow-md`}
            >
              <button
                onClick={() => toggle(index)}
                className="cursor-pointer flex justify-between items-center w-full px-6 py-4 bg-gray-50 font-medium text-blue-400 text-sm sm:text-base md:text-lg text-left focus:outline-none"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 sm:h-6 sm:w-6 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id={`faq-answer-${index}`}
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-8 text-sm sm:text-base md:text-lg text-gray-600 transition-all duration-500 ease-in-out"
                style={{
                  maxHeight: getMaxHeight(index),
                  opacity: openIndex === index ? 1 : 0,
                  transform:
                    openIndex === index ? "translateY(0)" : "translateY(-10px)",
                  paddingTop: openIndex === index ? "2rem" : "0",
                  paddingBottom: openIndex === index ? "2.5rem" : "0",
                  whiteSpace: "pre-line",
                }}
              >
                {faq.answer}
                <div className="mt-8 text-center pt-4 pb-6">
                  <Link
                    to={faq.link}
                    className="text-blue-500 hover:text-blue-700 font-medium no-underline"
                    style={{ padding: "0.75rem 0" }}
                  >
                    {faq.linkText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
