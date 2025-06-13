import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Faq from "../../assets/cloud-security/faq.avif";
import React from "react";



export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-5 px-6 m-0 lg:m-10 sm:px-12 lg:px-24">
      <h2 className="text-xl lg:text-4xl font-bold text-center text-gray-800 mb-10">
        Cloud Security FAQs – TEN Sentinel
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start m-10">
        {/* Right Side - FAQ Accordion */}
        <div className="space-y-4 mt-10">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="text-sm md:text-lg flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 min-w-[1.5rem] min-h-[1.5rem] transform transition-transform duration-300 ${
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
        <div className="hidden md:flex">
          <img
            src={Faq}
            alt="FAQ Illustration"
            className="w-full h-auto object-cover object-center rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
