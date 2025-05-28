// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import {
//   LockClosedIcon,
//   CalculatorIcon,
//   DocumentCheckIcon,
//   ShieldExclamationIcon,
//   ShieldCheckIcon,
//   BanknotesIcon,
//   CogIcon,
//   BuildingOfficeIcon,
// } from '@heroicons/react/24/outline';

// const securingNeedsData = [
//   { id: 'data_protection', icon: LockClosedIcon, title: 'Data Protection', description: 'Ensuring robust data protection mechanisms are in place to safeguard sensitive information from breaches and unauthorized access, maintaining confidentiality and integrity.' },
//   { id: 'cost_effective', icon: CalculatorIcon, title: 'Cost-Effective Security', description: 'Outsourcing Azure security services offers a cost-effective alternative to maintaining an in-house team. Benefit from advanced technologies and experienced experts without added training/infrastructure costs.' },
//   { id: 'compliance', icon: DocumentCheckIcon, title: 'Compliance & Regulatory', description: 'Meeting industry-specific compliance standards (e.g., GDPR, HIPAA, PCI-DSS) and regulatory obligations related to data security and privacy in the cloud.' },
//   { id: 'mitigating_risks', icon: ShieldExclamationIcon, title: 'Mitigating Risks', description: 'Proactively identifying and mitigating security risks to prevent financial losses, reputational damage, operational disruptions, and legal liabilities.' },
//   { id: 'business_ops', icon: ShieldCheckIcon, title: 'Protecting Business Operations', description: 'Ensuring the continuity and availability of critical business operations by protecting Azure infrastructure from cyber threats, downtime, and data loss.' },
//   { id: 'managing_costs', icon: BanknotesIcon, title: 'Managing Overall Costs', description: 'Optimizing security spending by implementing efficient security measures and avoiding the high costs associated with security incidents, recovery, and fines.' },
//   { id: 'proper_config', icon: CogIcon, title: 'Ensuring Proper Configuration', description: 'Properly configuring Azure cloud resources with appropriate security settings prevents misconfigurations that could expose the environment to significant risks and vulnerabilities.' },
//   { id: 'org_goals', icon: BuildingOfficeIcon, title: 'Supporting Organizational Goals', description: 'A secure Azure environment enables innovation and scalability, allowing organizations to confidently adopt new technologies, expand services, and grow their infrastructure.' },
// ];

// const defaultActiveItem = securingNeedsData[0];
// const MOBILE_BREAKPOINT = 533;

// // Updated array of background colors for mobile boxes for a more harmonious look
// const mobileBoxBackgrounds = [
//   'bg-sky-600/70',      // Deeper sky blue, 70% opacity
//   'bg-cyan-500/75',     // A vibrant cyan, 75% opacity
//   'bg-teal-600/70',     // Rich teal, 70% opacity
//   'bg-blue-700/75',     // Strong classic blue, 75% opacity
//   'bg-indigo-600/70',   // Matches gradient, 70% opacity
//   'bg-violet-500/75',   // A clear violet, 75% opacity
//   'bg-purple-600/70',   // Deeper purple, 70% opacity
//   'bg-fuchsia-500/75'   // A touch of vibrant fuchsia for variety, 75% opacity
// ];


// const NeedOfSecuring = () => {
//   const [activeNeed, setActiveNeed] = useState(defaultActiveItem);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [isUserInteracting, setIsUserInteracting] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const numItems = securingNeedsData.length;
//   const animationFrameId = useRef(null);

//   const itemDiameter = 96;
//   const itemRadius = itemDiameter / 2;
//   const centralTextMaxWidthPixels = 320;
//   const centralTextPadding = 18;
//   const iconStartAngleOffset = -90;
//   const baseRotationSpeed = 0.5;

//   const iconCircleRadius = useMemo(() =>
//     (centralTextMaxWidthPixels / 2) + centralTextPadding + itemRadius,
//     [centralTextMaxWidthPixels, centralTextPadding, itemRadius]
//   );

//   const layoutContainerDiameter = useMemo(() =>
//     2 * (iconCircleRadius + itemRadius),
//     [iconCircleRadius, itemRadius]
//   );
//   const layoutContainerWidth = layoutContainerDiameter;
//   const layoutContainerHeight = layoutContainerDiameter;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < MOBILE_BREAKPOINT);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobileView) {
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//       return;
//     }
//     let lastTime = 0;
//     const animate = (timestamp) => {
//       if (!lastTime) lastTime = timestamp;
//       const deltaTime = timestamp - lastTime;
//       const currentSpeed = isUserInteracting ? 0 : baseRotationSpeed;
//       const actualRotationSpeed = currentSpeed * (deltaTime / (1000 / 60));
//       if (currentSpeed > 0) {
//         setRotationAngle(prevAngle => (prevAngle + actualRotationSpeed) % 360);
//       }
//       lastTime = timestamp;
//       animationFrameId.current = requestAnimationFrame(animate);
//     };
//     animationFrameId.current = requestAnimationFrame(animate);
//     return () => {
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//     };
//   }, [baseRotationSpeed, isUserInteracting, isMobileView]);

//   const itemPositions = useMemo(() => {
//     if (isMobileView) return [];
//     const positions = [];
//     if (numItems === 0) return positions;
//     const centerX = layoutContainerWidth / 2;
//     const centerY = layoutContainerHeight / 2;
//     for (let i = 0; i < numItems; i++) {
//       const baseAngleDeg = (i / numItems) * 360 + iconStartAngleOffset;
//       const currentAngleDeg = baseAngleDeg + rotationAngle;
//       const angleRad = currentAngleDeg * (Math.PI / 180);
//       const x = centerX + iconCircleRadius * Math.cos(angleRad);
//       const y = centerY + iconCircleRadius * Math.sin(angleRad);
//       positions.push({ left: `${x}px`, top: `${y}px` });
//     }
//     return positions;
//   }, [numItems, iconCircleRadius, layoutContainerWidth, layoutContainerHeight, iconStartAngleOffset, rotationAngle, isMobileView]);

//   const itemBaseSizeClass = "w-24 h-24";
//   const itemPaddingClass = "p-1.5";
//   const iconInButtonSizeClass = "h-8 w-8";
//   const iconInButtonMarginBottom = "mb-0.5"
//   const titleInButtonTextSizeClass = "text-[11px] leading-tight";
//   const centralTitleTextSizeClass = "text-base sm:text-lg";
//   const centralDescriptionTextSizeClass = "text-xs";
//   const centralDescriptionLineHeightClass = "leading-snug";
//   const buttonTransitionClasses = "transition-[transform,background-color,color,border-color] duration-300 ease-in-out";
//   const borderThicknessClass = "border-2";

//   const handleContainerMouseEnter = () => !isMobileView && setIsUserInteracting(true);
//   const handleContainerMouseLeave = () => {
//     if (!isMobileView) {
//       setIsUserInteracting(false);
//       setActiveNeed(defaultActiveItem);
//     }
//   };
//   const handleButtonMouseEnter = (item) => !isMobileView && setActiveNeed(item);

//   if (isMobileView) {
//     return (
//       <div className="py-12 px-4 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-start">
//         <div className="w-full max-w-md mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-8">
//             The Imperative of Azure Cloud Security
//           </h2>

//           <div className="space-y-4">
//             {securingNeedsData.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`p-5 rounded-xl shadow-lg text-left backdrop-blur-sm 
//                             hover:shadow-xl transition-shadow duration-300
//                             ${mobileBoxBackgrounds[index % mobileBoxBackgrounds.length]}`}
//               >
//                 <div className="flex items-center mb-3">
//                   <item.icon className="h-7 w-7 text-white mr-3 flex-shrink-0" />
//                   <h3 className="text-lg font-semibold text-white">
//                     {item.title}
//                   </h3>
//                 </div>
//                 <p className="text-sm text-slate-100 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- Desktop View (Circle Diagram) ---
//   return (
//     <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
//       <div className="w-full max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12">
//           The Imperative of Azure Cloud Security
//         </h2>

//         <div className="flex flex-col md:flex-row md:gap-6 lg:gap-10 items-center">
//           <div className="md:w-5/12 lg:w-1/2 flex justify-center items-center mb-8 md:mb-0">
//             <div
//               className="relative mx-auto cursor-default"
//               style={{
//                 width: `${layoutContainerWidth}px`,
//                 height: `${layoutContainerHeight}px`,
//               }}
//               onMouseEnter={handleContainerMouseEnter}
//               onMouseLeave={handleContainerMouseLeave}
//             >
//               {activeNeed && (
//                 <div
//                   className="absolute flex flex-col items-center justify-center text-center pointer-events-none"
//                   style={{
//                     top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
//                     width: `${centralTextMaxWidthPixels}px`, maxWidth: '90%', zIndex: 5,
//                   }}
//                 >
//                   <h3 className={`${centralTitleTextSizeClass} font-semibold mb-1 text-white`}>
//                     {activeNeed.title}
//                   </h3>
//                   <p className={`${centralDescriptionTextSizeClass} ${centralDescriptionLineHeightClass} text-slate-100`}>
//                     {activeNeed.description}
//                   </p>
//                 </div>
//               )}

//               {itemPositions && itemPositions.length > 0 && securingNeedsData.map((item, index) => {
//                 const isActive = activeNeed && activeNeed.id === item.id;
//                 const position = itemPositions[index];
//                 if (!position) return null;
//                 const borderColorClass = isActive ? 'border-white' : 'border-blue-300';
//                 return (
//                   <div
//                     key={item.id}
//                     onMouseEnter={() => handleButtonMouseEnter(item)}
//                     className={`absolute flex flex-col items-center justify-center
//                                 ${itemBaseSizeClass} ${itemPaddingClass} rounded-full shadow-xl
//                                 ${buttonTransitionClasses}
//                                 ${borderThicknessClass} ${borderColorClass}
//                                 focus:outline-none group cursor-pointer`}
//                     style={{
//                       left: position.left, top: position.top,
//                       backgroundColor: isActive ? 'rgb(59, 130, 246)' : '#FFFFFF',
//                       transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
//                       zIndex: isActive ? 15 : 10, boxSizing: 'border-box',
//                     }}
//                     title={item.title} role="button" tabIndex={0} onFocus={() => handleButtonMouseEnter(item)}
//                   >
//                     <item.icon
//                       className={`${iconInButtonSizeClass} ${iconInButtonMarginBottom} transition-colors duration-300
//                                  ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`}
//                     />
//                     <span
//                       className={`${titleInButtonTextSizeClass} font-medium text-center transition-colors duration-300
//                                  ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`}
//                     >
//                       {item.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           <div className="md:w-7/12 lg:w-1/2 text-left md:pl-6 lg:pl-10">
//             <h2 className="text-3xl font-bold text-white mb-4">
//               Needs Of Cloud Security
//             </h2>
//             <p className="text-lg text-gray-200">
//               Azure cloud security lies in protecting sensitive data, ensuring compliance, and maintaining business continuity. With increasing cyber threats, robust security measures in Azure help safeguard cloud infrastructure, applications, and workloads.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NeedOfSecuring;
// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import {
//   LockClosedIcon,
//   CalculatorIcon,
//   DocumentCheckIcon,
//   ShieldExclamationIcon,
//   ShieldCheckIcon,
//   BanknotesIcon,
//   CogIcon,
//   BuildingOfficeIcon,
// } from '@heroicons/react/24/outline';

// const securingNeedsData = [
//   { id: 'data_protection', icon: LockClosedIcon, title: 'Data Protection', description: 'Ensuring robust data protection mechanisms are in place to safeguard sensitive information from breaches and unauthorized access, maintaining confidentiality and integrity.' },
//   { id: 'cost_effective', icon: CalculatorIcon, title: 'Cost-Effective Security', description: 'Outsourcing Azure security services offers a cost-effective alternative to maintaining an in-house team. Benefit from advanced technologies and experienced experts without added training/infrastructure costs.' },
//   { id: 'compliance', icon: DocumentCheckIcon, title: 'Compliance & Regulatory', description: 'Meeting industry-specific compliance standards (e.g., GDPR, HIPAA, PCI-DSS) and regulatory obligations related to data security and privacy in the cloud.' },
//   { id: 'mitigating_risks', icon: ShieldExclamationIcon, title: 'Mitigating Risks', description: 'Proactively identifying and mitigating security risks to prevent financial losses, reputational damage, operational disruptions, and legal liabilities.' },
//   { id: 'business_ops', icon: ShieldCheckIcon, title: 'Protecting Business Operations', description: 'Ensuring the continuity and availability of critical business operations by protecting Azure infrastructure from cyber threats, downtime, and data loss.' },
//   { id: 'managing_costs', icon: BanknotesIcon, title: 'Managing Overall Costs', description: 'Optimizing security spending by implementing efficient security measures and avoiding the high costs associated with security incidents, recovery, and fines.' },
//   { id: 'proper_config', icon: CogIcon, title: 'Ensuring Proper Configuration', description: 'Properly configuring Azure cloud resources with appropriate security settings prevents misconfigurations that could expose the environment to significant risks and vulnerabilities.' },
//   { id: 'org_goals', icon: BuildingOfficeIcon, title: 'Supporting Organizational Goals', description: 'A secure Azure environment enables innovation and scalability, allowing organizations to confidently adopt new technologies, expand services, and grow their infrastructure.' },
// ];

// const defaultActiveItem = securingNeedsData[0];
// const MOBILE_BREAKPOINT = 533; // Breakpoint for switching to box layout
// const TABLET_BREAKPOINT = 1024; // lg breakpoint in Tailwind, where the text column appears

// const mobileBoxBackgrounds = [
//   'bg-sky-600/70',
//   'bg-cyan-500/75',
//   'bg-teal-600/70',
//   'bg-blue-700/75',
//   'bg-indigo-600/70',
//   'bg-violet-500/75',
//   'bg-purple-600/70',
//   'bg-fuchsia-500/75'
// ];


// const NeedOfSecuring = () => {
//   const [activeNeed, setActiveNeed] = useState(defaultActiveItem);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [isUserInteracting, setIsUserInteracting] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [isTabletView, setIsTabletView] = useState(false); // To hide text block on tablet
//   const numItems = securingNeedsData.length;
//   const animationFrameId = useRef(null);

//   const itemDiameter = 96;
//   const itemRadius = itemDiameter / 2;
//   const centralTextMaxWidthPixels = 320;
//   const centralTextPadding = 18;
//   const iconStartAngleOffset = -90;
//   const baseRotationSpeed = 0.5;

//   const iconCircleRadius = useMemo(() =>
//     (centralTextMaxWidthPixels / 2) + centralTextPadding + itemRadius,
//     [centralTextMaxWidthPixels, centralTextPadding, itemRadius]
//   );

//   const layoutContainerDiameter = useMemo(() =>
//     2 * (iconCircleRadius + itemRadius),
//     [iconCircleRadius, itemRadius]
//   );
//   const layoutContainerWidth = layoutContainerDiameter;
//   const layoutContainerHeight = layoutContainerDiameter;

//   useEffect(() => {
//     const handleResize = () => {
//       const currentWidth = window.innerWidth;
//       setIsMobileView(currentWidth < MOBILE_BREAKPOINT);
//       // The text block should only show on "lg" (1024px) and up
//       // So, if it's less than TABLET_BREAKPOINT, it's considered "tablet" or smaller for this purpose
//       setIsTabletView(currentWidth < TABLET_BREAKPOINT);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobileView) { // Circle animation is also off for tablet if we consider it "mobile" for animation
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//       return;
//     }
//     let lastTime = 0;
//     const animate = (timestamp) => {
//       if (!lastTime) lastTime = timestamp;
//       const deltaTime = timestamp - lastTime;
//       const currentSpeed = isUserInteracting ? 0 : baseRotationSpeed;
//       const actualRotationSpeed = currentSpeed * (deltaTime / (1000 / 60));
//       if (currentSpeed > 0) {
//         setRotationAngle(prevAngle => (prevAngle + actualRotationSpeed) % 360);
//       }
//       lastTime = timestamp;
//       animationFrameId.current = requestAnimationFrame(animate);
//     };
//     animationFrameId.current = requestAnimationFrame(animate);
//     return () => {
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//     };
//   }, [baseRotationSpeed, isUserInteracting, isMobileView]); // isMobileView also controls animation

//   const itemPositions = useMemo(() => {
//     if (isMobileView) return []; // No circle positions for mobile box view
//     const positions = [];
//     if (numItems === 0) return positions;
//     const centerX = layoutContainerWidth / 2;
//     const centerY = layoutContainerHeight / 2;
//     for (let i = 0; i < numItems; i++) {
//       const baseAngleDeg = (i / numItems) * 360 + iconStartAngleOffset;
//       const currentAngleDeg = baseAngleDeg + rotationAngle;
//       const angleRad = currentAngleDeg * (Math.PI / 180);
//       const x = centerX + iconCircleRadius * Math.cos(angleRad);
//       const y = centerY + iconCircleRadius * Math.sin(angleRad);
//       positions.push({ left: `${x}px`, top: `${y}px` });
//     }
//     return positions;
//   }, [numItems, iconCircleRadius, layoutContainerWidth, layoutContainerHeight, iconStartAngleOffset, rotationAngle, isMobileView]);

//   const itemBaseSizeClass = "w-24 h-24";
//   const itemPaddingClass = "p-1.5";
//   const iconInButtonSizeClass = "h-8 w-8";
//   const iconInButtonMarginBottom = "mb-0.5"
//   const titleInButtonTextSizeClass = "text-[11px] leading-tight";
//   const centralTitleTextSizeClass = "text-base sm:text-lg";
//   const centralDescriptionTextSizeClass = "text-xs";
//   const centralDescriptionLineHeightClass = "leading-snug";
//   const buttonTransitionClasses = "transition-[transform,background-color,color,border-color] duration-300 ease-in-out";
//   const borderThicknessClass = "border-2";

//   const handleContainerMouseEnter = () => !isMobileView && setIsUserInteracting(true);
//   const handleContainerMouseLeave = () => {
//     if (!isMobileView) {
//       setIsUserInteracting(false);
//       setActiveNeed(defaultActiveItem);
//     }
//   };
//   const handleButtonMouseEnter = (item) => !isMobileView && setActiveNeed(item);

//   if (isMobileView) { // This is for screens < MOBILE_BREAKPOINT (533px)
//     return (
//       <div className="py-12 px-4 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-start">
//         <div className="w-full max-w-md mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-8">
//             The Imperative of Azure Cloud Security
//           </h2>

//           <div className="space-y-4">
//             {securingNeedsData.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`p-5 rounded-xl shadow-lg text-left backdrop-blur-sm
//                             hover:shadow-xl hover:scale-[1.02] transition-all duration-300
//                             ${mobileBoxBackgrounds[index % mobileBoxBackgrounds.length]}`}
//               >
//                 <div className="flex items-center mb-3">
//                   <item.icon className="h-7 w-7 text-white mr-3 flex-shrink-0" />
//                   <h3 className="text-lg font-semibold text-white">
//                     {item.title}
//                   </h3>
//                 </div>
//                 <p className="text-sm text-slate-100 leading-relaxed">
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- Desktop and Tablet View (Circle Diagram) ---
//   // For screens >= MOBILE_BREAKPOINT (533px)
//   return (
//     <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
//       <div className="w-full max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12">
//           The Imperative of Azure Cloud Security
//         </h2>

//         {/* The flex container for circle and text block */}
//         {/* On screens smaller than 'lg' (TABLET_BREAKPOINT), make the circle take full width */}
//         <div className={`flex flex-col items-center 
//                          lg:flex-row lg:gap-10`}>

//           {/* Circle Diagram Container */}
//           {/* On screens smaller than 'lg', center it. On 'lg' and up, it's part of the flex row. */}
//           <div className={`flex justify-center items-center mb-8 
//                            lg:w-1/2 lg:mb-0`}>
//             <div
//               className="relative mx-auto cursor-default"
//               style={{
//                 width: `${layoutContainerWidth}px`,
//                 height: `${layoutContainerHeight}px`,
//               }}
//               onMouseEnter={handleContainerMouseEnter}
//               onMouseLeave={handleContainerMouseLeave}
//             >
//               {activeNeed && (
//                 <div
//                   className="absolute flex flex-col items-center justify-center text-center pointer-events-none"
//                   style={{
//                     top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
//                     width: `${centralTextMaxWidthPixels}px`, maxWidth: '90%', zIndex: 5,
//                   }}
//                 >
//                   <h3 className={`${centralTitleTextSizeClass} font-semibold mb-1 text-white`}>
//                     {activeNeed.title}
//                   </h3>
//                   <p className={`${centralDescriptionTextSizeClass} ${centralDescriptionLineHeightClass} text-slate-100`}>
//                     {activeNeed.description}
//                   </p>
//                 </div>
//               )}

//               {itemPositions && itemPositions.length > 0 && securingNeedsData.map((item, index) => {
//                 const isActive = activeNeed && activeNeed.id === item.id;
//                 const position = itemPositions[index];
//                 if (!position) return null;
//                 const borderColorClass = isActive ? 'border-white' : 'border-blue-300';
//                 return (
//                   <div
//                     key={item.id}
//                     onMouseEnter={() => handleButtonMouseEnter(item)}
//                     className={`absolute flex flex-col items-center justify-center
//                                 ${itemBaseSizeClass} ${itemPaddingClass} rounded-full shadow-xl
//                                 ${buttonTransitionClasses}
//                                 ${borderThicknessClass} ${borderColorClass}
//                                 focus:outline-none group cursor-pointer`}
//                     style={{
//                       left: position.left, top: position.top,
//                       backgroundColor: isActive ? 'rgb(59, 130, 246)' : '#FFFFFF',
//                       transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
//                       zIndex: isActive ? 15 : 10, boxSizing: 'border-box',
//                     }}
//                     title={item.title} role="button" tabIndex={0} onFocus={() => handleButtonMouseEnter(item)}
//                   >
//                     <item.icon
//                       className={`${iconInButtonSizeClass} ${iconInButtonMarginBottom} transition-colors duration-300
//                                  ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`}
//                     />
//                     <span
//                       className={`${titleInButtonTextSizeClass} font-medium text-center transition-colors duration-300
//                                  ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`}
//                     >
//                       {item.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Text Block: "Needs Of Cloud Security" */}
//           {/* This block will only be visible if NOT isTabletView (i.e., screen width >= TABLET_BREAKPOINT) */}
//           {!isTabletView && (
//             <div className="lg:w-1/2 text-left lg:pl-10"> {/* Ensure it takes appropriate width on lg screens */}
//               <h2 className="text-3xl font-bold text-white mb-4">
//                 Needs Of Cloud Security
//               </h2>
//               <p className="text-lg text-gray-200">
//                 Azure cloud security lies in protecting sensitive data, ensuring compliance, and maintaining business continuity. With increasing cyber threats, robust security measures in Azure help safeguard cloud infrastructure, applications, and workloads.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NeedOfSecuring;

// import React, { useState, useMemo, useEffect, useRef } from 'react';
// import {
//   LockClosedIcon,
//   CalculatorIcon, // <--- MAKE SURE THIS IS PRESENT AND SPELLED CORRECTLY
//   DocumentCheckIcon,
//   ShieldExclamationIcon,
//   ShieldCheckIcon,
//   BanknotesIcon,
//   CogIcon,
//   BuildingOfficeIcon,
// } from '@heroicons/react/24/outline';

// const securingNeedsData = [
//   // ... your data
//   { id: 'data_protection', icon: LockClosedIcon, title: 'Data Protection', description: 'Ensuring robust data protection mechanisms are in place to safeguard sensitive information from breaches and unauthorized access, maintaining confidentiality and integrity.' },
//   { id: 'cost_effective', icon: CalculatorIcon, title: 'Cost-Effective Security', description: 'Outsourcing Azure security services offers a cost-effective alternative to maintaining an in-house team. Benefit from advanced technologies and experienced experts without added training/infrastructure costs.' },
//   { id: 'compliance', icon: DocumentCheckIcon, title: 'Compliance & Regulatory', description: 'Meeting industry-specific compliance standards (e.g., GDPR, HIPAA, PCI-DSS) and regulatory obligations related to data security and privacy in the cloud.' },
//   { id: 'mitigating_risks', icon: ShieldExclamationIcon, title: 'Mitigating Risks', description: 'Proactively identifying and mitigating security risks to prevent financial losses, reputational damage, operational disruptions, and legal liabilities.' },
//   { id: 'business_ops', icon: ShieldCheckIcon, title: 'Protecting Business Operations', description: 'Ensuring the continuity and availability of critical business operations by protecting Azure infrastructure from cyber threats, downtime, and data loss.' },
//   { id: 'managing_costs', icon: BanknotesIcon, title: 'Managing Overall Costs', description: 'Optimizing security spending by implementing efficient security measures and avoiding the high costs associated with security incidents, recovery, and fines.' },
//   { id: 'proper_config', icon: CogIcon, title: 'Ensuring Proper Configuration', description: 'Properly configuring Azure cloud resources with appropriate security settings prevents misconfigurations that could expose the environment to significant risks and vulnerabilities.' },
//   { id: 'org_goals', icon: BuildingOfficeIcon, title: 'Supporting Organizational Goals', description: 'A secure Azure environment enables innovation and scalability, allowing organizations to confidently adopt new technologies, expand services, and grow their infrastructure.' },
// ];

// const defaultActiveItem = securingNeedsData[0];
// const MOBILE_BREAKPOINT = 533;
// const TABLET_BREAKPOINT = 1024;

// const mobileBoxBackgrounds = [
//   // ... your backgrounds
//   'bg-sky-600/70',
//   'bg-cyan-500/75',
//   'bg-teal-600/70',
//   'bg-blue-700/75',
//   'bg-indigo-600/70',
//   'bg-violet-500/75',
//   'bg-purple-600/70',
//   'bg-fuchsia-500/75'
// ];

// const NeedOfSecuring = () => {
//   // ... (state, effects, and other logic remain the same)
//   const [activeNeed, setActiveNeed] = useState(defaultActiveItem);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [isUserInteracting, setIsUserInteracting] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [isTabletView, setIsTabletView] = useState(false);
//   const numItems = securingNeedsData.length;
//   const animationFrameId = useRef(null);

//   const itemDiameter = 96;
//   const itemRadius = itemDiameter / 2;
//   const centralTextMaxWidthPixels = 320;
//   const centralTextPadding = 18;
//   const iconStartAngleOffset = -90;
//   const baseRotationSpeed = 0.5;

//   const iconCircleRadius = useMemo(() =>
//     (centralTextMaxWidthPixels / 2) + centralTextPadding + itemRadius,
//     [centralTextMaxWidthPixels, centralTextPadding, itemRadius]
//   );

//   const layoutContainerDiameter = useMemo(() =>
//     2 * (iconCircleRadius + itemRadius),
//     [iconCircleRadius, itemRadius]
//   );
//   const layoutContainerWidth = layoutContainerDiameter;
//   const layoutContainerHeight = layoutContainerDiameter;

//   useEffect(() => {
//     const handleResize = () => {
//       const currentWidth = window.innerWidth;
//       setIsMobileView(currentWidth < MOBILE_BREAKPOINT);
//       setIsTabletView(currentWidth < TABLET_BREAKPOINT);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobileView) { 
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//       return;
//     }
//     let lastTime = 0;
//     const animate = (timestamp) => {
//       if (!lastTime) lastTime = timestamp;
//       const deltaTime = timestamp - lastTime;
//       const currentSpeed = isUserInteracting ? 0 : baseRotationSpeed;
//       const actualRotationSpeed = currentSpeed * (deltaTime / (1000 / 60));
//       if (currentSpeed > 0) {
//         setRotationAngle(prevAngle => (prevAngle + actualRotationSpeed) % 360);
//       }
//       lastTime = timestamp;
//       animationFrameId.current = requestAnimationFrame(animate);
//     };
//     animationFrameId.current = requestAnimationFrame(animate);
//     return () => {
//       if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
//     };
//   }, [baseRotationSpeed, isUserInteracting, isMobileView]); 

//   const itemPositions = useMemo(() => {
//     if (isMobileView) return []; 
//     const positions = [];
//     if (numItems === 0) return positions;
//     const centerX = layoutContainerWidth / 2;
//     const centerY = layoutContainerHeight / 2;
//     for (let i = 0; i < numItems; i++) {
//       const baseAngleDeg = (i / numItems) * 360 + iconStartAngleOffset;
//       const currentAngleDeg = baseAngleDeg + rotationAngle;
//       const angleRad = currentAngleDeg * (Math.PI / 180);
//       const x = centerX + iconCircleRadius * Math.cos(angleRad);
//       const y = centerY + iconCircleRadius * Math.sin(angleRad);
//       positions.push({ left: `${x}px`, top: `${y}px` });
//     }
//     return positions;
//   }, [numItems, iconCircleRadius, layoutContainerWidth, layoutContainerHeight, iconStartAngleOffset, rotationAngle, isMobileView]);

//   const itemBaseSizeClass = "w-24 h-24"; 
//   const itemPaddingClass = "p-1.5";
//   const iconInButtonSizeClass = "h-8 w-8"; 
//   const iconInButtonMarginBottom = "mb-0.5"
//   const titleInButtonTextSizeClass = "text-[11px] leading-tight"; 
//   const centralTitleTextSizeClass = "text-base sm:text-lg";
//   const centralDescriptionTextSizeClass = "text-xs";
//   const centralDescriptionLineHeightClass = "leading-snug";
//   const buttonTransitionClasses = "transition-[transform,background-color,color,border-color] duration-300 ease-in-out";
//   const borderThicknessClass = "border-2";

//   const handleContainerMouseEnter = () => !isMobileView && setIsUserInteracting(true);
//   const handleContainerMouseLeave = () => {
//     if (!isMobileView) {
//       setIsUserInteracting(false);
//       setActiveNeed(defaultActiveItem);
//     }
//   };
//   const handleButtonMouseEnter = (item) => !isMobileView && setActiveNeed(item);


//   // MOBILE VIEW (< MOBILE_BREAKPOINT)
//   if (isMobileView) {
//     // Determine a fixed height for 320px. Example: 8rem (128px) or 9rem (144px)
//     // This height needs to accommodate the icon, title, and X lines of description.
//     const baseCardHeight = 'h-36'; // Approx 9rem or 144px. Adjust this!
//     const baseDescriptionLineClamp = 'line-clamp-3'; // Show 3 lines of description

//     return (
//       <div className="py-12 px-4 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-start">
//         <div className="w-full max-w-md mx-auto text-center">
//           <h2 className="text-2xl font-bold mb-8">
//             The Imperative of Azure Cloud Security
//           </h2>

//           <div className="space-y-3 sm:space-y-4"> {/* Slightly reduced base space-y */}
//             {securingNeedsData.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`p-3 rounded-lg shadow-lg text-left backdrop-blur-sm
//                             hover:shadow-xl hover:scale-[1.02] transition-all duration-300
//                             flex flex-col 
//                             ${baseCardHeight}               /* Base: Fixed height */
//                             sm:h-auto sm:min-h-[11rem]    /* SM: Auto height with min-height */
//                             overflow-hidden                 /* Important for line-clamp */
//                             ${mobileBoxBackgrounds[index % mobileBoxBackgrounds.length]}`}
//               >
//                 <div className="flex items-center mb-2"> {/* Reduced mb */}
//                   <item.icon className="h-6 w-6 text-white mr-2 flex-shrink-0" /> {/* Smaller icon & margin */}
//                   <h3 className="text-base font-semibold text-white line-clamp-1"> {/* Title line-clamp-1 */}
//                     {item.title}
//                   </h3>
//                 </div>
//                 <p className={`text-xs text-slate-100 leading-snug 
//                                ${baseDescriptionLineClamp}  /* Base: Truncate description */
//                                sm:line-clamp-none         /* SM: Show full description */
//                              `}>
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- DESKTOP AND TABLET VIEW (Circle Diagram) ---
//   return (
//     <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
//       {/* ... Rest of your desktop/tablet layout code ... */}
//        <div className="w-full max-w-7xl mx-auto text-center">
//         <h2 className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12">
//           The Imperative of Azure Cloud Security
//         </h2>
//         <div className={`flex flex-col items-center lg:flex-row lg:gap-10`}>
//           <div className={`flex justify-center items-center mb-8 lg:w-1/2 lg:mb-0`}>
//             <div
//               className="relative mx-auto cursor-default"
//               style={{
//                 width: `${layoutContainerWidth}px`,
//                 height: `${layoutContainerHeight}px`,
//               }}
//               onMouseEnter={handleContainerMouseEnter}
//               onMouseLeave={handleContainerMouseLeave}
//             >
//               {activeNeed && (
//                 <div
//                   className="absolute flex flex-col items-center justify-center text-center pointer-events-none"
//                   style={{
//                     top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
//                     width: `${centralTextMaxWidthPixels}px`, maxWidth: '90%', zIndex: 5,
//                   }}
//                 >
//                   <h3 className={`${centralTitleTextSizeClass} font-semibold mb-1 text-white`}>
//                     {activeNeed.title}
//                   </h3>
//                   <p className={`${centralDescriptionTextSizeClass} ${centralDescriptionLineHeightClass} text-slate-100`}>
//                     {activeNeed.description}
//                   </p>
//                 </div>
//               )}

//               {itemPositions && itemPositions.length > 0 && securingNeedsData.map((item, index) => {
//                 const isActive = activeNeed && activeNeed.id === item.id;
//                 const position = itemPositions[index];
//                 if (!position) return null;
//                 const borderColorClass = isActive ? 'border-white' : 'border-blue-300';
//                 return (
//                   <div
//                     key={item.id}
//                     onMouseEnter={() => handleButtonMouseEnter(item)}
//                     className={`absolute flex flex-col items-center justify-center
//                                 ${itemBaseSizeClass} ${itemPaddingClass} rounded-full shadow-xl
//                                 ${buttonTransitionClasses}
//                                 ${borderThicknessClass} ${borderColorClass}
//                                 focus:outline-none group cursor-pointer`}
//                     style={{
//                       left: position.left, top: position.top,
//                       backgroundColor: isActive ? 'rgb(59, 130, 246)' : '#FFFFFF',
//                       transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
//                       zIndex: isActive ? 15 : 10, boxSizing: 'border-box',
//                     }}
//                     title={item.title} role="button" tabIndex={0} onFocus={() => handleButtonMouseEnter(item)}
//                   >
//                     <item.icon
//                       className={`${iconInButtonSizeClass} ${iconInButtonMarginBottom} transition-colors duration-300
//                                  ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`}
//                     />
//                     <span
//                       className={`${titleInButtonTextSizeClass} font-medium text-center transition-colors duration-300
//                                  ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`}
//                     >
//                       {item.title}
//                     </span>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           {!isTabletView && (
//             <div className="lg:w-1/2 text-left lg:pl-10">
//               <h2 className="text-3xl font-bold text-white mb-4">
//                 Needs Of Cloud Security
//               </h2>
//               <p className="text-lg text-gray-200">
//                 Azure cloud security lies in protecting sensitive data, ensuring compliance, and maintaining business continuity. With increasing cyber threats, robust security measures in Azure help safeguard cloud infrastructure, applications, and workloads.
//               </p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NeedOfSecuring;

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion'; // 1. Import motion
import {
  LockClosedIcon,
  CalculatorIcon,
  DocumentCheckIcon,
  ShieldExclamationIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  CogIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const securingNeedsData = [
  { id: 'data_protection', icon: LockClosedIcon, title: 'Data Protection', description: 'Ensuring robust data protection mechanisms are in place to safeguard sensitive information from breaches and unauthorized access, maintaining confidentiality and integrity.' },
  { id: 'cost_effective', icon: CalculatorIcon, title: 'Cost-Effective Security', description: 'Outsourcing Azure security services offers a cost-effective alternative to maintaining an in-house team. Benefit from advanced technologies and experienced experts without added training/infrastructure costs.' },
  { id: 'compliance', icon: DocumentCheckIcon, title: 'Compliance & Regulatory', description: 'Meeting industry-specific compliance standards (e.g., GDPR, HIPAA, PCI-DSS) and regulatory obligations related to data security and privacy in the cloud.' },
  { id: 'mitigating_risks', icon: ShieldExclamationIcon, title: 'Mitigating Risks', description: 'Proactively identifying and mitigating security risks to prevent financial losses, reputational damage, operational disruptions, and legal liabilities.' },
  { id: 'business_ops', icon: ShieldCheckIcon, title: 'Protecting Business Operations', description: 'Ensuring the continuity and availability of critical business operations by protecting Azure infrastructure from cyber threats, downtime, and data loss.' },
  { id: 'managing_costs', icon: BanknotesIcon, title: 'Managing Overall Costs', description: 'Optimizing security spending by implementing efficient security measures and avoiding the high costs associated with security incidents, recovery, and fines.' },
  { id: 'proper_config', icon: CogIcon, title: 'Ensuring Proper Configuration', description: 'Properly configuring Azure cloud resources with appropriate security settings prevents misconfigurations that could expose the environment to significant risks and vulnerabilities.' },
  { id: 'org_goals', icon: BuildingOfficeIcon, title: 'Supporting Organizational Goals', description: 'A secure Azure environment enables innovation and scalability, allowing organizations to confidently adopt new technologies, expand services, and grow their infrastructure.' },
];

const defaultActiveItem = securingNeedsData[0];
const MOBILE_BREAKPOINT = 533;
const TABLET_BREAKPOINT = 1024;

const mobileBoxBackgrounds = [
  'bg-sky-600/70',
  'bg-cyan-500/75',
  'bg-teal-600/70',
  'bg-blue-700/75',
  'bg-indigo-600/70',
  'bg-violet-500/75',
  'bg-purple-600/70',
  'bg-fuchsia-500/75'
];

const NeedOfSecuring = () => {
  const [activeNeed, setActiveNeed] = useState(defaultActiveItem);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const numItems = securingNeedsData.length;
  const animationFrameId = useRef(null);

  const itemDiameter = 96;
  const itemRadius = itemDiameter / 2;
  const centralTextMaxWidthPixels = 320;
  const centralTextPadding = 18;
  const iconStartAngleOffset = -90;
  const baseRotationSpeed = 0.5;

  const iconCircleRadius = useMemo(() =>
    (centralTextMaxWidthPixels / 2) + centralTextPadding + itemRadius,
    [centralTextMaxWidthPixels, centralTextPadding, itemRadius]
  );

  const layoutContainerDiameter = useMemo(() =>
    2 * (iconCircleRadius + itemRadius),
    [iconCircleRadius, itemRadius]
  );
  const layoutContainerWidth = layoutContainerDiameter;
  const layoutContainerHeight = layoutContainerDiameter;

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setIsMobileView(currentWidth < MOBILE_BREAKPOINT);
      setIsTabletView(currentWidth < TABLET_BREAKPOINT);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobileView) {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
      return;
    }
    let lastTime = 0;
    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      const currentSpeed = isUserInteracting ? 0 : baseRotationSpeed;
      const actualRotationSpeed = currentSpeed * (deltaTime / (1000 / 60));
      if (currentSpeed > 0) {
        setRotationAngle(prevAngle => (prevAngle + actualRotationSpeed) % 360);
      }
      lastTime = timestamp;
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [baseRotationSpeed, isUserInteracting, isMobileView]);

  const itemPositions = useMemo(() => {
    if (isMobileView) return [];
    const positions = [];
    if (numItems === 0) return positions;
    const centerX = layoutContainerWidth / 2;
    const centerY = layoutContainerHeight / 2;
    for (let i = 0; i < numItems; i++) {
      const baseAngleDeg = (i / numItems) * 360 + iconStartAngleOffset;
      const currentAngleDeg = baseAngleDeg + rotationAngle;
      const angleRad = currentAngleDeg * (Math.PI / 180);
      const x = centerX + iconCircleRadius * Math.cos(angleRad);
      const y = centerY + iconCircleRadius * Math.sin(angleRad);
      positions.push({ left: `${x}px`, top: `${y}px` });
    }
    return positions;
  }, [numItems, iconCircleRadius, layoutContainerWidth, layoutContainerHeight, iconStartAngleOffset, rotationAngle, isMobileView]);

  const itemBaseSizeClass = "w-24 h-24";
  const itemPaddingClass = "p-1.5";
  const iconInButtonSizeClass = "h-8 w-8";
  const iconInButtonMarginBottom = "mb-0.5"
  const titleInButtonTextSizeClass = "text-[11px] leading-tight";
  const centralTitleTextSizeClass = "text-base sm:text-lg";
  const centralDescriptionTextSizeClass = "text-xs";
  const centralDescriptionLineHeightClass = "leading-snug";
  const buttonTransitionClasses = "transition-[transform,background-color,color,border-color] duration-300 ease-in-out";
  const borderThicknessClass = "border-2";

  const handleContainerMouseEnter = () => !isMobileView && setIsUserInteracting(true);
  const handleContainerMouseLeave = () => {
    if (!isMobileView) {
      setIsUserInteracting(false);
      setActiveNeed(defaultActiveItem);
    }
  };
  const handleButtonMouseEnter = (item) => !isMobileView && setActiveNeed(item);

  // 2. Define animation variants for text content
  const textContentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // MOBILE VIEW (< MOBILE_BREAKPOINT)
  if (isMobileView) {
    const baseCardHeight = 'h-36';
    const baseDescriptionLineClamp = 'line-clamp-3';

    return (
      <div className="py-12 px-4 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-start overflow-hidden"> {/* Added overflow-hidden */}
        <div className="w-full max-w-md mx-auto text-center">
          {/* 3. Apply motion to mobile heading */}
          <motion.h2
            className="text-2xl font-bold mb-8"
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1} // Stagger delay
          >
            The Imperative of Azure Cloud Security
          </motion.h2>

          <div className="space-y-3 sm:space-y-4">
            {securingNeedsData.map((item, index) => (
              <div
                key={item.id}
                className={`p-3 rounded-lg shadow-lg text-left backdrop-blur-sm
                            hover:shadow-xl hover:scale-[1.02] transition-all duration-300
                            flex flex-col 
                            ${baseCardHeight}
                            sm:h-auto sm:min-h-[11rem]
                            overflow-hidden
                            ${mobileBoxBackgrounds[index % mobileBoxBackgrounds.length]}`}
              >
                <div className="flex items-center mb-2">
                  <item.icon className="h-6 w-6 text-white mr-2 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-white line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                <p className={`text-xs text-slate-100 leading-snug 
                               ${baseDescriptionLineClamp}
                               sm:line-clamp-none
                             `}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- DESKTOP AND TABLET VIEW (Circle Diagram) ---
  return (
    <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden"> {/* Added overflow-hidden */}
       <div className="w-full max-w-7xl mx-auto text-center">
        {/* 4. Apply motion to desktop/tablet main heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12"
          variants={textContentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          custom={0.1} // Stagger delay
        >
          The Imperative of Azure Cloud Security
        </motion.h2>
        <div className={`flex flex-col items-center lg:flex-row lg:gap-10`}>
          <div className={`flex justify-center items-center mb-8 lg:w-1/2 lg:mb-0`}>
            <div
              className="relative mx-auto cursor-default"
              style={{
                width: `${layoutContainerWidth}px`,
                height: `${layoutContainerHeight}px`,
              }}
              onMouseEnter={handleContainerMouseEnter}
              onMouseLeave={handleContainerMouseLeave}
            >
              {activeNeed && (
                <div
                  className="absolute flex flex-col items-center justify-center text-center pointer-events-none"
                  style={{
                    top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: `${centralTextMaxWidthPixels}px`, maxWidth: '90%', zIndex: 5,
                  }}
                >
                  <h3 className={`${centralTitleTextSizeClass} font-semibold mb-1 text-white`}>
                    {activeNeed.title}
                  </h3>
                  <p className={`${centralDescriptionTextSizeClass} ${centralDescriptionLineHeightClass} text-slate-100`}>
                    {activeNeed.description}
                  </p>
                </div>
              )}

              {itemPositions && itemPositions.length > 0 && securingNeedsData.map((item, index) => {
                const isActive = activeNeed && activeNeed.id === item.id;
                const position = itemPositions[index];
                if (!position) return null;
                const borderColorClass = isActive ? 'border-white' : 'border-blue-300';
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => handleButtonMouseEnter(item)}
                    className={`absolute flex flex-col items-center justify-center
                                ${itemBaseSizeClass} ${itemPaddingClass} rounded-full shadow-xl
                                ${buttonTransitionClasses}
                                ${borderThicknessClass} ${borderColorClass}
                                focus:outline-none group cursor-pointer`}
                    style={{
                      left: position.left, top: position.top,
                      backgroundColor: isActive ? 'rgb(59, 130, 246)' : '#FFFFFF',
                      transform: `translate(-50%, -50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                      zIndex: isActive ? 15 : 10, boxSizing: 'border-box',
                    }}
                    title={item.title} role="button" tabIndex={0} onFocus={() => handleButtonMouseEnter(item)}
                  >
                    <item.icon
                      className={`${iconInButtonSizeClass} ${iconInButtonMarginBottom} transition-colors duration-300
                                 ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`}
                    />
                    <span
                      className={`${titleInButtonTextSizeClass} font-medium text-center transition-colors duration-300
                                 ${isActive ? 'text-white' : 'text-blue-600 group-hover:text-blue-700'}`}
                    >
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          {!isTabletView && (
            <div className="lg:w-1/2 text-left lg:pl-10">
              {/* 5. Apply motion to desktop right-side heading */}
              <motion.h2
                className="text-3xl font-bold text-white mb-4"
                variants={textContentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.2} // Stagger delay
              >
                Needs Of Cloud Security
              </motion.h2>
              {/* 6. Apply motion to desktop right-side paragraph */}
              <motion.p
                className="text-lg text-gray-200"
                variants={textContentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={0.3} // Stagger delay
              >
                Azure cloud security lies in protecting sensitive data, ensuring compliance, and maintaining business continuity. With increasing cyber threats, robust security measures in Azure help safeguard cloud infrastructure, applications, and workloads.
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeedOfSecuring;