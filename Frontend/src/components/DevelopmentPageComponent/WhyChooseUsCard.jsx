import React from 'react';
import { motion } from 'framer-motion';

const WhyChooseUsCard = ({ icon, title, description }) => (
  <motion.div
    className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 text-center relative overflow-hidden h-full"
    whileHover={{
      y: -10,
      scale: 1.03,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10 h-full flex flex-col">
      <motion.div
        className="text-4xl mb-4 text-blue-600"
        whileHover={{ rotate: 10, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-lg font-bold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-auto">{description}</p>
    </div>
  </motion.div>
);

export default WhyChooseUsCard;