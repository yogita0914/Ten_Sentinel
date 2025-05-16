import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from './motion';

const SectionHeader = ({ badge, title, description }) => (
  <motion.div
    className="text-center mb-10 md:mb-16"
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <motion.span className="inline-block bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-sm font-semibold mb-4">
      {badge}
    </motion.span>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
    <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>
  </motion.div>
);

export default SectionHeader;