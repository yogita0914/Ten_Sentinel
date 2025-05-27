import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { buttonVariants } from './motion';

const CallToActionSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-blue-800 mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        viewport={{ once: true }}
      >
        Ready to Elevate Your Digital Presence?
      </motion.h2>
      <motion.p
        className="text-lg text-blue-600 mb-10 max-w-xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.6, -0.05, 0.01, 0.99] }}
        viewport={{ once: true }}
      >
        Let's discuss your project and how our expertise can help you achieve your business goals.
      </motion.p>
      <motion.div
        className="flex justify-center gap-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
        viewport={{ once: true }}
      >
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg shadow-lg relative overflow-hidden group whitespace-nowrap"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <span className="relative z-10">Get a Free Quote</span>
          <motion.span
            className="absolute inset-0 bg-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
          />
        </motion.button>

        <Link to="/contact" className="relative z-10">
          <motion.button
            className="bg-white hover:bg-gray-100 text-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg border border-blue-200 shadow-sm relative overflow-hidden group whitespace-nowrap"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Contact Us
            <motion.span
              className="absolute inset-0 bg-blue-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
            />
          </motion.button>
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CallToActionSection;