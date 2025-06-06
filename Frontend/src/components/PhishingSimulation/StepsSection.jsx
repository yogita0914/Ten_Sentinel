import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Enroll in the Program",
    description: "Sign up to get started on your learning journey.",
  },
  {
    title: "Attend Training Sessions",
    description: "Participate in interactive, hands-on sessions.",
  },
  {
    title: "Work on Live Projects",
    description: "Gain real-world experience with practical projects.",
  },
  {
    title: "Internship & Placement",
    description: "Get industry exposure and job opportunities.",
  },
];

const VerticalTimeline = () => {
  return (
    <div className="bg-gray-50 py-16 px-4 md:px-20">
      <h2 className="lg:text-3xl text-2xl md:text-3xl font-bold text-center text-gray-800 mb-16">
        🚀 Learning Journey
      </h2>

      <div className="relative border-l-4 border-blue-600 max-w-3xl mx-auto space-y-12">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="ml-6 relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Dot */}
            <div className="absolute -left-[34px] top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg z-10" />

            {/* Fixed-size Content Box */}
            <div className="bg-white w-full sm:w-[420px] h-[160px] p-6 rounded-xl shadow-md overflow-hidden">
              <h3 className="text-xl font-semibold text-blue-700">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;
 