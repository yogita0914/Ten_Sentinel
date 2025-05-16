import React from 'react';
import { motion } from 'framer-motion';
import { cardVariants, badgeVariants } from './motion';

const ProjectCard = ({ title, image, description, technologies, link }) => (
  <motion.div
    className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 relative h-full"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
  >
    <div className="relative h-56 overflow-hidden">
      <motion.img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.5 }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-3 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-5">
        {technologies.map((tech, index) => (
          <motion.span
            key={index}
            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium cursor-default"
            variants={badgeVariants}
            whileHover="hover"
          >
            {tech}
          </motion.span>
        ))}
      </div>
      <motion.a
        href={link}
        className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        View Project
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </motion.a>
    </div>
  </motion.div>
);

export default ProjectCard;