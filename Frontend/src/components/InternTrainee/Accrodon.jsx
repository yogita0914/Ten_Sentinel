import React, { useState } from "react";
import { motion } from "framer-motion";

const Accordion = ({ title, content, index, activeIndex, setActiveIndex }) => {
  const isOpen = activeIndex === index;

  const toggleAccordion = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div>
      <button
        onClick={toggleAccordion}
        className={`w-full flex items-center justify-between py-4 px-4 sm:px-6 cursor-pointer
          ${isOpen ? "bg-blue-100" : "bg-blue-50"} 
          hover:bg-white font-semibold text-left transition-colors duration-200`}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
      >
        <div className="flex items-center gap-3 text-base sm:text-lg text-gray-900">
          <span className="text-xl font-bold">{isOpen ? "−" : "+"}</span>
          <span>{title}</span>
        </div>
      </button>

      {isOpen && (
        <div
          id={`accordion-content-${index}`}
          className="px-4 sm:px-6 pb-4 pt-2 text-gray-800 bg-gray-100 text-sm sm:text-base transition-all duration-300"
        >
          {content}
        </div>
      )}
    </div>
  );
};

const Accordions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [
    {
      title: "Chapter 1: Basic",
      content: (
        <>
          <h1 className="text-md text-gray-700 m-2 mb-2">
            This chapter covers all the basic topics that companies expect in an
            individual. These topics help you to make your base strong in the
            Cyber Security domain.
          </h1>

          <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
            Module 1 – Foundation to Cyber Security
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc pl-5 m-2 pt-3">
            <ul className="space-y-1 list-disc">
              <li>Why Cyber Security & How it Works in an organization?</li>
              <li>Cyber Attacks & Data Breaches</li>
              <li>Classification of Information</li>
              <li>Domains in Cyber Security</li>
             
            </ul>
            <ul className="space-y-1 list-disc">
              <li>Job Roles and Designations in the organizations</li>
              <li>Cryptography</li>
              <li>Digital Signatures</li>
             
            </ul>
          </div>
        </>
      ),
    },
    {
      title: "Chapter 2: Advance",
      content: (
        <>
          <h1 className="text-md text-gray-700 m-2 mb-2">
            This chapter covers all the advance topics of the cyber security
            domain from an industry perspective which is required for every
            cyber security professional. It especially covers the four primary
            topics – GRC, SOC, VAPT and Cloud which are the core domains in
            Cyber Security. This Chapter will help you in gaining a good
            weightage to your profile.
          </h1>
          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 2 – Vulnerability Management & Penetration Testing
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc m-2 pl-5 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Introduction to VAPT</li>
                <li>Types of Pentesting</li>
                <li>VAPT Targets & Tools</li>
                <li>VAPT Report Writing & Documentation</li>
                <li>Skills required for VAPT</li>
              </ul>
              <ul className="space-y-1 list-disc">
                <li>Security assessments</li>
                <li>Blue team training</li>
                <li>Interview preparation</li>
                <li>Security toolkits</li>
                <li>Custom learning paths</li>
              </ul>
            </div>
          </div>
          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 3 – Network Security
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc m-2 pl-5 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Network Security Concepts</li>
                <li>Network Security Devices - DLP, Firewall, IDS-IPS, AV</li>
                <li>Network Segmentations</li>
              </ul>
              <ul className="space-y-1 list-disc">
                <li>Protocols - SSL, TLS, VPN</li>
                <li>Zero trust approach to network security</li>
                <li>Network Monitoring</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 4 – Web Application Security
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc m-2 pl-5 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Web Application Protocols</li>
                <li>Web VAPT Tools & Methods</li>
                <li>Information Disclosure Vulnerability</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 5 – API Security
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc m-2 pl-5 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Importance of API & API Pentesting</li>
                <li>API pentesting VS Traditional Web Pentesting</li>
                <li>API Documentation</li>
                <li>Postman Tool Introduction</li>
                <li>LAB Setup Demonstration</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 6 – Mobile Application Security
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc m-2 pl-5 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Introduction To Android & Android Architecture</li>
                <li>Introduction To IOS & IOS Architecture</li>
                <li>Mobile Application Pentesting Process</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 7 – Network VAPT & Attacks
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc m-2 pl-5 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Network VAPT Types</li>
                <li>Tools for Network VAPT - Qualysis & Nessus</li>
                <li>Network Traffic Analysis</li>
                <li>User Enumeration Attack</li>
              </ul>
              <ul className="space-y-1 list-disc">
                <li>Bruteforce Attack</li>
                <li>Password Cracking Attack</li>
                <li>Finding & Analysing CVE for Vulnerable services</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 8 – Security Operations Centre (SOC)
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc m-2 pl-5 pt-3">
              <ul className="space-y-1 list-disc">
                <li>SOC Fundamentals</li>
                <li>SOC Team Roles and Responsibilities</li>
                <li>Security Information & Event Management</li>
                <li>Recognizing Security Incidents and Events</li>
                <li>LAB Setup Demonstration</li>
                <li>Incident Detection & Response</li>
              </ul>
              <ul className="space-y-1 list-disc">
                <li>Security Alerts & Alarms</li>
                <li>Overview of Splunk</li>
                <li>Splunk architecture</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 9 – Cloud Security
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc m-2 pl-5 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Introduction to Cloud security</li>
                <li>Cloud Pentesting Methodology</li>
                <li>AWS Cloud Security</li>
                <li>Azure Cloud Security</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Chapter 3: Specialization",
      content: (
        <>
          <h1 className="text-md text-gray-700 m-2 mb-2">
            This chapter is where you will be gaining the skills of a
            Penetration Tester for performing Web + API & of a Penetration
            Tester for performing Web + API & Mobile Pentesting and you will be
            working on live Mobile Pentesting and you will be working on live
            targets hunting for vulnerabilities. targets hunting for
            vulnerabilities.
          </h1>
          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 10 – Web Application VAPT & Attacks
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc pl-5 m-2 pt-3">
              <ul className="space-y-1 list-disc">
                <li>XSS & HTML Injection</li>
                <li>SQL Injection</li>
                <li>CORS & HSTS</li>
                <li>Host Header Injection & Password Reset Poisoning</li>
                <li>SSRF</li>
                <li>
                  File Upload Vulnerabilities, LFI, RFI & File Path-traversal
                  vulnerabilities
                </li>
              </ul>
              <ul className="space-y-1 list-disc">
                <li>Business Logic Vulnerabilities</li>
                <li>XXE</li>
                <li>Subdomain Takeover & Broken Link Hijacking</li>
                <li>Buffer Overflow & Long Password DoS Attack</li>
                <li>RCE & Command Injection</li>
                <li>CSRF</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3">
              Module 11 – RCE & Command Injection
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc pl-5 m-2 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Broken Object Level Authorisation</li>
                <li>Broken Authentication</li>
                <li>Broken Object Property Level Authorisation</li>
                <li>Unrestricted Resource Consumption</li>
                <li>Broken Function Level Authorisation</li>
              </ul>
              <ul className="space-y-1 list-disc">
                <li>Unrestricted Access to Sensitive Business Flows</li>
                <li>Server-Side Request Forgery</li>
                <li>Security Misconfiguration</li>
                <li>Improper Inventory Management</li>
                <li>Unsafe Consumption of APIs</li>
              </ul>
            </div>
          </div>

          <div>
            <h1 className="text-lg font-semibold m-2 mb-2 pt-3 ">
              Module 12 – Mobile Application (Android & iOS) VAPT & Attacks
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc pl-5 m-2 pt-3">
              <ul className="space-y-1 list-disc">
                <li>Setup of Tools in (Windows, Kali, Mac)</li>
                <li>Static & Dynamic Analysis (Android) Methods</li>
                <li>Static & Dynamic Analysis (iOS) Methods</li>
                <li>Insecure Data Storage</li>
                <li>Sensitive Data Exposure</li>
                <li>Input Validation and Manipulation</li>
                <li>Extraneous Functionality</li>
              </ul>
              <ul className="space-y-1 list-disc">
                <li>Improper Platform Usage</li>
                <li>Insecure communication</li>
                <li>Insecure Authentication & Authorization</li>
                <li>Insufficient Cryptography & Poor Code Quality</li>
                <li>Code tampering</li>
                <li>Reverse Engineering</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="flex justify-center px-4">
      <div className="space-y-4 w-full max-w-5xl">
        {accordionData.map((item, index) => (
          <motion.div
            key={index}
            className="rounded-lg border border-gray-300 overflow-hidden"
            whileHover={{
              boxShadow: "0px 0px 12px 4px rgba(59,130,246,0.3)",
              // scale: 1.01,
             
            }}
            transition={{ duration: 0.2 }}
          >
            <Accordion
              title={item.title}
              content={item.content}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Accordions;
