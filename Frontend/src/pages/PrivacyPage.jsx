import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import first from "../assets/privacy_images/privacy1.png";
import second from "../assets/privacy_images/privacy2.png";
import third from "../assets/privacy_images/privacy3.png";
import fourth from "../assets/privacy_images/privacy4.png";
import fifth from "../assets/privacy_images/privacy5.png";
import sixth from "../assets/privacy_images/privacy6.png";
import seventh from "../assets/privacy_images/privacy7.png";

export const PrivacyPage = () => {
  const [mobileExpanded, setMobileExpanded] = useState({});
  const privacyElements = [
    {
      title: "Introduction",
      image: first,
      text: (
        <>
          Welcome to The Entrepreneurship Network (referred to as "we," "our," or "us"). We are
          deeply committed to protecting and respecting your privacy. This Privacy Policy outlines
          how we collect, use, disclose, and protect your information when you access our website at{" "}
          <a
            href="https://www.entrepreneurshipnetwork.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.entrepreneurshipnetwork.net/
          </a>
          . By continuing to use our website, you agree to the practices described in this policy.
        </>
      ),
    },
    {
      title: "Information We Collect",
      image: second,
      text: `We may collect both personal and non-personal information when you interact with our website or services, including your name, email, IP address, browser type, and usage data.`,
    },
    {
      title: "How We Use Your Information",
      image: third,
      text: `Your personal information is used primarily to provide the services or information that you request from us, such as sending newsletters or responding to inquiries.`,
    },
    {
      title: "Disclosure of Your Information",
      image: fourth,
      text: `We may share your personal information with members of our organizational group or trusted third parties under strict confidentiality agreements and only for the purposes outlined in this policy.`,
    },
    {
      title: "Your Rights",
      image: fifth,
      text: `You have the right to access the personal data we hold about you and request corrections or deletions where appropriate. Contact us for any data access requests.`,
    },
    {
      title: "Data Security",
      image: sixth,
      text: `The security of your personal data is a priority for us. We implement industry-standard security measures to prevent unauthorized access, alteration, or destruction of your data.`,
    },
    {
      title: "Changes to This Privacy Policy",
      image: seventh,
      text: `We may update this Privacy Policy from time to time to reflect changes in legal requirements or our data practices. Updates will be posted on this page with a revised effective date.`,
    },
  ];

  // Ref initialization using privacyElements length
  const sectionRefs = useRef(
    Array(privacyElements.length)
      .fill(null)
      .map(() => React.createRef())
  );
  const [inViewStates, setInViewStates] = useState(
    Array(privacyElements.length).fill(false)
  );

  const toggleMobileExpand = (index) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  useEffect(() => {
    // Capture current refs at time of effect execution
    const currentRefs = sectionRefs.current;

    const observers = currentRefs.map((ref, index) => {
      if (!ref.current) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          setInViewStates((prev) => {
            const newStates = [...prev];
            newStates[index] = entry.isIntersecting;
            return newStates;
          });
        },
        { rootMargin: "-100px" }
      );
      observer.observe(ref.current);
      return observer;
    });

    return () => {
      // Use the captured currentRefs in cleanup
      observers.forEach((observer, idx) => {
        if (observer && currentRefs[idx].current) {
          observer.unobserve(currentRefs[idx].current);
        }
      });
    };
  }, []); // Empty dependency array is correct here

  return (
    <div className="flex flex-col gap-10 bg-white">
      <header
        className="relative text-white text-center h-screen bg-cover bg-center flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(https://img.freepik.com/free-vector/cyber-security-concept_23-2148534852.jpg?semt=ais_hybrid&w=740)`,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">Privacy Policy</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Your trust is our priority. Learn how we protect your information.
          </p>
        </motion.div>
      </header>

      <ul className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-4 md:px-8">
        {privacyElements.map((element, index) => {
          const ref = sectionRefs.current[index];
          const isInView = inViewStates[index];

          return (
            <motion.li
              key={index}
              ref={ref}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className="border border-gray-200 rounded-xl overflow-hidden shadow"
            >
              <div
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } items-center gap-6 p-6 bg-gray-50 hover:bg-gray-100 transition`}
              >
                <img
                  src={element.image}
                  alt={element.title}
                  className="w-[95%] sm:w-full max-w-[460px] object-contain rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center lg:text-left">
                    {element.title}
                  </h2>
                  <div className="hidden lg:block text-gray-700 text-base">
                    {element.text}
                  </div>
                  <div className="block lg:hidden text-sm text-gray-700">
                    <div
                      className={`overflow-hidden transition-all ${mobileExpanded[index] ? "" : "line-clamp-3"
                        }`}
                    >
                      {element.text}
                    </div>
                    <button
                      onClick={() => toggleMobileExpand(index)}
                      className="text-blue-500 mt-1 text-sm"
                    >
                      {mobileExpanded[index] ? "Read less" : "Read more..."}
                    </button>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};