import React from 'react';
import { motion } from 'framer-motion';
import { CheckBadgeIcon, BoltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <CheckBadgeIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-cyan-500" />,
    title: "Comprehensive Business Solutions",
    description: "Wide range of services to meet all your business requirements."
  },
  {
    icon: <BoltIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-blue-500" />,
    title: "Where Experience Meets Expertise",
    description: "Experience meets expertise at CyberSapiens."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 text-purple-500" />,
    title: "Customer-Centric, Tailored Approach",
    description: "Proactive, customized approach, with exceptional customer service."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 items-center justify-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 xl:w-2/5 w-full text-center lg:text-left max-w-lg mx-auto lg:mx-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-block mb-3 sm:mb-4 md:mb-5"
            >
              <h2 className="text-4xl sm:text-5xl md:text-5xl font-extrabold mt-3 mb-3 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
            </motion.div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 md:mb-8 text-gray-800 leading-tight tracking-tight lg:text-left">
              We deliver Advanced Security for Advanced Threats!
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-5 sm:mb-6 md:mb-8 max-w-md mx-auto lg:mx-0">
              Our team of professionals is skilled to tackle the latest security threats, ensuring your business stays ahead in a cyber-driven world.
            </p>
          </motion.div>

          {/* Features - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 xl:w-3/5 w-full max-w-lg mx-auto lg:max-w-none"
          >
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-4 sm:p-5 md:p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 sm:mr-4 md:mr-5 mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;