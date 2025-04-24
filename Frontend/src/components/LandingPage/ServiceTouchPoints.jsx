import React from 'react';
import { motion } from 'framer-motion';
import { EnvelopeIcon, ShieldCheckIcon, DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: <EnvelopeIcon className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-500" />,
    title: "Phishing Simulation",
    description: "Phish your Employee to test if they are Phish Proof. Get a Free Phishing Simulation Done",
    color: "bg-cyan-100",
    link: "Read More →"
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 sm:h-10 sm:w-10 text-blue-500" />,
    title: "Cyber Attack Analysis",
    description: "Faced cyber or malware attack? Our team of Cyber Experts can assist you to recover from such attacks.",
    color: "bg-blue-100",
    link: "Read More →"
  },
  {
    icon: <DocumentMagnifyingGlassIcon className="h-8 w-8 sm:h-10 sm:w-10 text-purple-500" />,
    title: "VAPT",
    description: "It helps to identify loopholes in your Systems/Applications/Networks, etc., & analyze the potential loss",
    color: "bg-purple-100",
    link: "Read More →"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{
        y: -10,
        scale: 1.02,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      className={`${service.color} p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden relative group`}
    >
      {/* Animated background element */}
      <motion.div
        className="absolute -right-8 -top-8 w-24 h-24 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-300"
        style={{ backgroundColor: service.color.replace('bg-', '').replace('-100', '-500') }}
        initial={{ scale: 0 }}
        whileHover={{ scale: 1.5 }}
      />

      <div className="relative z-10">
        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-white shadow-sm flex items-center justify-center mb-4 sm:mb-6">
          {service.icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{service.title}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">{service.description}</p>
        <motion.a
          href="#"
          className="inline-flex items-center font-medium group"
          whileHover={{ x: 5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="text-cyan-600 group-hover:text-cyan-700 transition-colors text-sm sm:text-base">
            {service.link}
          </span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 ml-1 text-cyan-500 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  );
};

export default function ServiceTouchPoints() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white" id="services">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="inline-block mb-3 sm:mb-4"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-3 py-1 sm:px-4 sm:py-2 rounded-full">
              Effortlessly secure your Business with our Cyber Security Solutions!
            </span>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Our Service Touch Points
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}