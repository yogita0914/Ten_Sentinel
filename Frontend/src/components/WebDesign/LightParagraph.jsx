import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const buttonVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4, delay: 0.3 } },
};

export const LightParagraph = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleExpand = () => setIsExpanded((prev) => !prev);

  const shouldTruncate = isSmallScreen && !isExpanded;
  const truncatedText =
    typeof children === 'string' && children.length > 100
      ? children.slice(0, 100) + '...'
      : children;

  return (
    <div>
      <motion.p
        className="font-normal text-gray-600 md:text-lg"
        variants={paragraphVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {shouldTruncate ? truncatedText : children}
      </motion.p>

      {isSmallScreen && typeof children === 'string' && children.length > 150 && (
        <motion.button
          onClick={toggleExpand}
          className="mt-2 text-blue-600 hover:underline text-sm"
          variants={buttonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </motion.button>
      )}
    </div>
  );
};
