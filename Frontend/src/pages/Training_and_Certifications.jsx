import React from "react";
import CyberSecuritySection from "../components/Training_and_Certifications/CyberSecuritySection ";
import Rating from "../components/Training_and_Certifications/Rating";
import TrainingDetails from "../components/Training_and_Certifications/TrainingDetails";
import HeroSection from "../components/cloud-security/HeroSection";
import BackgroundImage from "../assets/security_audits/bg-img.avif";
import { BookOpen } from "lucide-react";
import GetInTouch_Section from "../components/Marketing/GetInTouch_Section";

const Training_and_Certifications = () => {
  return (
    <>
      <HeroSection
        subtitle="Push your limits, transform your mindset — every rep takes you closer to greatness."
        title="Training & Certifications"
        backgroundImage={BackgroundImage}
        Icon={BookOpen}
      />
      <CyberSecuritySection />
      <Rating />
      <TrainingDetails />
      <GetInTouch_Section />
    </>
  );
};

export default Training_and_Certifications;
