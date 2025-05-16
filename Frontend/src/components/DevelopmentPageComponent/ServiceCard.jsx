import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from './motion';

const ServiceCard = ({ icon, title, description, index }) => (
  <motion.div
    className="group bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    custom={index}
  >
    {/* Background Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center text-center">
      <motion.div
        className="text-4xl mb-5 group-hover:text-blue-600 transition-colors duration-300"
        whileHover={{ y: -5 }}
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

export default ServiceCard;
