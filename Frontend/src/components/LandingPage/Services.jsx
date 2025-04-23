import React from 'react';
import { motion } from 'framer-motion';
import { FingerPrintIcon, AcademicCapIcon, DocumentCheckIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: <DocumentCheckIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />,
    title: "ISO 27001 Certification",
    description: "Get ISO 27001 Certified in the easiest way and stand out from your competitors.",
    color: "from-cyan-400 to-blue-500"
  },
  {
    icon: <FingerPrintIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />,
    title: "VAPT",
    description: "Identify and remediate the security vulnerabilities on your systems and protect your business from cyber attacks.",
    color: "from-blue-400 to-indigo-500"
  },
  {
    icon: <AcademicCapIcon className="h-10 w-10 sm:h-12 sm:w-12 text-white" />,
    title: "Training",
    description: "Employees are the weakest link of any Organisation's Cyber Security. Train Your Employee to be more Cyber Secure.",
    color: "from-purple-400 to-violet-500"
  }
];

const ServiceCard = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -15,
        scale: 1.03,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
      }}
      className={`bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-t-4 border-${service.color.split(' ')[1]}`}
    >
      <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-4 sm:mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10`}>
        {service.icon}
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800">{service.title}</h3>
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>
      <motion.a
        href="#"
        className="inline-flex items-center font-medium group"
        whileHover={{ x: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <span className={`bg-gradient-to-r ${service.color} bg-clip-text text-transparent text-sm sm:text-base`}>
          Learn more
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 sm:h-5 sm:w-5 ml-1 transition-transform group-hover:translate-x-1 ${service.color.includes('cyan') ? 'text-cyan-500' : service.color.includes('blue') ? 'text-blue-500' : 'text-purple-500'}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </motion.a>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16"
        >
          {/* Optional: Add a responsive title here if needed */}
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;