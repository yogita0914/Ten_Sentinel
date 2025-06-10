import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import icon1 from '../../assets/PhishingSimulation/icon1.png';
import icon2 from '../../assets/PhishingSimulation/icon2.png';
import icon3 from '../../assets/PhishingSimulation/icon3.png';

const cardData = [
  {
    id: 1,
    image: icon1,
    target: 90,
    buttonText: "Raise Awareness",
    description: "Employees reported phishing attempts this quarter.",
  },
  {
    id: 2,
    image: icon2,
    target: 97,
    buttonText: "Implement Training",
    description: "Organizations affected by phishing annually.",
  },
  {
    id: 3,
    image: icon3,
    target: 64,
    buttonText: "Launch Programs",
    description: "Incidents could be prevented with proper training.",
  },
];

const CardSection = ({ onContactClick }) => {
  const [counts, setCounts] = useState(cardData.map(() => 0));

  useEffect(() => {
    const intervals = cardData.map((card, i) =>
      setInterval(() => {
        setCounts((prev) =>
          prev.map((val, idx) =>
            idx === i && val < card.target ? val + 1 : val
          )
        );
      }, 20)
    );

    return () => intervals.forEach(clearInterval);
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-4 text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
        Phishing Threats Undermine Business Security Daily
      </h1>
      <p className="text-gray-600 mb-12 max-w-3xl text-base sm:text-lg mx-auto">
        Companies are increasingly vulnerable to phishing—a leading social engineering tactic.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {cardData.map((card, index) => (
          <motion.div
            key={card.id}
            className="w-full sm:w-[300px] bg-white p-6 rounded-lg shadow-lg group"
            whileHover={{
              boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
              scale: 1.02,
            }}
          >
            <img
              src={card.image}
              alt={`Card ${card.id}`}
              className="w-20 h-20 mx-auto mb-4 object-contain"
            />
            <h2 className="text-3xl font-bold text-blue-600 mb-2">
              {counts[index]}%
            </h2>
            <p className="text-gray-700 mb-4">{card.description}</p>

            <button 
            onClick={onContactClick}
            className="mt-2 bg-blue-600 text-white cursor-pointer w-40 py-2 rounded hover:bg-blue-700 transition-colors">
              {card.buttonText}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CardSection;
