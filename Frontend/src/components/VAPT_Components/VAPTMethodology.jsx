// src/components/VAPT/VAPTMethodology.js
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { vaptContent } from './VAPTData';
import { motion } from "framer-motion";

export const VAPTMethodology = () => {
  const { methodology } = vaptContent;

  return (
    <section className="flex flex-col gap-8">
      {/* Title and Description */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4"
      >
        <SectionTitle title={"VAPT Methodology"} />
        <p className="text-sm md:text-base">
          We follow a comprehensive and structured approach to Vulnerability
          Assessment and Penetration Testing (VAPT), designed to provide a
          360-degree view of your organization's security posture. Our
          methodology not only uncovers potential vulnerabilities but also
          offers actionable insights and recommendations to strengthen your
          overall defense. By enabling informed decision-making, we help
          clients minimize their exposure to cyber threats and improve risk
          management.
        </p>
      </motion.div>

      {/* Timeline line for large screens */}
      <ul className="relative flex flex-col gap-4 self-center lg:max-w-[1000px]">
        <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[2px] bg-gray-300 -translate-x-1/2 z-0" />

        {/* Steps with scroll animations */}
        {methodology.map((method, key) => (
          <motion.li
            key={key}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: key * 0.15 }}
            className={`relative z-10 flex flex-col items-center gap-4 border border-gray-400 py-4 px-4 rounded-md shadow-sm w-full lg:max-w-[50%] ${
              key % 2 === 0 ? "lg:self-start" : "lg:self-end"
            }`}
          >
            <div className="flex flex-col gap-2">
              <div className="flex flex-row items-center gap-2">
                {React.cloneElement(method.icon, {
                  className: "text-base text-blue-500",
                })}
                <h3 className="font-semibold text-base lg:text-lg">
                  {method.title}
                </h3>
              </div>
              <p className="text-sm">{method.text}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
