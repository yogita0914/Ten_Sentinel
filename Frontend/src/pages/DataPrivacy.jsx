import React from "react";
import { motion } from "framer-motion";
import { Lock, CheckCircle } from "lucide-react";
import service1 from '../../src/assets/DataPrivacy/service1.png';
import service2 from '../../src/assets/DataPrivacy/service2.webp';
import service3 from '../../src/assets/DataPrivacy/service3.png';
import service4 from '../../src/assets/DataPrivacy/service4.png';
import service5 from '../../src/assets/DataPrivacy/service5.png';
import service6 from '../../src/assets/DataPrivacy/service6.png';
import hero from '../assets/DataPrivacy/hero.avif';
import content from '../assets/DataPrivacy/content.webp';
import shield from '../assets/DataPrivacy/shield.avif';



const solutions = [
  {
    num: "1",
    about: "Stay current with top-tier data privacy solutions and services.",
    color: "bg-blue-100",
  },
  {
    num: "2",
    about:
      "Adapt and comply with regulations in an ever-changing legal environment.",
    color: "bg-purple-100",
  },
  {
    num: "3",
    about:
      "Streamline your data security strategy to minimize risks and reduce associated costs.",
    color: "bg-green-100",
  },
  {
    num: "4",
    about:
      "Protect critical business and customer information to uphold your brand’s trust and credibility.",
    color: "bg-cyan-100",
  },
];

const services = [
  {
    title: "Assessments",
    description:
      "Analyze the current risk posture against strategic goals and compliance expectations.",
    image: service1,
    color: "bg-blue-100",
  },
  {
    title: "Design",
    description:
      "Design a customized privacy compliance strategy with you, ensuring it fulfills legal and regulatory obligations.",
    image: service2,
    color: "bg-green-100",
  },
  {
    title: "Methodology",
    description:
      "A clear, step-by-step approach to help manage data privacy effectively and meet compliance goals.",
    image: service3,
    color: "bg-fuchsia-100",
  },
  {
    title: "Surveillance",
    description:
      "Surveillance in data privacy involves monitoring systems to detect breaches and maintain compliance.",
    image: service4,
    color: "bg-rose-100",
  },
  {
    title: "Tasks",
    description:
      "Tasks refer to specific actions or duties that are performed to achieve a particular goal or outcome.",
    image: service5,
    color: "bg-purple-100",
  },
  {
    title: "Execution",
    description:
      "Execution refers to the process of carrying out plans, strategies, or tasks to achieve specific goals or objectives.",
    image: service6,
    color: "bg-cyan-100",
  },
];

const DataPrivacy = () => {
  return (
    <>
    <header
        className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${hero})` }}
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
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <Lock className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Data Privacy
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
          >
            Protecting your data with industry-leading privacy standards.
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
      <div className="flex flex-col md:flex-row items-center justify-center p-8 bg-gray-100">
        {/* Left side - Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src= {content}
            alt="Data Privacy"
            className="w-full h-auto rounded-xl shadow-lg md:h-78"
          />
        </div>

        {/* Right side - Text */}
        <div className="w-full md:w-1/2 md:pl-12 text-center md:text-left">
          <h2 className="text-2xl md:text-xl lg:text-4xl font-bold text-gray-800 mb-4">
            Data Protection and Privacy
          </h2>
          <p className="text-md md:text-sm lg:text-lg text-gray-700 leading-relaxed">
            Ten Sentinel’s data protection and privacy solutions empower
            organizations to stay ahead of emerging threats and evolving
            regulations. By delivering cutting-edge services in data security
            and privacy compliance, we help businesses build trust, ensure
            regulatory alignment, and safeguard sensitive information in an
            ever-changing digital landscape. Our holistic approach combines
            advanced technologies, real-time monitoring, and proactive risk
            management strategies to minimize vulnerabilities and enhance
            resilience.
          </p>
        </div>
      </div>

      <div className="p-8 bg-white text-center pt-15">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 mb-4">
          The Value Our Consulting Brings to You
        </h1>
        <p className="text-md lg:text-lg m-auto text-gray-800 max-w-4xl">
          Our expert team partners with you at every stage, offering tailored
          insights and practical solutions to keep you compliant, secure, and
          fully future-ready.
        </p>
        <h1 className="text-xl md:text-lg lg:text-2xl font-semibold text-gray-800 mb-4 mt-10">
          Our Privacy team delivers tailored solutions that enable clients to:
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6">
        {solutions.map((item, id) => (
          <motion.div
            key={id}
            className={`relative ${item.color} rounded-lg shadow-md p-6 overflow-hidden group h-48 md:h-56 lg:h-[13rem]`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: id * 0.1 }}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            whileTap={{ y: -20 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center relative z-10">
              <motion.span
                className="bg-blue-500 text-white px-3 py-1 rounded-full cursor-pointer inline-block"
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#1D4ED0",
                }}
                whileTap={{ scale: 0.9 }}
              >
                {item.num}
              </motion.span>
            </h3>

            <p className="text-base md:text-sm lg:text-lg text-black text-center relative z-10">
              {item.about}
            </p>

            {/* Touch/hover shine effect */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300 z-0 pointer-events-none" />
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center items-center p-4 sm:p-6">
        <h2 className="text-md lg:text-lg text-center text-gray-800 max-w-4xl">
          Ten Sentinel’s solutions empower organizations to mitigate data breach
          risks and ensure compliance, protecting them from costly fines and
          reputational harm.
        </h2>
      </div>

      <div className="p-6 pt-15">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center mb-4 text-black-400">
          Our Services
        </h1>
        <p className="text-center text-gray-700 mb-6 text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto px-4">
          Explore our wide range of solutions and services designed to meet your
          needs.
        </p>

        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((item, id) => (
            <motion.div
              key={id}
              // className={`relative ${item.color} rounded-lg shadow-md p-6 flex flex-col items-center text-center overflow-hidden group min-h-[90px]`} // Removed justify-between & fixed min height
              className={`relative ${item.color} rounded-lg shadow-md p-6 overflow-hidden text-center group h-48 md:h-60 lg:h-[11rem] `}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: id * 0.1 }}
              whileHover={{
                y: -10,
                scale: 1.02,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              whileTap={{ y: -12 }}
            >
              {/* Shine effect */}
              <div className="absolute inset-0 w-full h-full before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/40 before:to-transparent before:translate-x-[-100%] before:skew-x-[-20deg] group-hover:before:translate-x-[100%] before:transition-transform before:duration-700 z-10 pointer-events-none" />

              {/* Image + Title */}
              <div className="z-10 flex items-center justify-center mb-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <h3 className="pl-3 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-600 relative z-10 text-md">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Form */}
      <section className="py-16 px-6 relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white-600 to-white-700 opacity-90 -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div >
            <img src={shield}/>
          </motion.div>          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl text-center font-bold text-gray-900 mb-6">Get Started Today</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name:
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Tell us about your security needs"
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-45 cursor-pointer text-sm md:text-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
                >
                  Submit Form
                </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

export default DataPrivacy;
