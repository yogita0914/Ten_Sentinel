import React from "react";
import security_bg from "../../assets/security_bg.jpg"; // Adjust the path as necessary
import Marketing from "../../assets/marketing.jpg"; // Adjust the path as necessary
import { TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Hero_marketing = () => {
  // Smooth scroll function for "Get Started"
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-cyan-200">
      {/* Hero Section with Background Image */}
      <header
        className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
        style={{ backgroundImage: `url(${security_bg})` }}
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
              <TrendingUp className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Marketing
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
          >
            Innovative strategies to boost your brand’s reach and engagement.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8"
          >
            {/* Changed to button with smooth scroll */}
            <button
              onClick={scrollToContact}
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-lg font-medium px-5 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              Get Started
            </button>
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

      {/* Marketing Strategy Section */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={Marketing}
              alt="Marketing Strategy"
              className="rounded-lg shadow-lg w-full h-66 object-cover"
            />
          </div>

          <div className="text-left w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Strategic Marketing Solutions
            </h2>
            <ul className="list-none space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Grow your business</span>{" "}
                through data-driven marketing approaches and audience engagement
              </li>
              <li>
                <span className="font-semibold">
                  Develop compelling brand narratives
                </span>{" "}
                that resonate with your ideal customer base
              </li>
              <li>
                <span className="font-semibold">
                  Enhance your digital presence
                </span>{" "}
                with tailored strategies across web, social, and paid media
              </li>
              <li>
                <span className="font-semibold">
                  Leverage SEO, social media, and analytics
                </span>{" "}
                to increase visibility and conversion rates
              </li>
              <li>
                <span className="font-semibold">
                  Achieve measurable results
                </span>{" "}
                through personalized, performance-driven marketing plans
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero_marketing;
