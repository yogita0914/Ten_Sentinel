import React, { useState, useEffect, useRef } from "react"; // Added useRef
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import heroBackgroundImage from "../assets/aboutus.page.assets/aboutUSbackground.jpg";
import highFiveImage from "../assets/aboutus.page.assets/information.jpg";
import peopleIconSrc from "../assets/aboutus.page.assets/gear-solid.svg";
import processIconSrc from "../assets/aboutus.page.assets/globe-solid.svg";
import technologyIconSrc from "../assets/aboutus.page.assets/microchip-solid.svg";
import targetIconSrc from "../assets/aboutus.page.assets/target-icon.jpg";
import checkMarkIconSrc from "../assets/aboutus.page.assets/checkmark-icon.jpg";
import businessmanImageSrc from "../assets/aboutus.page.assets/businessman-vision.png";
import usersTrainedIconSrc from "../assets/aboutus.page.assets/globe-solid.svg";
import clientsServedIconSrc from "../assets/aboutus.page.assets/fingerprint-solid.svg";
import uptimeIconSrc from "../assets/aboutus.page.assets/arrow-up.svg";
import teamExpertsIconSrc from "../assets/aboutus.page.assets/users-gear-solid.svg";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import HeroSection from "../components/cloud-security/HeroSection";

const ContactPopup = ({ isOpen, onClose }) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:contact@example.com";
  };

  const popupRef = useRef();
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0  bg-opacity-50 backdrop-blur-sm z-40"
        onClick={onClose}
        aria-hidden="true"
      />
      {/* --- THIS CODE CENTERS THE POPUP --- */}
      <div
        ref={popupRef}
        className={`absolute z-50 top-1/2 left-1/2
                    w-11/12 max-w-md p-6 sm:p-8 rounded-xl shadow-xl
                    bg-gradient-to-br from-gray-100 to-blue-200
                    flex flex-col
                    transform -translate-x-1/2 -translate-y-1/2
                    transition-all duration-300 ease-in-out
                    ${
                      isOpen
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0 pointer-events-none"
                    }`}
      >
        {/* The rest of the popup content is the same... */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close contact panel"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="text-center mt-4 mb-6 sm:mt-5 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-2">
            Have any Questions?
          </h2>
          <p className="text-md sm:text-lg text-gray-600">
            Get in touch with us right now!
          </p>
        </div>
        <div className="bg-white p-5 sm:p-6 rounded-xl border border-gray-200 shadow-sm text-center">
          <div className="flex justify-center mb-4 sm:mb-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-[#4a5d93]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </div>
          <button
            onClick={handleEmailClick}
            className="bg-blue-600 text-white hover:bg-white hover:text-blue-700 w-full py-3 px-4 border border-gray-300 rounded-lg font-medium"
          >
            Email Us
          </button>
        </div>
      </div>
    </>
  );
};
// InfoCard Component
const InfoCard = ({ iconSrc, title, children, animationDelay = "delay-0" }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-white p-8 md:p-6 rounded-2xl border border-sky-100 shadow-md text-center flex flex-col
        transition-all duration-700 ease-out ${animationDelay}
        ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:shadow-2xl hover:shadow-blue-lg hover:-translate-y-1`}
    >
      <div className="flex justify-center mb-4">
        <div className="bg-sky-200 rounded-full p-3 inline-flex items-center justify-center w-20 h-20">
          <img
            src={iconSrc}
            alt={`${title} icon`}
            className="w-12 h-12 object-contain"
          />
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">
        {children}
      </p>
    </div>
  );
};

// Vision/Mission Item
const VisionMissionItem = ({ iconSrc, title, children }) => (
  <div className="flex items-start gap-5 mb-12">
    <div className="flex-shrink-0 w-10 flex justify-center mt-1">
      <img src={iconSrc} alt={`${title} icon`} className="w-10 h-10" />
    </div>
    <div>
      <h3 className="text-3xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{children}</p>
    </div>
  </div>
);

// StatItem Component
const StatItem = ({
  iconSrc,
  endValue,
  label,
  decimals = 0,
  suffix = "",
  separator = ",",
  duration = 2.5,
  trigger,
  animationDelay = "delay-0",
}) => {
  const { ref, inView: statInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const shouldCountUp = statInView && trigger;
  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center h-full text-center
        transition-all duration-700 ease-out ${animationDelay}
        ${statInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        hover:-translate-y-1 overflow-hidden`}
    >
      <div className="flex justify-center items-center mb-4 h-16">
        <img
          src={iconSrc}
          alt={`${label} icon`}
          className="h-10 object-contain"
        />
      </div>
      <div className="text-3xl sm:text-4xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 flex-grow flex items-center justify-center w-full whitespace-nowrap">
        {shouldCountUp ? (
          <CountUp
            start={0}
            end={endValue}
            duration={duration}
            separator={separator}
            decimals={decimals}
            suffix={suffix}
          />
        ) : (
          <span>0{suffix}</span>
        )}
      </div>
      <div className="text-sm text-gray-600 h-10 flex items-center justify-center w-full px-1">
        {label}
      </div>
    </div>
  );
};

// Main About Page Component
const AboutPage = () => {
  const [isContactPanelOpen, setIsContactPanelOpen] = useState(false);

  // --- SIMPLIFIED LOGIC ---
  // No more position calculation needed!
  const openContactPanel = () => setIsContactPanelOpen(true);
  const closeContactPanel = () => setIsContactPanelOpen(false);

  // All useInView hooks remain the same
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const { ref: introImageRef, inView: introImageInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: introTextRef, inView: introTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: visionTextRef, inView: visionTextInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <>
      {/* Hero Section */}

      {/* Remove button */}
      <HeroSection
        subtitle="Your trusted partner in securing data"
        title=" About Us"
        backgroundImage={heroBackgroundImage}
        Icon={Users}
        showButton={false}
      />

      {/* Intro Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-8 lg:pt-12 lg:pb-12">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 overflow-hidden">
          <div
            ref={introImageRef}
            className={`w-full md:w-1/2 rounded-3xl overflow-hidden shadow-md 
                        transition-all duration-300 ease-in-out 
                        hover:shadow-xl hover:-translate-y-1 
                        ${
                          introImageInView
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                        }`}
          >
            <div className="aspect-[16/9] h-auto md:aspect-auto md:h-[16rem] lg:h-[21.5rem]">
              <img
                src={highFiveImage}
                alt="Team collaborating and giving high fives"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div
            ref={introTextRef}
            className={`w-full md:w-1/2 transition-all duration-700 ease-out delay-200 md:text-center
                        ${
                          introTextInView
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 translate-x-10"
                        }`}
          >
            <h2 className="text-3xl md:text-2xl lg:text-4xl font-semibold text-gray-800 mb-2 text-center md:text-left">
              We make Security Possible!
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-center md:text-left">
              We are your one-stop Cyber Security Solution and Your trusted
              partner for business-focused cybersecurity solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4 text-center md:text-left">
              Our goal is to equip your business with the knowledge and tools
              needed to navigate cyberspace safely. Explore our comprehensive
              range of services tailored to meet the unique needs of every
              business, institution, and individual.
            </p>
            <p className="text-gray-600 leading-relaxed text-center md:text-left">
              At Ten Sentinel, we're committed to not just offering services,
              but to actively building a secure cyber environment.
            </p>
          </div>
        </div>
      </section>

      {/* People, Process, Technology Section (No changes) */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-100 pt-8 pb-16 lg:pt-16 lg:pb-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-800 mb-4">
            We are your <span className="text-cs-teal">Cyber Defence Team</span>
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 lg:mb-16 max-w-3xl mx-auto">
            focused on safeguarding essential aspects of your Business!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
            <InfoCard
              iconSrc={peopleIconSrc}
              title="People"
              animationDelay="delay-100"
            >
              People are the most critical and vulnerable resources in any
              company. We Educate, Train and Assess people to make them
              proactive users.
            </InfoCard>
            <InfoCard
              iconSrc={processIconSrc}
              title="Process"
              animationDelay="delay-200"
            >
              A well-defined process maintains structure and transparency
              through definition, implementation, and validation for compliance.
            </InfoCard>
            <InfoCard
              iconSrc={technologyIconSrc}
              title="Technology"
              animationDelay="delay-300"
            >
              Technology increases efficiency and agility. We configure, test,
              and secure technology to ensure data safety.
            </InfoCard>
          </div>
        </div>
      </section>

      {/* Vision and Mission Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 mb-6 relative">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 overflow-hidden">
          <div
            ref={visionTextRef}
            className={`w-full lg:w-1/2 order-2 lg:order-1 
                        transition-all duration-700 ease-out delay-100 
                        ${
                          visionTextInView
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-10"
                        }`}
          >
            <VisionMissionItem iconSrc={targetIconSrc} title="Our Vision">
              Our vision is to be the beacon of cybersecurity for businesses,
              ensuring their businesses stand strong against evolving threats.
            </VisionMissionItem>
            <VisionMissionItem iconSrc={checkMarkIconSrc} title="Our Mission">
              Our mission is to deliver tailored cybersecurity solutions and
              empower businesses to navigate the cyber world with confidence.
            </VisionMissionItem>
            <div className="mt-8 text-center md:block lg:mt-0 lg:text-left">
              <button
                onClick={openContactPanel}
                className="bg-blue-600 text-white font-semibold px-8 py-5 rounded-lg inline-block lg:ml-16 transform transition-all duration-200 ease-in-out hover:scale-105 hover:-translate-y-1 hover:shadow-lg cursor-pointer hover:bg-blue-700"
              >
                Consult Now!
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative h-80 md:h-[22rem] lg:absolute lg:right-0 lg:bottom-[-1.5rem] lg:w-1/2 lg:h-[30rem] z-10 flex items-end justify-center">
              <img
                src={businessmanImageSrc}
                alt="Businessman"
                className="max-w-full max-h-full object-contain object-bottom"
              />
            </div>
          </div>
        </div>

        {/* --- SIMPLIFIED COMPONENT CALL --- */}
        {/* No more `position` prop is needed */}
        <ContactPopup isOpen={isContactPanelOpen} onClose={closeContactPanel} />
      </section>

      {/* Statistics Section (No changes) */}
      <section
        ref={statsRef}
        className="relative py-10 lg:py-16 overflow-hidden bg-gradient-to-br from-gray-50 to-blue-100"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12 lg:mb-16 text-gray-700">
            Solved about{" "}
            <span className="text-yellow-500 border-b-2 border-yellow-500 pb-1">
              5000+
            </span>{" "}
            Cyber Threats!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch text-gray-600">
            <StatItem
              iconSrc={usersTrainedIconSrc}
              endValue={1000000}
              label="Users Trained"
              separator=","
              suffix=" +"
              trigger={statsInView}
              animationDelay="delay-100"
            />
            <StatItem
              iconSrc={clientsServedIconSrc}
              endValue={300}
              label="Clients Served"
              separator=","
              suffix=" +"
              trigger={statsInView}
              animationDelay="delay-200"
            />
            <StatItem
              iconSrc={uptimeIconSrc}
              endValue={99.75}
              label="Up-time"
              decimals={2}
              suffix=" %"
              trigger={statsInView}
              animationDelay="delay-300"
            />
            <StatItem
              iconSrc={teamExpertsIconSrc}
              endValue={40}
              label="Team Experts"
              suffix=" +"
              trigger={statsInView}
              animationDelay="delay-500"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default AboutPage;
