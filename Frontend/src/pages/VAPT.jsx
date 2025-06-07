import React from "react";

import { SectionTitle } from "../components/VAPT_Components/SectionTitle";
import { VAPTHeader } from "../components/VAPT_Components/VAPTHeader";
import { VAPTAbout } from "../components/VAPT_Components/VAPTAbout";
import { VAPTReviews } from "../components/VAPT_Components/VAPTReviews";
import { VAPTPlatforms } from "../components/VAPT_Components/VAPTPlatforms";
import { VAPTMethodology } from "../components/VAPT_Components/VAPTMethodology";
import { VAPTBenefits } from "../components/VAPT_Components/VAPTBenefits";
import { VAPTContactForm } from "../components/VAPT_Components/VAPTContactForm";
import { VAPTFAQs } from "../components/VAPT_Components/VAPTFAQs";
import Testimonials  from "../components/LandingPage/Testimonials";

export const VAPT = () => {
  return (
    <div className="flex flex-col gap-8">
      <VAPTHeader />

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