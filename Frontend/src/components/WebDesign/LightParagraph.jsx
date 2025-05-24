import React, { useState, useEffect } from 'react';

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
      <p className="font-normal text-gray-600 md:text-lg">
        {shouldTruncate ? truncatedText : children}
      </p>
      {isSmallScreen && typeof children === 'string' && children.length > 150 && (
        <button
          onClick={toggleExpand}
          className="mt-2 text-blue-600 hover:underline text-sm"
        >
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
};
