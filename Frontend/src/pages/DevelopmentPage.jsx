import React, { useState, useEffect, useRef } from "react";
import HeroSection from "../components/DevelopmentPageComponent/HeroSection";
import ServicesSection from "../components/DevelopmentPageComponent/ServicesSection";
import TechnologiesSection from "../components/DevelopmentPageComponent/TechnologiesSection";
import ProcessSection from "../components/DevelopmentPageComponent/ProcessSection";
import WhyChooseUsSection from "../components/DevelopmentPageComponent/WhyChooseUsSection";
import ProjectsSection from "../components/DevelopmentPageComponent/ProjectsSection";
import TestimonialSection from "../components/LandingPage/Testimonials";
import CallToActionSection from "../components/DevelopmentPageComponent/CallToActionSection";
import ConsultationForm from "../components/LandingPage/ConsultationForm";

const DevelopmentPage = () => {
    const heroRef = useRef(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [helpMessage, setHelpMessage] = useState("");

  const isFormValid = name && email && companyName && helpMessage;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

 useEffect(() => {
    if (isModalOpen && heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isModalOpen]);

  return (
    <div>
      <HeroSection
       ref={heroRef}
        openConsultation={() => setIsModalOpen(true)}
        isModalOpen={isModalOpen}
        modalContent={
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
        }
      />
      <ServicesSection />
      <TechnologiesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialSection />
      <CallToActionSection />
    </div>
  );
};

export default DevelopmentPage;
