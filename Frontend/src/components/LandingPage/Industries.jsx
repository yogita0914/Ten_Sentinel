import React from 'react';
import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  BanknotesIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  ComputerDesktopIcon,
  CogIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

const industries = [
  { name: "Healthcare", icon: <BuildingOfficeIcon className="h-8 w-8 text-cyan-600" />, color: "bg-cyan-100" },
  { name: "Banking", icon: <BanknotesIcon className="h-8 w-8 text-blue-600" />, color: "bg-blue-100" },
  { name: "Education", icon: <AcademicCapIcon className="h-8 w-8 text-purple-600" />, color: "bg-purple-100" },
  { name: "Government", icon: <BuildingLibraryIcon className="h-8 w-8 text-indigo-600" />, color: "bg-indigo-100" },
  { name: "Technology", icon: <ComputerDesktopIcon className="h-8 w-8 text-green-600" />, color: "bg-green-100" },
  { name: "Manufacturing", icon: <CogIcon className="h-8 w-8 text-orange-600" />, color: "bg-orange-100" },
  { name: "Service", icon: <ServerIcon className="h-8 w-8 text-red-600" />, color: "bg-red-100" }
];

const platforms = [
  "Network Security",
  "Web Application Security",
  "Android Security",
  "API Security",
  "Thin Client Security",
  "Cloud Security"
];

export default function Industries() {
  return (
    <section className="py-16 sm:py-20 bg-white" id="industries">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Whether it be ↓
          </h2>

          <motion.div
            className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1
                }
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
                className="px-4 py-2 sm:px-5 sm:py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm sm:text-base text-gray-800 font-medium transition-all cursor-pointer"
              >
                {platform}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl md:text-2xl font-bold text-gray-600"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-4 mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Services by Industry
            </h2>
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              className={`${industry.color} p-4 sm:p-5 rounded-xl shadow-sm hover:shadow-md flex flex-col items-center text-center transition-all cursor-pointer`}
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-inner">
                {industry.icon}
              </div>
              <h4 className="text-sm sm:text-base font-medium text-gray-800">{industry.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}