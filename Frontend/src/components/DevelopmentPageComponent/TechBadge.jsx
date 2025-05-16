import React from 'react';
import { motion } from 'framer-motion';

const TechBadge = ({ name, logo }) => (
  <motion.div
    className="flex items-center bg-white px-4 py-2 rounded-lg shadow-xs border border-gray-100 cursor-default group"
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{
      y: -5,
      scale: 1.05,
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }}
  >
    <motion.img
      src={logo}
      alt={name}
      className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300"
    />
    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
      {name}
    </span>
  </motion.div>
);

export default TechBadge;