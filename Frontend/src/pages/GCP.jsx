import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { MdOutlineSecurity } from "react-icons/md";
import { SectionTitle } from "../components/GCP/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../swiper.css";
import { InputForm } from "../components/GCP/InputForm";
import { ChevronRight, ChevronDown, ShieldCheck } from "lucide-react";
import NeedOfSecuring from "../components/GCP/NeedOfSecuring";
import PentestTypes from "../components/GCP/PentestTypes";
import hero from "../assets/GCP/hero.avif";
import image1 from "../assets/GCP/image1.avif";
import HeroSection from "../components/cloud-security/HeroSection";
import FAQ from "../assets/FAQ.png";
export const GCP = () => {
  const whyChoose = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#2563EB"
        >
          <path d="m385-412 36-115-95-74h116l38-119 37 119h117l-95 74 35 115-94-71-95 71ZM244-40v-304q-45-47-64.5-103T160-560q0-136 92-228t228-92q136 0 228 92t92 228q0 57-19.5 113T716-344v304l-236-79-236 79Zm236-260q109 0 184.5-75.5T740-560q0-109-75.5-184.5T480-820q-109 0-184.5 75.5T220-560q0 109 75.5 184.5T480-300ZM304-124l176-55 176 55v-171q-40 29-86 42t-90 13q-44 0-90-13t-86-42v171Zm176-86Z" />
        </svg>
      ),
      title: "Elite Threat Hunters, Not Just Analysts",
      text: "Our team consists of offensive security experts certified in GCP and advanced penetration testing. They don’t just assess risks—they think like attackers, exposing what others miss.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#2563EB"
        >
          <path d="M480-80q-83 0-141.5-58.5T280-280v-360q-33 0-56.5-23.5T200-720v-80q0-33 23.5-56.5T280-880h400q33 0 56.5 23.5T760-800v80q0 33-23.5 56.5T680-640v360q0 83-58.5 141.5T480-80ZM260-700h440v-120H260v120Zm219.76 560Q538-140 579-180.83q41-40.84 41-99.17v-20H480v-60h140v-100H480v-60h140v-120H340v360q0 58.33 40.76 99.17 40.77 40.83 99 40.83ZM260-700v-120 120Z" />
        </svg>
      ),
      title: "GCP-Specific Battle Testing",
      text: "We use tailored adversarial methodologies that mirror real-world breach scenarios, rigorously stress-testing every layer of your cloud environment—from APIs to IAM permissions.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 -960 960 960"
          width="48px"
          fill="#2563EB"
        >
          <path d="M450-154v-309L180-619v309l270 156Zm60 0 270-156v-310L510-463v309Zm-60 69L150-258q-14-8-22-22t-8-30v-340q0-16 8-30t22-22l300-173q14-8 30-8t30 8l300 173q14 8 22 22t8 30v340q0 16-8 30t-22 22L510-85q-14 8-30 8t-30-8Zm194-525 102-59-266-154-102 59 266 154Zm-164 96 104-61-267-154-104 60 267 155Z" />
        </svg>
      ),
      title: "Fix-Priority Intelligence, Not Just Reports",
      text: "We deliver prioritized, executable remediation plans—not just findings. Our insights cut through noise to harden your posture where it matters most.",
    },
  ];

  const tools = [
    {
      icon: "./GCP/cloudsploit.png",
      title: "CloudSploit",
    },
    {
      icon: "./GCP/securityMonkey.png",
      title: "Security Monkey",
    },
    {
      icon: "./GCP/iam.png",
      title: "GCP/ IAM Collector",
    },
    {
      icon: "./GCP/console.png",
      title: "GCloud console",
    },
    {
      icon: "./GCP/custodian.png",
      title: "Cloud Custodian",
    },
  ];

  const provide = [
    {
      icon: "./GCP/network.svg",
      title: "Network and Web Security",
      text: "We attack your GCP-hosted networks, APIs, and web apps like real adversaries—exposing flaws in firewalls, load balancers, and application logic before attackers exploit them.",
    },
    {
      icon: "./GCP/cloud.svg",
      title: "Intrusion Security",
      text: "We emulate advanced persistent threats (APTs) to test detection gaps in your GCP environment, validating your SOC's ability to spot and stop lateral movement.",
    },
    {
      icon: "./GCP/security.svg",
      title: "Identity and Access Security",
      text: "We weaponize misconfigured permissions, overprivileged service accounts, and weak authentication to show how attackers escalate access in your cloud environment.",
    },
    {
      icon: "./GCP/test.svg",
      title: "Retesting",
      text: "We don't just report vulnerabilities—we verify fixes through targeted attacks, ensuring remediations actually work under pressure.",
    },
  ];

  const process = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      ),
      title: "Reconnaissance and Enumeration",
      text: "Collect initial data on the GCP environment to identify active services and potential targets.",
      color: "border-blue-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M260-160q-91 0-155.5-63T40-377q0-78 47-139t123-78q25-92 100-149t170-57q117 0 198.5 81.5T760-520q69 8 114.5 59.5T920-340q0 75-52.5 127.5T740-160H260Zm0-80h480q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-80q0-83-58.5-141.5T480-720q-83 0-141.5 58.5T280-520h-20q-58 0-99 41t-41 99q0 58 41 99t99 41Zm220-240Z" />
        </svg>
      ),
      title: "GCP Scoping",
      text: "Determine the scope of the penetration test, specifying the GCP resources and services to be evaluated.",
      color: "border-orange-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h320v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z" />
        </svg>
      ),
      title: "Mapping & Service Identification",
      text: "Map out and identify the services and components present in the GCP environment.",
      color: "border-fuchsia-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" />
        </svg>
      ),
      title: "Vulnerability Identification",
      text: "Identify and document potential vulnerabilities in the services and components within the GCP environment.",
      color: "border-purple-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M280-280h80v-200h-80v200Zm320 0h80v-400h-80v400Zm-160 0h80v-120h-80v120Zm0-200h80v-80h-80v80ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-80h560v-560H200v560Zm0-560v560-560Z" />
        </svg>
      ),
      title: "Vulnerability Analysis",
      text: "Evaluate the identified vulnerabilities to determine their impact and potential for exploitation.",
      color: "border-indigo-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="m105-399-65-47 200-320 120 140 160-260 120 180 135-214 65 47-198 314-119-179-152 247-121-141-145 233Zm475 159q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM784-80 676-188q-21 14-45.5 21t-50.5 7q-75 0-127.5-52.5T400-340q0-75 52.5-127.5T580-520q75 0 127.5 52.5T760-340q0 26-7 50.5T732-244l108 108-56 56Z" />
        </svg>
      ),
      title: "Post Exploitation",
      text: "Assess the extent of access obtained and evaluate the potential for further exploitation.",
      color: "border-red-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="m656-120-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Zm-416-80q17 0 28.5-11.5T280-240q0-17-11.5-28.5T240-280q-17 0-28.5 11.5T200-240q0 17 11.5 28.5T240-200Zm0 80q-50 0-85-35t-35-85q0-50 35-85t85-35q37 0 67.5 20.5T352-284q39-11 63.5-43t24.5-73v-160q0-83 58.5-141.5T640-760h46l-63-63 57-57 160 160-160 160-57-56 63-64h-46q-50 0-85 35t-35 85v160q0 73-47 128.5T354-203q-12 37-43.5 60T240-120Zm-64-480-56-56 63-64-63-63 56-57 64 64 63-64 57 57-64 63 64 64-57 56-63-63-64 63Z" />
        </svg>
      ),
      title: "Strategic Mitigation",
      text: "Offer recommendations and strategies to address and mitigate identified vulnerabilities.",
      color: "border-yellow-600",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000000"
        >
          <path d="M620-163 450-333l56-56 114 114 226-226 56 56-282 282Zm220-397h-80v-200h-80v120H280v-120h-80v560h240v80H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h167q11-35 43-57.5t70-22.5q40 0 71.5 22.5T594-840h166q33 0 56.5 23.5T840-760v200ZM480-760q17 0 28.5-11.5T520-800q0-17-11.5-28.5T480-840q-17 0-28.5 11.5T440-800q0 17 11.5 28.5T480-760Z" />
        </svg>
      ),
      title: "Patch Verification",
      text: "Ensure that patches and remediation measures have been correctly applied and are functioning as intended",
      color: "border-teal-600",
    },
  ];

  const [activeProcess, setActiveProcess] = useState(0);

  const handleSetActiveProcess = (processIndex) => {
    setActiveProcess(processIndex);
  };

  const initialFaqs = [
    {
      question: "What is Cloud Penetration Testing?",
      answer:
        "Cloud penetration testing is a security assessment that simulates real-world cyberattacks against your cloud infrastructure. The goal is to identify vulnerabilities, misconfigurations, and potential risks that attackers could exploit. This process helps organizations strengthen their security posture and ensure compliance with industry standards.",
    },
    {
      question: "Why is Cloud Penetration Testing important?",
      answer:
        "Cloud environments are frequent targets for cyberattacks due to misconfigurations, weak access controls, or overlooked vulnerabilities. Penetration testing is essential to proactively identify and fix security gaps before malicious actors can exploit them. It helps protect sensitive data, ensure business continuity, and meet regulatory compliance requirements.",
    },
    {
      question: "What cloud platforms do you test?",
      answer:
        "At Ten Sentinel, we provide penetration testing services for major cloud platforms, including Google Cloud Platform (GCP), Amazon Web Services (AWS), and Microsoft Azure, as well as hybrid and multi-cloud environments. Our assessments are tailored to the unique architecture and services of each platform.",
    },
    {
      question: "Will cloud penetration testing impact my live environment?",
      answer:
        "Our testing is carefully designed to minimize risks to your production environment. We follow strict guidelines and perform testing within approved scopes, using safe methods that avoid disruption. If required, testing can be conducted in staging or sandbox environments to eliminate any potential operational impact.",
    },
    {
      question: "How often should cloud penetration testing be performed?",
      answer:
        "It is recommended to perform cloud penetration testing at least once a year or whenever significant changes occur in your cloud environment—such as deploying new services, applications, or infrastructure. Regular testing helps ensure that security measures stay effective against evolving threats.",
    },
    {
      question: "What happens after the penetration test is completed?",
      answer:
        "Upon completion, Ten Sentinel delivers a detailed report outlining the identified vulnerabilities, risk levels, and actionable recommendations for remediation. Our experts also offer a debrief session to walk you through the findings, answer questions, and guide your team on how to strengthen your cloud security posture effectively.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const answerVariants = {
    collapsed: { height: 0, opacity: 0, transition: { duration: 0.3 } },
    expanded: { height: "auto", opacity: 1, transition: { duration: 0.5 } },
  };

  // Optional: fade/slide variant for entire FAQ container
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        subtitle="Ten Sentinel's GCP Penetration Testing exposes and remediates
                  security flaws in your cloud infrastructure—delivering robust
                  protection without overspending."
        title="GCP Fortify"
        backgroundImage={hero}
        Icon={ShieldCheck}
      />

      {/* What Is */}
      <section className="flex flex-col px-4 py-6 gap-4 md:px-8 md:gap-8 md:py-12 lg:px-12 lg:items-center xl:flex-row xl:items-start xl:justify-center">
        <motion.div
          className="flex flex-col gap-4 md:gap-8 lg:max-w-[750px]"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <SectionTitle>What is GCP Penetration Testing?</SectionTitle>
          <p className="text-base text-gray-600 md:text-lg lg:text-xl">
            GCP Penetration Testing rigorously assesses the security of your
            Google Cloud applications and infrastructure by simulating
            real-world cyberattacks. Our experts uncover vulnerabilities, expose
            misconfigurations, and deliver actionable fixes—before attackers
            strike. Ten Sentinel's GCP penetration testing ensures your cloud
            environment stays resilient, compliant, and secure.
          </p>
        </motion.div>

        <motion.img
          src={image1}
          className="hidden sm:block sm:max-w-[400px] md:max-w-[600px] sm:self-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        />
      </section>
      {/*  Why Choose */}
      <section className="flex flex-col px-4 py-6 gap-4 bg-gray-100 md:px-8 md:py-12 lg:px-12 lg:gap-8">
        <motion.h2
          className="text-lg font-semibold  md:text-2xl  lg:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Choose Our GCP Penetration Testing?
        </motion.h2>

        <ul className="grid gap-6 grid-cols-1 auto-rows-fr lg:grid-cols-3">
          {whyChoose.map((item) => (
            <motion.li
              className="flex flex-col shadow-md bg-white rounded-md p-4 gap-2 lg:px-8"
              whileHover={{
                boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
                scale: 1.02,
              }}
            >
              <div className="flex flex-row items-center gap-2">
                {React.cloneElement(item.icon, {
                  className: "lg:w-20 lg:h-20",
                })}
                <h3 className="text-base font-semibold md:text-lg lg:text-xl">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm text-gray-600 md:text-base lg:text-lg">
                {item.text}
              </p>
            </motion.li>
          ))}
        </ul>
      </section>
      {/* Tools */}
      <section className="flex flex-col px-4 py-6 gap-4 bg-blue-800 md:px-8 md:py-12 lg:px-12">
        <motion.h2
          className="text-lg font-semibold text-white md:text-2xl lg:self-center lg:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Some of the Tools that we use to Conduct GCP Penetration Testing!
        </motion.h2>

        {/* Carousel */}

        <div className="w-full py-8">
          <div className="max-w-6xl mx-auto">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              style={{
                width: "100%",
                padding: "0 20px",
              }}
            >
              {tools.map((tool, index) => (
                <SwiperSlide key={index} style={{ width: "auto" }}>
                  <motion.div
                    className="flex flex-col items-center justify-center bg-violet-200 gap-2 p-6 rounded-lg h-full mx-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: false }}
                  >
                    <img
                      className="w-20 h-20 object-contain"
                      src={tool.icon}
                      alt={tool.title}
                    />
                    <h3 className="text-base font-semibold text-center lg:text-lg">
                      {tool.title}
                    </h3>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
      {/* What We Provide */}
      <section className="flex flex-col px-4 py-6 gap-4 bg-gray-100 md:px-8 md:py-12 lg:px-12">
        <motion.SectionTitle
          className="text-lg font-semibold md:text-2xl  lg:text-3xl"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          GCP Penetration Testing - What We Provide?
        </motion.SectionTitle>

        <ul className="flex flex-col gap-8 md:grid md:grid-cols-2 md:auto-rows-fr lg:grid-cols-4">
          {provide.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
                scale: 1.02,
              }}
              className="flex flex-col gap-2 bg-white rounded-md shadow-md px-6 py-4 items-center justify-center"
            >
              <img className="w-20" src={item.icon} alt={item.title} />
              <h3 className="text-base font-semibold md:text-lg">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 md:text-base">{item.text}</p>
            </motion.li>
          ))}
        </ul>
      </section>
      {/* Testing Process */}
      <section className="flex flex-col items-center px-4 py-8 gap-8 md:pt-12 md:pb-24 md:gap-24 lg:px-12 xl:flex-row lg:justify-center lg:py-32">
        <div className="flex flex-col gap-8 max-w-[500px]">
          <motion.SectionTitle
            className="text-lg font-semibold md:text-2xl  lg:text-3xl"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            GCP Penetration Testing Process
          </motion.SectionTitle>
          <motion.p
            className="text-base text-gray-800 max-w-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
          >
            Ten Sentinel emerges as a trusted leader in delivering comprehensive
            GCP Penetration Testing services. Our expertise, advanced
            methodologies, and commitment to securing cloud infrastructures make
            us the preferred choice for organizations looking to identify
            vulnerabilities, strengthen defenses, and ensure the highest
            standards of cloud security.
          </motion.p>
        </div>

        <div className="relative w-1/2 h-[500px] md:flex items-center justify-center hidden ">
          <div className="absolute z-10 w-72 h-72 p-4 rounded-full bg-blue-50 border-4 border-blue-200 flex flex-col gap-2 items-center justify-center">
            <h4 className="text-sm text-blue-600 font-bold">
              {process[activeProcess].title}
            </h4>
            <span className="text-blue-800 text-center text-xs">
              {process[activeProcess].text}
            </span>
          </div>

          <div className="relative w-full h-full">
            {process.map((step, index) => {
              const totalItems = process.length;
              const angle = index * ((2 * Math.PI) / totalItems) - Math.PI / 2;
              const radius = 240;

              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  viewport={{ once: true }}
                  className={`rounded-full border-4 ${
                    step.color
                  } w-32 h-32 flex flex-col justify-center items-center mb-2 transform -translate-x-1/2 -translate-y-1/2 absolute p-2
                    hover:bg-blue-100 ${
                      index === activeProcess ? "bg-blue-100" : "bg-white"
                    }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                  onMouseEnter={() => handleSetActiveProcess(index)}
                >
                  {React.cloneElement(step.icon, {
                    className: "min-w-8 min-h-8",
                  })}
                  <h3 className="font-semibold text-xs text-center">
                    {step.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>

        <ul className="flex flex-col gap-6 items-center justify-center max-w-[500px] md:hidden">
          {process.map((step, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 shadow-md rounded-sm flex flex-col gap-2 justify-center items-center py-4 px-2"
            >
              <div
                className={`rounded-full border-4 ${step.color} w-20 h-20 flex justify-center items-center`}
              >
                {React.cloneElement(step.icon, {
                  className: "w-12 h-12",
                })}
                <h3 className="hidden">{step.title}</h3>
              </div>
              <div className="text-center flex flex-col gap-1">
                <h3 className="text-base font-semibold">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.text}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </section>
      <NeedOfSecuring />
      <PentestTypes />
      {/* Form */}
      <section
        id="contact"
        className="flex flex-col px-4 py-6 gap-4 lg:px-12 lg:flex-row lg:justify-center lg:gap-16"
      >
        <img
          src="./GCP/form.svg"
          className="hidden lg:block w-1/2 max-w-[600px]"
        />

        <div className="flex flex-col gap-4">
          <SectionTitle>Get Your FREE Assessment Report!</SectionTitle>

          <motion.form
            className="bg-gray-50 shadow-md rounded-md border border-gray-300 flex flex-col justify-center p-4 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{
              boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
              scale: 1.02,
            }}
          >
            <div className="grid gap-4">
              <InputForm type={"text"} placeholder={"Name"} />
              <InputForm type={"text"} placeholder={"Company Email"} />
              <InputForm type={"text"} placeholder={"Phone Number"} />
              <InputForm type={"text"} placeholder={"Company Name"} />
            </div>

            <textarea
              className="bg-white py-2 px-4 border border-gray-300 rounded-sm"
              type="text"
              placeholder="Please outline the queries or issues you need help with!"
              rows={4}
            />

            <motion.button
              className="text-sm bg-linear-to-r from-blue-600 to-indigo-600 text-white py-2 w-1/2 max-w-[300px] rounded-md self-center hover:cursor-pointer hover:from-blue-500 hover:to-indigo-500"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SUBMIT FORM
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* FAQ's */}

      <motion.section
        className="bg-white py-8 px-4 sm:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {initialFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
                  >
                    {faq.question}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={answerVariants}
                        className="px-6 overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Image (visible on medium+ screens only) */}
          <div className="hidden md:flex justify-center items-start">
            <img
              src={FAQ}
              alt="FAQ Illustration"
              className="w-auto max-h-[400px] object-contain rounded-lg"
            />
          </div>
        </div>
      </motion.section>

      {/* <motion.section
        className="bg-white py-8 px-4 sm:px-8 "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-xl lg:text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Accordion *
          <div className="space-y-4">
            {initialFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-gray-200 rounded-md overflow-hidden shadow-sm transition-shadow duration-300 hover:shadow-md"
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex justify-between items-center w-full px-6 py-4 bg-gray-50 text-gray-800 font-medium text-left focus:outline-none"
                  >
                    {faq.question}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                        variants={answerVariants}
                        className="px-6 overflow-hidden"
                      >
                        <p className="text-gray-600 text-sm">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Image (hidden on small screens) 
          <div className="hidden md:flex justify-center items-center min-h-screen">
            <img
              src={FAQ}
              alt="FAQ Illustration"
              className="max-h-[50vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      </motion.section> */}
    </>
  );
};
