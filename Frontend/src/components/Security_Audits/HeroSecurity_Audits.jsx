import React from "react";
import security_bg from "../../assets/security_bg.jpg"; // Adjust the path as necessary
import peoples from "../../assets/peoples.jpg"; // Adjust the path as necessary
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const HeroSecurity_Audits = () => {
  return (
    <div className="bg-cyan-200">
      {/* Hero Section with Background Image */}
      <header
        className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
        style={{ backgroundImage: `url(https://img.freepik.com/premium-vector/abstract-blue-target-shooting-range-black-background-shooting-target-success-solution_40760-160.jpg?ga=GA1.1.1858429720.1745583539&semt=ais_hybrid&w=740)` }}
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
              <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Security Audits
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
          >
            Comprehensive system checks to ensure maximum protection and compliance.
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
      {/* Cyber Security Audit Section */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-20 xl:px-32 flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="w-full lg:w-1/2">
          <img
            src={peoples}
            alt="Cyber Security Audit"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="text-left w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Cyber Security Audit
          </h2>
          <p className="text-gray-700 font-semibold">
            Identify cybersecurity threats to your organization's data and gain
            clarity on how to effectively minimize those risks.
          </p>
          <p className="text-gray-600 mt-3">
            Our comprehensive, independent audit offers a top-level review of
            your systems, shedding light on vulnerabilities such as data loss
            potential, susceptibility to breaches, and other critical risk
            factors that could impact your security posture.
          </p>
        </div>
      </div>

      {/* What is a Security Audit Section */}
      <div
        className="w-full py-14 px-6 md:px-1 text-center"
        style={{ backgroundColor: "#F8F9FD" }}
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">
          What is a Security Audit?
        </h2>
        <p className="text-gray-700 max-w-4xl mx-auto">
          A cybersecurity audit is a vital tool for recognizing business-related
          risks and ensuring effective risk management. It acts as a benchmark
          to evaluate whether your security strategies and risk assessments are
          aligned with best practices.
        </p>
        <p className="text-gray-700 mt-4 max-w-4xl mx-auto">
          These audits should be tailored to your organization's specific risk
          profile and extend beyond internal systems—encompassing both logical
          and physical boundaries, including third-party vendors and partners.
        </p>
      </div>
    </div>
  );
};

export default HeroSecurity_Audits;
