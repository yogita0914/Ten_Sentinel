import React, { useState, useEffect } from 'react';
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
import ConsultationForm from '../components/LandingPage/ConsultationForm';

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [helpMessage, setHelpMessage] = useState("");

  const isFormValid = name && email && companyName && helpMessage;

  const openModal = () => {
    setScrollPosition(window.scrollY);
    setIsModalOpen(true);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.width = '100%';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  };

  useEffect(() => {
    return () => {
      // Cleanup on component unmount
      if (isModalOpen) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
      }
    };
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    // Form submission logic (e.g. API call)
    setName("");
    setEmail("");
    setCompanyName("");
    setHelpMessage("");
    closeModal();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-br from-gray-50 to-blue-50 relative"
    >
      {/* Modal (Global) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen p-4">
            <ConsultationForm
              name={name}
              email={email}
              companyName={companyName}
              helpMessage={helpMessage}
              isFormValid={isFormValid}
              closeModal={closeModal}
              handleSubmit={handleSubmit}
              setName={setName}
              setEmail={setEmail}
              setCompanyName={setCompanyName}
              setHelpMessage={setHelpMessage}
            />
          </div>
        </div>
      )}

      {/* Components */}
      <Hero openModal={openModal} />
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