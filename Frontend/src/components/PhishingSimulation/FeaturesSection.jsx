import React, { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const FeaturesSection = () => {
  const [showMore, setShowMore] = useState(false);

  const containerVariant = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const firstParagraph =
    "In today’s rapidly evolving cyber landscape, human error remains one of the most common causes of security breaches. Deploying controlled phishing campaigns allows organizations to safely simulate real-world attacks and identify gaps in employee awareness. These ethical simulations help staff recognize deceptive emails, suspicious links, and social engineering tactics before real threats strike.";

  const secondFull =
    "Simulated phishing tests help your team spot threats before they become real. Strengthen awareness and reduce risk through hands-on experience.";
  const secondShort = secondFull.slice(0, 0) + "...";

  return (
    <div className="bg-gray-100 px-4 sm:px-6 lg:px-12 py-12">
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 px-2"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        Deploy controlled phishing campaigns to measure and improve employee
        awareness of social engineering threats
      </motion.h1>

      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16"
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Column */}
        <div className="text-gray-700 text-base sm:text-md text-center px-2 space-y-6">
          {/* Below md (sm and xs): Show full content, no toggle */}
          <div className="block md:hidden space-y-6">
            <motion.p variants={fadeInUp}>{firstParagraph}</motion.p>
            <motion.p variants={fadeInUp}>{secondFull}</motion.p>
          </div>

          {/* md only: Show toggle */}
          <div className="hidden md:block lg:hidden space-y-6">
            <motion.p variants={fadeInUp}>{firstParagraph}</motion.p>
            <motion.p variants={fadeInUp}>
              {showMore ? secondFull : secondShort}
            </motion.p>
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-blue-600 underline text-sm"
            >
              {showMore ? "Read Less" : "Read More"}
            </button>
          </div>

          {/* lg and up: Show full text, no toggle */}
          <div className="hidden lg:block space-y-6">
            <motion.p variants={fadeInUp}>{firstParagraph}</motion.p>
            <motion.p variants={fadeInUp}>{secondFull}</motion.p>
          </div>
        </div>

        {/* Right Column */}
        <div className="px-2">
          <motion.h2
            className="text-xl sm:text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Program Highlights:
          </motion.h2>

          <motion.ul
            className="space-y-4 text-base sm:text-lg"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              "Customizable Phishing Campaigns",
              "Real-world Simulation Labs",
              "Resume Building & Job Support",
              "Automated Awareness Training",
              "Certification on Completion",
            ].map((point, index) => (
              <motion.li
                key={index}
                className="flex items-start space-x-3"
                variants={fadeInUp}
              >
                <CheckCircleIcon className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesSection;
