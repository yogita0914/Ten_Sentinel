import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/LandingPage/Hero';
import Services from '../components/LandingPage/Services';
import Stats from '../components/LandingPage/Stats';
import WhyChooseUs from '../components/LandingPage/WhyChooseUs';
import ServiceTouchPoints from '../components/LandingPage/ServiceTouchPoints';
import Industries from '../components/LandingPage/Industries';
import Testimonials from '../components/LandingPage/Testimonials';
import FreeTrial from '../components/LandingPage/FreeTrial';
import Newsletter from '../components/LandingPage/Newsletter';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren"
    }
  }
};


const LandingPage = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <Hero />
      <Services />
      <Stats />
      <WhyChooseUs />
      <ServiceTouchPoints />
      <Industries />
      <Testimonials />
      <FreeTrial />
      <Newsletter />
    </motion.div>
  );
};

export default LandingPage;