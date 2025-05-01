import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import BackgroundImage from "../../assets/backgroundImage.avif";
import ConsultationForm from "./ConsultationForm";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [helpMessage, setHelpMessage] = useState("");

  const isFormValid = name && email && companyName && helpMessage;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    setName("");
    setEmail("");
    setCompanyName("");
    setHelpMessage("");
    closeModal();
  };

  return (
    <section
      className="relative w-full min-h-screen pt-24 sm:pt-28 z-30 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BackgroundImage})`,
      }}
    >
      {/* Background Video */}

      {/* Content */}
      <div className="relative z-30 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl 2xl:max-w-[1280px] flex flex-col-reverse md:flex-row items-center md:items-start justify-center md:justify-start xl:ml-0 xl:mr-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start max-w-full md:max-w-2xl text-center md:text-left px-4 sm:px-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20"
            >
              <ShieldCheckIcon className="h-8 w-8 mr-2 text-cyan-300" />
              <span className="text-xs sm:text-sm font-medium tracking-wide text-white">
                Your Cyber Security is Our Priority
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl mb-6 md:mb-8 leading-snug md:leading-tight text-white font-bold"
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
                  boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
                className="bg-white hover:bg-white/80 text-blue-600 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg flex items-center transition-all duration-300 shadow-lg cursor-pointer"
              >
                Get FREE Consultation
                <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
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
