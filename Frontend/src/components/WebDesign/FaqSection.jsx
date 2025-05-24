import React from "react";
import { SectionTitle } from "./SectionTitle";
import { ChevronDown, ChevronUp } from "lucide-react";

export const FaqSection = ({ faqs, handleSetFaqs }) => (
  <section className="flex flex-col gap-6 py-12 px-6 lg:justify-self-center items-center">
    <SectionTitle title={"FAQ's"} />
    <ul className="flex flex-col gap-8 w-full">
      {faqs.map((faq, key) => (
        <li
          key={key}
          className="flex flex-col gap-2 bg-gray-100 rounded-lg shadow-xl lg:w-[800px]"
        >
          <div className="flex flex-row items-center justify-between gap-4 text-base md:text-xl px-4 py-2 md:px-8 md:py-6 ">
            <h3>{faq.question}</h3>
            <button
              className="w-6 cursor-pointer"
              onClick={(e) => handleSetFaqs(e, key)}
            >
              {faq.isOpen ? <ChevronUp size={28} /> : <ChevronDown size={28} />}
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