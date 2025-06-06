import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronRight, ChevronDown } from 'lucide-react';
import image from "../../assets/Cyber attack analysis images/ET41.webp"; // Adjust the path as necessary
import GetInTouch from "../../components/CyberAttackAnalysis/GetInTouch";



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
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center flex flex-col items-center justify-center text-center text-white px-4 pt-36 pb-10 w-full"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #06b6d4, #3b82f6), url('/images/ET23.jpg')",
          backgroundBlendMode: 'overlay',
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:text-left">
          Cyber Attack Analysis
        </h1>
        <p className="text-lg md:text-xl font-medium tracking-wide md:text-left text-cyan-200 drop-shadow-md">
          Protect whatever&apos;s yours!
        </p>
      </header>

      {/* Introduction Section */}
      <section className="bg-white w-full py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-semibold md:tracking-tight mb-10 text-gray-800 text-center">
            Has your system been compromised by malware or unauthorized access?
          </h2>

          <div className="hidden md:block lg:hidden mb-10">
            <img
            src={image}
              alt="Training Session"
              className="rounded-lg shadow-lg w-full max-w-3xl object-cover mx-auto"
            />
          </div>

          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex justify-center h-full">
              <img
                src={image}
                alt="Training Session"
                className="rounded-lg shadow-lg w-full h-full max-w-3xl object-cover"
              />
            </div>
            <div className="text-left flex flex-col justify-center">
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
            </div>
          </div>

          <div className="block lg:hidden text-left">
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
          </div>
        </div>
      </section>

      {/* StepFlow Section */}
      <section className="bg-gray-100 py-12 px-4 w-full">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-10 text-gray-900">
            What does TEN Sentinel do during an incident?
          </h2>
          <AnimatedStepFlow />
        </div>
      </section>

      {/* Immediate Actions Section with reduced height and responsive padding, no horizontal scroll */}
      <section className="w-full bg-blue-900 py-6 px-4 sm:px-8 md:px-12 text-center text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-yellow-400">
            What should YOU do immediately?
          </h2>
          <AnimatedImmediateActions />
          <p className="mt-4 text-md">Take these 3 steps before reaching out to us.</p>
        </div>
      </section>

      {/* Contact Form */}


      <div className="mt-10 bg-gray-50 p-6">
  <GetInTouch />
</div>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-12 px-4 w-full">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-900">
            Frequently Asked Questions
          </h2>
          <AnimatedFAQSection />
        </div>
      </section>
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
    transition={{ duration: 0.5, ease: 'easeInOut' }}
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
      }, 500);
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
      transition={{ duration: 1.8, ease: 'easeInOut' }}
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
                transition={{ delay: 2 + index * 0.4, duration: 0.5, ease: 'easeOut' }}
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
      }, 500);
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
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 1.8, ease: 'easeInOut' }}
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
                transition={{ delay: 1.8 + index * 0.4, duration: 0.5, ease: 'easeOut' }}
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

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);
  const answerId = `faq-answer-${question.replace(/\s+/g, '-')}`;

  return (
    <div
      tabIndex={0}
      onClick={toggleOpen}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleOpen()}
      className="border border-gray-300 rounded-md mb-3 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 max-w-2xl mx-auto"
      aria-expanded={isOpen}
      role="button"
      aria-controls={answerId}
    >
      <div className="flex justify-between items-center px-4 py-3 bg-white">
        <h3 className="text-base font-medium text-gray-900 text-left">{question}</h3>
        <ChevronDown
          size={20}
          className={`text-gray-700 transition-transform duration-0 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
          style={{ flexShrink: 0, width: 20, height: 20 }} // Ensures consistent size
        />
      </div>
      {isOpen && (
        <div
          id={answerId}
          className="px-4 py-3 text-sm text-gray-700 bg-gray-50 text-left"
        >
          {answer}
        </div>
      )}
    </div>
  );
};

const faqData = [
  {
    question: 'What is a cyber attack?',
    answer:
      'A cyber attack is an attempt by hackers to damage or gain unauthorized access to a computer system, network, or device, often with malicious intent.',
  },
  {
    question: 'How does malware affect my system?',
    answer:
      'Malware can damage your system by stealing data, corrupting files, disrupting operations, or allowing attackers to control your device remotely.',
  },
  {
    question: 'What is Root Cause Analysis in cybersecurity?',
    answer:
      'Root Cause Analysis (RCA) is the process of identifying the underlying cause of a security incident to prevent future attacks.',
  },
  {
    question: 'How soon should I respond after detecting an attack?',
    answer:
      'Immediate response is critical; disconnect affected systems and notify your security team within minutes to limit damage.',
  },
  {
    question: 'Can TEN Sentinel help recover lost data?',
    answer:
      'Yes, our experts assist with data recovery whenever possible by analyzing attack vectors and applying the best remediation techniques.',
  },
  {
    question: 'What steps should I take to secure my network post-attack?',
    answer:
      'After an attack, implement strong access controls, update software patches, conduct security audits, and train staff on cyber hygiene.',
  },
  {
    question: 'How can I prevent future cyber attacks?',
    answer:
      'Regularly update systems, use firewalls and antivirus software, perform employee awareness training, and conduct frequent security assessments.',
  },
  {
    question: 'What is the difference between a virus and a ransomware attack?',
    answer:
      'A virus replicates itself to spread and cause damage, while ransomware encrypts your data and demands payment to restore access.',
  },
  {
    question: 'Is it necessary to involve law enforcement after a cyber attack?',
    answer:
      'Depending on the severity and legal requirements, involving law enforcement may help investigate and prosecute attackers.',
  },
];

const AnimatedFAQSection = () => (
  <>
    {faqData.map(({ question, answer }, i) => (
      <FAQItem key={i} question={question} answer={answer} />
    ))}
  </>
);

export default CyberAttackAnalysisPage;

