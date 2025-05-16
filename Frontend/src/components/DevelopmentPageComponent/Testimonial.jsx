import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from './motion';

const Testimonial = ({ quote, author, role, avatar }) => (
  <motion.div
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover={{
      y: -5,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <div className="flex items-center mb-4">
      <motion.img
        src={avatar}
        alt={author}
        className="w-12 h-12 rounded-full mr-4 object-cover"
        whileHover={{ rotate: 5, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <div>
        <div className="font-bold text-gray-800">{author}</div>
        <div className="text-gray-500 text-sm">{role}</div>
      </div>
    </div>
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <div className="flex mt-auto text-yellow-400">
      {[...Array(5)].map((_, i) => (
        <motion.svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </motion.svg>
      ))}
    </div>
  </motion.div>
);

export default Testimonial;