import React from "react";
import { motion } from "framer-motion";
import { GlobeAltIcon, ShieldExclamationIcon, KeyIcon, ArrowPathIcon } from '@heroicons/react/24/outline';

const whatWeProvideData = [
  { icon: GlobeAltIcon, title: "Network and Web Security", description: "Assisting organizations in creating robust security policies for web access and managing network traffic in the cloud, using both virtual and physical segmentation strategies, tailored for Azure." },
  { icon: ShieldExclamationIcon, title: "Intrusion Security", description: "Our team provides effective intrusion management solutions specifically for Azure environments. We help businesses maintain visibility and control over their Azure infrastructure to proactively prevent potential attacks." },
  { icon: KeyIcon, title: "Identity and Access Security", description: "We focus on strengthening identity and access management by reviewing user accounts, key management, and implementing least-privileged access to minimize data breach risks in Azure." },
  { icon: ArrowPathIcon, title: "Retesting", description: "After all identified vulnerabilities are addressed, CyberSapiens conducts a thorough retest of your Azure infrastructure to ensure all issues have been resolved and no new threats have emerged." }
];
const ProvideCard = ({ icon: Icon, title, description }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:-translate-y-2 transform transition-all duration-300 ease-in-out h-full flex flex-col cursor-pointer"
  >
    <div className="flex justify-center mb-4">
      <Icon className="h-12 w-12 text-purple-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{title}</h3>
    <p className="text-gray-700 text-sm leading-relaxed flex-grow">{description}</p>
  </div>
);


const WhatWeProvide = () => {
  const cardVariants = {
    hiddenLeft: { opacity: 0, x: -50 },
    hiddenRight: { opacity: 0, x: 50 },
    hiddenBottom: { opacity: 0, y: 30 },
    visible: (customDelay = 0) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: customDelay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Animation for the main title
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-900 mb-12"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          Azure Penetration Testing - What We Provide?
        </motion.h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {whatWeProvideData.map((item, index) => {
            let initialVariantKey = "hiddenBottom";
            const totalItems = whatWeProvideData.length;

            if (totalItems === 1) {
              initialVariantKey = "hiddenBottom";
            } else if (index === 0) {
              initialVariantKey = "hiddenLeft";
            } else if (index === totalItems - 1) {
              initialVariantKey = "hiddenRight";
            }

            return (
              <motion.div
                key={item.title}
                variants={cardVariants}
                initial={initialVariantKey}
                whileInView="visible"
                custom={index * 0.1}
                viewport={{ once: true, amount: 0.2 }}
              >
                <ProvideCard icon={item.icon} title={item.title} description={item.description} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatWeProvide;