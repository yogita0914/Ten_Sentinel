import React from "react";
import { motion } from "framer-motion";
import { intro } from "../data/cloudSecurity";
import { Shield } from "lucide-react";

const Introduction = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-6 md:px-10">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        <motion.div
          className="lg:w-1/2 hidden lg:block"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-lg transform -rotate-6"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-indigo-100 rounded-lg transform rotate-6"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                className="w-full h-auto object-cover"
                src={intro.image}
                alt="Cloud Security"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:w-1/2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-4"
          >
            <Shield className="text-blue-600 w-6 h-6" />
            <span className="text-blue-600 uppercase tracking-wider text-sm font-semibold">
              Cloud Protection
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            {intro.title}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 leading-relaxed mb-8"
          >
            {intro.text}
          </motion.p>

          <motion.div variants={itemVariants}>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="bg-blue-50 px-6 py-4 rounded-lg">
                <div className="text-blue-600 font-bold text-xl">99.9%</div>
                <div className="text-gray-600 text-sm">Uptime Guarantee</div>
              </div>
              <div className="bg-blue-50 px-6 py-4 rounded-lg">
                <div className="text-blue-600 font-bold text-xl">24/7</div>
                <div className="text-gray-600 text-sm">Security Monitoring</div>
              </div>
              <div className="bg-blue-50 px-6 py-4 rounded-lg">
                <div className="text-blue-600 font-bold text-xl">500+</div>
                <div className="text-gray-600 text-sm">Clients Protected</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
