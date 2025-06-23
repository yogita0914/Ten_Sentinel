import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { ChevronDown } from "lucide-react";
import FAQ from "../../assets/FAQ.png";
import HeroSection from "../cloud-security/HeroSection";
import GetInTouch_Section from "../Marketing/GetInTouch_Section";
import hero from "../../assets/IsoPage/hero.avif";
import img1 from "../../assets/IsoPage/img1.avif";
import img2 from "../../assets/IsoPage/img2.webp";
import img3 from "../../assets/IsoPage/img3.webp";
import img4 from "../../assets/IsoPage/img4.avif";
import icon1 from "../../assets/IsoPage/icon1.png";
import icon2 from "../../assets/IsoPage/icon2.jpg";
import icon3 from "../../assets/IsoPage/icon3.avif";
import icon4 from "../../assets/IsoPage/icon4.avif";
import icon5 from "../../assets/IsoPage/icon5.avif";
import icon6 from "../../assets/IsoPage/icon6.avif";
import icon7 from "../../assets/IsoPage/icon7.avif";
import icon8 from "../../assets/IsoPage/icon8.avif";
import b1 from "../../assets/IsoPage/b1.png";
import b2 from "../../assets/IsoPage/b2.png";
import b3 from "../../assets/IsoPage/b3.png";
import b4 from "../../assets/IsoPage/b4.png";
import b5 from "../../assets/IsoPage/b5.png";
import b6 from "../../assets/IsoPage/b6.png";
import b7 from "../../assets/IsoPage/b7.png";
import b8 from "../../assets/IsoPage/b8.png";
import check from "../../assets/IsoPage/check.png";
import Review from "../LandingPage/Testimonials";
import React from "react";

const faqData = [
  {
    question: "Who is eligible to obtain ISO 27001 certification?",
    answer:
      "Any organization, regardless of size or sector, can pursue ISO 27001 certification to enhance its information security.",
  },
  {
    question: "What are the key benefits of ISO 27001 certification?",
    answer:
      "It improves risk management, enhances customer trust, ensures regulatory compliance, and increases business opportunities.",
  },
  {
    question: "How long does the certification process take?",
    answer:
      "It usually takes between 3 to 6 months depending on the organization’s size and preparedness.",
  },
  {
    question: "Is ISO 27001 certification legally required?",
    answer:
      "No, but it's increasingly expected by clients and partners as proof of a strong information security posture.",
  },
  {
    question: "How long is the ISO 27001 certification valid?",
    answer:
      "The certificate is valid for 3 years, with annual surveillance audits and a full recertification at the end.",
  },
  {
    question: "What are the main steps in the certification process?",
    answer:
      "The steps include gap analysis, risk assessment, implementation of controls, internal audits, and external certification audit.",
  },
  {
    question: "What is the cost of ISO 27001 certification?",
    answer:
      "Costs vary based on organization size, complexity, and chosen certification body. It includes audits, tools, and consultant fees.",
  },
  {
    question: "What are challenges in ISO 27001 implementation?",
    answer:
      "Common issues include lack of internal expertise, resistance to change, underestimating documentation needs, and improper risk assessment.",
  },
];

const ISO27001CertificationPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <>
      <HeroSection
        title="ISO 27001 Certification"
        subtitle="Demonstrate Your Commitment to Information Security and Compliance."
        backgroundImage={hero}
        showButton={true}
        Icon={ShieldCheck}
      />

      <div className="w-full bg-white overflow-x-hidden">
        {/* Subheading & Paragraphs */}
        <div className="w-full font-[Poppins] bg-white overflow-x-hidden px-4 py-8 sm:px-6 sm:py-10 md:px-12 md:py-12">
          <div className="flex flex-col items-start gap-8 md:gap-12">
            {/* Text section - heading */}
            <div className="w-full text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                Become an ISO 27001 Certified Organization!
              </h2>
            </div>

            {/* Content row */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-4 md:mt-6">
              {/* Image */}
              <div
                className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[300px] rounded-lg overflow-hidden"
                style={{
                  backgroundImage: `url(${img1})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>

              {/* Text content */}
              <div className="w-full md:w-1/2 text-base sm:text-lg md:text-xl text-gray-700">
                <p>
                  We help businesses like yours to become an ISO 27001 Certified
                  organization in the shortest span of time. Having helped
                  multiple businesses to improve their Cyber Security Processes
                  via audits, assessments & certifications. We completely
                  understand each and every pain point that businesses face
                  while applying for ISO 27001 Certification. So, it's time for
                  your Business to become an ISO 27001 Certified organization!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="pt-16 sm:pt-20 md:pt-24 text-center text-3xl sm:text-4xl font-semibold">
          <h2>Our Reviews</h2>
        </div>
        <div className="mt-10">
          <Review />
        </div>
        {/* What is ISO Section */}
        <div className="mt-18">
          <div className="flex flex-col items-center max-w-7xl mx-auto gap-8 md:gap-10">
            {/* Left Text Content */}
            <div className="w-full text-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
                What is ISO 27001 Certification?
              </h2>
              {/* Image after heading for responsive flow */}
              <div
                className="w-full h-[200px] sm:h-[250px] md:h-[350px] shadow-lg mt-6 md:mt-8"
                style={{
                  backgroundImage: `url(${img2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
              <p className="md:p-10 text-base sm:text-lg md:text-xl p-5 sm:pt-4 leading-normal text-gray-500 mt-10">
                ISO 27001 is an international standard for information security
                management. It provides a framework for managing and protecting
                sensitive information and data, and helps organizations mitigate
                risks associated with cyber attacks, data breaches, and other
                digital threats. Obtaining ISO 27001 certification demonstrates
                an organization’s commitment to information security, and can
                help build customer trust and compliance with regulations.
              </p>
            </div>
          </div>
        </div>

        {/* Why ISO Section */}
        <div className="pt-16 sm:pt-20 md:pt-32 px-4 sm:px-6 md:px-12 lg:px-32">
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <div className="w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 text-center">
                Why your Organization needs ISO 27001 Certification?
              </h2>

              <div className="flex flex-col md:flex-row gap-8 md:gap-14 mt-6 md:mt-8">
                {/* Image */}
                <div
                  className="w-full md:w-1/2 h-[200px] sm:h-[250px] md:h-[350px] rounded-lg"
                  style={{
                    backgroundImage: `url(${img3})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                ></div>

                {/* Text */}
                <div className="w-full md:w-1/2 text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed">
                  <p>
                    Obtaining ISO 27001 certification can help your organization
                    improve its information security posture, mitigate risks
                    associated with cyber threats and data breaches, and
                    demonstrate a commitment to protecting sensitive
                    information. By implementing ISO 27001, your organization
                    can establish a comprehensive information security
                    management system that protects against unauthorized access,
                    theft, and misuse of information. Additionally, ISO 27001
                    certification can help your organization comply with
                    regulatory requirements and enhance customer trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certification Process */}
        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-14 text-gray-800">
              Our ISO 27001 Certification Process
            </h2>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  className="flex flex-col items-center text-center bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 group"
                >
                  <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px] mb-5 transform transition-transform duration-300 group-hover:scale-105">
                    <img
                      src={step.icon}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-700 group-hover:text-blue-900 mb-3">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-600 group-hover:text-gray-800 transition-colors">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-800 mb-14">
              Benefits of ISO 27001 Certification
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
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
                <div
                  key={index}
                  className={`${benefit.bg} rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between min-h-[320px] transition-transform duration-300 hover:shadow-xl hover:scale-[1.03] group`}
                >
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-14 h-14 sm:w-16 sm:h-16 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-center text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 group-hover:text-gray-900">
                    {benefit.title}
                  </h3>
                  <p className="text-center text-sm sm:text-base md:text-lg text-gray-700 group-hover:text-gray-800">
                    {benefit.desc}
                  </p>
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
                  src={img4} // Replace with actual image path
                  alt="Team Discussion"
                  className="w-full h-auto object-cover rounded-2xl shadow-md"
                />
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center lg:text-left text-gray-800 mb-8">
                  Why Choose Us?
                </h2>

                <ul className="space-y-4 sm:space-y-5">
                  {[
                    "Reach Compliance At Your Own Pace",
                    "Establish Roadmap & Stay On Target",
                    "Save Time & Money",
                    "Ensure You Meet The Control Requirements",
                    "Ensure You Pass Your Certification Audit",
                  ].map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center bg-white border border-gray-200 rounded-full px-4 py-3 sm:px-6 sm:py-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      <img
                        src={check}
                        alt="check"
                        className="w-5 h-5 sm:w-6 sm:h-6 mr-3 sm:mr-4"
                      />
                      <span className="text-gray-700 font-medium text-base sm:text-lg md:text-xl">
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <GetInTouch_Section/>
        </section>
        <section className="bg-white py-8 px-0 sm:px-12 lg:px-6 m-5 lg:m-10">
          <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
            Frequently Asked Questions (FAQs)
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start m-10">
            {/* FAQ Accordion */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    {faq.question}
                    <ChevronDown
                      className={`w-5 h-5 min-w-[20px] min-h-[20px] transform transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    className={`px-6 overflow-hidden transition-[max-height,padding] duration-500 ease-in-out ${
                      openIndex === index ? "max-h-96 py-4" : "max-h-0 py-0"
                    }`}
                  >
                    <p className="text-gray-600 text-sm">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image - hidden on small screens */}
            <div className="hidden md:flex justify-center items-center">
              <img
                src={FAQ}
                alt="FAQ Illustration"
                className="w-full h-[350px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ISO27001CertificationPage;
