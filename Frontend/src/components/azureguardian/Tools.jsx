// import { useState, useRef, useEffect } from 'react';
// import React from 'react';
// import { CloudIcon, ServerStackIcon, ShieldCheckIcon, BoltIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// const toolsData = [
//   { id: 1, logoComponent: CloudIcon, name: "Monkey365", description: "Analyzes and maps Azure AD, Office 365, and hybrid setups, identifying vulnerabilities and weaknesses within the cloud infrastructure." },
//   { id: 2, logoComponent: ServerStackIcon, name: "Stormspotter", description: "It visualizes relationships between Azure resources, mapping potential attack paths and highlighting weak points in your cloud environment for remediation." },
//   { id: 3, logoComponent: ShieldCheckIcon, name: "AzureHound", description: "It maps out privilege escalation paths within Azure AD, helping penetration testers identify and secure misconfigurations and reduce the attack surface." },
//   { id: 4, logoComponent: BoltIcon, name: "PowerZure", description: "It is a post-exploitation toolkit that focuses on discovery and exploiting vulnerabilities within Azure, Active Directory, and hybrid environments." },
//   { id: 5, logoComponent: CloudIcon, name: "Extra Tool 1", description: "Description for Extra Tool 1." },
//   { id: 6, logoComponent: ServerStackIcon, name: "Extra Tool 2", description: "Description for Extra Tool 2." },
// ];

// // ToolCard component remains the same
// const ToolCard = ({ logoComponent: Logo, name, description }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <div
//       className="relative bg-teal-500 rounded-xl shadow-lg h-60 md:h-64 flex flex-col justify-center items-center p-4 cursor-pointer overflow-hidden group w-full"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
//         <div className="bg-white rounded-lg p-4 mb-3 shadow-md w-24 h-24 flex items-center justify-center">
//           <Logo className="h-12 w-12 text-teal-600" />
//         </div>
//         <h3 className="text-white text-lg font-semibold text-center px-1">{name}</h3>
//       </div>
//       <div className={`absolute inset-0 bg-indigo-100 p-5 flex flex-col justify-center items-center text-center transition-all duration-300 ease-in-out transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
//         <h4 className="text-custom-dark-blue text-md font-bold mb-2">{name}</h4>
//         <p className="text-custom-dark-blue text-xs leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// };

// const Tools = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const viewportRef = useRef(null);
//   const [itemWidth, setItemWidth] = useState(300); // Increased default/fallback item width
//   const [itemsPerPage, setItemsPerPage] = useState(3); // Default to 3 for larger screens
//   const [gap, setGap] = useState(24); // Default gap (1.5rem)

//   useEffect(() => {
//     const calculateLayout = () => {
//       if (viewportRef.current) {
//         const containerWidth = viewportRef.current.offsetWidth;
//         let newItemsPerPage = 1;
//         let currentGap = 16; // 1rem for smaller screens

//         // --- MODIFIED Items Per Page Logic ---
//         if (window.innerWidth >= 1024) { // lg and up (Tailwind's 'lg' breakpoint)
//           newItemsPerPage = 3; // Show 3 items
//           currentGap = 32; // 2rem (gap-8) - you can adjust this
//         } else if (window.innerWidth >= 768) { // md (Tailwind's 'md' breakpoint)
//           newItemsPerPage = 2; // Show 2 items
//           currentGap = 24; // 1.5rem (gap-6)
//         } else { // sm and smaller
//           newItemsPerPage = 1; // Show 1 item
//           currentGap = 16; // 1rem (gap-4)
//         }
//         // --- End MODIFIED ---

//         setItemsPerPage(newItemsPerPage);
//         setGap(currentGap);

//         let calculatedItemWidth = (containerWidth - (newItemsPerPage - 1) * currentGap) / newItemsPerPage;
//         if (calculatedItemWidth <= 50 || isNaN(calculatedItemWidth)) {
//             // A more robust fallback if containerWidth is small or not ready
//             calculatedItemWidth = Math.max(200, Math.min(350, containerWidth - (newItemsPerPage > 1 ? currentGap : 0)));
//         }
//         setItemWidth(calculatedItemWidth);
//       }
//     };

//     calculateLayout();
//     window.addEventListener('resize', calculateLayout);

//     // Cleanup
//     return () => window.removeEventListener('resize', calculateLayout);
//   }, []); // Run once on mount, resize handler will update

//   useEffect(() => {
//     setCurrentIndex(0); // Reset index when itemsPerPage changes
//   }, [itemsPerPage]);

//   const totalItems = toolsData.length;
//   const maxIndex = Math.max(0, totalItems - itemsPerPage);
//   const showControls = totalItems > itemsPerPage;

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-cyan-600">
//       {/* Consider adjusting max-w if you want more space for 3 wider cards */}
//       <div className="max-w-6xl mx-auto"> {/* or max-w-7xl if needed */}
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
//           Some of the Tools that we use to Conduct Azure Penetration Testing
//         </h2>

//         <div className="relative">
//           {showControls && (
//             <button
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transform -translate-x-1/2 sm:-translate-x-[calc(100%+12px)] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
//               aria-label="Previous Tools"
//             >
//               <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
//             </button>
//           )}

//           <div className="overflow-hidden" ref={viewportRef}>
//             <div
//               className="flex flex-nowrap transition-transform duration-500 ease-in-out"
//               style={{
//                 width: `${totalItems * (itemWidth + gap) - gap}px`,
//                 transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
//               }}
//             >
//               {toolsData.map((tool, index) => (
//                 <div
//                   key={tool.id}
//                   className="flex-shrink-0"
//                   style={{
//                     width: `${itemWidth}px`,
//                     marginRight: index === totalItems - 1 ? '0px' : `${gap}px`,
//                   }}
//                 >
//                   <ToolCard
//                     logoComponent={tool.logoComponent}
//                     name={tool.name}
//                     description={tool.description}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {showControls && (
//             <button
//               onClick={handleNext}
//               disabled={currentIndex === maxIndex}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transform translate-x-1/2 sm:translate-x-[calc(100%+12px)] focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
//               aria-label="Next Tools"
//             >
//               <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tools;


// import { useState, useRef, useEffect } from 'react';
// import React from 'react';
// import { CloudIcon, ServerStackIcon, ShieldCheckIcon, BoltIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// const toolsData = [
//   { id: 1, logoComponent: CloudIcon, name: "Monkey365", description: "Analyzes and maps Azure AD, Office 365, and hybrid setups, identifying vulnerabilities and weaknesses within the cloud infrastructure." },
//   { id: 2, logoComponent: ServerStackIcon, name: "Stormspotter", description: "It visualizes relationships between Azure resources, mapping potential attack paths and highlighting weak points in your cloud environment for remediation." },
//   { id: 3, logoComponent: ShieldCheckIcon, name: "AzureHound", description: "It maps out privilege escalation paths within Azure AD, helping penetration testers identify and secure misconfigurations and reduce the attack surface." },
//   { id: 4, logoComponent: BoltIcon, name: "PowerZure", description: "It is a post-exploitation toolkit that focuses on discovery and exploiting vulnerabilities within Azure, Active Directory, and hybrid environments." },
//   { id: 5, logoComponent: CloudIcon, name: "Extra Tool 1", description: "Description for Extra Tool 1." },
//   { id: 6, logoComponent: ServerStackIcon, name: "Extra Tool 2", description: "Description for Extra Tool 2." },
// ];

// const ToolCard = ({ logoComponent: Logo, name, description }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   return (
//     <div
//       className="relative bg-teal-500 rounded-xl shadow-lg h-60 md:h-64 flex flex-col justify-center items-center p-4 cursor-pointer overflow-hidden group w-full"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-0' : 'opacity-100'}`}>
//         <div className="bg-white rounded-lg p-4 mb-3 shadow-md w-24 h-24 flex items-center justify-center">
//           <Logo className="h-12 w-12 text-teal-600" />
//         </div>
//         <h3 className="text-white text-lg font-semibold text-center px-1">{name}</h3>
//       </div>
//       <div className={`absolute inset-0 bg-indigo-100 p-5 flex flex-col justify-center items-center text-center transition-all duration-300 ease-in-out transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
//         <h4 className="text-custom-dark-blue text-md font-bold mb-2">{name}</h4>
//         <p className="text-custom-dark-blue text-xs leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// };

// const PREFERRED_MAX_CARD_WIDTH = 384;
// const MIN_CARD_WIDTH = 200; // Lowering this a bit, as two cards on a 435px screen will be narrow.
//                              // The primary fitting mechanism for >1 item is the division of containerWidth.

// const Tools = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const viewportRef = useRef(null);
//   const [itemWidth, setItemWidth] = useState(PREFERRED_MAX_CARD_WIDTH);
//   const [itemsPerPage, setItemsPerPage] = useState(3);
//   const [gap, setGap] = useState(24);

//   useEffect(() => {
//     const calculateLayout = () => {
//       if (viewportRef.current) {
//         const containerWidth = viewportRef.current.offsetWidth;
//         let newItemsPerPage = 1;
//         let currentGap = 16; // Default gap for 1 item or smallest screens

//         // --- MODIFIED Items Per Page Logic for 435px and up ---
//         if (window.innerWidth >= 1024) { // lg and up (1024px+)
//           newItemsPerPage = 3;
//           currentGap = 32; // 2rem (gap-8)
//         } else if (window.innerWidth >= 768) { // md (768px - 1023px)
//           newItemsPerPage = 2;
//           currentGap = 24; // 1.5rem (gap-6)
//         } else if (window.innerWidth >= 435) { // Target range: 435px to 767px
//           newItemsPerPage = 2;
//           currentGap = 16; // 1rem (gap-4) - smaller gap for tighter screens
//         } else { // Screens smaller than 435px
//           newItemsPerPage = 1;
//           currentGap = 16; // 1rem (gap-4)
//         }
//         // --- End MODIFIED ---

//         setItemsPerPage(newItemsPerPage);
//         setGap(currentGap);

//         let calculatedItemWidth;

//         if (newItemsPerPage === 1) {
//           // For a single item, aim for PREFERRED_MAX_CARD_WIDTH, but not less than MIN_CARD_WIDTH,
//           // all within the bounds of containerWidth.
//           let singleItemAttempt = Math.min(containerWidth, PREFERRED_MAX_CARD_WIDTH);
//           calculatedItemWidth = Math.max(singleItemAttempt, Math.min(MIN_CARD_WIDTH, containerWidth));
//         } else {
//           // For multiple items, divide the available space.
//           calculatedItemWidth = (containerWidth - (newItemsPerPage - 1) * currentGap) / newItemsPerPage;
//           // Ensure it doesn't go below a very minimal width, though it should be reasonable
//           // due to the itemsPerPage logic.
//           calculatedItemWidth = Math.max(calculatedItemWidth, MIN_CARD_WIDTH / 1.5 ); // A soft minimum for multi-item view
//         }

//         // Fallback for NaN or non-positive width
//         if (isNaN(calculatedItemWidth) || calculatedItemWidth <= 0) {
//           calculatedItemWidth = itemWidth; // Fallback to current/previous itemWidth
//         }
//         setItemWidth(calculatedItemWidth);
//       }
//     };

//     calculateLayout();
//     window.addEventListener('resize', calculateLayout);

//     return () => window.removeEventListener('resize', calculateLayout);
//   }, [itemWidth]);

//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [itemsPerPage]);

//   const totalItems = toolsData.length;
//   const maxIndex = Math.max(0, totalItems - itemsPerPage);
//   const showControls = totalItems > itemsPerPage;

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   return (
//     <div className="py-16 px-5 sm:px-8 bg-cyan-600"> {/* Padding adjusted for buttons */}
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
//           Some of the Tools that we use to Conduct Azure Penetration Testing
//         </h2>

//         <div className="relative">
//           {showControls && (
//             <button
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transform -translate-x-1/2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
//               aria-label="Previous Tools"
//             >
//               <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
//             </button>
//           )}

//           <div className="overflow-hidden" ref={viewportRef}>
//             <div
//               className="flex flex-nowrap transition-transform duration-500 ease-in-out"
//               style={{
//                 width: `${totalItems * itemWidth + (totalItems > 0 ? (totalItems - 1) * gap : 0)}px`,
//                 transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
//               }}
//             >
//               {toolsData.map((tool, index) => (
//                 <div
//                   key={tool.id}
//                   className="flex-shrink-0"
//                   style={{
//                     width: `${itemWidth}px`,
//                     marginRight: index === totalItems - 1 ? '0px' : `${gap}px`,
//                   }}
//                 >
//                   <ToolCard
//                     logoComponent={tool.logoComponent}
//                     name={tool.name}
//                     description={tool.description}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {showControls && (
//             <button
//               onClick={handleNext}
//               disabled={currentIndex === maxIndex}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transform translate-x-1/2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
//               aria-label="Next Tools"
//             >
//               <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tools;

// import { useState, useRef, useEffect } from 'react';
// import React from 'react';
// import { CloudIcon, ServerStackIcon, ShieldCheckIcon, BoltIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// const toolsData = [
//   { id: 1, logoComponent: CloudIcon, name: "Monkey365", description: "Analyzes and maps Azure AD, Office 365, and hybrid setups, identifying vulnerabilities and weaknesses within the cloud infrastructure." },
//   { id: 2, logoComponent: ServerStackIcon, name: "Stormspotter", description: "It visualizes relationships between Azure resources, mapping potential attack paths and highlighting weak points in your cloud environment for remediation." },
//   { id: 3, logoComponent: ShieldCheckIcon, name: "AzureHound", description: "It maps out privilege escalation paths within Azure AD, helping penetration testers identify and secure misconfigurations and reduce the attack surface." },
//   { id: 4, logoComponent: BoltIcon, name: "PowerZure", description: "It is a post-exploitation toolkit that focuses on discovery and exploiting vulnerabilities within Azure, Active Directory, and hybrid environments." },
//   { id: 5, logoComponent: CloudIcon, name: "Extra Tool 1", description: "Description for Extra Tool 1." },
//   { id: 6, logoComponent: ServerStackIcon, name: "Extra Tool 2", description: "Description for Extra Tool 2." },
// ];

// // ToolCard component MODIFIED for onClick reveal
// const ToolCard = ({ logoComponent: Logo, name, description }) => {
//   const [isRevealed, setIsRevealed] = useState(false); // State for click toggle

//   const handleClick = () => {
//     setIsRevealed(!isRevealed); // Toggle reveal state
//   };

//   return (
//     <div
//       className="relative bg-teal-500 rounded-xl shadow-lg h-60 md:h-64 flex flex-col justify-center items-center p-4 cursor-pointer overflow-hidden group w-full"
//       onClick={handleClick} // Trigger reveal on click
//     >
//       {/* Front face: Logo and Name. Fades out when revealed. */}
//       <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
//         <div className="bg-white rounded-lg p-4 mb-3 shadow-md w-24 h-24 flex items-center justify-center">
//           <Logo className="h-12 w-12 text-teal-600" />
//         </div>
//         <h3 className="text-white text-lg font-semibold text-center px-1">{name}</h3>
//       </div>
//       {/* Back face: Description. Slides up and fades in when revealed. */}
//       <div className={`absolute inset-0 bg-indigo-100 p-5 flex flex-col justify-center items-center text-center transition-all duration-300 ease-in-out transform ${isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
//         <h4 className="text-custom-dark-blue text-md font-bold mb-2">{name}</h4>
//         <p className="text-custom-dark-blue text-xs leading-relaxed">{description}</p>
//       </div>
//     </div>
//   );
// };

// const PREFERRED_MAX_CARD_WIDTH = 384;
// const MIN_CARD_WIDTH = 200;

// const Tools = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const viewportRef = useRef(null);
//   const [itemWidth, setItemWidth] = useState(PREFERRED_MAX_CARD_WIDTH);
//   const [itemsPerPage, setItemsPerPage] = useState(3);
//   const [gap, setGap] = useState(24);

//   useEffect(() => {
//     const calculateLayout = () => {
//       if (viewportRef.current) {
//         const containerWidth = viewportRef.current.offsetWidth;
//         let newItemsPerPage = 1;
//         let currentGap = 16;

//         if (window.innerWidth >= 1024) {
//           newItemsPerPage = 3;
//           currentGap = 32;
//         } else if (window.innerWidth >= 768) { // This handles 768px correctly
//           newItemsPerPage = 2;
//           currentGap = 24;
//         } else if (window.innerWidth >= 435) {
//           newItemsPerPage = 2;
//           currentGap = 16;
//         } else {
//           newItemsPerPage = 1;
//           currentGap = 16;
//         }

//         setItemsPerPage(newItemsPerPage);
//         setGap(currentGap);

//         let calculatedItemWidth;
//         if (newItemsPerPage === 1) {
//           let singleItemAttempt = Math.min(containerWidth, PREFERRED_MAX_CARD_WIDTH);
//           calculatedItemWidth = Math.max(singleItemAttempt, Math.min(MIN_CARD_WIDTH, containerWidth));
//         } else {
//           calculatedItemWidth = (containerWidth - (newItemsPerPage - 1) * currentGap) / newItemsPerPage;
//           calculatedItemWidth = Math.max(calculatedItemWidth, MIN_CARD_WIDTH / 1.5 );
//         }

//         if (isNaN(calculatedItemWidth) || calculatedItemWidth <= 0) {
//           calculatedItemWidth = itemWidth;
//         }
//         setItemWidth(calculatedItemWidth);
//       }
//     };

//     calculateLayout();
//     window.addEventListener('resize', calculateLayout);
//     return () => window.removeEventListener('resize', calculateLayout);
//   }, [itemWidth]);

//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [itemsPerPage]);

//   const totalItems = toolsData.length;
//   const maxIndex = Math.max(0, totalItems - itemsPerPage);
//   const showControls = totalItems > itemsPerPage;

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
//   };

//   const handlePrev = () => {
//     setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//   };

//   return (
//     <div className="py-16 px-5 sm:px-8 bg-cyan-600">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
//           Some of the Tools that we use to Conduct Azure Penetration Testing
//         </h2>
//         <div className="relative">
//           {showControls && (
//             <button
//               onClick={handlePrev}
//               disabled={currentIndex === 0}
//               className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transform -translate-x-1/2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
//               aria-label="Previous Tools"
//             >
//               <ChevronLeftIcon className="h-6 w-6 md:h-8 md:w-8" />
//             </button>
//           )}
//           <div className="overflow-hidden" ref={viewportRef}>
//             <div
//               className="flex flex-nowrap transition-transform duration-500 ease-in-out"
//               style={{
//                 width: `${totalItems * itemWidth + (totalItems > 0 ? (totalItems - 1) * gap : 0)}px`,
//                 transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
//               }}
//             >
//               {toolsData.map((tool, index) => (
//                 <div
//                   key={tool.id}
//                   className="flex-shrink-0"
//                   style={{
//                     width: `${itemWidth}px`,
//                     marginRight: index === totalItems - 1 ? '0px' : `${gap}px`,
//                   }}
//                 >
//                   <ToolCard
//                     logoComponent={tool.logoComponent}
//                     name={tool.name}
//                     description={tool.description}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//           {showControls && (
//             <button
//               onClick={handleNext}
//               disabled={currentIndex === maxIndex}
//               className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-2 sm:p-3 rounded-full transform translate-x-1/2 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
//               aria-label="Next Tools"
//             >
//               <ChevronRightIcon className="h-6 w-6 md:h-8 md:w-8" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Tools;

import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { CloudIcon, ServerStackIcon, ShieldCheckIcon, BoltIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const toolsData = [
  { id: 1, logoComponent: CloudIcon, name: "Monkey365", description: "Analyzes and maps Azure AD, Office 365, and hybrid setups, identifying vulnerabilities and weaknesses within the cloud infrastructure." },
  { id: 2, logoComponent: ServerStackIcon, name: "Stormspotter", description: "It visualizes relationships between Azure resources, mapping potential attack paths and highlighting weak points in your cloud environment for remediation." },
  { id: 3, logoComponent: ShieldCheckIcon, name: "AzureHound", description: "It maps out privilege escalation paths within Azure AD, helping penetration testers identify and secure misconfigurations and reduce the attack surface." },
  { id: 4, logoComponent: BoltIcon, name: "PowerZure", description: "It is a post-exploitation toolkit that focuses on discovery and exploiting vulnerabilities within Azure, Active Directory, and hybrid environments." },
  { id: 5, logoComponent: CloudIcon, name: "ScoutSuite", description: "Open-source multi-cloud security-auditing tool. Assesses security posture across Azure, AWS, and GCP, identifying misconfigurations and risks." },
  { id: 6, logoComponent: ShieldCheckIcon, name: "AzSK (Secure DevOps Kit)", description: "The Secure DevOps Kit for Azure (AzSK) provides security intra-spection, CICD extensibility, and more for Azure resources and subscriptions." },
  // You can add more tools here if needed, up to a reasonable number for the carousel.
  // Example of adding more:
  // { id: 7, logoComponent: ServerStackIcon, name: "Another Tool", description: "Description for another tool." },
  // { id: 8, logoComponent: BoltIcon, name: "Yet Another Tool", description: "Description for yet another tool." },
];

// ToolCard component (remains the same as your last version with onClick reveal)
const ToolCard = ({ logoComponent: Logo, name, description }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(!isRevealed);
  };

  return (
    <div
      className="relative bg-teal-500 rounded-xl shadow-lg h-60 md:h-64 flex flex-col justify-center items-center p-4 cursor-pointer overflow-hidden group w-full"
      onClick={handleClick}
    >
      <div className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity duration-300 ease-in-out ${isRevealed ? 'opacity-0' : 'opacity-100'}`}>
        <div className="bg-white rounded-lg p-4 mb-3 shadow-md w-24 h-24 flex items-center justify-center">
          <Logo className="h-12 w-12 text-teal-600" />
        </div>
        <h3 className="text-white text-lg font-semibold text-center px-1">{name}</h3>
      </div>
      <div className={`absolute inset-0 bg-indigo-100 p-5 flex flex-col justify-center items-center text-center transition-all duration-300 ease-in-out transform ${isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
        <h4 className="text-custom-dark-blue text-md font-bold mb-2">{name}</h4>
        <p className="text-custom-dark-blue text-xs leading-relaxed">{description}</p>
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
          let singleItemAttempt = Math.min(containerWidth, PREFERRED_MAX_CARD_WIDTH);
          calculatedItemWidth = Math.max(singleItemAttempt, Math.min(MIN_CARD_WIDTH, containerWidth));
        } else {
          calculatedItemWidth = (containerWidth - (newItemsPerPage - 1) * currentGap) / newItemsPerPage;
          calculatedItemWidth = Math.max(calculatedItemWidth, MIN_CARD_WIDTH / 1.5 );
        }

        if (isNaN(calculatedItemWidth) || calculatedItemWidth <= 0) {
          calculatedItemWidth = itemWidth;
        }
        setItemWidth(calculatedItemWidth);
      }
    };

    calculateLayout();
    window.addEventListener('resize', calculateLayout);
    return () => window.removeEventListener('resize', calculateLayout);
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
                width: `${totalItems * itemWidth + (totalItems > 0 ? (totalItems - 1) * gap : 0)}px`,
                transform: `translateX(-${currentIndex * (itemWidth + gap)}px)`,
              }}
            >
              {toolsData.map((tool, index) => (
                <div
                  key={tool.id}
                  className="flex-shrink-0"
                  style={{
                    width: `${itemWidth}px`,
                    marginRight: index === totalItems - 1 ? '0px' : `${gap}px`,
                  }}
                >
                  <ToolCard
                    logoComponent={tool.logoComponent}
                    name={tool.name}
                    description={tool.description}
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