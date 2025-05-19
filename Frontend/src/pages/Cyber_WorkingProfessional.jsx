import React, { useRef } from 'react';
import Hero_WorkingProfessional from '../components/Cyber_WorkingProfessional/Hero_WorkingProfessional';
import WorkingSection from '../components/Cyber_WorkingProfessional/WorkingSection';
import GetInTouchForm from '../components/Cyber_WorkingProfessional/GetInTouchForm';
import FaqAccordion_working from '../components/Cyber_WorkingProfessional/FaqAccordion_working';
import CyberSecurityCourse from '../components/Cyber_WorkingProfessional/CyberSecurityCourse';
import Curriculum from '../components/Cyber_WorkingProfessional/Curriculum';
import CybersecuritySection from '../components/Cyber_WorkingProfessional/CybersecuritySection';

const Cyber_WorkingProfessional = () => {
  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      
      <Hero_WorkingProfessional scrollToForm={scrollToForm} />
      <CybersecuritySection />
      <WorkingSection />
      <Curriculum />
      <CyberSecurityCourse />
      <div ref={formRef}>
        <GetInTouchForm />
      </div>
      <FaqAccordion_working />
    </>
  );
};

export default Cyber_WorkingProfessional;
