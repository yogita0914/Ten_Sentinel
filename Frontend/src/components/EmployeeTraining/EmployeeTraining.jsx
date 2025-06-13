import React, { useEffect, useState, useRef } from "react";
import { ChevronRight, ChevronDown, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import GetInTouchImage from "../../assets/GetInTouch.png";
import CS2 from "../../assets/Cyber attack analysis images/CS2.jpg";
import HeroSection from "../cloud-security/HeroSection";
import FAQ from "../../assets/FAQ.png";
console.log(CS2);

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

const faqAnswerVariant = {
  closed: { opacity: 0, height: 0, y: -10, transition: { duration: 0.3 } },
  open: {
    opacity: 1,
    height: "auto",
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const EmployeeTraining = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const answerVariants = {
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
  };

  // Optional: fade/slide variant for entire FAQ container
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
  const GetInTouchForm = () => {
    return (
      <section className="bg-gray-50 mb-10" id="contact">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Left illustration */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src={GetInTouchImage}
              alt="FAQ Illustration"
              className="hidden min-[769px]:block w-full h-[450px] object-cover rounded-lg"
            />
          </div>

          {/* Right form */}
          <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-center mb-6">
              Get In Touch <br />
              <span className="text-blue-600 font-bold">
                By filling this form ↓
              </span>
            </h2>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { type: "text", placeholder: "Name" },
                  { type: "email", placeholder: "Company Email" },
                  { type: "tel", placeholder: "Phone Number" },
                  { type: "text", placeholder: "Company Name" },
                ].map(({ type, placeholder }) => (
                  <input
                    key={placeholder}
                    type={type}
                    placeholder={placeholder}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
                  />
                ))}
              </div>

              {/* Call time selection */}
              <div>
                <label className="block font-medium text-gray-700 mb-2">
                  When do we call you? <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-3 flex-wrap">
                  {["9-12 PM", "12-3 PM", "3-6 PM"].map((time) => (
                    <button
                      type="button"
                      key={time}
                      className="border border-blue-500 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message box */}
              <textarea
                rows="4"
                placeholder="Please outline the queries or issues you need help with!"
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />

              {/* Submit button */}
              <button
                type="submit"
                className="w-36 mx-auto block bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                SUBMIT FORM
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  };

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
        Icon={ShieldCheck}
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
              src="./employee training images/ET32.png"
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
                src="/employee training images/ET32.png"
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
                        "/employee training images/ET30.png",
                        "/employee training images/ET3.webp",
                        "/employee training images/ET28.png",
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
                  src="/employee training images/ET26.jpeg"
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
                      "/employee training images/ET7.png",
                      "/employee training images/ET8.png",
                      "/employee training images/ET11.png",
                      "/employee training images/ET13.png",
                      "/employee training images/ET14.png",
                      "/employee training images/ET16.jpeg",
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
      <GetInTouchForm />

      {/* FAQ Section */}
      <motion.section
        className="bg-white py-8 px-4 sm:px-8 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {initialFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
                  >
                    {faq.question}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={answerVariants}
                        className="px-6 overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Image (hidden on small screens) */}
          <div className="hidden md:flex justify-center items-center min-h-screen">
            <img
              src={FAQ}
              alt="FAQ Illustration"
              className="max-h-[80vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
};

export default EmployeeTraining;
