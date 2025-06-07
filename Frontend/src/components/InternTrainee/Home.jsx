import React from "react";
import { motion } from "framer-motion";
import icon1 from '../../assets/InternTrainee/icon1.png';
import icon2 from '../../assets/InternTrainee/icon2.png';
import icon3 from '../../assets/InternTrainee/icon3.png';
import icon4 from '../../assets/InternTrainee/icon4.webp';
import icon5 from '../../assets/InternTrainee/icon5.webp';


const cardData = [
  {
    id: 1,
    image: icon1,
    text: "Security Aduits",
  },
  {
    id: 2,
    image:icon2,
    text: "Web VAPT",
  },
  {
    id: 3,
    image:icon3,
    text: "Risk Management",
  },
  {
    id: 4,
    image:icon4,
    text: "Network VAPT",
  },
  {
    id: 5,
    image:icon5,
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
