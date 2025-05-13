import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import BackgroundImage from "../../assets/bgimg.jpg";

const Hero = ({ openModal }) => {
  return (
    <section
      className="relative w-full min-h-screen pt-24 sm:pt-28 z-30 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-30 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-start px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start max-w-full md:max-w-2xl text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-6 py-1 sm:py-2 mb-6 border border-white/20 whitespace-nowrap"
            >
              <ShieldCheckIcon className="h-4 w-4 sm:h-6 sm:w-6 text-cyan-300 mr-1 sm:mr-2" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white">
                Your Cyber Security is Our Priority
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span>We are the</span><br />
              <span>Cyber Security Experts</span><br />
              <span>Helping you stay</span><br />
              <span>ahead of the Curve!</span>
            </motion.h1>

            <motion.p
              className="text-blue-100 text-lg mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We provide Consultation, Training and Cyber Security Services.
            </motion.p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openModal}
              className="bg-white text-blue-600 px-4 sm:px-8 py-2 sm:py-3 rounded-full font-bold text-sm sm:text-lg flex items-center transition-all duration-300 shadow-lg whitespace-nowrap"
            >
              Get FREE Consultation
              <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-1 sm:ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
