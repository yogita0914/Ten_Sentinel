import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const questionsData = [
  {
    question: "What is Cyber Security?",
    answer:
      "Cyber Security is the practice of protecting systems, networks, and programs from digital attacks.",
  },
  {
    question: "What does your internship include?",
    answer:
      "Our internship includes real-world projects, hands-on training, and mentorship by experienced professionals.",
  },
  {
    question: "Do you offer job placement?",
    answer:
      "Yes, our program comes with job assistance and placement support upon successful completion.",
  },
  {
    question: "Is the training beginner-friendly?",
    answer:
      "Yes, the training starts from basic concepts and gradually moves to advanced topics.",
  },
  {
    question: "How long is the internship program?",
    answer: "The internship program is typically 6 months long.",
  },
  {
    question: "What is the mode of training?",
    answer: "The training is conducted online with live sessions.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (id) => {
    setOpenIndex((prev) => (prev === id ? null : id));
  };

  const midpoint = Math.ceil(questionsData.length / 2);
  const leftColumn = questionsData.slice(0, midpoint);
  const rightColumn = questionsData.slice(midpoint);

  const renderQA = (items, columnOffset = 0) =>
    items.map((item, i) => {
      const id = columnOffset + i;
      const isOpen = openIndex === id;

      return (
        <motion.div
          key={id}
          whileHover={{
            boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
            scale: 1.02,
          }}
          transition={{ duration: 0.3 }}
          className="border-2 border-gray-300 mb-4 rounded-md cursor-pointer overflow-hidden bg-white"
        >
          {/* Question */}
          <div
            className="flex justify-between items-center p-4 sm:p-5"
            onClick={() => toggleAnswer(id)}
          >
            <h2 className="text-sm md:text-md lg:text-lg font-semibold text-gray-800">
              {item.question}
            </h2>
            <ChevronDownIcon
              className={`w-5 h-5 text-gray-700 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Answer */}
          {isOpen && (
            <div className="bg-blue-50 px-4 py-3 sm:px-6 sm:py-4">
              <p className="text-sm md:text-md lg:text-lg text-gray-900">{item.answer}</p>
            </div>
          )}
        </motion.div>
      );
    });

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-gray-50">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-6 mx-5 lg:mx-10">
        <div>{renderQA(leftColumn, 0)}</div>
        <div>{renderQA(rightColumn, leftColumn.length)}</div>
      </div>
    </div>
  );
};

export default FAQSection;
