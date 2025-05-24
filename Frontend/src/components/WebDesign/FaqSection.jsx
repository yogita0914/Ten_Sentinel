import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import FAQ from "../../assets/FAQ.png";
import { initialFaqs } from "./WebDesignData";


export default function FaqAccordion_marketing() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-8 px-4 sm:px-8 lg:px-24 m-5 lg:m-10">
      <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Accordion */}
        <div className="space-y-4">
          {initialFaqs.map((faq, index) => (
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
                  className={`w-5 h-5 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96 py-4" : "max-h-0"
                  }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Image (hidden on small screens) */}
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
