import React, { useState } from "react";
import { ChevronDown, GraduationCap  } from "lucide-react";
import { motion } from "framer-motion";
import CS2 from "../../assets/Cyber attack analysis images/CS2.jpg";
import HeroSection from "../cloud-security/HeroSection";
import FAQ from "../../assets/FAQ.png";
import GetInTouch_Section from "../Marketing/GetInTouch_Section";
import ET3 from "../../assets/employee training images/ET3.webp";
import ET7 from "../../assets/employee training images/ET7.png";
import ET8 from "../../assets/employee training images/ET8.png";
import ET11 from "../../assets/employee training images/ET11.png";
import ET13 from "../../assets/employee training images/ET13.png";
import ET14 from "../../assets/employee training images/ET14.png";
import ET16 from "../../assets/employee training images/ET16.jpeg";
import ET21 from "../../assets/employee training images/ET21.jpg";
import ET26 from "../../assets/employee training images/ET26.jpeg";
import ET28 from "../../assets/employee training images/ET28.png";
import ET30 from "../../assets/employee training images/ET30.png";
import ET32 from "../../assets/employee training images/ET32.png";

const containerTextVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textLineVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const jumpHoverVariant = {
  hover: {
    scale: 1.08,
    y: -14,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
};

const floatingAnimation = {
  y: [0, -6, 0],
  transition: {
    duration: 3,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
  },
};

const EmployeeTraining = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  const initialFaqs = [
    {
      question: "What is employee awareness training?",
      answer:
        "It's a program that educates employees on cybersecurity risks and best practices to reduce threats caused by human error.",
    },
    {
      question: "What do you get in employee awareness training?",
      answer:
        "Training includes modules on phishing, data protection, password hygiene, incident response, and more, tailored to various employee roles.",
    },
    {
      question: "What is the purpose behind security awareness training?",
      answer:
        "To build a security-conscious workforce that actively prevents cyber threats and adheres to organizational policies.",
    },
    {
      question:
        "What is covered under Ten Sentinel employee awareness training program?",
      answer:
        "Topics like phishing awareness, secure browsing, email safety, password management, and device security are covered.",
    },
    {
      question: "What are the benefits of employee awareness training?",
      answer:
        "It reduces risks, prevents breaches, ensures compliance, builds trust, and strengthens the overall security posture.",
    },
    {
      question:
        "Why is cyber security awareness training essential for employees in today’s digital age?",
      answer:
        "Because modern threats exploit human error; training makes employees the first line of defense.",
    },
    {
      question:
        "How can cyber security awareness training benefit my organization and its employees?",
      answer:
        "It boosts confidence, reduces incidents, improves response time, and meets regulatory requirements.",
    },
    {
      question:
        "What are the key topics covered in Ten Sentinel cyber security awareness training for employees?",
      answer:
        "Key topics include phishing, malware, social engineering, password security, and safe remote work practices.",
    },
    {
      question:
        "How does Ten Sentinel’s cyber security awareness training help employees recognize and respond to phishing attacks?",
      answer:
        "Through simulations, real-world scenarios, and practical guidance on identifying and reporting phishing.",
    },
    {
      question:
        "What strategies does Ten Sentinel employ to engage employees during cyber security awareness training?",
      answer:
        "Interactive modules, quizzes, gamified learning, and progress tracking tools keep employees engaged.",
    },
  ];
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-gray-50 text-center font-sans"
    >
      {/* Hero Section with subtitle animation */}
      <HeroSection
        subtitle="Grow. Escalate. Learn"
        title="Employee Awareness & Training"
        backgroundImage={CS2}
        Icon={GraduationCap }
      />

      {/* Text Section with synchronized fade/slide */}
      <motion.section
        className="w-full bg-white"
        variants={containerTextVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="max-w-6xl mx-auto p-6">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 text-center"
            variants={textLineVariant}
          >
            Empower Your People to Protect Your Organization
          </motion.h2>

          {/* Image visible md only */}
          <motion.div
            className="hidden md:block lg:hidden mb-10"
            variants={textLineVariant}
          >
            <img
              src={ET32}
              alt="Training Session"
              className="rounded-lg shadow-lg w-full max-w-3xl object-cover mx-auto"
            />
          </motion.div>

          {/* Side-by-side large */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              className="flex justify-center h-full"
              variants={textLineVariant}
            >
              <img
                src={ET32}
                alt="Training Session"
                className="rounded-lg shadow-lg w-full h-full max-w-3xl object-cover"
              />
            </motion.div>

            <motion.div
              className="w-full text-left flex flex-col justify-center h-full"
              variants={containerTextVariant}
            >
              {[
                "Regardless of how sophisticated your organization’s security systems are, the human factor always introduces potential vulnerabilities. In fact, human error continues to be a leading cause of data breaches.",
                "Ten Sentinel offers a comprehensive approach to cybersecurity education through both general end-user awareness and role-based training, helping your employees stay informed and vigilant.",
                "By fostering a culture of security awareness, you enable employees to become your first line of defense. Empowered users recognize threats, respond quickly, and contribute to a safer digital environment.",
              ].map((text, idx) => (
                <motion.p
                  key={idx}
                  className="text-lg text-gray-700 mb-4"
                  variants={textLineVariant}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Text content for mobile/md under lg */}
          <motion.div
            className="block lg:hidden"
            variants={containerTextVariant}
          >
            {[
              "Regardless of how sophisticated your organization’s security systems are, the human factor always introduces potential vulnerabilities. In fact, human error continues to be a leading cause of data breaches.",
              "Ten Sentinel offers a comprehensive approach to cybersecurity education through both general end-user awareness and role-based training, helping your employees stay informed and vigilant.",
              "By fostering a culture of security awareness, you enable employees to become your first line of defense. Empowered users recognize threats, respond quickly, and contribute to a safer digital environment.",
            ].map((text, idx) => (
              <motion.p
                className="text-lg text-gray-700 mb-4 text-left"
                variants={textLineVariant}
                key={`mobile-text-${idx}`}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Human Element Cards with jump + floating */}
      <motion.section
        className="w-full bg-gray-100 py-12 px-4 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerTextVariant}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={index}
                className={
                  "rounded-lg overflow-hidden flex flex-col h-full bg-white shadow-md cursor-pointer " +
                  (index === 2 ? " md:col-span-2 lg:col-span-1 " : "")
                }
                variants={jumpHoverVariant}
                whileHover="hover"
                style={{ originY: 1 }}
                animate={floatingAnimation}
              >
                <div className="h-48 md:h-64 lg:h-48 w-full">
                  <img
                    src={
                      [
                        ET30,
                        ET3,
                        ET28,
                      ][index]
                    }
                    alt={
                      [
                        "The Human Element",
                        "On-Demand Training",
                        "Completed Annually",
                      ][index]
                    }
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <motion.div
                  className="flex flex-col justify-start p-6 h-full"
                  variants={containerTextVariant}
                >
                  <motion.h3
                    className="text-xl font-semibold text-gray-800 mb-3"
                    variants={textLineVariant}
                  >
                    {
                      [
                        "The Human Element",
                        "On-Demand Training",
                        "Completed Annually",
                      ][index]
                    }
                  </motion.h3>
                  <motion.p
                    className="text-gray-700 text-sm"
                    variants={textLineVariant}
                  >
                    {
                      [
                        "The most effective way to train your employees in strengthening the human aspect of your company’s security is through cybersecurity awareness programs. This is especially critical for remote workers, as phishing, social engineering, compromised passwords, and insecure network practices can put your business at risk of attacks.",
                        "Cybersecurity training is usually offered on demand through online courses, allowing learners to complete it at their own pace, access it from anywhere, and revisit the material as needed. Interactive and engaging training is essential for driving real change in user behavior.",
                        "To ensure employees remain up-to-date on protecting themselves online and stay informed about new and evolving threats, annual training is recommended. Additionally, many business compliance and insurance regulations require training to be completed at least once a year.",
                      ][index]
                    }
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Purpose Section */}
      <motion.section
        className="w-full bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerTextVariant}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:w-[95%]">
          <motion.div className="text-center mb-8 md:mb-10">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 text-center max-w-full"
              variants={textLineVariant}
            >
              What is the Goal of Cybersecurity Awareness Training for
              Employees?
            </motion.h2>
          </motion.div>

          {/* Layout */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-stretch">
            <motion.div
              className="hidden md:flex justify-center items-center"
              variants={textLineVariant}
            >
              <div className="overflow-hidden md:rounded-l-xl md:rounded-r-xl bg-gray-100 w-full max-w-2xl">
                <img
                  src={ET26}
                  alt="Benefits of Training"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center text-left text-gray-700 text-base leading-relaxed md:text-lg"
              variants={containerTextVariant}
            >
              {[
                "The goal of cybersecurity awareness training is to build a strong human firewall within the organization. It prepares employees to identify and avoid phishing emails, social engineering attacks, and unsafe online behavior.",
                "Employees are often the weakest link in security. Training transforms them into informed individuals who can detect red flags, follow best practices, and reduce risk across digital workflows.",
                "Ultimately, the program helps prevent data breaches, protects sensitive assets, and fosters a proactive security culture at every level of the organization.",
              ].map((text, idx) => (
                <motion.p
                  key={`purpose-text-${idx}`}
                  className="mb-4"
                  variants={textLineVariant}
                >
                  {text}
                </motion.p>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Feature Cards */}
      <motion.section
        className="w-full bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerTextVariant}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Social Engineering Attacks",
              "Password Management",
              "Official Devices",
              "Devices Security",
              "Data Security",
              "Incident Management",
            ].map((label, index) => (
              <motion.div
                key={index}
                className="border border-gray-200 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between p-4 h-[220px] box-border cursor-pointer"
                whileHover="hover"
                variants={jumpHoverVariant}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                animate={floatingAnimation}
              >
                <img
                  src={
                    [
                      ET7,
                      ET8,
                      ET11,
                      ET13,
                      ET14,
                      ET16,
                    ][index]
                  }
                  alt={label}
                  className="w-full h-32 object-contain mb-2"
                />
                <h3 className="text-md font-semibold text-yellow-600 text-center">
                  {label}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact form */}
      <section>
        <GetInTouch_Section/>
      </section>
      {/* FAQ Section */}
      <section className="bg-white py-8 px-0 sm:px-12 lg:px-6 m-5 lg:m-10">
            <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
              Frequently Asked Questions (FAQs)
            </h2>
      
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start m-10">
              {/* FAQ Accordion */}
              <div className="space-y-4">
                {initialFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <button
                      onClick={() => toggle(index)}
                      className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
                      aria-expanded={openIndex === index}
                      aria-controls={`faq-answer-${index}`}
                      id={`faq-question-${index}`}
                    >
                      {faq.question}
                      <ChevronDown
                        className={`w-5 h-5 min-w-[20px] min-h-[20px] transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                          }`}
                      />
                    </button>
      
                    <div
                      id={`faq-answer-${index}`}
                      role="region"
                      aria-labelledby={`faq-question-${index}`}
                      className={`px-6 overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
                        }`}
                    >
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
      
              {/* Image - hidden on small screens */}
              <div className="hidden md:flex justify-center items-center">
                <img
                  src={FAQ}
                  alt="FAQ Illustration"
                  className="w-full h-[350px] object-cover rounded-lg"
                />
              </div>
            </div>
          </section>
    </motion.div>
  );
};

export default EmployeeTraining;
