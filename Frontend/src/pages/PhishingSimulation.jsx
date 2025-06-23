import React, { useRef } from "react";
import CardSection from "../components/PhishingSimulation/CardSection";
import ContentPage from "../components/PhishingSimulation/ContentPage";
import FeaturesSection from "../components/PhishingSimulation/FeaturesSection";
import EmailSection from "../components/InternTrainee/EmailSection";
import FAQSection from "../components/InternTrainee/FAQSection";
import { questionsData } from "../components/PhishingSimulation/FaqSection";
import StepsSection from "../components/PhishingSimulation/StepsSection";
import HeroSection from "../components/cloud-security/HeroSection";
import { AlertCircle  } from "lucide-react";
import phishing1 from "../assets/PhishingSimulation/phishing1.jpg";
import GetInTouch_Section from "../components/Marketing/GetInTouch_Section";
const PishingSimulation = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <HeroSection
        subtitle="Phishing simulation trains employees to spot fake emails."
        title="Phishing Simulation"
        backgroundImage={phishing1}
        Icon={AlertCircle }
      />
      <CardSection onContactClick={scrollToContact} />
      <ContentPage />
      <FeaturesSection />
      <StepsSection />
      <EmailSection />
      <GetInTouch_Section/>
      <FAQSection data={questionsData} />
    </div>
  );
};
export default PishingSimulation;
