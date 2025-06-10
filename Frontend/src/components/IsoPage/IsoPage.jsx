import React from "react";
import { motion } from "framer-motion";
// Assuming hero data is used elsewhere or will be used.
// import { hero } from "../../assets/data/cloudSecurity";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";
import hero from '../../assets/IsoPage/hero.avif';
import img1 from '../../assets/IsoPage/img1.avif';
import img2 from '../../assets/IsoPage/img2.webp';
import img3 from '../../assets/IsoPage/img3.webp';
import img4 from '../../assets/IsoPage/img4.avif';
import icon1 from '../../assets/IsoPage/icon1.png';
import icon2 from '../../assets/IsoPage/icon2.jpg';
import icon3 from '../../assets/IsoPage/icon3.avif';
import icon4 from '../../assets/IsoPage/icon4.avif';
import icon5 from '../../assets/IsoPage/icon5.avif';
import icon6 from '../../assets/IsoPage/icon6.avif';
import icon7 from '../../assets/IsoPage/icon7.avif';
import icon8 from '../../assets/IsoPage/icon8.avif';
import b1 from '../../assets/IsoPage/b1.png';
import b2 from '../../assets/IsoPage/b2.png';
import b3 from '../../assets/IsoPage/b3.png';
import b4 from '../../assets/IsoPage/b4.png';
import b5 from '../../assets/IsoPage/b5.png';
import b6 from '../../assets/IsoPage/b6.png';
import b7 from '../../assets/IsoPage/b7.png';
import b8 from '../../assets/IsoPage/b8.png';
import check from '../../assets/IsoPage/check.png';

const ISO27001CertificationPage = () => {
  return (
    <>
      <header
        className="relative text-white text-center h-screen bg-cover bg-center overflow-hidden flex items-center justify-center px-4"
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        {/* Gradient Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-green-900 to-indigo-900"
        ></motion.div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto w-full">
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full">
              <ShieldCheck className="w-10 h-10 md:w-16 md:h-16 text-blue-300" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            ISO 27001 Certification
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 text-sm md:text-xl max-w-3xl mx-auto text-blue-100"
          >
            Demonstrate Your Commitment to Information Security and Compliance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-8"
          >
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm md:text-lg font-medium px-5 py-3 md:px-8 md:py-4 rounded-lg shadow-lg hover:shadow-blue-500/20 hover:translate-y-[-2px] transition-all duration-300"
            >
              Get Started
            </a>
          </motion.div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 hidden md:block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </header>

      <div className="w-full font-[Poppins] bg-white overflow-x-hidden">
        {/* Subheading & Paragraphs */}
        <div className="w-full font-[Poppins] bg-white overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12">
          <div className="flex flex-col items-start gap-8 md:gap-12">
            {/* Text section - now comes first (top on small screens, left on md+) */}
            <div className="w-full text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
                Become an ISO 27001 Certified Organisation!
              </h2>
              {/* Image section - placed after heading for responsiveness */}
              <div
                className="w-full h-[200px] sm:h-[250px] md:h-[350px] relative text-white overflow-hidden flex-shrink-0 mt-6 md:mt-8"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 pt-4 sm:pt-6 md:pt-8">
                We help businesses like yours to become an ISO 27001 Certified Organisation in the shortest span of time.
              </p>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 pt-4 sm:pt-6 md:pt-7">
                Having helped multiple businesses to improve their Cyber Security Processes via audits, assessments & certifications.
              </p>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 pt-4 sm:pt-6 md:pt-7">
                We completely understand each and every pain point that businesses face while applying for ISO 27001 Certification.
              </p>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 pt-4 sm:pt-6 md:pt-7">
                So, it's time for your Business to become an ISO 27001 Certified organization!
              </p>
            </div>
          </div>
        </div>
{/* Reviews */}
<div className="pt-16 sm:pt-20 md:pt-24 text-center text-3xl sm:text-4xl font-semibold">
  <h2>Our Reviews</h2>
</div>

<div className="relative w-full mt-8 sm:mt-12 md:mt-16 px-4 sm:px-6 md:px-8 flex justify-center">
  {/* Left Arrow */}
  <button
    className="flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 z-10"
    onClick={() => {
      const container = document.getElementById("review-carousel");
      container.scrollBy({ left: -window.innerWidth * 0.8, behavior: "smooth" });
    }}
  >
    ⬅️
  </button>

  {/* Right Arrow */}
  <button
    className="flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 sm:p-3 rounded-full shadow-lg hover:bg-blue-600 z-10"
    onClick={() => {
      const container = document.getElementById("review-carousel");
      container.scrollBy({ left: window.innerWidth * 0.8, behavior: "smooth" });
    }}
  >
    ➡️
  </button>

  {/* Scrollable Review Cards */}
  <div
    id="review-carousel"
    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-6 sm:gap-8 md:gap-10 pb-6 w-full"
  >
    {[
      {
        name: "Lachlan Glen",
        title: "CEO - LDS",
        text: "Ten Sentinel made our ISO 27001 certification journey seamless. Their team broke down complex requirements into understandable steps and guided us with patience. They offered tailored advice and helped us build a robust ISMS. The auditors were impressed by our readiness, all thanks to their preparation. We now feel more secure and confident in our information practices. I highly recommend their services for smooth and effective ISO compliance.",
      },
      {
        name: "Dharmesh Joshi",
        title: "Trikon",
        text: "Working with Ten Sentinel for ISO 27001 was a great decision. They clearly understood our business needs and helped us implement effective controls. Their team was responsive, knowledgeable, and provided great training sessions. Thanks to them, our audit was successful with no major findings. We now operate with better security policies and awareness across departments. Excellent service, clear communication, and real value throughout the engagement.",
      },
      {
        name: "Meera Kapoor",
        title: "CTO – FinSecureTech",
        text: "Ten Sentinel delivered exceptional support for our ISO 27001 certification. They assessed our risks thoroughly and created realistic solutions. Their consultants were very approachable and simplified the entire process. From documentation to employee training, everything was well organized. Our team now better understands the importance of information security. With their guidance, we passed the audit smoothly. Highly recommended for any tech company aiming for strong security practices.",
      },
      {
        name: "Anjali Desai",
        title: "COO – NovaCore Analytics",
        text: "Ten Sentinel helped us earn ISO 27001 certification with confidence. They guided us step-by-step, making complex clauses easier to understand. Their team was punctual, responsive, and deeply knowledgeable about compliance needs. The policies and risk assessments they built were both practical and effective. We are now more structured and audit-ready. Their work made a noticeable improvement in how we handle information security. Truly a great collaboration.",
      },
      {
        name: "Aditya Rao",
        title: "Compliance Lead - HealthByte",
        text: "Ten Sentinel provided top-notch consulting during our ISO 27001 certification. Their structured approach helped us fill compliance gaps efficiently. They offered practical, business-aligned solutions and ensured we were audit-ready. Their internal training sessions boosted employee awareness, and their support during documentation was invaluable. We’re now better equipped to manage data securely. Their team’s professionalism and clarity made the entire process smooth. Would absolutely recommend for ISO implementations.",
      },
      {
        name: "Ravi Menon",
        title: "IT Head - EcoGrid Solutions",
        text: "Our experience with CyberSapiens for ISO 27001 certification was outstanding. They identified risks quickly and helped us implement effective controls. The audit went smoothly thanks to their detailed preparation. We appreciated their clear communication, fast responses, and tailored solutions. Post-certification, our internal processes have improved significantly. The team also trained our staff on best practices. Overall, a reliable and skilled partner for any ISO-related initiatives.",
      },
    ].map((review, index) => (
      <div
        key={index}
        className="snap-center min-w-[calc(100%-2rem)] sm:min-w-[calc(100%-4rem)] md:min-w-[680px] min-h-[350px] sm:min-h-[380px] md:min-h-[420px] bg-white border-2 border-gray-300 p-6 sm:p-8 md:p-12 text-base sm:text-xl md:text-2xl leading-relaxed shadow-2xl rounded-3xl flex flex-col justify-between"
      >
        <p className="text-gray-800 poppins text-base sm:text-lg md:text-xl leading-loose">
          “{review.text}”
        </p>
        <div className="pt-6 sm:pt-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-900">
            {review.name}
          </h2>
          <h3 className="text-center text-gray-600 text-base sm:text-lg md:text-xl">{review.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div>


        {/* What is ISO Section */}
        <div className="pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 md:px-12">
          <div className="flex flex-col items-center max-w-7xl mx-auto gap-8 md:gap-10">
            {/* Left Text Content */}
            <div className="w-full text-left leading-normal">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold">What is ISO 27001 Certification?</h2>
              {/* Image after heading for responsive flow */}
              <div
                className="w-full h-[200px] sm:h-[250px] md:h-[350px] shadow-lg flex-shrink-0 mt-6 md:mt-8"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 pt-4 sm:pt-6 leading-normal">
                ISO 27001 is an international standard for information security management. It provides a framework for managing and protecting sensitive information and data, and helps organizations mitigate risks associated with cyber attacks, data breaches, and other digital threats.
              </p>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 pt-4 sm:pt-6 leading-normal">
                Obtaining ISO 27001 certification demonstrates an organization’s commitment to information security, and can help build customer trust and compliance with regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Why ISO Section */}
        <div className="pt-16 sm:pt-20 md:pt-32 px-4 sm:px-6 md:px-12 lg:px-32">
          <div className="flex flex-col items-center gap-8 md:gap-10">
            {/* Text on the right (appears below image on small screens) */}
            <div className="w-full max-w-2xl">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6">Why your Organisation needs ISO 27001 Certification?</h2>
              {/* Image on the left (appears above text on small screens) */}
              <div
                className="w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[400px] flex-shrink-0 mt-6 md:mt-8"
                style={{
                  backgroundImage: `url(${img3})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-normal pt-4 sm:pt-6">
                Obtaining ISO 27001 certification can help your organization improve its information security posture, mitigate risks associated with cyber threats and data breaches, and demonstrate a commitment to protecting sensitive information.
              </p>
              <p className="text-base sm:text-lg md:text-2xl text-gray-700 leading-normal pt-4 sm:pt-6">
                By implementing ISO 27001, your organization can establish a comprehensive information security management system that protects against unauthorized access, theft, and misuse of information. Additionally, ISO 27001 certification can help your organization comply with regulatory requirements and enhance customer trust and confidence in your ability to safeguard their information.
              </p>
            </div>
          </div>
        </div>

        {/* Certification Process */}
        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="pt-15 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12 md:mb-16">
              Our ISO 27001 Certification Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10">
              {[
                {
                  title: "Define Scope",
                  desc: "Understand the requirement and define the scope accordingly",
                  icon: icon1,
                },
                {
                  title: "Current State Analysis",
                  desc: "Analyze what controls are implemented currently",
                  icon: icon2,
                },
                {
                  title: "Control Mapping",
                  desc: "Map the existing controls to the applicable standard/regulation",
                  icon: icon3,
                },
                {
                  title: "Gap Assessment",
                  desc: "Identify controls/Gaps that would be required as per applicability",
                  icon: icon4,
                },
                {
                  title: "Risk Analysis",
                  desc: "Assess and Define Risks as per the applicable factors",
                  icon: icon5,
                },
                {
                  title: "Implementation",
                  desc: "Ensure the controls are implemented accordingly",
                  icon: icon6,
                },
                {
                  title: "Internal Audit",
                  desc: "Perform Internal Audit to prepare for the final Certification",
                  icon: icon7,
                },
                {
                  title: "External Audit",
                  desc: "Participate in external audits and assist accordingly",
                  icon: icon8,
                },
              ].map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center border border-gray-200 rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md transition duration-300"
                >
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] object-contain mb-4"
                  />
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-800 mb-2">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-base sm:text-lg md:text-2xl text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-gray-800">
              Benefits of ISO 27001 Certification
            </h2>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: b1,
                  title: "Improved Information Security",
                  desc: "Helps your organization improve its information security posture, safeguard against cyber threats, and protect sensitive info.",
                  bg: "bg-red-100",
                },
                {
                  icon: b2,
                  title: "Compliance with Legal and Regulatory Requirements",
                  desc: "Ensures compliance with information security laws and regulations, reducing non-compliance risk.",
                  bg: "bg-orange-100",
                },
                {
                  icon: b3,
                  title: "Enhanced Customer Trust",
                  desc: "Demonstrates commitment to protecting sensitive data, boosting trust in your services and products.",
                  bg: "bg-green-100",
                },
                {
                  icon: b4,
                  title: "Competitive Advantage",
                  desc: "Gives your organization a competitive edge by differentiating from uncertified competitors.",
                  bg: "bg-teal-100",
                },
                {
                  icon: b5,
                  title: "Cost Savings",
                  desc: "Reduces costly data breach risks by identifying and mitigating information security threats.",
                  bg: "bg-blue-100",
                },
                {
                  icon: b6,
                  title: "Improved Business Continuity",
                  desc: "Helps establish a structured approach for managing security risks and maintaining operations.",
                  bg: "bg-pink-100",
                },
                {
                  icon: b7,
                  title: "Better Relationships with Partners and Suppliers",
                  desc: "Builds trust with partners who need proof of your information security practices.",
                  bg: "bg-rose-100",
                },
                {
                  icon: b8,
                  title: "Process Improvement",
                  desc: "Encourages structured management and continuous improvement in security procedures.",
                  bg: "bg-lime-100",
                },
              ].map((benefit, index) => (
                <div key={index} className={`${benefit.bg} rounded-2xl p-6 sm:p-8 shadow-md min-h-[280px] sm:min-h-[300px] flex flex-col justify-between`}>
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <img src={benefit.icon} alt={benefit.title} className="w-12 h-12 sm:w-16 sm:h-16" />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center text-gray-800 mb-2 sm:mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-xl text-center text-gray-700">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-12 md:gap-16">
              {/* Left Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={img4} // Replace with actual image
                  alt="Team Discussion"
                  className="shadow-lg w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">Why Choose Us?</h2>
                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "Reach Compliance At Your Own Pace",
                    "Establish Roadmap & Stay On Target",
                    "Save Time & Money",
                    "Ensure You Meet The Control Requirements",
                    "Ensure You Pass Your Certification Audit",
                    "Ensure You Maintain Certification Every Year",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-3 sm:px-6 sm:py-4 shadow-sm"
                    >
                      <img
                        src={check}
                        alt="check"
                        className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4"
                      />
                      <span className="text-gray-700 font-medium text-base sm:text-lg md:text-xl">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl sm:text-4xl md:text-4xl font-bold text-center text-gray-800 mb-10 sm:mb-12">FAQ's</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
      <div className="space-y-4 sm:space-y-6">
        <details className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-5 group">
          <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            Who is eligible to obtain ISO 27001 certification?
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 bg-white p-3 sm:p-4 rounded text-gray-600 text-sm sm:text-base md:text-xl">
            Any organization, regardless of size or sector, can pursue ISO 27001 certification to enhance its information security.
          </p>
        </details>

        <details className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-5 group">
          <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            What are the key benefits of ISO 27001 certification?
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 bg-white p-3 sm:p-4 rounded text-gray-600 text-sm sm:text-base md:text-xl">
            It improves risk management, enhances customer trust, ensures regulatory compliance, and increases business opportunities.
          </p>
        </details>

        <details className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-5 group">
          <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            How long does the certification process take?
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 bg-white p-3 sm:p-4 rounded text-gray-600 text-sm sm:text-base md:text-xl">
            It usually takes between 3 to 6 months depending on the organization’s size and preparedness.
          </p>
        </details>

        <details className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-5 group">
          <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            Is ISO 27001 certification legally required?
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 bg-white p-3 sm:p-4 rounded text-gray-600 text-sm sm:text-base md:text-xl">
            No, but it's increasingly expected by clients and partners as proof of a strong information security posture.
          </p>
        </details>
      </div>

      <div className="space-y-4 sm:space-y-6">
        <details className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-5 group">
          <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            How long is the ISO 27001 certification valid?
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 bg-white p-3 sm:p-4 rounded text-gray-600 text-sm sm:text-base md:text-xl">
            The certificate is valid for 3 years, with annual surveillance audits and a full recertification at the end.
          </p>
        </details>

        <details className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-5 group">
          <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            What are the main steps in the certification process?
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 bg-white p-3 sm:p-4 rounded text-gray-600 text-sm sm:text-base md:text-xl">
            The steps include gap analysis, risk assessment, implementation of controls, internal audits, and external certification audit.
          </p>
        </details>

        <details className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-5 group">
          <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            What is the cost of ISO 27001 certification?
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 bg-white p-3 sm:p-4 rounded text-gray-600 text-sm sm:text-base md:text-xl">
            Costs vary based on organization size, complexity, and chosen certification body. It includes audits, tools, and consultant fees.
          </p>
        </details>

        <details className="bg-gray-50 shadow-md rounded-lg p-4 sm:p-5 group">
          <summary className="flex justify-between items-center cursor-pointer text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            What are challenges in ISO 27001 implementation?
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p className="mt-3 bg-white p-3 sm:p-4 rounded text-gray-600 text-sm sm:text-base md:text-xl">
            Common issues include lack of internal expertise, resistance to change, underestimating documentation needs, and improper risk assessment.
          </p>
        </details>
      </div>
    </div>
  </div>
</section>

      </div>
    </>
  );
};

export default ISO27001CertificationPage;