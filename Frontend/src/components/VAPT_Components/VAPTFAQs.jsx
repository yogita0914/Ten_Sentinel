// src/components/VAPT/VAPTFAQs.js
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { vaptContent } from './VAPTData';
import { motion } from "framer-motion";

export const VAPTFAQs = () => {
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle title={"FAQ's"} />
      </motion.div>

      <ul className="flex flex-col gap-8 w-full">
        {faqs.map((faq, key) => (
          <motion.li
            key={key}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: key * 0.15 }}
            className="flex flex-col gap-2 bg-gray-100 rounded-lg shadow-xl lg:w-[800px] lg:self-center"
          >
            <div className="flex flex-row items-center justify-between gap-4 text-base md:text-xl px-4 py-2 md:px-8 md:py-6">
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
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="text-sm text-gray-800 bg-gray-50 rounded-b-lg md:text-lg w-full px-4 py-2 md:px-8 md:py-6"
              >
                {faq.response}
              </motion.p>
            )}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
