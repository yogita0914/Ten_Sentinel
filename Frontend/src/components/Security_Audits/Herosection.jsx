import React from "react";
import security_bg from "../../assets/security_bg.jpg"; // Adjust the path as necessary
import peoples from '../../assets/peoples.jpg'; // Adjust the path as necessary

export default function Herosection() {
  return (
    <div className="bg-cyan-200">
      {/* Hero Section with Background Image */}
      <div
        className="relative w-full h-72 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(https://i.pinimg.com/736x/f9/70/1a/f9701a2ec2cb04282a71f86fe4454d52.jpg)` }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg z-10">Security Audit</h1>
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      {/* Cyber Security Audit Section */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-20 xl:px-32 flex flex-col lg:flex-row lg:items-start gap-8">
        <div className="w-full lg:w-1/2">
          <img
            src={peoples}
            alt="Cyber Security Audit"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        <div className="text-left w-full lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Cyber Security Audit</h2>
          <p className="text-gray-700 font-semibold">
            Identify cybersecurity threats to your organization's data and gain clarity on how to effectively minimize those risks.
          </p>
          <p className="text-gray-600 mt-3">
            Our comprehensive, independent audit offers a top-level review of your systems, shedding light on vulnerabilities such as data loss potential, susceptibility to breaches, and other critical risk factors that could impact your security posture.
          </p>
        </div>
      </div>

      {/* What is a Security Audit Section */}
      <div className="w-full py-14 px-6 md:px-1 text-center" style={{ backgroundColor: "#F8F9FD" }}>
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">What is a Security Audit?</h2>
        <p className="text-gray-700 max-w-4xl mx-auto">
          A cybersecurity audit is a vital tool for recognizing business-related risks and ensuring effective risk management. It acts as a benchmark to evaluate whether your security strategies and risk assessments are aligned with best practices.
        </p>
        <p className="text-gray-700 mt-4 max-w-4xl mx-auto">
          These audits should be tailored to your organization's specific risk profile and extend beyond internal systems—encompassing both logical and physical boundaries, including third-party vendors and partners.
        </p>
      </div>
    </div>
  );
}
