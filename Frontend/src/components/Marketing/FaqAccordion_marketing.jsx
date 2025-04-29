import { useState } from "react";
import { ChevronDown } from "lucide-react";
import React from "react";
import security_bg from "../../assets/security_bg.jpg"; // Adjust path if needed
import FAQ from "../../assets/FAQ.png"; // Adjust path if needed

const faqs = [
  {
    question: "What marketing services does TEN Sentinel offer?",
    answer:
      "TEN Sentinel provides a range of marketing services including brand strategy, digital marketing, content creation, social media management, SEO, paid advertising, and performance analytics."
  },
  {
    question: "How can digital marketing help my business grow?",
    answer:
      "Digital marketing allows businesses to reach targeted audiences through search engines, social platforms, and email. It improves brand visibility, drives traffic, and converts leads into loyal customers."
  },
  {
    question: "What is included in your social media management service?",
    answer:
      "Our social media management includes content planning, post scheduling, community engagement, analytics tracking, and campaign performance optimization across platforms like Facebook, Instagram, LinkedIn, and X (Twitter)."
  },
  {
    question: "Do you offer SEO services?",
    answer:
      "Yes, we offer comprehensive SEO services including keyword research, on-page and off-page optimization, technical audits, and content strategies to improve your search engine rankings and organic visibility."
  },
  {
    question: "Can you help with paid advertising campaigns?",
    answer:
      "Absolutely. We manage paid campaigns on Google Ads, Meta (Facebook/Instagram), LinkedIn, and other platforms. We handle everything from ad copy and creative to targeting, budgeting, and performance tracking."
  },
  {
    question: "Why is branding important in marketing?",
    answer:
      "Branding sets your business apart by creating a memorable identity and emotional connection with customers. We help define your brand voice, visuals, and values to ensure consistency across all channels."
  }
];

export default function FaqAccordion_marketing() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="bg-white py-10 px-6 m-10 sm:px-12 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Frequently Asked Questions (FAQs)
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start m-10">

        {/* Right Side - FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
              >
                {faq.question}
                <ChevronDown
                  className={`h-5 w-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`px-6 overflow-hidden transition-max-height duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Left Side - Image (hidden on small devices) */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src={FAQ}
            alt="FAQ Illustration"
            className="w-full h-[350px] object-cover rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
