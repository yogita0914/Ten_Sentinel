import React from "react";
import { useState } from 'react';
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { ChatBubbleOvalLeftEllipsisIcon, PaperAirplaneIcon } from "@heroicons/react/24/solid";
import image1 from "../../assets/AWS-Sentinel/AWS-1.webp";
import image2 from "../../assets/AWS-Sentinel/AWS-2.svg";
import image3 from "../../assets/AWS-Sentinel/AWS-3.svg";
import image4 from "../../assets/AWS-Sentinel/AWS-4.svg";
import image5 from "../../assets/AWS-Sentinel/aws-image.jpg";
import image6 from "../../assets/AWS-Sentinel/image-6.svg";
import image7 from "../../assets/AWS-Sentinel/image-7.svg";
import image8 from "../../assets/AWS-Sentinel/image-8.svg";
import Support from "../../assets/ContactUSPage/Support.jpg";
import OrbitalDiagram from './OrbitalDiagram';
import OrbitalDiagram2 from './OrbitalDiagram2';

// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Tool Images
import tool1 from "../../assets/AWS-Sentinel/kube-bench.webp";
import tool2 from "../../assets/AWS-Sentinel/pacu.webp";
import tool3 from "../../assets/AWS-Sentinel/pacbot.webp";
import tool4 from "../../assets/AWS-Sentinel/TruffleHog.png";
import tool5 from "../../assets/AWS-Sentinel/prowler.svg";
import tool6 from "../../assets/AWS-Sentinel/scoutsuite.webp";
import tool7 from "../../assets/AWS-Sentinel/grayhat-warfare.png";
import tool8 from "../../assets/AWS-Sentinel/cloud-mapper.png";

const AWSSentinel = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const toolImages = [

    { src: tool1, name: "Kube-Bench", description: "Scans Kubernetes clusters for CIS compliance." },
    { src: tool2, name: "Pacu", description: "AWS exploitation framework for security testing." },
    { src: tool3, name: "PacBot", description: "Automates cloud security and compliance." },
    { src: tool4, name: "TruffleHog", description: "Finds secrets across code repositories." },
    { src: tool5, name: "Prowler", description: "Performs AWS security assessments." },
    { src: tool6, name: "Scout Suite", description: "Multi-cloud security auditing tool." },
    { src: tool7, name: "Grayhat Warefare", description: "Searches for exposed AWS S3 buckets." },
    { src: tool8, name: "Cloud Mapper", description: "Visualizes and audits AWS environments." },
  ];


  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Simulate submission success
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(false);
    }, 3000);
  };


  return (
    <div className="relative text-white">
      {/* Hero Section */}
      <div
        className="relative min-h-screen flex items-center justify-center px-4 pt-24 sm:pt-28 bg-cover bg-center"
        style={{ backgroundImage: `url(${image5})` }}
      >
        <div className="max-w-2xl text-center z-10">
          <h3 className="text-white text-sm font-extrabold tracking-widest mb-4 uppercase" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.6)' }}>
            Cyber Security Services
          </h3>
          <h1
            className="text-lg sm:text-3xl md:text-3xl lg:text-5xl font-bold text-blue-400 mb-8"
            style={{
              textShadow: '0 0 6px rgba(64, 217, 231, 0.5)', // subtle white glow
            }}
          >
            AWS Penetration Testing
          </h1>
          <p className="text-base sm:text-lg leading-relaxed mb-6 font-medium">
            Our AWS Penetration Testing service helps you identify and eliminate security vulnerabilities in your AWS infrastructure,
            all while keeping costs optimized. We simulate real-world attack scenarios to assess your cloud environment for misconfigurations,
            weak access controls, exposed services, and insecure APIs—providing a comprehensive view of your security posture.
          </p>
          <p className="text-base sm:text-lg mb-8 font-medium">
            Our team of certified security professionals uses a combination of automated tools and manual testing techniques to detect
            both known and unknown vulnerabilities.
          </p>

          <a
            href="#contact"
            className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white font-semibold px-6 py-3 mb-6 rounded-md transition"
          >
            Talk to Our Expert!
          </a>
        </div>
      </div>

      {/* What is AWS Penetration Testing */}
      <div className="bg-white text-gray-800 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col min-[1245px]:flex-row items-start gap-10">

          {/* Image block — hidden below 720px */}
          <div className="w-full min-[1245px]:w-1/2 max-[719px]:hidden">
            <img
              src={image1}
              alt="AWS Penetration Testing"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Text block */}
          <div className="w-full min-[1245px]:w-1/2">
            <h2 className="text-2xl max-[1244px]:text-xl min-[1245px]:text-4xl font-bold text-gray-800 mb-4 text-center min-[1245px]:text-left">
              What is AWS Penetration Testing
            </h2>
            <p className="mb-4 text-base max-[1244px]:text-1xl font-medium">
              AWS Penetration Testing is the process of evaluating the security of AWS-based applications and infrastructure by simulating real-world attacks.
              These tests are designed to identify vulnerabilities in cloud configurations, access controls, APIs, EC2 instances, S3 buckets, IAM roles,
              and other AWS services. Unlike traditional pentests, AWS penetration testing must also adhere to Amazon’s policies and guidelines, ensuring
              that security assessments do not disrupt services or breach the AWS Acceptable Use Policy.
            </p>
          </div>

        </div>
      </div>




      {/* Why Choose TEN Sentinel */}
      <div className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Why Choose Our AWS Penetration Testing?
          </h2>
          <div className="flex flex-col md:flex-row gap-6">
            {[image2, image3, image4].map((img, index) => {
              const titles = ["Experienced Team of Certified Security Analysts",
                "Comprehensive Testing Methodologies Tailored for AWS",
                "Commitment to Delivering Actionable Insights"];
              const texts = [
                "Our team consists of highly skilled and certified security analysts with extensive expertise in safeguarding cloud environments. Their qualifications and experience ensure that your AWS infrastructure is evaluated and protected by industry-leading professionals.",
                "We employ thorough and customized testing methodologies specifically designed for AWS environments. Our approach covers a wide range of security aspects, ensuring a robust assessment of your cloud infrastructure's resilience against potential threats.",
                "We are dedicated to providing clear, actionable insights from our security assessments. Our detailed reports and recommendations are crafted to address vulnerabilities effectively, enabling your organization to enhance security and make informed decisions to protect your AWS environment.",
              ];
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-1/3 transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                >
                  <img src={img} alt={titles[index]} className="w-full h-[160px] sm:h-[200px] object-contain p-2 sm:p-4" />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-black">{titles[index]}</h3>
                    <p className="text-black">{texts[index]}</p>
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
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".custom-swiper-button-next",
                prevEl: ".custom-swiper-button-prev",
              }}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
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
                      <p className="text-sm leading-relaxed">{tool.description}</p>
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
            setActiveIndex(prev => (prev === index ? null : index));
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
          <img src={img} alt={titles[index]} className="h-12 w-auto mb-4" />
          <h3 className="text-lg font-semibold text-black text-center">{titles[index]}</h3>
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
            Understanding the vulnerabilities through penetration testing is the first step towards building a secure AWS cloud environment.
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
      <div id="contact" className="flex justify-center items-stretch gap-8 px-4 py-20 flex-wrap bg-white">
        {/* Left Image */}
        <div className="flex-1 min-w-[300px] max-w-[500px] hidden md:block">
          <motion.img
            src={Support}
            alt="Customer Support"
            className="w-full h-full rounded-xl object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#f8f8f8] p-8 rounded-xl shadow-md flex-1 min-w-[300px] max-w-[500px] relative overflow-hidden"
        >
          {/* Animated Blobs */}
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-20 -top-20 w-40 h-40 bg-cyan-400 rounded-full opacity-30"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 30, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -right-20 -bottom-20 w-48 h-48 bg-blue-400 rounded-full opacity-30"
          />

          <div className="relative z-10">
            <motion.div whileHover={{ scale: 1.05 }} className="flex justify-center w-full mb-4">
              <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full">
                <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium tracking-wider">CONTACT US</span>
              </div>
            </motion.div>

            <p className="text-lg text-center mb-6 text-gray-500 sm:text-xl">
              We’d love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col gap-6">
                {/* Name Input */}
                <motion.div animate={name ? { scale: 1.03 } : { scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base transition-all"
                  />
                  {name && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2">
                      ✓
                    </motion.div>
                  )}
                </motion.div>

                {/* Email Input */}
                <motion.div animate={email ? { scale: 1.03 } : { scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base transition-all"
                  />
                  {email && (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2">
                      ✓
                    </motion.div>
                  )}
                </motion.div>

                {/* Message Textarea */}
                <motion.div animate={message ? { scale: 1.03 } : { scale: 1 }} transition={{ type: "spring", stiffness: 300, damping: 20 }} className="relative">
                  <textarea
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className="w-full px-5 py-3 rounded-2xl border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm sm:text-base resize-y"
                  />
                </motion.div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={!email || !name || !message}
                whileHover={{
                  scale: email && name && message ? 1.05 : 1,
                  boxShadow: email && name && message ? "0 10px 25px -5px rgba(34, 211, 238, 0.3)" : "none",
                }}
                whileTap={{ scale: email && name && message ? 0.95 : 1 }}
                className={`w-40 mx-auto block px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${email && name && message ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white" : "bg-gray-200 text-gray-400 cursor-not-allowed"}`}
                style={{ whiteSpace: 'nowrap' }}
              >
                Send Message <PaperAirplaneIcon className="h-5 w-5" />
              </motion.button>

              {submitted && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-green-600 font-semibold text-center mt-2">
                  Submitted successfully!
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>


      </div>
      <section class="bg-gray-50 py-16 px-6 md:px-12 lg:px-24">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">Frequently Asked Questions</h2>
          <p class="text-gray-600 text-center mb-12">Find answers to the most common questions about AWS Penetration Testing.</p>

          <div class="space-y-4">
            <details class="bg-white p-6 rounded-2xl shadow-sm group">
              <summary class="font-semibold text-lg cursor-pointer text-gray-800 group-open:text-blue-600 flex justify-between items-center">
                What is AWS Penetration Testing?
                <svg
                  class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-600">AWS Penetration Testing is the process of simulating cyberattacks on your AWS infrastructure to identify vulnerabilities and misconfigurations.</p>
            </details>

            <details class="bg-white p-6 rounded-2xl shadow-sm group">
              <summary class="font-semibold text-lg cursor-pointer text-gray-800 group-open:text-blue-600 flex justify-between items-center">
                Is penetration testing allowed on AWS?
                <svg
                  class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-600">Yes, AWS allows penetration testing on certain services without prior approval. However, it's important to follow their [penetration testing policy](https://aws.amazon.com/security/penetration-testing/).</p>
            </details>

            <details class="bg-white p-6 rounded-2xl shadow-sm group">
              <summary class="font-semibold text-lg cursor-pointer text-gray-800 group-open:text-blue-600 flex justify-between items-center">
                Which tools can I use for AWS testing?
                <svg
                  class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-600">Common tools include Prowler, Kube-Bench, Pacu, ScoutSuite, and CloudSploit for auditing and security assessments.</p>
            </details>

            <details class="bg-white p-6 rounded-2xl shadow-sm group">
              <summary class="font-semibold text-lg cursor-pointer text-gray-800 group-open:text-blue-600 flex justify-between items-center">
                Can I automate AWS security testing?
                <svg
                  class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-600">Yes, tools like AWS Inspector, Prowler CI/CD integration, and custom Lambda scripts allow you to automate testing processes.</p>
            </details>

            <details class="bg-white p-6 rounded-2xl shadow-sm group">
              <summary class="font-semibold text-lg cursor-pointer text-gray-800 group-open:text-blue-600 flex justify-between items-center">
                What are the main objectives of AWS Pen Test ?
                <svg
                  class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-600">The primary objectives are to identify vulnerabilities, assess the effectiveness of security controls, and provide actionable recommendations to enhance your AWS environment's security.</p>
            </details>

            <details class="bg-white p-6 rounded-2xl shadow-sm group">
              <summary class="font-semibold text-lg cursor-pointer text-gray-800 group-open:text-blue-600 flex justify-between items-center">
                How can AWS penetration testing enhance cloud security
                <svg
                  class="w-5 h-5 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p class="mt-4 text-gray-600">AWS penetration testing helps organizations proactively identify vulnerabilities, apply security patches, and strengthen overall defenses. CyberSapiens provides detailed reports and recommendations to enhance your AWS security posture.</p>
            </details>

          </div>
        </div>
      </section>

    </div>


  );
};

export default AWSSentinel;
