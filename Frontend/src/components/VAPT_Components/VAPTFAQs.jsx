// src/components/VAPT/VAPTFAQs.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { vaptContent } from './VAPTData';

export const VAPTFAQs = () => {
  // Initialize FAQs with data from vaptContent and add isOpen state
  const [faqs, setFaqs] = useState(
    vaptContent.faqsData.map(faq => ({ ...faq, isOpen: false }))
  );

  const handleSetFaqs = (e, key) => {
    e.preventDefault();
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, index) =>
        index === key ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <section className="flex flex-col gap-6 items-center">
      <SectionTitle title={"FAQ's"} />

      <ul className="flex flex-col gap-8 w-full">
        {faqs.map((faq, key) => (
          <li
            key={key}
            className="flex flex-col gap-2 bg-gray-100 rounded-lg shadow-xl lg:w-[800px] lg:self-center"
          >
            <div className="flex flex-row items-center justify-between gap-4 text-base md:text-xl px-4 py-2 md:px-8 md:py-6 ">
              <h3>{faq.question}</h3>

              <button
                className="w-6 cursor-pointer"
                onClick={(e) => handleSetFaqs(e, key)}
              >
                {faq.isOpen ? (
                  <ChevronUp size={28} />
                ) : (
                  <ChevronDown size={28} />
                )}
              </button>
            </div>

            {faq.isOpen && (
              <p className="text-sm text-gray-800 bg-gray-50 rounded-b-lg md:text-lg w-full px-4 py-2 md:px-8 md:py-6 ">
                {faq.response}
              </p>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};