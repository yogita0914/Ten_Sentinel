import React, { useRef } from 'react';
import Home from '../components/PhishingSimulation/Home';
import CardSection from '../components/PhishingSimulation/CardSection';
import ContentPage from '../components/PhishingSimulation/ContentPage';
import FeaturesSection from '../components/PhishingSimulation/FeaturesSection';
import EmailSection from '../components/InternTrainee/EmailSection';
import FAQSection from '../components/InternTrainee/FAQSection';
import { questionsData } from '../components/PhishingSimulation/FaqSection';
import StepsSection from '../components/PhishingSimulation/StepsSection';
import ContactSection from '../components/PhishingSimulation/ContactSection';




const PishingSimulation = () =>{

     const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
    return(
        <div>
            <Home />
            <CardSection onContactClick={scrollToContact}/>
            <ContentPage />
            <FeaturesSection />
            <StepsSection />
            <EmailSection />
            <FAQSection data={questionsData} />
            <ContactSection ref={contactRef} />
            
        </div>
    )
}
export default PishingSimulation;