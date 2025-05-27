import React from "react";
import { motion } from "framer-motion";
import { keyFocusAreas } from "../data/cloudSecurity";
import ComputerImage from "../../assets/cloud-security/computer.webp";
import { Check } from "lucide-react";

const KeyFocus = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6 md:px-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Key Areas We Focus On
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6"></div>
      </motion.div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-20">
        <motion.div
          className="w-full lg:w-3/5"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="space-y-10">
            {keyFocusAreas.map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg mt-1">
                    <Check className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                      {area.title}
                    </h3>
                    <p className="text-sm md:text-xl text-gray-600 leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="w-full lg:w-2/5 hidden md:block"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="relative">
            <div className="absolute -top-6 -right-6 w-full h-full bg-blue-100 rounded-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-indigo-100 rounded-2xl"></div>
            <img
              className="w-full h-auto rounded-2xl shadow-lg relative z-10"
              src={ComputerImage}
              alt="Cloud Security"
            />
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 mt-8 relative z-10">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">99%</div>
                <div className="text-sm text-gray-600">Threat Detection</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">30min</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600">Customer Support</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KeyFocus;