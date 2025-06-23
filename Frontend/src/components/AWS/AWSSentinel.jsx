import React, { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import image2 from "../../assets/AWS-Sentinel/AWS-2.jpg";
import image3 from "../../assets/AWS-Sentinel/AWS-3.svg";
import image4 from "../../assets/AWS-Sentinel/AWS-4.svg";
import image5 from "../../assets/AWS-Sentinel/aws-image.jpg";
import image6 from "../../assets/AWS-Sentinel/image-6.svg";
import image7 from "../../assets/AWS-Sentinel/image-7.svg";
import image8 from "../../assets/AWS-Sentinel/image-8.svg";
import logo from "../../assets/AWS-Sentinel/azur.png";
import OrbitalDiagram from "./OrbitalDiagram";
import OrbitalDiagram2 from "./OrbitalDiagram2";
import Faq from "./Faq";

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import tool1 from "../../assets/AWS-Sentinel/kube-bench.webp";
import tool2 from "../../assets/AWS-Sentinel/pacu.webp";
import tool3 from "../../assets/AWS-Sentinel/pacbot.webp";
import tool4 from "../../assets/AWS-Sentinel/TruffleHog.png";
import tool5 from "../../assets/AWS-Sentinel/prowler.svg";
import tool6 from "../../assets/AWS-Sentinel/scoutsuite.webp";
import tool7 from "../../assets/AWS-Sentinel/grayhat-warfare.png";
import tool8 from "../../assets/AWS-Sentinel/cloud-mapper.png";
import GetInTouch_Section from "../Marketing/GetInTouch_Section";

const AWSSentinel = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toolImages = [
    {
      src: tool1,
      name: "Kube-Bench",
      description: "Scans Kubernetes clusters for CIS compliance.",
    },
    {
      src: tool2,
      name: "Pacu",
      description: "AWS exploitation framework for security testing.",
    },
    {
      src: tool3,
      name: "PacBot",
      description: "Automates cloud security and compliance.",
    },
    {
      src: tool4,
      name: "TruffleHog",
      description: "Finds secrets across code repositories.",
    },
    {
      src: tool5,
      name: "Prowler",
      description: "Performs AWS security assessments.",
    },
    {
      src: tool6,
      name: "Scout Suite",
      description: "Multi-cloud security auditing tool.",
    },
    {
      src: tool7,
      name: "Grayhat Warefare",
      description: "Searches for exposed AWS S3 buckets.",
    },
    {
      src: tool8,
      name: "Cloud Mapper",
      description: "Visualizes and audits AWS environments.",
    },
  ];

  const cards = [
    {
      title: "Experienced Team of Certified Security Analysts",
      text: "Our team consists of highly skilled and certified security analysts with extensive expertise in safeguarding cloud environments. Their qualifications and experience ensure that your AWS infrastructure is evaluated and protected by industry-leading professionals.",
      img: image2,
    },
    {
      title: "Comprehensive Testing Methodologies Tailored for AWS",
      text: "We employ thorough and customized testing methodologies specifically designed for AWS environments. Our approach covers a wide range of security aspects, ensuring a robust assessment of your cloud infrastructure's resilience against potential threats.",
      img: image3,
    },
    {
      title: "Commitment to Delivering Actionable Insights",
      text: "We are dedicated to providing clear, actionable insights from our security assessments. Our detailed reports and recommendations are crafted to address vulnerabilities effectively, enabling your organization to enhance security and make informed decisions to protect your AWS environment.",
      img: image4,
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 821);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 821);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index));
  };

  const truncateText = (text, len = 140) => {
    return text.length <= len ? text : text.slice(0, len) + "...";
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <div
        className="relative min-h-screen pb-10 flex flex-col-reverse md:flex-row items-center px-6 pt-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${image5})` }}
      >
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-8 z-10">
          {/* Left side – Image */}
          <div className="hidden sm:flex justify-center items-center md:order-1 order-2">
            <img
              src={logo}
              alt="AWS Illustration"
              className="max-w-xs sm:max-w-sm md:max-w-md w-full h-auto object-contain animate-enter-then-hover-large-cloud"
            />
          </div>

          {/* Right side – Text Content */}
          <div className="text-center md:text-left max-w-xl mx-auto md:mx-0 order-1 md:order-2">
            <h1
              className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 mb-6"
              style={{
                textShadow: "0 0 6px rgba(64, 217, 231, 0.5)",
              }}
            >
              AWS Penetration Testing
            </h1>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-4 font-medium text-white">
              Our AWS Penetration Testing service helps you identify and
              eliminate security vulnerabilities in your AWS infrastructure, all
              while keeping costs optimized. We simulate real-world attack
              scenarios to assess your cloud environment for misconfigurations,
              weak access controls, exposed services, and insecure
              APIs—providing a comprehensive view of your security posture.
            </p>
            <p className="text-sm sm:text-base md:text-lg mb-6 font-medium text-white">
              Our team of certified security professionals uses a combination of
              automated tools and manual testing techniques to detect both known
              and unknown vulnerabilities.
            </p>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 rounded-md transition"
            >
              Talk to Our Expert!
            </a>
          </div>
        </div>
      </div>

      {/* Why Choose TEN Sentinel */}
      <div className="bg-gray-100 py-16 px-4 sm:px-6 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our AWS Penetration Testing?
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            {cards.map(({ title, text, img }, index) => {
              const isExpanded = expandedIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-4/5 md:w-1/3 mx-auto transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-[160px] sm:h-[200px] object-contain p-2 sm:p-4"
                  />
                  <div className="p-4 sm:p-6 ">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 text-black">
                      {title}
                    </h3>

                    <p
                      className={`${
                        isMobile ? "text-xs" : "text-sm sm:text-base"
                      } text-black`}
                    >
                      {isMobile
                        ? isExpanded
                          ? text
                          : truncateText(text)
                        : text}
                    </p>
                    {isMobile && text.length > 140 && (
                      <button
                        onClick={() => toggleReadMore(index)}
                        className="mt-2 text-indigo-600 hover:text-indigo-800 font-semibold text-sm"
                      >
                        {isExpanded ? "Read Less" : "Read More"}
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tools We Use Slider */}
      <div className="bg-white py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Some of the Tools We Use for AWS Penetration Testing
        </h2>
        <div className="max-w-7xl mx-auto relative">
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="tool-swiper"
            >
              {toolImages.map((tool, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="relative group h-72 cursor-pointer"
                    onClick={() => {
                      if (window.innerWidth < 768) {
                        setActiveIndex((prev) =>
                          prev === index ? null : index
                        );
                      }
                    }}
                    onMouseEnter={() => {
                      if (window.innerWidth >= 768) {
                        setActiveIndex(index);
                      }
                    }}
                    onMouseLeave={() => {
                      if (window.innerWidth >= 768) {
                        setActiveIndex(null);
                      }
                    }}
                  >
                    {/* Front Layer */}
                    <div
                      className={`
        absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b0764] 
        rounded-lg p-4 flex flex-col items-center justify-center 
        transition-opacity duration-300 
        ${activeIndex === index ? "opacity-0" : "opacity-100"}
      `}
                    >
                      <img
                        src={tool.src}
                        alt={tool.name}
                        className="h-24 w-auto object-contain mb-4"
                      />
                      <p className="text-white text-lg font-semibold text-center">
                        {tool.name}
                      </p>
                    </div>

                    {/* Back Layer */}
                    <div
                      className={`
        absolute inset-0 bg-[#dcdcf3] text-black rounded-lg p-6 
        transition-opacity duration-300 flex items-center justify-center text-center 
        ${activeIndex === index ? "opacity-100" : "opacity-0"}
      `}
                    >
                      <p className="text-sm leading-relaxed">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Arrows */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="custom-swiper-button-prev absolute -left-5 sm:-left-6 md:-left-8 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-2.5 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
              aria-label="Previous tool"
            >
              <ChevronLeftIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="custom-swiper-button-next absolute -right-5 sm:-right-6 md:-right-8 top-1/2 transform -translate-y-1/2 bg-white p-2 md:p-2.5 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
              aria-label="Next tool"
            >
              <ChevronRightIcon className="h-5 w-5 md:h-6 md:w-6 text-gray-700" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* What We Provide Section */}
      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          AWS Penetration Testing – What We Provide?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {[image2, image6, image7, image8].map((img, index) => {
            const titles = [
              "Network and Web Security",
              "Intrusion Security",
              "Identity and Access Security",
              "Retesting",
            ];
            const descriptions = [
              "We assist organizations in creating robust security measures for AWS networks and applications.",
              "Our team provides effective intrusion detection and incident response solutions tailored for AWS.",
              "We focus on strengthening identity and access management controls for AWS environments.",
              "After vulnerabilities are remediated, we retest to ensure the security gaps are fully resolved.",
            ];

            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative h-64 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer group"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setActiveIndex((prev) => (prev === index ? null : index));
                  }
                }}
                onMouseEnter={() => {
                  if (window.innerWidth >= 768) {
                    setActiveIndex(index);
                  }
                }}
                onMouseLeave={() => {
                  if (window.innerWidth >= 768) {
                    setActiveIndex(null);
                  }
                }}
              >
                {/* Front */}
                <div
                  className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 
          ${isActive ? "opacity-0" : "opacity-100"}`}
                >
                  <img
                    src={img}
                    alt={titles[index]}
                    className="h-12 w-auto mb-4"
                  />
                  <h3 className="text-lg font-semibold text-black text-center">
                    {titles[index]}
                  </h3>
                </div>

                {/* Back */}
                <div
                  className={`absolute inset-0 bg-indigo-100 px-4 text-center flex items-center justify-center transition-opacity duration-300
          ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <p className="text-sm text-gray-700">{descriptions[index]}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* AWS PENETRATION TESTING PROCESS */}
      <div className=" text-white py-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <OrbitalDiagram />
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#3b0764] text-white py-26 px-6 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            "Security isn’t just a feature — it’s a foundation."
          </h2>
          <p className="text-gray-400 text-lg">
            Understanding the vulnerabilities through penetration testing is the
            first step towards building a secure AWS cloud environment.
          </p>
        </div>
      </div>

      {/* Need of Securing AWS Cloud Environment */}
      <div className=" text-white py-10 px-2 md:px-0">
        <div className="max-w-7xl mx-auto">
          <OrbitalDiagram2 />
        </div>
      </div>

      {/* Contact Section */}
      <section>
        <GetInTouch_Section/>
      </section>
      <Faq/>

    </div>
  );
};

export default AWSSentinel;
