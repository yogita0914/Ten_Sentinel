import React from 'react';
import { motion } from 'framer-motion';
import heroBg from "../../assets/Development/development-hero-bg.png";
import { buttonVariants } from './motion';

const HeroSection = ({ openConsultation }) => {
  return (
    <section
      className="relative w-full min-h-screen pt-24 sm:pt-28 z-30 bg-cover bg-center bg-no-repeat bg-fixed flex items-center justify-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 backdrop-blur-xs bg-opacity-50 z-10" />

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center py-12 sm:py-20">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transform Your Vision Into
            <br />
            <span className="text-blue-300">Digital Reality</span>
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-blue-100 mt-6 mb-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We build high-performance, scalable applications with cutting-edge technologies and clean code architecture.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 sm:px-8 md:px-12 lg:px-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
           

            <motion.button
              onClick={openConsultation}
              className="bg-white/10 hover:bg-white/20 text-white px-6 py-4 rounded-full font-semibold text-base sm:text-lg border border-white/30 shadow-lg relative overflow-hidden group w-full sm:w-auto"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Free Consultation</span>
              <motion.span
                className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
              />
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;