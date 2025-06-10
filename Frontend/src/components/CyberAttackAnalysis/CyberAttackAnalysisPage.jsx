import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import image from "../../assets/Cyber attack analysis images/ET41.webp"; // Adjust the path as necessary
import GetInTouch from "../../components/CyberAttackAnalysis/GetInTouch";
import CS1 from "../../assets/Cyber attack analysis images/CS1.jpg"; // Background image
import CS13 from "../../assets/Cyber attack analysis images/CS13.png"; 

// HeroSection component as provided
const HeroSection = ({backgroundImage, title, subtitle, Icon}) => {
  return (
    <header
      className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
     style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Gradient Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-gradient-to-r from-green-900 to-indigo-900"
      ></motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full inline-flex justify-center items-center">
            <Icon className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-lg font-medium px-5 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-2px] transition-all duration-300"
          >
            Get Started
          </a>
        </motion.div>
      </div>

      {/* Optional bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 hidden md:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
    </header>
  );
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: 'easeOut' } },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeOut' } },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1.5, ease: 'easeOut' } },
};

const CyberAttackAnalysisPage = () => {
  // Restore scroll position on mount and save on unload
  useEffect(() => {
    const savedPosition = sessionStorage.getItem('scrollPosition');
    if (savedPosition) {
      window.scrollTo(0, parseInt(savedPosition, 10));
    }

    const saveScrollPosition = () => {
      sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    };

    window.addEventListener('beforeunload', saveScrollPosition);
    window.addEventListener('pagehide', saveScrollPosition);

    return () => {
      window.removeEventListener('beforeunload', saveScrollPosition);
      window.removeEventListener('pagehide', saveScrollPosition);
    };
  }, []);

  return (
    <div className="text-center font-sans overflow-x-hidden">
      {/* Hero Section */}
      <HeroSection
        backgroundImage={CS1} // Adjust the path if needed
        title="Cyber Attack Analysis"
        subtitle="Protect whatever&apos;s yours!"
        Icon={() => <img src={CS13} alt="Cyber Attack Icon" className="w-10 h-10 md:w-16 md:h-16" />}
      />

      {/* Introduction Section */}
      <motion.section
        className="bg-white w-full py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            className="text-2xl md:text-3xl font-semibold md:tracking-tight mb-10 text-gray-800 text-center"
            variants={fadeInUp}
            transition={{ delay: 0.6 }}
          >
            Has your system been compromised by malware or unauthorized access?
          </motion.h2>

          <motion.div
            className="hidden md:block lg:hidden mb-10"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <motion.img
              src={image}
              alt="Training Session"
              className="rounded-lg shadow-lg w-full max-w-3xl object-cover mx-auto"
              initial={{ rotate: -5, scale: 0.9 }}
              animate={{ rotate: 0, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            />
          </motion.div>

          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              className="flex justify-center h-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInLeft}
            >
              <img
                src={image}
                alt="Training Session"
                className="rounded-lg shadow-lg w-full h-full max-w-3xl object-cover"
              />
            </motion.div>
            <motion.div
              className="text-left flex flex-col justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={slideInRight}
            >
              <p className="text-lg text-gray-700 mb-4">
                Our team of cyber experts is here to help you swiftly respond to
                and recover from incidents such as cyber-attacks and malware breaches.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                We conduct a comprehensive Root Cause Analysis to identify the
                origin of the attack and recommend critical actions to prevent
                future occurrences.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                With cyber threats becoming increasingly common, organizations
                are frequently targeted—making it essential to act promptly to
                contain the damage and safeguard your network from further compromise.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="block lg:hidden text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
          >
            <p className="text-lg text-gray-700 mb-4">
              Our team of cyber experts is here to help you swiftly respond to
              and recover from incidents such as cyber-attacks and malware breaches.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              We conduct a comprehensive Root Cause Analysis to identify the
              origin of the attack and recommend critical actions to prevent
              future occurrences.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With cyber threats becoming increasingly common, organizations
              are frequently targeted—making it essential to act promptly to
              contain the damage and safeguard your network from further compromise.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* StepFlow Section */}
      <motion.section
        className="bg-gray-100 py-12 px-4 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-2xl font-bold mb-10 text-gray-900"
            variants={fadeInUp}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            What does TEN Sentinel do during an incident?
          </motion.h2>
          <AnimatedStepFlow />
        </div>
      </motion.section>

      {/* Immediate Actions Section */}
      <motion.section
        className="w-full bg-blue-900 py-6 px-4 sm:px-8 md:px-12 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-6 text-yellow-400"
            variants={fadeInUp}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            What should YOU do immediately?
          </motion.h2>
          <AnimatedImmediateActions />
          <p className="mt-4 text-md">Take these 3 steps before reaching out to us.</p>
        </div>
      </motion.section>

      {/* Contact Form */}
      <div className="mt-10 bg-gray-50 p-6">
        <GetInTouch />
      </div>

      {/* FAQ Section */}
      <motion.section
        className="bg-gray-100 py-12 px-4 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-2xl font-bold mb-8 text-center text-gray-900"
            variants={fadeInUp}
            transition={{ duration: 1.0, ease: 'easeOut' }}
          >
            Frequently Asked Questions
          </motion.h2>
          <AnimatedFAQSection />
        </div>
      </motion.section>
    </div>
  );
};

const StepCard = ({ title, color, height = 120, isLast }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9, y: 20 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.8 }}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 1.2, ease: 'easeInOut' }}
    tabIndex={-1}
    className={`flex-grow min-w-[220px] max-w-[220px] px-4 sm:px-6 py-4 rounded-md text-white font-medium shadow-lg flex items-center justify-center text-center ${color} focus:outline-none focus:ring-0
      md:flex-grow-0
      md:w-[220px] md:h-[120px]
    `}
    style={{ height, flexBasis: 0 }}
  >
    {title}
  </motion.div>
);

const stepData = [
  { id: 1, title: 'Segregate the network/system', color: 'bg-blue-500' },
  { id: 2, title: 'Perform Analysis of the Attack', color: 'bg-teal-400' },
  { id: 3, title: 'Recover from the Attack', color: 'bg-green-500' },
  { id: 4, title: 'Implement necessary Controls', color: 'bg-yellow-400 text-gray-800' },
];

const AnimatedStepFlow = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [steps] = useState(stepData);
  const [showOriginalOrder, setShowOriginalOrder] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShowOriginalOrder(false);
      }, 800);
    }
    return () => clearTimeout(timeoutId);
  }, [isInView]);

  const displayedSteps = showOriginalOrder
    ? steps
    : [
        steps[1],
        steps[0],
        steps[3],
        steps[2],
      ];

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-wrap justify-center items-center gap-4 overflow-visible"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      layout
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {displayedSteps.map((step, index) => (
          <React.Fragment key={step.id}>
            <StepCard
              title={step.title}
              color={step.color}
              isLast={index === displayedSteps.length - 1}
            />
            {index < displayedSteps.length - 1 && (
              <motion.div
                key={`arrow-${step.id}`}
                className="hidden md:flex items-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.5, duration: 0.7, ease: 'easeOut' }}
                aria-hidden="true"
              >
                <ChevronRight size={24} className="text-gray-500" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

const immediateActionsData = [
  { id: 1, title: 'Disconnect the affected device(s) from the network.', color: 'bg-blue-600' },
  { id: 2, title: 'Change all related passwords immediately.', color: 'bg-purple-600' },
  { id: 3, title: 'Notify your IT or security team promptly.', color: 'bg-indigo-600' },
];

const AnimatedImmediateActions = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const [actions] = useState(immediateActionsData);
  const [showOriginalOrder, setShowOriginalOrder] = useState(true);

  useEffect(() => {
    let timeoutId;
    if (isInView) {
      timeoutId = setTimeout(() => {
        setShowOriginalOrder(false);
      }, 800);
    }
    return () => clearTimeout(timeoutId);
  }, [isInView]);

  const displayedActions = showOriginalOrder
    ? actions
    : [
        actions[1],
        actions[2],
        actions[0],
      ];

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-wrap justify-center items-center gap-4 overflow-visible"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      layout
      style={{ minHeight: 90 }}
    >
      <AnimatePresence mode="popLayout" initial={false}>
        {displayedActions.map((action, index) => (
          <React.Fragment key={action.id}>
            <StepCard title={action.title} color={action.color} height={90} />
            {index < displayedActions.length - 1 && (
              <motion.div
                key={`arrow-${action.id}`}
                className="hidden md:flex items-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.5, duration: 0.7, ease: 'easeOut' }}
                aria-hidden="true"
              >
                <ChevronRight size={24} className="text-gray-300" />
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  const answerId = `faq-answer-${question.replace(/\s+/g, '-')}`;

  return (
    <motion.div
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
      className="border border-gray-300 rounded-xl mb-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 w-full"
      aria-expanded={isOpen}
      role="button"
      aria-controls={answerId}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex justify-between items-center px-4 py-3 bg-white rounded-t-xl">
        <h3 className="text-base font-medium text-gray-900 text-left">{question}</h3>
       <ChevronDown
  className="w-5 h-5 min-w-[20px] min-h-[20px] text-gray-700 transform transition-transform duration-300"
  aria-hidden="true"
/>


      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            className="px-4 py-3 text-sm text-gray-700 bg-gray-50 text-left rounded-b-xl"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              opacity: { duration: 0 },
              height: { duration: 0 },
              when: 'beforeChildren',
            }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const faqData = [
  { question: 'What is a cyber attack?', answer: 'A cyber attack is an attempt by hackers to damage or gain unauthorized access to a computer system, network, or device, often with malicious intent.' },
  { question: 'How does malware affect my system?', answer: 'Malware can damage your system by stealing data, corrupting files, disrupting operations, or allowing attackers to control your device remotely.' },
  { question: 'What is Root Cause Analysis in cybersecurity?', answer: 'Root Cause Analysis (RCA) is the process of identifying the underlying cause of a security incident to prevent future attacks.' },
  { question: 'How soon should I respond after detecting an attack?', answer: 'Immediate response is critical; disconnect affected systems and notify your security team within minutes to limit damage.' },
  { question: 'Can TEN Sentinel help recover lost data?', answer: 'Yes, our experts assist with data recovery whenever possible by analyzing attack vectors and applying the best remediation techniques.' },
  { question: 'What steps should I take to secure my network post-attack?', answer: 'After an attack, implement strong access controls, update software patches, conduct security audits, and train staff on cyber hygiene.' },
  { question: 'How can I prevent future cyber attacks?', answer: 'Regularly update systems, use firewalls and antivirus software, perform employee awareness training, and conduct frequent security assessments.' },
  { question: 'What is the difference between a virus and a ransomware attack?', answer: 'A virus replicates itself to spread and cause damage, while ransomware encrypts your data and demands payment to restore access.' },
  { question: 'Is it necessary to involve law enforcement after a cyber attack?', answer: 'Depending on the severity and legal requirements, involving law enforcement may help investigate and prosecute attackers.' },
];

const AnimatedFAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {faqData.map(({ question, answer }, i) => (
        <FAQItem
          key={i}
          question={question}
          answer={answer}
          isOpen={openIndex === i}
          onToggle={() => handleToggle(i)}
        />
      ))}
    </div>
  );
};

export default CyberAttackAnalysisPage;

