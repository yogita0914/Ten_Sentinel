import React, { useRef } from "react";
import CardSection from "../components/PhishingSimulation/CardSection";
import ContentPage from "../components/PhishingSimulation/ContentPage";
import FeaturesSection from "../components/PhishingSimulation/FeaturesSection";
import EmailSection from "../components/InternTrainee/EmailSection";
import FAQSection from "../components/InternTrainee/FAQSection";
import { questionsData } from "../components/PhishingSimulation/FaqSection";
import StepsSection from "../components/PhishingSimulation/StepsSection";
import ContactSection from "../components/PhishingSimulation/ContactSection";
import HeroSection from "../components/cloud-security/HeroSection";
import { ShieldCheck } from "lucide-react";
// import phishing1 from "../../assets/PhishingSimulation/phishing1.jpg";
import phishing1 from "../assets/PhishingSimulation/phishing1.jpg";

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
        Icon={ShieldCheck}
      />
      <CardSection onContactClick={scrollToContact} />
      <ContentPage />
      <FeaturesSection />
      <StepsSection />
      <EmailSection />
      <FAQSection data={questionsData} />
      <ContactSection ref={contactRef} />
    </div>
  );
};
export default PishingSimulation;
