import { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import React from "react";

// New FAQ data based on your second example
const faqData = [
  {
    id: "faq-0", // Adding unique IDs for clarity, though index can also be used
    q: "How often should Azure penetration tests be conducted?",
    a: "Regularly, at least annually or after significant changes to your Azure environment (e.g., new applications, major infrastructure updates). Compliance requirements might also dictate frequency. Continuous monitoring and periodic testing are best practices.",
  },
  {
    id: "faq-1",
    q: "What are the risks of not conducting Azure penetration testing?",
    a: "Increased vulnerability to cyberattacks, leading to potential data breaches, financial losses, operational disruptions, reputational damage, and non-compliance with industry regulations and legal obligations.",
  },
  {
    id: "faq-2",
    q: "How do you ensure compliance with Azure penetration testing policies?",
    a: "We strictly adhere to Microsoft's rules of engagement for penetration testing Azure. This includes obtaining necessary client permissions, defining clear scopes, and conducting tests in a non-disruptive manner to ensure full compliance.",
  },
  {
    id: "faq-3",
    q: "How can Azure penetration testing enhance cloud security?",
    a: "It proactively identifies vulnerabilities, misconfigurations, and weaknesses in your Azure setup. By simulating real-world attacks, it provides actionable insights and recommendations to strengthen your security posture, reduce attack surface, and improve incident response capabilities.",
  },
  {
    id: "faq-4",
    q: "What is the typical duration of an Azure penetration test?",
    a: "The duration varies depending on the scope and complexity of the Azure environment being tested. A small, focused test might take a few days, while a comprehensive assessment of a large environment could take several weeks. We provide an estimated timeline after the initial scoping phase.",
  },
  {
    id: "faq-5",
    q: "Do you provide a report after the Azure penetration test?",
    a: "Yes, a detailed report is a key deliverable. It includes an executive summary, a technical breakdown of vulnerabilities found (with severity ratings), proof-of-concept exploits where applicable, and actionable recommendations for remediation to improve your Azure security posture.",
  },
];

// Modified AccordionItem to receive isOpen state and onToggle handler
const AccordionItem = ({ question, answer, isOpen, onToggle }) => {
  // Removed local isOpen state
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        onClick={onToggle} // Use the passed onToggle handler
        className="text-sm md:text-lg flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
      >
        <span className="font-medium flex-1 mr-2">{question}</span>
        {isOpen ? ( // Use the passed isOpen prop
          <ChevronUpIcon className="w-4 h-4 md:w-5 md:h-5 text-teal-600 flex-shrink-0" />
        ) : (
          <ChevronDownIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-700 flex-shrink-0" />
        )}
      </button>
      <div
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "py-4" : "py-0" // Apply padding only when open
        }`}
        style={{ maxHeight: isOpen ? "500px" : "0" }} // Control max-height for CSS transition
      >
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  // State to track the ID of the currently open accordion item
  const [openAccordionId, setOpenAccordionId] = useState(null); // null means no item is open

  const handleToggle = (accordionId) => {
    // If the clicked accordion is already open, close it. Otherwise, open it.
    setOpenAccordionId(openAccordionId === accordionId ? null : accordionId);
  };

  const half = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, half);
  const secondHalf = faqData.slice(half);

  return (
    <section className="bg-white py-12 px-6 lg:py-20 sm:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl lg:text-4xl font-bold text-center text-gray-800 mb-12 lg:mb-16">
          Azure Penetration Testing FAQs – TEN Sentinel
        </h2>
        <div className="grid md:grid-cols-2 gap-x-8">
          <div className="space-y-4">
            {firstHalf.map(
              (
                item // Using item.id as the unique identifier
              ) => (
                <AccordionItem
                  key={item.id}
                  question={item.q}
                  answer={item.a}
                  isOpen={openAccordionId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              )
            )}
          </div>
          <div className="space-y-4">
            {secondHalf.map(
              (
                item // Using item.id as the unique identifier
              ) => (
                <AccordionItem
                  key={item.id}
                  question={item.q}
                  answer={item.a}
                  isOpen={openAccordionId === item.id}
                  onToggle={() => handleToggle(item.id)}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
