import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import HeroSectionBackground from "../../assets/HeroSectionBackground.webm";
import ConsultationForm from './ConsultationForm';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 🛠️ Form States
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [helpMessage, setHelpMessage] = useState('');

  const isFormValid = name && email && companyName && helpMessage;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    // Reset form after submit
    setName('');
    setEmail('');
    setCompanyName('');
    setHelpMessage('');

    // Close modal
    closeModal();
  };

  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden mt-3 z-30">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={HeroSectionBackground}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 h-full flex items-center pt-24 md:pt-32">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full h-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start max-w-full md:max-w-2xl text-center md:text-left mt-10 md:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
            >
              <ShieldCheckIcon className="h-5 w-5 mr-2 text-cyan-300" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white">
                Your Cyber Security is Our Priority
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl mb-6 md:mb-8 leading-snug md:leading-tight text-white font-bold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block">We are the</span>
              <span className="block">Cyber Security Experts</span>
              <span className="block">Helping you stay</span>
              <span className="block">ahead of the Curve!</span>
            </motion.h1>

            <motion.p
              className="text-sm sm:text-base md:text-lg text-blue-100 mb-8 md:mb-10 max-w-xl mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We provide Consultation, Training and Cyber Security Services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-10 items-center"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="bg-white hover:bg-white/80 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center transition-all duration-300 shadow-lg cursor-pointer"
              >
                Get FREE Consultation
                <ArrowRightIcon className="h-5 w-5 ml-2" />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
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
      )}
    </section>
  );
};

export default Hero;