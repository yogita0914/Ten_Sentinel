import React from 'react';
import { motion } from 'framer-motion';
import { CheckBadgeIcon, BoltIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: <CheckBadgeIcon className="h-6 w-6 sm:h-8 sm:w-8 text-cyan-500" />,
    title: "Comprehensive Business Solutions",
    description: "Wide range of services to meet all your Business Requirements."
  },
  {
    icon: <BoltIcon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-500" />,
    title: "Where Experience Meets Expertise",
    description: "Experience meets Expertise at CyberSapiens."
  },
  {
    icon: <UserGroupIcon className="h-6 w-6 sm:h-8 sm:w-8 text-purple-500" />,
    title: "Customer-Centric, Tailored Approach",
    description: "Proactive, Customized Approach, with Exceptional Customer Service."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full text-center lg:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block mb-4 sm:mb-6"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full">
                Why Choose Us
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent leading-tight">
              We deliver Advanced Security for Advanced Threat!
            </h2>

            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              We provide unique services to match the current trends in the industry. Our team of professionals are skilled to take care of your security threats in this cyber world.
            </p>

            <div className="flex justify-center lg:justify-start">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full font-bold text-base sm:text-lg shadow-lg transition-all"
              >
                Call Us Now
              </motion.button>
            </div>
          </motion.div>

          {/* Features - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-md mx-auto lg:max-w-none">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-5 sm:p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-3 sm:mr-4 mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2 text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Empty card to balance the grid (hidden on mobile) */}
              <div className="hidden sm:block opacity-0 h-0 pointer-events-none">
                <div className="bg-white p-6 rounded-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;