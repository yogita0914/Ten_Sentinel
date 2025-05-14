// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import first from "../assets/privacy_images/privacy1.png";
// import two from "../assets/privacy_images/privacy2.png";
// import three from "../assets/privacy_images/privacy3.png";
// import four from "../assets/privacy_images/privacy4.png";
// import five from "../assets/privacy_images/privacy5.png";
// import six from "../assets/privacy_images/privacy6.png";
// import seven from "../assets/privacy_images/privacy6.png";

// export const PrivacyPage = () => {
//   const [expandedIndex, setExpandedIndex] = useState(null);
//   const [mobileExpanded, setMobileExpanded] = useState({});

//   const toggleExpand = (index) => {
//     setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
//   };

//   const toggleMobileExpand = (index) => {
//     setMobileExpanded((prev) => ({
//       ...prev,
//       [index]: !prev[index],
//     }));
//   };
//   const privacyElements = [
//     {
//       title: "Introduction",
//       image: first,
//       text: (
//         <>
//           Welcome to The Entrepreneurship Network (referred to as "we," "our,"
//           or "us"). We are deeply committed to protecting and respecting your
//           privacy. This Privacy Policy outlines how we collect, use, disclose,
//           and protect your information when you access our website at{" "}
//           <a
//             href="https://www.entrepreneurshipnetwork.net/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-blue-500 hover:underline"
//           >
//             https://www.entrepreneurshipnetwork.net/
//           </a>
//           . By continuing to use our website, you agree to the practices
//           described in this policy. We encourage you to read this policy
//           carefully to understand our views and practices regarding your
//           personal data and how we treat it.
//           <br />
//           <br />
//           This policy applies to all visitors, users, and others who access or
//           use our services. It’s essential to us that you know how your data is
//           being used and how you can manage your privacy settings at any time.
//         </>
//       ),
//     },
//     {
//       title: "Information We Collect",
//       image: two,
//       text: `We may collect both personal and non-personal information when you interact with our website or services. This includes, but is not limited to, your name, email address, contact number, and any other information you provide while signing up or filling out forms. We also collect information through cookies and other tracking technologies that help us understand how users engage with our site, including IP address, browser type, pages visited, and duration of sessions.

//       This data helps us personalize your experience, provide tailored content, and enhance the performance and security of our services. We ensure that all data collected is handled with strict confidentiality and in compliance with relevant data protection regulations.`,
//     },
//     {
//       title: "How We Use Your Information",
//       image: three,
//       text: `Your personal information is used primarily to provide the services or information that you request from us. We may also use your data to send administrative communications, respond to inquiries, manage accounts, and provide customer support.

//       In addition, we analyze the data to improve our website functionality, user interface, and offerings. By understanding user behavior and preferences, we can deliver a more relevant and customized user experience. Your data may also be used for marketing purposes with your explicit consent, ensuring you stay informed about new features or updates.`,
//     },
//     {
//       title: "Disclosure of Your Information",
//       image: four,
//       text: `We may share your personal information with members of our organizational group, including subsidiaries, affiliates, and parent companies, but only to the extent required for legitimate business purposes.

//       In cases where third-party service providers are involved—such as cloud storage, payment processors, or analytics services—we ensure they meet strict data protection standards. We never sell your personal data to any external party. Disclosure may also occur to comply with legal obligations or to enforce our site policies, protect our rights, property, or safety, or the rights of others.`,
//     },
//     {
//       title: "Your Rights",
//       image: five,
//       text: `You have the right to access the personal data we hold about you and request corrections if it is inaccurate. You can also request deletion of your personal data under certain circumstances or object to specific processing practices.

//       Additionally, you may opt out of receiving non-essential emails or communications at any time. We are committed to enabling you to exercise control over your personal information and ensuring transparency in our data handling processes. Please contact our support team if you wish to make a data access or deletion request.`,
//     },
//     {
//       title: "Data Security",
//       image: six,
//       text: `The security of your personal data is a priority for us. We implement industry-standard security measures such as SSL encryption, secure servers, and access control to prevent unauthorized access, disclosure, or modification.

//       Regular audits, staff training, and updates to our security protocols ensure your data remains protected against evolving threats. Despite our efforts, no digital platform is entirely immune to risk. Therefore, we urge users to take their own precautions, such as using strong passwords and logging out after sessions.`,
//     },
//     {
//       title: "Changes to This Privacy Policy",
//       image: seven,
//       text: `We may update this Privacy Policy from time to time to reflect changes in legal requirements, technology, or our business practices. When we make material changes, we will notify you by updating the date at the top of the policy and possibly through additional notices such as email alerts or banners on the website.

//       Your continued use of our services after such updates will constitute your acknowledgment of the new policy. We encourage users to review this page periodically to stay informed about how we are protecting their data.`,
//     },
//   ];

//   const fadeInUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6, ease: "easeOut" },
//     },
//   };

//   const containerVariants = {
//     visible: {
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   return (
//     <div className="flex flex-col gap-10 mt-16 bg-white">
//       {/* ✅ Hero Section */}
//       <div
//         className="w-full bg-cover bg-center bg-no-repeat py-8 flex justify-center items-center shadow md:py-12 lg:py-16"
//         style={{
//           backgroundImage:
//             "url('https://img.freepik.com/free-vector/cyber-security-concept_23-2148534852.jpg?semt=ais_hybrid&w=740')",
//         }}
//       >
//         <div className="bg-opacity-50 px-4 py-2 rounded">
//           <h1 className="text-3xl text-white md:text-4xl lg:text-5xl text-center font-semibold">
//             Our Privacy Policy
//           </h1>
//         </div>
//       </div>

//       {/* ✅ Privacy Sections */}
//       <motion.ul
//         initial="hidden"
//         animate="visible"
//         variants={containerVariants}
//         className="w-full max-w-6xl mx-auto flex flex-col gap-8 px-6 md:px-10"
//       >
//         {privacyElements.map((element, index) => (
//           <motion.li
//             key={index}
//             variants={fadeInUp}
//             className="border border-gray-200 rounded-xl overflow-hidden shadow"
//           >
//             {/* ✅ Content block (alternating layout) */}
//             <div
//               className={`flex flex-col ${
//                 index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
//               } items-center gap-6 p-6 bg-gray-50 hover:bg-gray-100 transition`}
//               onClick={() => toggleExpand(index)}
//             >
//               {/* ✅ Image */}
//               <img
//                 src={element.image}
//                 alt={element.title}
//                 className="w-full max-w-[320px] h-56 object-cover rounded-md"
//               />

//               {/* ✅ Text Content */}
//               <div className="flex-1">
//                 <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center lg:text-left">
//                   {element.title}
//                 </h2>

//                 {/* ✅ Full description on large screens */}
//                 <div className="hidden lg:block text-gray-700 text-base">
//                   {element.text}
//                 </div>

//                 {/* ✅ Truncated description + Read more toggle for <1024px */}
//                 <div className="block lg:hidden text-sm text-gray-700">
//                   <div
//                     className={`overflow-hidden transition-all ${
//                       mobileExpanded[index] ? "" : "line-clamp-3"
//                     }`}
//                   >
//                     {element.text}
//                   </div>
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleMobileExpand(index);
//                     }}
//                     className="text-blue-500 mt-1 text-sm"
//                   >
//                     {mobileExpanded[index] ? "Read less" : "Read more..."}
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.li>
//         ))}
//       </motion.ul>
//     </div>
//   );
// };

import React, { useState } from "react";
import { motion } from "framer-motion";
import first from "../assets/privacy_images/privacy1.png";
import two from "../assets/privacy_images/privacy2.png";
import three from "../assets/privacy_images/privacy3.png";
import four from "../assets/privacy_images/privacy4.png";
import five from "../assets/privacy_images/privacy5.png";
import six from "../assets/privacy_images/privacy6.png";
import seven from "../assets/privacy_images/privacy6.png";

export const PrivacyPage = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const toggleMobileExpand = (index) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
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
          described in this policy. We encourage you to read this policy
          carefully to understand our views and practices regarding your
          personal data and how we treat it.
          <br />
          <br />
          This policy applies to all visitors, users, and others who access or
          use our services. It’s essential to us that you know how your data is
          being used and how you can manage your privacy settings at any time.
        </>
      ),
    },
    {
      title: "Information We Collect",
      image: two,
      text: `We may collect both personal and non-personal information when you interact with our website or services. This includes, but is not limited to, your name, email address, contact number, and any other information you provide while signing up or filling out forms. We also collect information through cookies and other tracking technologies that help us understand how users engage with our site, including IP address, browser type, pages visited, and duration of sessions.
  
      This data helps us personalize your experience, provide tailored content, and enhance the performance and security of our services. We ensure that all data collected is handled with strict confidentiality and in compliance with relevant data protection regulations.`,
    },
    {
      title: "How We Use Your Information",
      image: three,
      text: `Your personal information is used primarily to provide the services or information that you request from us. We may also use your data to send administrative communications, respond to inquiries, manage accounts, and provide customer support.
  
      In addition, we analyze the data to improve our website functionality, user interface, and offerings. By understanding user behavior and preferences, we can deliver a more relevant and customized user experience. Your data may also be used for marketing purposes with your explicit consent, ensuring you stay informed about new features or updates.`,
    },
    {
      title: "Disclosure of Your Information",
      image: four,
      text: `We may share your personal information with members of our organizational group, including subsidiaries, affiliates, and parent companies, but only to the extent required for legitimate business purposes.
  
      In cases where third-party service providers are involved—such as cloud storage, payment processors, or analytics services—we ensure they meet strict data protection standards. We never sell your personal data to any external party. Disclosure may also occur to comply with legal obligations or to enforce our site policies, protect our rights, property, or safety, or the rights of others.`,
    },
    {
      title: "Your Rights",
      image: five,
      text: `You have the right to access the personal data we hold about you and request corrections if it is inaccurate. You can also request deletion of your personal data under certain circumstances or object to specific processing practices.
  
      Additionally, you may opt out of receiving non-essential emails or communications at any time. We are committed to enabling you to exercise control over your personal information and ensuring transparency in our data handling processes. Please contact our support team if you wish to make a data access or deletion request.`,
    },
    {
      title: "Data Security",
      image: six,
      text: `The security of your personal data is a priority for us. We implement industry-standard security measures such as SSL encryption, secure servers, and access control to prevent unauthorized access, disclosure, or modification.
  
      Regular audits, staff training, and updates to our security protocols ensure your data remains protected against evolving threats. Despite our efforts, no digital platform is entirely immune to risk. Therefore, we urge users to take their own precautions, such as using strong passwords and logging out after sessions.`,
    },
    {
      title: "Changes to This Privacy Policy",
      image: seven,
      text: `We may update this Privacy Policy from time to time to reflect changes in legal requirements, technology, or our business practices. When we make material changes, we will notify you by updating the date at the top of the policy and possibly through additional notices such as email alerts or banners on the website.
  
      Your continued use of our services after such updates will constitute your acknowledgment of the new policy. We encourage users to review this page periodically to stay informed about how we are protecting their data.`,
    },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="flex flex-col gap-10 mt-16 bg-white">
      {/* ✅ Hero Section */}
      <div
        className="w-full bg-cover bg-center bg-no-repeat py-8 flex justify-center items-center shadow md:py-12 lg:py-16"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/cyber-security-concept_23-2148534852.jpg?semt=ais_hybrid&w=740')",
        }}
      >
        <div className="bg-opacity-50 px-4 py-2 rounded">
          <h1 className="text-3xl text-white md:text-4xl lg:text-5xl text-center font-semibold">
            Our Privacy Policy
          </h1>
        </div>
      </div>

      {/* ✅ Privacy Sections */}
      <motion.ul
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="w-full max-w-[90rem] mx-auto flex flex-col gap-8 px-6 md:px-10 lg:px-10"
      >
        {privacyElements.map((element, index) => (
          <motion.li
            key={index}
            variants={fadeInUp}
            className="border border-gray-200 rounded-xl overflow-hidden shadow"
          >
            {/* ✅ Content block (alternating layout) */}
            <div
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-6 p-6 bg-gray-50 hover:bg-gray-100 transition`}
              onClick={() => toggleExpand(index)}
            >
              {/* ✅ Image */}
              <img
                src={element.image}
                alt={element.title}
                className="w-[95%] sm:w-full max-w-[460px] object-contain rounded-md"
              />

              {/* ✅ Text Content */}
              <div className="flex-1">
                <h2 className="text-xl md:text-2xl font-semibold mb-2 text-center lg:text-left">
                  {element.title}
                </h2>

                {/* ✅ Full description on large screens */}
                <div className="hidden lg:block text-gray-700 text-base">
                  {element.text}
                </div>

                {/* ✅ Truncated description + Read more toggle for <1024px */}
                <div className="block lg:hidden text-sm text-gray-700">
                  <div
                    className={`overflow-hidden transition-all ${
                      mobileExpanded[index] ? "" : "line-clamp-3"
                    }`}
                  >
                    {element.text}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMobileExpand(index);
                    }}
                    className="text-blue-500 mt-1 text-sm"
                  >
                    {mobileExpanded[index] ? "Read less" : "Read more..."}
                  </button>
                </div>
              </div>
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
