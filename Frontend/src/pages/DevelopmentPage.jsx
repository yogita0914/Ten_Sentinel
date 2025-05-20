import React, { useState } from 'react';
import HeroSection from '../components/DevelopmentPageComponent/HeroSection';
import ServicesSection from '../components/DevelopmentPageComponent/ServicesSection';
import TechnologiesSection from '../components/DevelopmentPageComponent/TechnologiesSection';
import ProcessSection from '../components/DevelopmentPageComponent/ProcessSection';
import WhyChooseUsSection from '../components/DevelopmentPageComponent/WhyChooseUsSection';
import ProjectsSection from '../components/DevelopmentPageComponent/ProjectsSection';
import TestimonialSection from "../components/LandingPage/Testimonials";
import CallToActionSection from '../components/DevelopmentPageComponent/CallToActionSection';
import ConsultationForm from '../components/LandingPage/ConsultationForm';

const DevelopmentPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [helpMessage, setHelpMessage] = useState('');

  const isFormValid = name && email && companyName && helpMessage;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div>
      <HeroSection openConsultation={() => setIsModalOpen(true)} />
      <ServicesSection />
      <TechnologiesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialSection />
      <CallToActionSection />

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[9999]">
          <ConsultationForm
            name={name}
            email={email}
            companyName={companyName}
            helpMessage={helpMessage}
            isFormValid={isFormValid}
            closeModal={() => setIsModalOpen(false)}
            handleSubmit={handleSubmit}
            setName={setName}
            setEmail={setEmail}
            setCompanyName={setCompanyName}
            setHelpMessage={setHelpMessage}
          />
        </div>
      )}
    </div>
  );
};

export default DevelopmentPage;
