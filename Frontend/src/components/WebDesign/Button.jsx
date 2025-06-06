import React from 'react';
import { motion } from 'framer-motion';

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

export const Button = ({ text, onClick }) => {
  return (
    <motion.button
      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white w-fit px-4 py-2 rounded-md cursor-pointer self-center md:text-xl md:py-4 md:px-8 hover:from-blue-400 hover:to-indigo-500 hover:shadow-md"
      onClick={onClick}
      variants={buttonVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {text}
    </motion.button>
  );
};
