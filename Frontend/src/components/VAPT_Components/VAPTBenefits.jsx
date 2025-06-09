// src/components/VAPT/VAPTBenefits.js
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { vaptContent } from './VAPTData';
import { motion } from "framer-motion";

export const VAPTBenefits = () => {
  const { benefits } = vaptContent;

  return (
    <section className="bg-blue-100 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] flex flex-col items-center py-4">
      {/* Animated section title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle title={"Our Key Benefits!"} />
      </motion.div>

      {/* Benefit cards */}
      <ul className="flex flex-col gap-8 p-6 lg:flex-row lg:px-12 xl:px-20">
        {benefits.map((benefit, key) => (
          <motion.li
            key={key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: key * 0.15 }}
            className="flex flex-col justify-center items-center bg-white p-4 gap-4 border border-gray-400 rounded-sm shadow-sm md:p-12 max-w-[600px]"
          >
            <div className="flex flex-col justify-center items-center">
              {React.cloneElement(benefit.icon, {
                className: "w-12 h-12 text-blue-500 md:w-20 md:h-20",
              })}
              <h3 className="text-lg font-semibold md:text-xl">
                {benefit.title}
              </h3>
            </div>

            <p className="font-light text-sm md:text-base text-center">
              {benefit.text}
            </p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
