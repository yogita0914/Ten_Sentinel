import { useState, useRef, useEffect } from "react";
import React from "react";
import {
  CloudIcon,
  ServerStackIcon,
  ShieldCheckIcon,
  BoltIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const toolsData = [
  {
    id: 1,
    logoComponent: CloudIcon,
    name: "Monkey365",
    description:
      "Analyzes and maps Azure AD, Office 365, and hybrid setups, identifying vulnerabilities and weaknesses within the cloud infrastructure.",
  },
  {
    id: 2,
    logoComponent: ServerStackIcon,
    name: "Stormspotter",
    description:
      "It visualizes relationships between Azure resources, mapping potential attack paths and highlighting weak points in your cloud environment for remediation.",
  },
  {
    id: 3,
    logoComponent: ShieldCheckIcon,
    name: "AzureHound",
    description:
      "It maps out privilege escalation paths within Azure AD, helping penetration testers identify and secure misconfigurations and reduce the attack surface.",
  },
  {
    id: 4,
    logoComponent: BoltIcon,
    name: "PowerZure",
    description:
      "It is a post-exploitation toolkit that focuses on discovery and exploiting vulnerabilities within Azure, Active Directory, and hybrid environments.",
  },
  {
    id: 5,
    logoComponent: CloudIcon,
    name: "ScoutSuite",
    description:
      "Open-source multi-cloud security-auditing tool. Assesses security posture across Azure, AWS, and GCP, identifying misconfigurations and risks.",
  },
  {
    id: 6,
    logoComponent: ShieldCheckIcon,
    name: "AzSK (Secure DevOps Kit)",
    description:
      "The Secure DevOps Kit for Azure (AzSK) provides security intra-spection, CICD extensibility, and more for Azure resources and subscriptions.",
  },
];


const ToolCard = ({
  logoComponent: Logo,
  name,
  description,
  isRevealed,
  onMouseEnter,
  onMouseLeave, 
}) => {
  return (
    <div
      className="relative bg-teal-500 rounded-xl shadow-lg h-60 md:h-64 flex flex-col justify-center items-center p-4 overflow-hidden group w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave} 
    >
      <div
        className={`absolute inset-0 flex flex-col justify-center items-center ${
          isRevealed ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="bg-white rounded-lg p-4 mb-3 shadow-md w-24 h-24 flex items-center justify-center">
          <Logo className="h-12 w-12 text-teal-600" />
        </div>
        <h3 className="text-white text-lg font-semibold text-center px-1">
          {name}
        </h3>
      </div>
      <div
        className={`absolute inset-0 bg-indigo-100 p-5 flex flex-col justify-center items-center text-center transform ${
          isRevealed
            ? "translate-y-0 opacity-100"
            : "translate-y-full opacity-0"
        }`}
      >
        <h4 className="text-custom-dark-blue text-md font-bold mb-2">{name}</h4>
        <p className="text-custom-dark-blue text-xs leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

const PREFERRED_MAX_CARD_WIDTH = 384;
const MIN_CARD_WIDTH = 200;

const Tools = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const viewportRef = useRef(null);
  const [itemWidth, setItemWidth] = useState(PREFERRED_MAX_CARD_WIDTH);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [gap, setGap] = useState(24);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    const calculateLayout = () => {
      if (viewportRef.current) {
        const containerWidth = viewportRef.current.offsetWidth;
        let newItemsPerPage = 1;
        let currentGap = 16;

        if (window.innerWidth >= 1024) {
          newItemsPerPage = 3;
          currentGap = 32;
        } else if (window.innerWidth >= 768) {
          newItemsPerPage = 2;
          currentGap = 24;
        } else if (window.innerWidth >= 435) {
          newItemsPerPage = 2;
          currentGap = 16;
        } else {
          newItemsPerPage = 1;
          currentGap = 16;
        }

        setItemsPerPage(newItemsPerPage);
        setGap(currentGap);

        let calculatedItemWidth;
        if (newItemsPerPage === 1) {
          let singleItemAttempt = Math.min(
            containerWidth,
            PREFERRED_MAX_CARD_WIDTH
          );
          calculatedItemWidth = Math.max(
            singleItemAttempt,
            Math.min(MIN_CARD_WIDTH, containerWidth)
          );
        } else {
          calculatedItemWidth =
            (containerWidth - (newItemsPerPage - 1) * currentGap) /
            newItemsPerPage;
          calculatedItemWidth = Math.max(
            calculatedItemWidth,
            MIN_CARD_WIDTH / 1.5
          );
        }

        if (isNaN(calculatedItemWidth) || calculatedItemWidth <= 0) {
          calculatedItemWidth = itemWidth;
        }
        setItemWidth(calculatedItemWidth);
      }
    };

    calculateLayout();
    window.addEventListener("resize", calculateLayout);
    return () => window.removeEventListener("resize", calculateLayout);
  }, [itemWidth]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerPage]);

  const totalItems = toolsData.length;
  const maxIndex = Math.max(0, totalItems - itemsPerPage);
  const showControls = totalItems > itemsPerPage;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="py-16 px-5 sm:px-8 bg-cyan-600">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Some of the Tools that we use to Conduct Azure Penetration Testing
        </h2>
        <div className="relative">
          {showControls && (
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transform -translate-x-1/2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              aria-label="Previous Tools"
            >
              <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
            </button>
          )}
          <div className="overflow-hidden" ref={viewportRef}>
            <div
              className="flex flex-nowrap transition-transform duration-500 ease-in-out"
              style={{
                width: `${
                  totalItems * itemWidth +
                  (totalItems > 0 ? (totalItems - 1) * gap : 0)
                }px`,
                transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
              }}
              onMouseLeave={() => setHoveredCardId(null)}
            >
              {toolsData.map((tool, index) => (
                <div
                  key={tool.id}
                  className="flex-shrink-0"
                  style={{
                    width: `${itemWidth}px`,
                    marginRight: index === totalItems - 1 ? "0px" : `${gap}px`,
                  }}
                >
                  <ToolCard
                    logoComponent={tool.logoComponent}
                    name={tool.name}
                    description={tool.description}
                    isRevealed={hoveredCardId === tool.id}
                    onMouseEnter={() => setHoveredCardId(tool.id)}
                  />
                </div>
              ))}
            </div>
          </div>
          {showControls && (
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transform translate-x-1/2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
              aria-label="Next Tools"
            >
              <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tools;
