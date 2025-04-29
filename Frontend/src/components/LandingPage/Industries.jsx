import React from 'react';
import { motion } from 'framer-motion';
import {
  AcademicCapIcon,
  ComputerDesktopIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const industries = [
  { name: "Education", icon: <AcademicCapIcon className="h-10 w-10 text-purple-600" />, color: "bg-purple-100" },
  { name: "Technology", icon: <ComputerDesktopIcon className="h-10 w-10 text-green-600" />, color: "bg-green-100" },
  { name: "Service", icon: <ServerIcon className="h-10 w-10 text-red-600" />, color: "bg-red-100" }
];

const platforms = [
  "Network Security",
  "Web Application Security",
  "Android Security",
  "API Security",
  "Cloud Security"
];

export default function Industries() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="industries">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Whether it be ↓
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1 }
              }
            }}
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                whileHover={{
                  scale: 1.05,
                  y: -3,
                  boxShadow: "0 5px 15px -3px rgba(0, 0, 0, 0.1)"
                }}
                className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-200 rounded-full text-sm sm:text-base text-black font-semibold transition-all cursor-pointer whitespace-nowrap"
              >
                {platform}
              </motion.div>
            ))}
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 mb-10 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Services by Industry
          </h2>
        </motion.div>

        {/* Industries container */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full max-w-2xl sm:max-w-4xl lg:max-w-6xl">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -12,
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                }}
                className={`${industry.color} p-6 sm:p-8 rounded-3xl shadow-lg hover:shadow-2xl flex flex-col justify-center items-center text-center transition-all cursor-pointer h-full min-h-[200px]`}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                  {industry.icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-gray-800">{industry.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}