import React from "react";
import { motion } from "framer-motion";
import { Monitor } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export const HeaderSection = () => (
  <header
    className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
    style={{
      backgroundImage: `url(https://promwad.com/sites/default/files/web-development_0.jpg)`,
    }}
  >
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 0.75 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5 }}
      className="absolute inset-0 bg-gradient-to-r from-green-900 to-indigo-900"
    ></motion.div>

    <motion.div
      className="relative z-10 max-w-5xl mx-auto w-full flex flex-col items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="flex justify-center mb-6"
        variants={{
          hidden: { opacity: 0, scale: 0.5 },
          visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
        }}
      >
        <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
          <Monitor className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
        </div>
      </motion.div>

      <motion.h1 className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight" variants={childVariants}>
        Web Design
      </motion.h1>

      <motion.p
        className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
        variants={childVariants}
      >
        Crafting visually stunning and user-friendly digital experiences.
      </motion.p>

      <motion.div className="mt-8" variants={childVariants}>
        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-lg font-medium px-5 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-2px] transition-all duration-300"
        >
          Get Started
        </a>
      </motion.div>
    </motion.div>

    <div className="absolute bottom-0 left-0 right-0 hidden md:block">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
        ></path>
      </svg>
    </div>
  </header>
);
