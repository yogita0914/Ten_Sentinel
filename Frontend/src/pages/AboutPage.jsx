import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer'; // Ensure this is imported

// --- Import Images ---
// Hero

// Introduction
// import highFiveImage from "../assets/information.jpg";
// Defence Team Icons
import peopleIconSrc from "../assets/gear-solid.svg";
import processIconSrc from "../assets/globe-solid.svg";
import technologyIconSrc from "../assets/microchip-solid.svg";
// Vision/Mission Icons & Image
import targetIconSrc from "../assets/target-icon.jpg";
import checkmarkIconSrc from "../assets/checkmark-icon.jpg";
import businessmanImageSrc from "../assets/businessman-vision.png";
// Stats Icons
import usersTrainedIconSrc from "../assets/globe-solid.svg";
import clientsServedIconSrc from "../assets/fingerprint-solid.svg";
import uptimeIconSrc from "../assets/arrow-up.svg";
import teamExpertsIconSrc from "../assets/users-gear-solid.svg";


// --- Helper Components ---

// --- UPDATED InfoCard with Animation ---
const InfoCard = ({ iconSrc, title, children, highlight = false, animationDelay = 'delay-0' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`
        bg-white p-8 rounded-2xl border border-sky-100 shadow-md text-center flex flex-col
        transition-all duration-700 ease-out ${animationDelay}
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:shadow-2xl hover:shadow-blue-lg hover:-translate-y-1
         'border-sky-100 border-2 shadow-2xl shadow-blue-lg' : ''}
    `}>
      <div className="flex justify-center mb-4">
        <div className="bg-sky-200 rounded-full p-3 inline-flex items-center justify-center w-20 h-20">
           <img src={iconSrc} alt={`${title} icon`} className="w-12 h-12 object-contain"/> {/* Corrected size */}
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed flex-grow">{children}</p>
    </div>
  );
};

// --- UPDATED VisionMissionItem ---
const VisionMissionItem = ({ iconSrc, title, children }) => (
  <div className="flex items-start gap-5 mb-12">
    <div className="flex-shrink-0 w-10 flex justify-center mt-1">
      <img src={iconSrc} alt={`${title} icon`} className="w-10 h-10"/>
    </div>
    <div>
      <h3 className="text-3xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{children}</p>
    </div>
  </div>
);

// --- UPDATED StatItem with Animation ---
const StatItem = ({ iconSrc, endValue, label, decimals = 0, suffix = '', separator = ',', duration = 2.5, trigger, animationDelay = 'delay-0' }) => {
  const { ref, inView: statInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const shouldCountUp = statInView && trigger;

  return (
    <div
      ref={ref}
      className={`
        bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center h-full text-center
        transition-all duration-700 ease-out ${animationDelay}
        ${statInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        hover:-translate-y-1
    `}>
       <div className="flex justify-center mb-4">
         <img src={iconSrc} alt={`${label} icon`} className="h-10 object-contain"/>
       </div>
       <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 flex-grow flex items-center justify-center">
          {shouldCountUp ?
              <CountUp start={0} end={endValue} duration={duration} separator={separator} decimals={decimals} suffix={suffix} enableScrollSpy={false} scrollSpyDelay={0} />
              : <span>0{suffix}</span>
          }
       </div>
       <div className="text-sm text-gray-600 mt-auto pt-2">
         {label}
       </div>
    </div>
  );
};


// --- Main AboutPage Component ---
const AboutPage = () => {

  // Hook for Stats section CountUp trigger
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  // Hooks for Introduction Section Animation
  const { ref: introImageRef, inView: introImageInView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const { ref: introTextRef, inView: introTextInView } = useInView({ triggerOnce: true, threshold: 0.2 });

  // Hooks for Vision/Mission Section Animation
  const { ref: visionTextRef, inView: visionTextInView } = useInView({ triggerOnce: true, threshold: 0.2 });


  const heroBackgroundImage = 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80';
  const  highFiveImage = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    return (
      <>
      
      
      <section
     
      className="relative h-50 flex items-center justify-center text-white overflow-hidden bg-cover bg-center bg-fixed mt-20" 
      style={{ backgroundImage: `url(${heroBackgroundImage})` }}
    >
     
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/70 to-blue-600/70 z-10"></div>
     

      
      <div className="relative z-20 w-full max-w-4xl px-4 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">
          About Us
        </h1>
        {/* Underline */}
        <div className="w-24 h-0.5 bg-white opacity-80 mx-auto"></div>
      </div>
    </section>
        {/* === 2. Introduction Section (With Animation) === */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16 overflow-hidden">
          {/* Image Side with Animation */}
          <div
            ref={introImageRef}
            className={`w-full md:w-1/2  delay-100 rounded-3xl overflow-hidden shadow-md transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 ${introImageInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} >
            <div className="h-64 md:h-80 lg:h-96 ">
               <img src={highFiveImage} alt="Team collaborating and giving high fives" className="w-full h-full object-cover"/>
            </div>
          </div>
          {/* Text Side with Animation */}
          <div
            ref={introTextRef}
            className={`w-full md:w-1/2 transition-all duration-700 ease-out delay-200 ${introTextInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} >
            <h2 className="text-3xl lg:text-4xl font-semibold text-gray-800 mb-6">We make Security Possible!</h2>
            <p className="text-gray-600 leading-relaxed mb-4">We are your one-stop Cyber Security Solution and Your trusted partner for business-focused cybersecurity solutions.</p>
             <p className="text-gray-600 leading-relaxed mb-4">Our goal is to equip your business with the knowledge and tools needed to navigate cyberspace safely. Explore our comprehensive range of services tailored to meet the unique needs of every business, institution, and individual.</p>
             <p className="text-gray-600 leading-relaxed">At Ten Sentinel, we're committed to not just offering services, but to actively building a secure cyber environment.</p>
          </div>
        </div>
      </section>


      {/* === 3. Cyber Defence Team Section (With Animation) === */}
      <section className="bg-gray-50 py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl lg:text-4xl font-semibold text-center text-gray-800 mb-4">We are your <span className="text-cs-teal">Cyber Defence Team</span>,</h2>
              <p className="text-lg text-gray-600 text-center mb-12 lg:mb-16 max-w-3xl mx-auto">focused on safeguarding essential aspects of your Business!</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-stretch">
              <InfoCard iconSrc={peopleIconSrc} title="People" animationDelay="delay-100">People are the most critical and vulnerable resources in any company. It all depends on their behaviour as to how they act & react. We Educate, Train and Assess people to make them a proactive user.</InfoCard>
                  <InfoCard iconSrc={processIconSrc} title="Process" highlight={true} animationDelay="delay-200">A well-defined process controls everything and helps maintain structure and transparency, and is achieved through definition, implementation, and validation to ensure compliance.</InfoCard>
                  <InfoCard iconSrc={technologyIconSrc} title="Technology" animationDelay="delay-300">Technology is essential for organizations and stores all data, increasing operational efficiency and be more swift and agile. We configure, test, and secure technology to ensure data safety.</InfoCard>
          </div>
          </div>
      </section>

      {/* === 4. Vision and Mission Section (With Animation) === */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative mb-12">
        {/* Applied overflow-hidden here if needed to contain animations fully */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20 overflow-hidden"> {/* Add overflow-hidden? */}

          {/* Left Column (Text & Button) with Animation */}
          <div
            ref={visionTextRef}
            className={`w-full lg:w-1/2 order-2 lg:order-1 transition-all duration-700 ease-out delay-100 ${visionTextInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
             <VisionMissionItem iconSrc={targetIconSrc} title="Our Vision">
               Our vision is to be the beacon of cybersecurity for businesses, ensuring their businesses stand strong against evolving threats.
             </VisionMissionItem>
             <VisionMissionItem iconSrc={checkmarkIconSrc} title="Our Mission">
               Our Mission is to deliver tailored cybersecurity solutions to businesses of all sizes and empowering them to navigate the cyber world with confidence and peace of mind.
             </VisionMissionItem>
             <div className="lg:block">
               <button className="bg-blue-600 text-white hover:bg-white hover:text-blue-700 font-semibold px-6 py-4 rounded ml-16"> {/* Example margin */}
                 Consult Now!
               </button>
             </div>
          </div>

          {/* Right Column (Image) with Animation */}
          
           

              {/* === Right Column (Image) === */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
             {/* --- Inner Div for Absolute Positioning --- */}
             <div className="
               relative
               h-80                   {/* Base height small screens */}
               lg:absolute
               lg:right-0
               lg:bottom-[-3.1rem]    {/* <<< FINE-TUNED Overlap */}
               lg:w-1/2
               lg:h-[33rem]           {/* <<< FINE-TUNED Height */}
               z-10
               flex items-end justify-center
             ">
        
               <img
                 src={businessmanImageSrc}
                 alt="Businessman representing vision and mission"
                 className="
                   max-w-full max-h-full
                   object-contain
                   object-bottom
                 "
               />
              </div>
          </div>

          {/* === End Right Column === */}
        </div>
      </section>
      {/* === 5. Stats Section (With Animation) === */}
       <section
        ref={statsRef} // Ref remains for CountUp trigger
        className="relative py-10 lg:py-16 overflow-hidden"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <h2 className="text-3xl lg:text-4xl font-semibold text-center mb-12 lg:mb-16 text-gray-400 pt-12 lg:pt-0">
            Solved about{' '} <span className="text-yellow-500 border-b-2 border-yellow-500 pb-1">5000+</span>
            {' '}Cyber Threats!
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-stretch text-gray-600">
             <StatItem iconSrc={usersTrainedIconSrc} endValue={1000000} label="Users Trained" separator="," suffix=" +" trigger={statsInView} animationDelay="delay-100"/>
             <StatItem iconSrc={clientsServedIconSrc} endValue={300} label="Clients Served" separator="," suffix=" +" trigger={statsInView} animationDelay="delay-200"/>
             <StatItem iconSrc={uptimeIconSrc} endValue={99.75} label="Up-time" decimals={2} suffix=" %" trigger={statsInView} animationDelay="delay-300"/>
             <StatItem iconSrc={teamExpertsIconSrc} endValue={40} label="Team Experts" suffix=" +" trigger={statsInView} animationDelay="delay-500"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;