import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    image: "https://cdn-icons-png.flaticon.com/512/16863/16863138.png",
    text: "Security Aduits",
  },
  {
    id: 2,
    image:
      "https://www.briskinfosec.com/assets/seocontents/application-security-assessment.png",
    text: "Web VAPT",
  },
  {
    id: 3,
    image:
      "https://png.pngtree.com/png-vector/20230428/ourmid/pngtree-risk-management-line-icon-vector-png-image_6739736.png",
    text: "Risk Management",
  },
  {
    id: 4,
    image:
      "https://ias-singapore.com/wp-content/uploads/2023/08/VAPT-Testing.png",
    text: "Network VAPT",
  },
  {
    id: 5,
    image:
      "https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-iso27001.png",
    text: "ISO 270001, PCI DSS, HIPAA GRC",
  },
];

const Home = () => {
  return (
    <div>
  <div className="px-4 pt-22 pb-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 text-center">
      Build a Powerful Skillset in Just 6 Months!
    </h1>

    <div className="pt-10 flex flex-wrap lg:flex-nowrap gap-5 justify-center overflow-x-auto lg:overflow-x-visible">
  {cardData.map((card, index) => (
    <motion.div
      key={card.id}
      className="relative w-64 h-45 md:w-64 lg:w-48 bg-blue-100 shadow-md rounded-lg p-4 text-center overflow-hidden group flex-shrink-0"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -10 }}
    >
      <img
        src={card.image}
        alt={`Card ${card.id}`}
        className="mx-auto mb-2 w-20 h-20 sm:w-24 sm:h-24 object-cover rounded"
      />
      <p className="text-sm sm:text-base text-gray-700">{card.text}</p>

      {/* Shine effect */}
      <div className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 rotate-12 group-hover:animate-shine" />
    </motion.div>
  ))}
</div>

  </div>

  <div className="px-4 pb-10">
    <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold">
      Upgrade Your Future: Learn While You Earn!
    </h1>
  </div>
</div>

  );
};
export default Home;
