import React from "react";
import CyberSecuritySection from "../components/TrainingComponents/CyberSecuritySection ";
import Rating from "../components/TrainingComponents/Rating";
import TrainingDetails from "../components/TrainingComponents/TrainingDetails";
import HeroSection from "../components/cloud-security/HeroSection";
import BackgroundImage from "../assets/security_audits/bg-img.avif";
import { ShieldCheck } from "lucide-react";
import GetInTouch_Section from "../components/Marketing/GetInTouch_Section";

const Training_and_Certifications = () => {
  return (
    <>
      <HeroSection
        subtitle="Push your limits, transform your mindset — every rep takes you closer to greatness."
        title="Training & Certifications"
        backgroundImage={BackgroundImage}
        Icon={ShieldCheck}
      />
      <CyberSecuritySection />
      <Rating />
      <TrainingDetails />
      <GetInTouch_Section />
    </>
  );
};

export default Training_and_Certifications;
