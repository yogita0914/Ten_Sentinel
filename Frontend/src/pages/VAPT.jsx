import React from "react";
import { VAPTAbout } from "../components/VAPT_Components/VAPTAbout";
import { VAPTPlatforms } from "../components/VAPT_Components/VAPTPlatforms";
import { VAPTMethodology } from "../components/VAPT_Components/VAPTMethodology";
import { VAPTBenefits } from "../components/VAPT_Components/VAPTBenefits";
import { VAPTContactForm } from "../components/VAPT_Components/VAPTContactForm";
import VAPTFAQs from "../components/VAPT_Components/VAPTFAQs";
import Testimonials from "../components/LandingPage/Testimonials";
import HeroSection from "../components/cloud-security/HeroSection";
import hero from "../assets/Vapt/hero.avif";
import { ShieldAlert  } from "lucide-react";

export const VAPT = () => {
  return (
    <div className="flex flex-col gap-8">
      <HeroSection
        subtitle="Identity, Analyze and Secure-Stay ahead of cyber threats"
        title="Vulnerability Assessment and Penetration Testing"
        backgroundImage={hero}
        Icon={ShieldAlert }
      />
      <div className="px-6 flex flex-col gap-12 md:px-12 lg:px-20">
        <VAPTAbout />
      </div>
      <Testimonials />
      <div className="px-6 flex flex-col gap-12 md:px-12 lg:px-20">
        <VAPTPlatforms />
        <VAPTMethodology />
      </div>
      <VAPTBenefits />
      <VAPTContactForm />
      <div className="px-6 flex flex-col gap-12 md:px-12 lg:px-20">
        <VAPTFAQs />
      </div>
    </div>
  );
};
