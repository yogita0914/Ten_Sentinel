import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';
import React from "react";

// New FAQ data based on your second example
const faqData = [
  { q: "How often should Azure penetration tests be conducted?", a: "Regularly, at least annually or after significant changes to your Azure environment (e.g., new applications, major infrastructure updates). Compliance requirements might also dictate frequency. Continuous monitoring and periodic testing are best practices." },
  { q: "What are the risks of not conducting Azure penetration testing?", a: "Increased vulnerability to cyberattacks, leading to potential data breaches, financial losses, operational disruptions, reputational damage, and non-compliance with industry regulations and legal obligations." },
  { q: "How do you ensure compliance with Azure penetration testing policies?", a: "We strictly adhere to Microsoft's rules of engagement for penetration testing Azure. This includes obtaining necessary client permissions, defining clear scopes, and conducting tests in a non-disruptive manner to ensure full compliance." },
  { q: "How can Azure penetration testing enhance cloud security?", a: "It proactively identifies vulnerabilities, misconfigurations, and weaknesses in your Azure setup. By simulating real-world attacks, it provides actionable insights and recommendations to strengthen your security posture, reduce attack surface, and improve incident response capabilities." },
  { q: "What is the typical duration of an Azure penetration test?", a: "The duration varies depending on the scope and complexity of the Azure environment being tested. A small, focused test might take a few days, while a comprehensive assessment of a large environment could take several weeks. We provide an estimated timeline after the initial scoping phase." },
  { q: "Do you provide a report after the Azure penetration test?", a: "Yes, a detailed report is a key deliverable. It includes an executive summary, a technical breakdown of vulnerabilities found (with severity ratings), proof-of-concept exploits where applicable, and actionable recommendations for remediation to improve your Azure security posture." },
];

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Styling from the second example's item container
    <div className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Styling from the second example's button
        className="text-sm md:text-lg flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
      >
        <span className="font-medium">{question}</span>
        {isOpen
            ? <ChevronUpIcon className="w-5 h-5 text-teal-600" />
            : <ChevronDownIcon className="w-5 h-5 text-gray-700" />
        }
      </button>
      {/* Answer container with transition inspired by the second example */}
      <div
        className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "py-4" : "py-0" // Apply padding only when open
        }`}
        style={{ maxHeight: isOpen ? '500px' : '0' }} // Control max-height for CSS transition
      >
        {/* Styling for answer text, kept leading-relaxed for readability */}
        <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const half = Math.ceil(faqData.length / 2);
  const firstHalf = faqData.slice(0, half);
  const secondHalf = faqData.slice(half);

  return (
    // Section styling from the second example (adjusted padding slightly for aesthetics)
    <section className="bg-white py-12 px-6 lg:py-20 sm:px-12 lg:px-24">
      {/* Container styling from the second example */}
      <div className="max-w-6xl mx-auto">
        {/* Title styling from the second example (adjusted margin slightly) */}
        <h2 className="text-xl lg:text-4xl font-bold text-center text-gray-800 mb-12 lg:mb-16">
          Azure Penetration Testing FAQs – TEN Sentinel
        </h2>
        {/* Retaining the two-column grid for FAQs from your original FAQ.jsx */}
        <div className="grid md:grid-cols-2 gap-x-8">
          {/* Column for the first half of FAQs, with spacing between items */}
          <div className="space-y-4">
            {firstHalf.map((item, index) => (
              <AccordionItem key={`faq-col1-${index}`} question={item.q} answer={item.a} />
            ))}
          </div>
          {/* Column for the second half of FAQs, with spacing between items */}
          <div className="space-y-4">
            {secondHalf.map((item, index) => (
              <AccordionItem key={`faq-col2-${index}`} question={item.q} answer={item.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;