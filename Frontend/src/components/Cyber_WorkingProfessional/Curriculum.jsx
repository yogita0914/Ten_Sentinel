import React, { useState } from 'react';
import Working_Professional_img from '../../assets/Working_Professional_img.jpg';

const Curriculum = () => {
  const [openChapter, setOpenChapter] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleChapter = (chapter) => {
    setOpenChapter(openChapter === chapter ? null : chapter);
  };

  return (
    <div className="relative max-w-7xl mx-auto mt-20 py-2 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            CYBER SECURITY CURRICULUM
          </h2>
          <p className="text-gray-700 mb-4">
            Our comprehensive Cyber Security curriculum is designed to cover the fundamentals to advanced concepts,
            with specialized knowledge for securing digital infrastructures. The program is divided into{' '}
            <span className="font-bold">3 Chapters: Basic, Advanced, and Specialization.</span>
          </p>
        </div>

        {/* Download Button */}
        <div className="flex flex-col gap-2 w-full lg:w-auto items-center lg:items-end mt-4 lg:mt-0">
          <button
            onClick={() => setIsModalOpen(true)}
            className="border border-black px-6 py-3 text-sm font-semibold hover:bg-gray-100 transition"
          >
            Download Curriculum
          </button>
        </div>
      </div>

      {/* Curriculum Chapters */}
      <div className="mt-8">
        {[1, 2, 3].map((chapter) => (
          <div key={chapter} className="border-b border-gray-300">
            <button
              onClick={() => toggleChapter(chapter)}
              className="w-full text-left py-4 px-2 font-semibold text-lg text-gray-800 hover:bg-gray-100 flex justify-between items-center"
            >
              Chapter {chapter}
              <span>{openChapter === chapter ? '-' : '+'}</span>
            </button>
            {openChapter === chapter && (
              <div className="px-4 pb-4 text-gray-700">
                {chapter === 1 && (
                  <>
                    <h3 className="font-semibold text-xl"> Basic Cyber Security</h3>
                    <p>
                      In this chapter, we will focus on the fundamental concepts of Cyber Security. You’ll learn about:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Introduction to Cyber Security: Understanding the importance of protecting digital systems.</li>
                      <li>Cyber Threats: Exploring common cyber threats like malware, phishing, and ransomware.</li>
                      <li>Network Security: Learning the basics of securing computer networks from unauthorized access.</li>
                      <li>Data Protection: Understanding how to protect sensitive data and ensuring privacy.</li>
                      <li>Introduction to Cryptography: Basic encryption techniques used to secure data.</li>
                    </ul>
                  </>
                )}
                {chapter === 2 && (
                  <>
                    <h3 className="font-semibold text-xl"> Advanced Cyber Security</h3>
                    <p>
                      This chapter dives deeper into advanced Cyber Security topics. You will explore:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Advanced Network Security: Techniques for securing large, complex networks against sophisticated threats.</li>
                      <li>Intrusion Detection and Prevention: Tools and strategies for detecting and preventing network intrusions.</li>
                      <li>Cybersecurity Policies and Compliance: Understanding the importance of security policies and industry regulations.</li>
                      <li>Ethical Hacking: Introduction to penetration testing and the ethical use of hacking to find vulnerabilities.</li>
                      <li>Advanced Cryptography: Advanced encryption techniques such as asymmetric encryption and hashing algorithms.</li>
                    </ul>
                  </>
                )}
                {chapter === 3 && (
                  <>
                    <h3 className="font-semibold text-xl"> Specialization in Cyber Security</h3>
                    <p>
                      In this chapter, we focus on specialized areas of Cyber Security, preparing you for expert-level roles:
                    </p>
                    <ul className="list-disc pl-6">
                      <li>Incident Response and Forensics: Learn how to respond to and investigate security breaches.</li>
                      <li>Cloud Security: Securing data and applications in cloud environments.</li>
                      <li>Mobile Device Security: Protecting smartphones and tablets from emerging threats.</li>
                      <li>Security Automation and SIEM: Introduction to automated security monitoring and management using SIEM tools.</li>
                      <li>Security Architecture and Design: Designing secure infrastructures that can withstand advanced cyber attacks.</li>
                    </ul>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/5">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 relative flex flex-col md:flex-row">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            {/* Left side - Image */}
            <div className="md:w-1/2 hidden md:block">
              <img
                src={Working_Professional_img}
                alt="Brochure"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>

            {/* Right side - Form */}
            <div className="md:w-1/2 w-full px-4 py-6">
              <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-2">
                FILL THE FORM TO DOWNLOAD THE BROCHURE!
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Want Callback from our Course Advisors? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="callback" value="Yes" className="mr-2" required />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="callback" value="No" className="mr-2" required />
                      No
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded mt-2"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Curriculum;
