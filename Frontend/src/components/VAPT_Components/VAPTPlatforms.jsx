// src/components/VAPT/VAPTPlatforms.js
import React from 'react';
import { SectionTitle } from './SectionTitle';
import { vaptContent } from './VAPTData';
import { motion } from 'framer-motion';

export const VAPTPlatforms = () => {
  const { platforms } = vaptContent;

  return (
    <section className="flex flex-col gap-6">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <SectionTitle title="We perform VAPT on the below platforms" />
      </motion.div>

      {/* Platform Grid */}
      <ul className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3 auto-rows-fr">
        {platforms.map((platform, index) => (
          <motion.li
            key={index}
            className="h-full w-full flex flex-col gap-2 justify-center items-center bg-blue-50 p-4 rounded-md shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {React.cloneElement(platform.icon, {
              className: "w-12 h-12 text-blue-500 md:w-20 md:h-20",
            })}
            <h3 className="text-base font-semibold text-center md:text-lg">
              {platform.title}
            </h3>
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
