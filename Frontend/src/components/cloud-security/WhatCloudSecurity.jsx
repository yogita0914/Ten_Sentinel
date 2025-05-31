import React, { useState } from "react";
import { motion } from "framer-motion";
import { whatIsCloudSecurity } from "../data/cloudSecurity";
import { Cloud, Lock, Shield } from "lucide-react";

const WhatCloudSecurity = () => {
  const [showFullText, setShowFullText] = useState(false);
  const toggleReadMore = () => setShowFullText(!showFullText);

  const getTruncatedText = (text, limit = 350) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };

  return (
    <div className="relative py-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute left-0 top-0 w-full h-full overflow-hidden bg-blue-50">
        <div className="absolute top-0 right-0 -mr-16 opacity-10">
          <Cloud className="w-72 h-72 text-blue-900" />
        </div>
        <div className="absolute bottom-0 left-0 -ml-16 opacity-10">
          <Lock className="w-72 h-72 text-blue-900" />
        </div>
      </div>

      <motion.div
        className="relative max-w-5xl mx-auto text-center px-6 z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="mb-8 flex justify-center">
          <div className="bg-blue-100 p-4 rounded-full inline-block">
            <Shield className="w-10 h-10 text-blue-600" />
          </div>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {whatIsCloudSecurity.title}
        </h2>

       

        <p className="text-sm md:text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {showFullText
            ? whatIsCloudSecurity.description
            : getTruncatedText(whatIsCloudSecurity.description)}
        </p>

         {/* Read More button above description */}
        <div className="mb-4">
          <button
            onClick={toggleReadMore}
            className="text-blue-600 font-medium focus:outline-none"
          >
            {showFullText ? "Read Less" : "Read More.."}
          </button>
        </div>

        

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <Cloud className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Cloud Assessment</h3>
            <p className="text-gray-600">
              Comprehensive evaluation of your cloud infrastructure to identify vulnerabilities
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <Lock className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Protection</h3>
            <p className="text-gray-600">
              Secure your sensitive data with advanced encryption and access controls
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300">
            <div className="bg-blue-100 p-3 rounded-full inline-block mb-4">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Threat Monitoring</h3>
            <p className="text-gray-600">
              24/7 surveillance of your cloud environment to detect and mitigate threats
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatCloudSecurity;
