import React from 'react';
import { motion } from 'framer-motion';
import ServiceCard from './ServiceCard';
import SectionHeader from './SectionHeader';
import { staggerContainer } from './motion'; 

const services = [
  {
    icon: '💻',
    title: 'Web Development',
    description: 'Custom websites and web applications tailored to your business needs with modern frameworks.'
  },
  {
    icon: '📱',
    title: 'Mobile App Development',
    description: 'Cross-platform and native mobile apps for iOS and Android with stunning UI/UX.'
  },
  {
    icon: '⚙️',
    title: 'Custom Software',
    description: 'Tailored solutions designed to streamline your business operations and workflows.'
  },
  {
    icon: '🛒',
    title: 'eCommerce Solutions',
    description: 'Scalable online stores with secure payment gateways and inventory management.'
  },
  {
    icon: '☁️',
    title: 'SaaS Platforms',
    description: 'Cloud-based software solutions with subscription models and multi-tenant architecture.'
  },
  {
    icon: '🔌',
    title: 'API Development',
    description: 'RESTful and GraphQL APIs with comprehensive documentation and security.'
  }
];

const ServicesSection = () => (
  <section className="py-5 md:py-15 bg-gray-100">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        badge="Our Services"
        title="Full-Cycle Development Solutions"
        description="From concept to deployment and beyond, we provide comprehensive development services tailored to your needs."
      />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      >
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} index={index} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;