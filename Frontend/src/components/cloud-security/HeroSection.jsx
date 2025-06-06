import React from "react";
import { motion } from "framer-motion";

const HeroSection = ({
  backgroundImage,
  title,
  subtitle,
  Icon,
  showButton = true,
}) => {
  const handleClick = (e) => {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-green-900 to-indigo-900"
      ></motion.div>

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
            <Icon className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
        >
          {subtitle}
        </motion.p>

        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8"
          >
            <button
              onClick={handleClick}
              className="cursor-pointer inline-block text-white text-sm md:text-lg font-medium px-5 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-blue-400/30 hover:-translate-y-2 transition-all duration-300"
              style={{
                backgroundImage:
                  "linear-gradient(109.6deg, rgba(166,64,221,1) 21.2%, rgba(102,165,235,1) 74.4%)",
              }}
            >
              Get Started
            </button>
          </motion.div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

export default HeroSection;
