import React from 'react';
import HeroSection from '../components/DevelopmentPageComponent/HeroSection';
import ServicesSection from '../components/DevelopmentPageComponent/ServicesSection';
import TechnologiesSection from '../components/DevelopmentPageComponent/TechnologiesSection';
import ProcessSection from '../components/DevelopmentPageComponent/ProcessSection';
import WhyChooseUsSection from '../components/DevelopmentPageComponent/WhyChooseUsSection';
import ProjectsSection from '../components/DevelopmentPageComponent/ProjectsSection';
import TestimonialSection from "../components/LandingPage/Testimonials";
import CallToActionSection from '../components/DevelopmentPageComponent/CallToActionSection';

const DevelopmentPage = () => {
  return (
    <div>
      <HeroSection />
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