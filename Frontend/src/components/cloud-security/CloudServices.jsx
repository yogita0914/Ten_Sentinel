import React, { useState } from "react";
import { motion } from "framer-motion";
import { cloudServices } from "../data/cloudSecurity";

const CloudServices = () => {
  const [expandedIndexes, setExpandedIndexes] = useState({});

  const toggleReadMore = (index) => {
    setExpandedIndexes((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const getTruncatedText = (text, limit = 150) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative py-24 overflow-hidden bg-green-50">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-white -z-10"></div>
      <div className="absolute right-0 top-0 w-1/3 h-1/3 bg-blue-100 rounded-bl-full opacity-30 -z-10"></div>
      <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-indigo-100 rounded-tr-full opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Cloud Security Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive protection for your cloud infrastructure with cutting-edge security solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {cloudServices.map((service, index) => {
            const isExpanded = expandedIndexes[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                }}
                className="rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-500 group h-full flex flex-col"
                style={{ backgroundColor: "#d8f3dc" }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-100 rounded-xl text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <div className="text-lg md:text-4xl">{service.icon}</div>
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.name}
                  </h3>
                </div>

                <p className="text-gray-600 flex-grow whitespace-pre-line">
                  <span className="block lg:hidden">
                    {isExpanded
                      ? service.description
                      : getTruncatedText(service.description)}
                  </span>
                  <span className="hidden lg:block">
                    {service.description}
                  </span>
                </p>

                <div className="mt-4">
                  <button
                    onClick={() => toggleReadMore(index)}
                    className="text-blue-600 font-medium focus:outline-none hover:text-blue-700 transition-colors duration-300 block lg:hidden"
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <a
                    href="#"
                    className="text-blue-600 font-medium flex items-center justify-center group-hover:text-blue-700 transition-colors duration-300"
                  >
                    Learn more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CloudServices;
