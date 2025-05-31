import React from "react";
import CyberSecuritySection from "../components/TrainingComponents/CyberSecuritySection ";
import Rating from "../components/TrainingComponents/Rating";
import TrainingDetails from "../components/TrainingComponents/TrainingDetails";
import ContactUS from "../components/TrainingComponents/ContactUs";
import HeroSection from "../components/cloud-security/HeroSection";
import BackgroundImage from "../assets/security_audits/bg-img.avif";
import { ShieldCheck } from "lucide-react";

const Training = () => {
  return (
    <>
      <HeroSection
        subtitle="Push your limits, transform your mindset — every rep takes you closer to greatness."
        title="Training"
        backgroundImage={BackgroundImage}
        Icon={ShieldCheck}
      />
      <CyberSecuritySection />
      <Rating />
      <TrainingDetails />
      <ContactUS />
    </>
  );
};

export default Training;
