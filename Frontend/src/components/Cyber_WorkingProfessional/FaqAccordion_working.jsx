import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";

const faqs = [
  {
    question: "What are the payment methods available for the course?",
    answer:
      "We offer multiple payment methods including credit card, debit card, net banking, and UPI for easy course payment."
  },
  {
    question: "How do I know if this training is suitable for me?",
    answer:
      "Our training is designed for both beginners and professionals, focusing on essential skills needed for various cybersecurity roles."
  },
  {
    question: "What tools will I learn to use in Ethical Hacking?",
    answer:
      "You'll get hands-on experience with industry-standard tools like Kali Linux, Metasploit, Burp Suite, and Wireshark, among others."
  },
  {
    question: "What makes this course different from other cybersecurity programs?",
    answer:
      "Our course stands out due to its practical approach, industry-relevant simulations, expert instructors, and job placement assistance."
  },
  {
    question: "Is there any prior knowledge required for the Cyber Security Course?",
    answer:
      "No prior experience is necessary. The course starts with foundational concepts and gradually moves to advanced topics, making it accessible to all learners."
  },
  {
    question: "What type of support can I expect during the course?",
    answer:
      "We offer continuous support through live Q&A sessions, dedicated mentors, and a community forum to resolve doubts and keep you on track."
  },
  {
    question: "Can I access the course content after completion?",
    answer:
      "Yes, all course materials, videos, and resources will be accessible to you even after the course is completed, so you can refer to them anytime."
  },
  {
    question: "Will I get assistance with my resume after the course?",
    answer:
      "Yes, we offer personalized resume building services, helping you highlight your newly acquired skills to impress potential employers."
  },
  {
    question: "What are the prerequisites for enrolling in the Cyber Security Course?",
    answer:
      "There are no specific prerequisites for enrolling. A basic understanding of computer networks and operating systems can be helpful but is not required."
  },
  {
    question: "How long is the Cyber Security Course?",
    answer:
      "The course is designed to be completed in 3-6 months, depending on whether you choose full-time or part-time learning."
  },
  {
    question: "Is there a trial period to test the course?",
    answer:
      "Yes, we offer a 7-day trial period where you can explore the course material and decide if it meets your expectations."
  },
  {
    question: "Are there any live projects in the training?",
    answer:
      "Yes, the course includes live projects where you’ll apply your skills in real-world scenarios, working with actual cybersecurity problems."
  },
  {
    question: "Can I ask questions during the live sessions?",
    answer:
      "Absolutely! Our instructors encourage interaction, and you can ask questions during live sessions or through our online community."
  },
  {
    question: "What is the average salary after completing the course?",
    answer:
      "Graduates of the course typically see salaries ranging from $60,000 to $120,000 annually, depending on experience and job location."
  },
  {
    question: "Does the course include networking opportunities?",
    answer:
      "Yes, the course provides opportunities to network with industry professionals, mentors, and fellow students through events and online forums."
  },
  {
    question: "What career paths can I pursue after completing the course?",
    answer:
      "After completing the course, you can pursue roles like Cybersecurity Analyst, Ethical Hacker, Penetration Tester, Network Security Engineer, and more."
  }
];

export default function FaqAccordion_working() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-6 px-4 sm:py-10 sm:px-6 md:px-12 lg:px-24 sm:m-10 m-4">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6 sm:mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 items-start">
        {/* Left Column */}
        <div className="space-y-4">
          {faqs.slice(0, 8).map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full gap-4 px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
              >
                <span className="text-sm font-semibold flex-1">{faq.question}</span>
                <ChevronDown
                  className={`h-6 w-6 min-w-[24px] flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-4 sm:px-6 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 py-3 sm:py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {faqs.slice(8).map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggle(index + 8)}
                className="flex justify-between items-center w-full gap-4 px-4 py-3 sm:px-6 sm:py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
              >
                <span className="text-sm font-semibold flex-1">{faq.question}</span>
                <ChevronDown
                  className={`h-6 w-6 min-w-[24px] flex-shrink-0 transform transition-transform duration-300 ${
                    openIndex === index + 8 ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-4 sm:px-6 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index + 8 ? "max-h-96 py-3 sm:py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
