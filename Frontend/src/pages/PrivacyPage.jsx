import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "../components/cloud-security/HeroSection";
import { FileLock } from "lucide-react";

import first from "../assets/privacy_images/privacy1.png";
import second from "../assets/privacy_images/privacy2.png";
import third from "../assets/privacy_images/privacy3.png";
import fourth from "../assets/privacy_images/privacy4.png";
import fifth from "../assets/privacy_images/privacy5.png";
import sixth from "../assets/privacy_images/privacy6.png";
import seventh from "../assets/privacy_images/privacy7.png";
import hero from "../assets/privacy_images/hero.avif";

export const PrivacyPage = () => {
  const [mobileExpanded, setMobileExpanded] = useState({});
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const privacyElements = [
    {
      title: "Introduction",
      image: first,
      text: (
        <>
          Welcome to The Entrepreneurship Network (referred to as "we," "our,"
          or "us"). We are deeply committed to protecting and respecting your
          privacy. This Privacy Policy outlines how we collect, use, disclose,
          and protect your information when you access our website at{" "}
          <a
            href="https://www.entrepreneurshipnetwork.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            https://www.entrepreneurshipnetwork.net/
          </a>
          . By continuing to use our website, you agree to the practices
          described in this policy.
        </>
      ),
    },
    {
      title: "Information We Collect",
      image: second,
      text: `We may collect both personal and non-personal information when you interact with our website, mobile applications, or other services. This information helps us provide a better user experience, improve our services, and communicate effectively with you.`,
    },
    {
      title: "How We Use Your Information",
      image: third,
      text: `Your personal information is used primarily to provide the services or information that you request from us, such as sending newsletters, updates, promotional offers, or responding to inquiries and customer support requests. We also use your data to enhance and personalize your experience with our products and services, ensuring content, features, and communication are tailored to your preferences.`,
    },
    {
      title: "Disclosure of Your Information",
      image: fourth,
      text: `We may share your personal information with members of our organizational group or trusted third parties under strict confidentiality agreements and only for the purposes outlined in this policy. These third parties may include service providers, business partners, or legal authorities when required, and they are obligated to handle your data securely and lawfully.`,
    },
    {
      title: "Your Rights",
      image: fifth,
      text: `We respect your rights regarding your personal data and are committed to ensuring transparency, fairness, and control over how your information is handled. Depending on applicable data protection laws in your region, you may have several rights in relation to the personal data we collect and process about you.`,
    },
    {
      title: "Data Security",
      image: sixth,
      text: `The security of your personal data is a top priority for us. We are committed to protecting your information against unauthorized access, use, disclosure, alteration, or destruction. To achieve this, we implement a combination of technical, administrative, and physical security measures aligned with industry best practices.`,
    },
    {
      title: "Changes to This Privacy Policy",
      image: seventh,
      text: `We may update this Privacy Policy from time to time to reflect changes in legal requirements, our data handling practices, the services we offer, or advancements in technology. Such changes may be necessary to comply with new regulations, enhance user privacy, or improve transparency. Whenever we make updates, we will post the revised Privacy Policy on this page and update the “Effective Date” at the top of the document.`,
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
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const showReadMoreOption = windowWidth <= 445;

  return (
    <div className="flex flex-col bg-white">
      {/* 2. Replace the old header with the reusable HeroSection component */}
      <HeroSection
        subtitle="Your trust is our priority. Learn how we protect your information."
        title="Privacy Policy"
        backgroundImage={hero}
        Icon={FileLock}
        showButton={false}
      />

      {/* The rest of your page content */}
      <ul className="w-full max-w-7xl mx-auto flex flex-col gap-8 px-4 md:px-8 z-10 relative">
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
              // Enhanced styling for better visual separation
              className="border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white"
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } items-center lg:items-start gap-6 p-6 transition`}
              >
                <img
                  src={element.image}
                  alt={element.title}
                  className="w-[95%] sm:w-full max-w-[460px] object-contain rounded-md"
                />
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center lg:text-left text-gray-800">
                    {element.title}
                  </h2>
                  <div className="hidden lg:block text-gray-700 text-base leading-relaxed">
                    {element.text}
                  </div>
                  {/* Mobile specific text view */}
                  <div className="block lg:hidden text-sm text-gray-700">
                    <div
                      className={`overflow-hidden transition-all ${
                        // Apply line-clamp only if "Read more" is active AND section is not expanded
                        showReadMoreOption && !mobileExpanded[index]
                          ? "line-clamp-3"
                          : ""
                      }`}
                    >
                      {element.text}
                    </div>
                    {/* Show button only if "Read more" functionality is active */}
                    {showReadMoreOption && (
                      <button
                        onClick={() => toggleMobileExpand(index)}
                        className="text-blue-500 mt-1 text-sm font-semibold"
                      >
                        {mobileExpanded[index] ? "Read less" : "Read more..."}
                      </button>
                    )}
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
