// // src/components/InteractiveCircleDiagram.jsx
// import { useState } from 'react';
// import React from 'react';
// import {
//   MagnifyingGlassIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, BugAntIcon,
//   EyeIcon, CheckCircleIcon, MapIcon, CpuChipIcon
// } from '@heroicons/react/24/outline';

// const testingStepsData = [
//   // ... (testingStepsData remains the same)
//   { id: 'recon', icon: MagnifyingGlassIcon, title: 'Reconnaissance and Enumeration', shortTitle: 'Reconnaissance & Enumeration', description: 'Gather initial information about the Azure environment and identify active services and potential targets.', bgColor: 'bg-sky-500' },
//   { id: 'mitigation', icon: ShieldCheckIcon, title: 'Strategic Mitigation', shortTitle: 'Strategic Mitigation', description: 'Provide recommendations and strategies to address and mitigate the identified vulnerabilities.', bgColor: 'bg-purple-500' },
//   { id: 'scoping', icon: AdjustmentsHorizontalIcon, title: 'Azure Scoping', shortTitle: 'Azure Scoping', description: 'Define the scope of the penetration test, including the Azure resources and services to be tested.', bgColor: 'bg-indigo-600' },
//   { id: 'post_exploitation', icon: BugAntIcon, title: 'Post Exploitation', shortTitle: 'Post Exploitation', description: 'Explore the extent of access gained and the potential for further exploitation.', bgColor: 'bg-green-500' },
//   { id: 'vuln_identification', icon: EyeIcon, title: 'Vulnerability Identification', shortTitle: 'Vulnerability Identification', description: 'Utilize various techniques to identify security weaknesses and vulnerabilities in the Azure setup.', bgColor: 'bg-pink-500' },
//   { id: 'patch_verification', icon: CheckCircleIcon, title: 'Patch Verification', shortTitle: 'Patch Verification', description: 'Verify that patches and remediation efforts have been effectively applied and are functioning as intended.', bgColor: 'bg-lime-500' },
//   { id: 'mapping', icon: MapIcon, title: 'Mapping & Service Identification', shortTitle: 'Mapping & Service ID', description: 'Identify and map the services and components within the Azure environment.', bgColor: 'bg-orange-500' },
//   { id: 'analysis', icon: CpuChipIcon, title: 'Vulnerability Analysis', shortTitle: 'Vulnerability Analysis', description: 'Analyze the identified vulnerabilities to assess their impact and exploitability.', bgColor: 'bg-violet-500' },
// ];

// const InteractiveCircleDiagram = () => {
//   const [activeStep, setActiveStep] = useState(testingStepsData[1]);

//   const handleStepClick = (step) => {
//     setActiveStep(step);
//   };

//   const diagramRadius = 260;
//   const itemDiameter = 112;
//   const centralCircleDiameter = 300;
//   const diagramContainerSize = (diagramRadius * 2) + itemDiameter;

//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
//         <div className="lg:col-span-4 ml-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Our Azure Penetration Testing Process
//           </h2>
//           <p className="text-lg text-gray-700">
//             Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
//           </p>
//         </div>

//         <div className="lg:col-span-8 flex justify-center items-center min-h-[36rem] sm:min-h-[42rem]">
//           <div
//             className="relative"
//             style={{
//               width: `${diagramContainerSize}px`,
//               height: `${diagramContainerSize}px`,
//             }}
//           >
//             {/* Central Display Area - Added more prominent shadow */}
//             <div
//               className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                           rounded-full bg-gradient-to-br from-slate-50 to-gray-100 
//                           shadow-2xl  // <--- INCREASED SHADOW for central circle
//                           flex flex-col justify-center items-center text-center p-6
//                           ring-8 ring-white ring-opacity-60`}
//               style={{
//                 width: `${centralCircleDiameter}px`,
//                 height: `${centralCircleDiameter}px`,
//               }}
//             >
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 px-2">
//                   {activeStep.title}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-3">
//                   {activeStep.description}
//                 </p>
//               </div>
//             </div>

//             {/* Outer Orbiting Circles - Adjusted shadows */}
//             {testingStepsData.map((step, index) => {
//               const angleOffset = - (1 * (2 * Math.PI / testingStepsData.length));
//               const angle = (index / testingStepsData.length) * 2 * Math.PI - (Math.PI / 2) + angleOffset;
//               const x = Math.cos(angle) * diagramRadius;
//               const y = Math.sin(angle) * diagramRadius;
//               const isActive = activeStep.id === step.id;

//               return (
//                 <button
//                   key={step.id}
//                   onClick={() => handleStepClick(step)}
//                   className={`
//                     absolute p-2 rounded-full text-white
//                     flex flex-col items-center justify-center text-center
//                     focus:outline-none 
//                     transition-all duration-300 ease-in-out
//                     ${step.bgColor}
//                     ${isActive
//                       ? 'scale-105 shadow-2xl ring-4 ring-offset-2 ring-white' // Active: shadow-2xl
//                       : 'shadow-lg hover:scale-110 hover:shadow-2xl' // Non-active base: shadow-lg, Hover: shadow-2xl
//                     }
//                   `}
//                   style={{
//                     width: `${itemDiameter}px`,
//                     height: `${itemDiameter}px`,
//                     top: '50%',
//                     left: '50%',
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                     opacity: 1,
//                   }}
//                 >
//                   <step.icon className="h-7 w-7 mb-1" />
//                   <span className="text-[10px] font-medium leading-tight px-1">
//                     {step.shortTitle}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveCircleDiagram;

// src/components/InteractiveCircleDiagram.jsx
// 
// import { useState, useEffect } from 'react';
// import React from 'react';
// import {
//   MagnifyingGlassIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, BugAntIcon,
//   EyeIcon, CheckCircleIcon, MapIcon, CpuChipIcon
// } from '@heroicons/react/24/outline';

// const testingStepsData = [
//   // ... (your testingStepsData remains the same)
//   { id: 'recon', icon: MagnifyingGlassIcon, title: 'Reconnaissance and Enumeration', shortTitle: 'Reconnaissance & Enumeration', description: 'Gather initial information about the Azure environment and identify active services and potential targets.', bgColor: 'bg-sky-500' },
//   { id: 'mitigation', icon: ShieldCheckIcon, title: 'Strategic Mitigation', shortTitle: 'Strategic Mitigation', description: 'Provide recommendations and strategies to address and mitigate the identified vulnerabilities.', bgColor: 'bg-purple-500' },
//   { id: 'scoping', icon: AdjustmentsHorizontalIcon, title: 'Azure Scoping', shortTitle: 'Azure Scoping', description: 'Define the scope of the penetration test, including the Azure resources and services to be tested.', bgColor: 'bg-indigo-600' },
//   { id: 'post_exploitation', icon: BugAntIcon, title: 'Post Exploitation', shortTitle: 'Post Exploitation', description: 'Explore the extent of access gained and the potential for further exploitation.', bgColor: 'bg-green-500' },
//   { id: 'vuln_identification', icon: EyeIcon, title: 'Vulnerability Identification', shortTitle: 'Vulnerability Identification', description: 'Utilize various techniques to identify security weaknesses and vulnerabilities in the Azure setup.', bgColor: 'bg-pink-500' },
//   { id: 'patch_verification', icon: CheckCircleIcon, title: 'Patch Verification', shortTitle: 'Patch Verification', description: 'Verify that patches and remediation efforts have been effectively applied and are functioning as intended.', bgColor: 'bg-lime-500' },
//   { id: 'mapping', icon: MapIcon, title: 'Mapping & Service Identification', shortTitle: 'Mapping & Service ID', description: 'Identify and map the services and components within the Azure environment.', bgColor: 'bg-orange-500' },
//   { id: 'analysis', icon: CpuChipIcon, title: 'Vulnerability Analysis', shortTitle: 'Vulnerability Analysis', description: 'Analyze the identified vulnerabilities to assess their impact and exploitability.', bgColor: 'bg-violet-500' },
// ];

// const InteractiveCircleDiagram = () => {
//   const [activeStep, setActiveStep] = useState(testingStepsData[1]);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const MOBILE_VIEW_BREAKPOINT = 680; // Your existing breakpoint

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [MOBILE_VIEW_BREAKPOINT]); // Added dependency

//   const handleStepClick = (step) => {
//     setActiveStep(step);
//   };

//   // --- Desktop View Constants ---
//   const diagramRadius = 260;
//   const itemDiameter = 112;
//   const centralCircleDiameter = 300;
//   const diagramContainerSize = (diagramRadius * 2) + itemDiameter;


//   if (isMobileView) {
//     // Define base styles for the narrowest view (e.g., 320px)
//     // Adjust h-20 (5rem or 80px) as needed based on your content for 320px
//     const baseListItemHeight = "h-20"; // Fixed height for 320px
//     const baseTitleLineClamp = "line-clamp-2"; // Max 2 lines for title at 320px

//     return (
//       <div className="py-12 px-4 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-2xl font-bold text-gray-900 mb-3">
//               Our Azure Penetration Testing Process
//             </h2>
//             <p className="text-md text-gray-700">
//               Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
//             </p>
//           </div>

//           <div className="mb-10 p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl text-center">
//             <div className="flex justify-center items-center mb-3">
//                {/* Ensure activeStep.icon is valid before rendering */}
//               {activeStep && activeStep.icon && (
//                 <activeStep.icon className={`h-10 w-10 ${activeStep.bgColor ? activeStep.bgColor.replace('bg-', 'text-') : 'text-gray-500'} rounded-full p-2 mr-3`} />
//               )}
//               <h3 className="text-xl font-semibold text-gray-800">
//                 {activeStep?.title || 'Select a Step'}
//               </h3>
//             </div>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               {activeStep?.description || 'Details will appear here.'}
//             </p>
//           </div>

//           <div className="space-y-3 sm:space-y-4"> {/* Base space-y-3, sm:space-y-4 */}
//             {testingStepsData.map((step) => (
//               <button
//                 key={step.id}
//                 onClick={() => handleStepClick(step)}
//                 className={`
//                   w-full p-3 sm:p-4 rounded-md sm:rounded-lg text-white /* Base p-3, sm:p-4 */
//                   flex items-center text-left 
//                   focus:outline-none transition-all duration-300 ease-in-out
//                   overflow-hidden /* Crucial for line-clamp */
//                   ${step.bgColor}
//                   ${baseListItemHeight} /* Fixed height for <sm (e.g., 320px) */
//                   sm:h-auto          /* Auto height for sm+ */
//                   ${activeStep.id === step.id
//                     ? 'ring-2 sm:ring-4 ring-offset-1 sm:ring-offset-2 ring-white scale-105 shadow-xl' /* Adjusted ring for base */
//                     : 'shadow-sm sm:shadow-md hover:shadow-lg hover:scale-[1.02]' /* Adjusted shadow for base */
//                   }
//                 `}
//               >
//                 <step.icon className="h-6 w-6 sm:h-7 sm:w-7 mr-3 sm:mr-4 flex-shrink-0" /> {/* Base h-6, sm:h-7 */}
//                 <div className="flex-grow overflow-hidden"> {/* Allow title to take space and overflow for clamping */}
//                   <h4 className={`text-sm sm:text-md font-semibold 
//                                  ${baseTitleLineClamp} /* Max 2 lines for title at <sm */
//                                  sm:line-clamp-none  /* No clamp for sm+ */
//                                 `}>
//                     {step.shortTitle}
//                   </h4>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- Desktop View (Circle Diagram) ---
//   return (
//     // ... (Your existing desktop view code remains unchanged) ...
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
//         <div className="lg:col-span-4 ml-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Our Azure Penetration Testing Process
//           </h2>
//           <p className="text-lg text-gray-700">
//             Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
//           </p>
//         </div>

//         <div className="lg:col-span-8 flex justify-center items-center min-h-[36rem] sm:min-h-[42rem]">
//           <div
//             className="relative"
//             style={{
//               width: `${diagramContainerSize}px`,
//               height: `${diagramContainerSize}px`,
//             }}
//           >
//             {/* Central Display Area */}
//             <div
//               className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                           rounded-full bg-gradient-to-br from-slate-50 to-gray-100
//                           shadow-2xl
//                           flex flex-col justify-center items-center text-center p-6
//                           ring-8 ring-white ring-opacity-60`}
//               style={{
//                 width: `${centralCircleDiameter}px`,
//                 height: `${centralCircleDiameter}px`,
//               }}
//             >
//               <div>
//                  {/* Ensure activeStep.icon is valid before rendering */}
//                 {activeStep && activeStep.icon && (
//                  <activeStep.icon className={`h-12 w-12 mx-auto mb-3 ${activeStep.bgColor ? activeStep.bgColor.replace('bg-', 'text-') : 'text-gray-500'} rounded-full p-2`} />
//                 )}
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 px-2">
//                   {activeStep?.title || "Select a step"}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-3">
//                   {activeStep?.description || "Details will appear here."}
//                 </p>
//               </div>
//             </div>

//             {/* Outer Orbiting Circles */}
//             {testingStepsData.map((step, index) => {
//               const angleOffset = - (1 * (2 * Math.PI / testingStepsData.length));
//               const angle = (index / testingStepsData.length) * 2 * Math.PI - (Math.PI / 2) + angleOffset;
//               const x = Math.cos(angle) * diagramRadius;
//               const y = Math.sin(angle) * diagramRadius;
//               const isActive = activeStep.id === step.id;

//               return (
//                 <button
//                   key={step.id}
//                   onClick={() => handleStepClick(step)}
//                   className={`
//                     absolute p-2 rounded-full text-white
//                     flex flex-col items-center justify-center text-center
//                     focus:outline-none
//                     transition-all duration-300 ease-in-out
//                     ${step.bgColor}
//                     ${isActive
//                       ? 'scale-105 shadow-2xl ring-4 ring-offset-2 ring-white'
//                       : 'shadow-lg hover:scale-110 hover:shadow-2xl'
//                     }
//                   `}
//                   style={{
//                     width: `${itemDiameter}px`,
//                     height: `${itemDiameter}px`,
//                     top: '50%',
//                     left: '50%',
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                     opacity: 1,
//                   }}
//                 >
//                   <step.icon className="h-7 w-7 mb-1" />
//                   <span className="text-[10px] font-medium leading-tight px-1">
//                     {step.shortTitle}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveCircleDiagram;

// import { useState, useEffect } from 'react';
// import React from 'react';
// import {
//   MagnifyingGlassIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, BugAntIcon,
//   EyeIcon, CheckCircleIcon, MapIcon, CpuChipIcon
// } from '@heroicons/react/24/outline';

// const testingStepsData = [
//   // ... (your testingStepsData remains the same)
//   { id: 'recon', icon: MagnifyingGlassIcon, title: 'Reconnaissance and Enumeration', shortTitle: 'Reconnaissance & Enumeration', description: 'Gather initial information about the Azure environment and identify active services and potential targets.', bgColor: 'bg-sky-500' },
//   { id: 'mitigation', icon: ShieldCheckIcon, title: 'Strategic Mitigation', shortTitle: 'Strategic Mitigation', description: 'Provide recommendations and strategies to address and mitigate the identified vulnerabilities.', bgColor: 'bg-purple-500' },
//   { id: 'scoping', icon: AdjustmentsHorizontalIcon, title: 'Azure Scoping', shortTitle: 'Azure Scoping', description: 'Define the scope of the penetration test, including the Azure resources and services to be tested.', bgColor: 'bg-indigo-600' },
//   { id: 'post_exploitation', icon: BugAntIcon, title: 'Post Exploitation', shortTitle: 'Post Exploitation', description: 'Explore the extent of access gained and the potential for further exploitation.', bgColor: 'bg-green-500' },
//   { id: 'vuln_identification', icon: EyeIcon, title: 'Vulnerability Identification', shortTitle: 'Vulnerability Identification', description: 'Utilize various techniques to identify security weaknesses and vulnerabilities in the Azure setup.', bgColor: 'bg-pink-500' },
//   { id: 'patch_verification', icon: CheckCircleIcon, title: 'Patch Verification', shortTitle: 'Patch Verification', description: 'Verify that patches and remediation efforts have been effectively applied and are functioning as intended.', bgColor: 'bg-lime-500' },
//   { id: 'mapping', icon: MapIcon, title: 'Mapping & Service Identification', shortTitle: 'Mapping & Service ID', description: 'Identify and map the services and components within the Azure environment.', bgColor: 'bg-orange-500' },
//   { id: 'analysis', icon: CpuChipIcon, title: 'Vulnerability Analysis', shortTitle: 'Vulnerability Analysis', description: 'Analyze the identified vulnerabilities to assess their impact and exploitability.', bgColor: 'bg-violet-500' },
// ];

// const InteractiveCircleDiagram = () => {
//   const [activeStep, setActiveStep] = useState(testingStepsData[1]);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const MOBILE_VIEW_BREAKPOINT = 680;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [MOBILE_VIEW_BREAKPOINT]);

//   const handleStepClick = (step) => {
//     setActiveStep(step);
//   };

//   // --- Desktop View Constants ---
//   const diagramRadius = 260;
//   const itemDiameter = 112;
//   const centralCircleDiameter = 300;
//   const diagramContainerSize = (diagramRadius * 2) + itemDiameter;


//   if (isMobileView) {
//     const baseListItemHeight = "h-20";
//     const baseTitleLineClamp = "line-clamp-2";

//     return (
//       <div className="py-12 px-4 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-2xl font-bold text-gray-900 mb-3">
//               Our Azure Penetration Testing Process
//             </h2>
//             <p className="text-md text-gray-700">
//               Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
//             </p>
//           </div>

//           {/* Central Display Area for Mobile - Icon REMOVED */}
//           <div className="mb-10 p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl text-center">
//             {/* Icon was here, now removed */}
//             <h3 className="text-xl font-semibold text-gray-800 mb-3"> {/* Added mb-3 for spacing if icon removed */}
//               {activeStep?.title || 'Select a Step'}
//             </h3>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               {activeStep?.description || 'Details will appear here.'}
//             </p>
//           </div>

//           {/* List View for Mobile */}
//           <div className="space-y-3 sm:space-y-4">
//             {testingStepsData.map((step) => (
//               <button
//                 key={step.id}
//                 onClick={() => handleStepClick(step)}
//                 className={`
//                   w-full p-3 sm:p-4 rounded-md sm:rounded-lg text-white
//                   flex items-center text-left 
//                   focus:outline-none transition-all duration-300 ease-in-out
//                   overflow-hidden
//                   ${step.bgColor}
//                   ${baseListItemHeight}
//                   sm:h-auto
//                   ${activeStep.id === step.id
//                     ? 'ring-2 sm:ring-4 ring-offset-1 sm:ring-offset-2 ring-white scale-105 shadow-xl'
//                     : 'shadow-sm sm:shadow-md hover:shadow-lg hover:scale-[1.02]'
//                   }
//                 `}
//               >
//                 <step.icon className="h-6 w-6 sm:h-7 sm:w-7 mr-3 sm:mr-4 flex-shrink-0" />
//                 <div className="flex-grow overflow-hidden">
//                   <h4 className={`text-sm sm:text-md font-semibold 
//                                  ${baseTitleLineClamp}
//                                  sm:line-clamp-none 
//                                 `}>
//                     {step.shortTitle}
//                   </h4>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- Desktop View (Circle Diagram) ---
//   return (
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
//         <div className="lg:col-span-4 ml-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Our Azure Penetration Testing Process
//           </h2>
//           <p className="text-lg text-gray-700">
//             Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
//           </p>
//         </div>

//         <div className="lg:col-span-8 flex justify-center items-center min-h-[36rem] sm:min-h-[42rem]">
//           <div
//             className="relative"
//             style={{
//               width: `${diagramContainerSize}px`,
//               height: `${diagramContainerSize}px`,
//             }}
//           >
//             {/* Central Display Area - Icon REMOVED */}
//             <div
//               className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                           rounded-full bg-gradient-to-br from-slate-50 to-gray-100
//                           shadow-2xl
//                           flex flex-col justify-center items-center text-center p-6
//                           ring-8 ring-white ring-opacity-60`}
//               style={{
//                 width: `${centralCircleDiameter}px`,
//                 height: `${centralCircleDiameter}px`,
//               }}
//             >
//               <div>
//                 {/* Icon was here, now removed */}
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 px-2">
//                   {activeStep?.title || "Select a step"}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-3">
//                   {activeStep?.description || "Details will appear here."}
//                 </p>
//               </div>
//             </div>

//             {/* Outer Orbiting Circles */}
//             {testingStepsData.map((step, index) => {
//               // ... (orbiting circles logic remains the same) ...
//               const angleOffset = - (1 * (2 * Math.PI / testingStepsData.length));
//               const angle = (index / testingStepsData.length) * 2 * Math.PI - (Math.PI / 2) + angleOffset;
//               const x = Math.cos(angle) * diagramRadius;
//               const y = Math.sin(angle) * diagramRadius;
//               const isActive = activeStep.id === step.id;

//               return (
//                 <button
//                   key={step.id}
//                   onClick={() => handleStepClick(step)}
//                   className={`
//                     absolute p-2 rounded-full text-white
//                     flex flex-col items-center justify-center text-center
//                     focus:outline-none
//                     transition-all duration-300 ease-in-out
//                     ${step.bgColor}
//                     ${isActive
//                       ? 'scale-105 shadow-2xl ring-4 ring-offset-2 ring-white'
//                       : 'shadow-lg hover:scale-110 hover:shadow-2xl'
//                     }
//                   `}
//                   style={{
//                     width: `${itemDiameter}px`,
//                     height: `${itemDiameter}px`,
//                     top: '50%',
//                     left: '50%',
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                     opacity: 1,
//                   }}
//                 >
//                   <step.icon className="h-7 w-7 mb-1" />
//                   <span className="text-[10px] font-medium leading-tight px-1">
//                     {step.shortTitle}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveCircleDiagram;

// import { useState, useEffect } from 'react';
// import React from 'react';
// import {
//   MagnifyingGlassIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, BugAntIcon,
//   EyeIcon, CheckCircleIcon, MapIcon, CpuChipIcon
// } from '@heroicons/react/24/outline';

// const testingStepsData = [
//   // ... (your testingStepsData remains the same)
//   { id: 'recon', icon: MagnifyingGlassIcon, title: 'Reconnaissance and Enumeration', shortTitle: 'Reconnaissance & Enumeration', description: 'Gather initial information about the Azure environment and identify active services and potential targets.', bgColor: 'bg-sky-500' },
//   { id: 'mitigation', icon: ShieldCheckIcon, title: 'Strategic Mitigation', shortTitle: 'Strategic Mitigation', description: 'Provide recommendations and strategies to address and mitigate the identified vulnerabilities.', bgColor: 'bg-purple-500' },
//   { id: 'scoping', icon: AdjustmentsHorizontalIcon, title: 'Azure Scoping', shortTitle: 'Azure Scoping', description: 'Define the scope of the penetration test, including the Azure resources and services to be tested.', bgColor: 'bg-indigo-600' },
//   { id: 'post_exploitation', icon: BugAntIcon, title: 'Post Exploitation', shortTitle: 'Post Exploitation', description: 'Explore the extent of access gained and the potential for further exploitation.', bgColor: 'bg-green-500' },
//   { id: 'vuln_identification', icon: EyeIcon, title: 'Vulnerability Identification', shortTitle: 'Vulnerability Identification', description: 'Utilize various techniques to identify security weaknesses and vulnerabilities in the Azure setup.', bgColor: 'bg-pink-500' },
//   { id: 'patch_verification', icon: CheckCircleIcon, title: 'Patch Verification', shortTitle: 'Patch Verification', description: 'Verify that patches and remediation efforts have been effectively applied and are functioning as intended.', bgColor: 'bg-lime-500' },
//   { id: 'mapping', icon: MapIcon, title: 'Mapping & Service Identification', shortTitle: 'Mapping & Service ID', description: 'Identify and map the services and components within the Azure environment.', bgColor: 'bg-orange-500' },
//   { id: 'analysis', icon: CpuChipIcon, title: 'Vulnerability Analysis', shortTitle: 'Vulnerability Analysis', description: 'Analyze the identified vulnerabilities to assess their impact and exploitability.', bgColor: 'bg-violet-500' },
// ];

// const InteractiveCircleDiagram = () => {
//   const [activeStep, setActiveStep] = useState(testingStepsData[1]);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const MOBILE_VIEW_BREAKPOINT = 680;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobileView(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [MOBILE_VIEW_BREAKPOINT]);

//   const handleStepClick = (step) => {
//     setActiveStep(step);
//   };

//   // --- Desktop View Constants ---
//   const diagramRadius = 260;
//   const itemDiameter = 112;
//   const centralCircleDiameter = 300;
//   const diagramContainerSize = (diagramRadius * 2) + itemDiameter;


//   if (isMobileView) {
//     // For 320px (base styles for list items)
//     // Target a height that fits icon + 1 or 2 lines of title comfortably.
//     // Example: h-16 (4rem or 64px). This is quite compact.
//     const baseListItemHeight = "h-16"; // TRY THIS - very compact
//     const baseTitleLineClamp = "line-clamp-2"; // Allow title to wrap to 2 lines if needed
//                                              // If shortTitles are short, line-clamp-1 might be enough

//     return (
//       <div className="py-12 px-4 bg-white">
//         <div className="max-w-3xl mx-auto">
//           <div className="text-center mb-10">
//             <h2 className="text-2xl font-bold text-gray-900 mb-3">
//               Our Azure Penetration Testing Process
//             </h2>
//             <p className="text-md text-gray-700">
//               Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
//             </p>
//           </div>

//           {/* Central Display Area for Mobile */}
//           <div className="mb-10 p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl text-center">
//             <h3 className="text-xl font-semibold text-gray-800 mb-3">
//               {activeStep?.title || 'Select a Step'}
//             </h3>
//             <p className="text-sm text-gray-600 leading-relaxed">
//               {activeStep?.description || 'Details will appear here.'}
//             </p>
//           </div>

//           {/* List View for Mobile */}
//           <div className="space-y-3 sm:space-y-4">
//             {testingStepsData.map((step) => (
//               <button
//                 key={step.id}
//                 onClick={() => handleStepClick(step)}
//                 className={`
//                   w-full p-2 sm:p-3 rounded-md text-white /* Base p-2, sm:p-3 */
//                   flex items-center text-left 
//                   focus:outline-none transition-all duration-300 ease-in-out
//                   overflow-hidden /* Crucial for line-clamp */
//                   ${step.bgColor}
//                   ${baseListItemHeight} /* Fixed height for <sm (e.g., 320px) */
//                   sm:h-auto          /* Auto height for sm+ */
//                   ${activeStep.id === step.id
//                     ? 'ring-2 ring-offset-1 ring-white scale-105 shadow-lg' /* Simpler active state for base */
//                     : 'shadow-sm hover:shadow-md hover:scale-[1.02]'
//                   }
//                 `}
//               >
//                 <step.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 flex-shrink-0" /> {/* Base h-5, sm:h-6 */}
//                 <div className="flex-grow overflow-hidden"> {/* Allow title to take space */}
//                   <h4 className={`text-xs sm:text-sm font-semibold leading-tight /* Base text-xs & tight leading */
//                                  ${baseTitleLineClamp} /* Max 2 lines for title at <sm */
//                                  sm:line-clamp-none  /* No clamp for sm+ */
//                                  sm:leading-normal   /* Normal leading for sm+ */
//                                 `}>
//                     {step.shortTitle}
//                   </h4>
//                 </div>
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // --- Desktop View (Circle Diagram) ---
//   return (
//     // ... (Your existing desktop view code remains unchanged) ...
//     <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
//       <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
//         <div className="lg:col-span-4 ml-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Our Azure Penetration Testing Process
//           </h2>
//           <p className="text-lg text-gray-700">
//             Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
//           </p>
//         </div>

//         <div className="lg:col-span-8 flex justify-center items-center min-h-[36rem] sm:min-h-[42rem]">
//           <div
//             className="relative"
//             style={{
//               width: `${diagramContainerSize}px`,
//               height: `${diagramContainerSize}px`,
//             }}
//           >
//             {/* Central Display Area */}
//             <div
//               className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
//                           rounded-full bg-gradient-to-br from-slate-50 to-gray-100
//                           shadow-2xl
//                           flex flex-col justify-center items-center text-center p-6
//                           ring-8 ring-white ring-opacity-60`}
//               style={{
//                 width: `${centralCircleDiameter}px`,
//                 height: `${centralCircleDiameter}px`,
//               }}
//             >
//               <div>
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 px-2">
//                   {activeStep?.title || "Select a step"}
//                 </h3>
//                 <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-3">
//                   {activeStep?.description || "Details will appear here."}
//                 </p>
//               </div>
//             </div>

//             {/* Outer Orbiting Circles */}
//             {testingStepsData.map((step, index) => {
//               const angleOffset = - (1 * (2 * Math.PI / testingStepsData.length));
//               const angle = (index / testingStepsData.length) * 2 * Math.PI - (Math.PI / 2) + angleOffset;
//               const x = Math.cos(angle) * diagramRadius;
//               const y = Math.sin(angle) * diagramRadius;
//               const isActive = activeStep.id === step.id;

//               return (
//                 <button
//                   key={step.id}
//                   onClick={() => handleStepClick(step)}
//                   className={`
//                     absolute p-2 rounded-full text-white
//                     flex flex-col items-center justify-center text-center
//                     focus:outline-none
//                     transition-all duration-300 ease-in-out
//                     ${step.bgColor}
//                     ${isActive
//                       ? 'scale-105 shadow-2xl ring-4 ring-offset-2 ring-white'
//                       : 'shadow-lg hover:scale-110 hover:shadow-2xl'
//                     }
//                   `}
//                   style={{
//                     width: `${itemDiameter}px`,
//                     height: `${itemDiameter}px`,
//                     top: '50%',
//                     left: '50%',
//                     transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
//                     opacity: 1,
//                   }}
//                 >
//                   <step.icon className="h-7 w-7 mb-1" />
//                   <span className="text-[10px] font-medium leading-tight px-1">
//                     {step.shortTitle}
//                   </span>
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveCircleDiagram;


import { useState, useEffect } from 'react';
import React from 'react';
import { motion } from 'framer-motion'; // 1. Import motion
import {
  MagnifyingGlassIcon, ShieldCheckIcon, AdjustmentsHorizontalIcon, BugAntIcon,
  EyeIcon, CheckCircleIcon, MapIcon, CpuChipIcon
} from '@heroicons/react/24/outline';

const testingStepsData = [
  { id: 'recon', icon: MagnifyingGlassIcon, title: 'Reconnaissance and Enumeration', shortTitle: 'Reconnaissance & Enumeration', description: 'Gather initial information about the Azure environment and identify active services and potential targets.', bgColor: 'bg-sky-500' },
  { id: 'mitigation', icon: ShieldCheckIcon, title: 'Strategic Mitigation', shortTitle: 'Strategic Mitigation', description: 'Provide recommendations and strategies to address and mitigate the identified vulnerabilities.', bgColor: 'bg-purple-500' },
  { id: 'scoping', icon: AdjustmentsHorizontalIcon, title: 'Azure Scoping', shortTitle: 'Azure Scoping', description: 'Define the scope of the penetration test, including the Azure resources and services to be tested.', bgColor: 'bg-indigo-600' },
  { id: 'post_exploitation', icon: BugAntIcon, title: 'Post Exploitation', shortTitle: 'Post Exploitation', description: 'Explore the extent of access gained and the potential for further exploitation.', bgColor: 'bg-green-500' },
  { id: 'vuln_identification', icon: EyeIcon, title: 'Vulnerability Identification', shortTitle: 'Vulnerability Identification', description: 'Utilize various techniques to identify security weaknesses and vulnerabilities in the Azure setup.', bgColor: 'bg-pink-500' },
  { id: 'patch_verification', icon: CheckCircleIcon, title: 'Patch Verification', shortTitle: 'Patch Verification', description: 'Verify that patches and remediation efforts have been effectively applied and are functioning as intended.', bgColor: 'bg-lime-500' },
  { id: 'mapping', icon: MapIcon, title: 'Mapping & Service Identification', shortTitle: 'Mapping & Service ID', description: 'Identify and map the services and components within the Azure environment.', bgColor: 'bg-orange-500' },
  { id: 'analysis', icon: CpuChipIcon, title: 'Vulnerability Analysis', shortTitle: 'Vulnerability Analysis', description: 'Analyze the identified vulnerabilities to assess their impact and exploitability.', bgColor: 'bg-violet-500' },
];

const InteractiveCircleDiagram = () => {
  const [activeStep, setActiveStep] = useState(testingStepsData[1]);
  const [isMobileView, setIsMobileView] = useState(false);
  const MOBILE_VIEW_BREAKPOINT = 680;

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [MOBILE_VIEW_BREAKPOINT]);

  const handleStepClick = (step) => {
    setActiveStep(step);
  };

  // --- Desktop View Constants ---
  const diagramRadius = 260;
  const itemDiameter = 112;
  const centralCircleDiameter = 300;
  const diagramContainerSize = (diagramRadius * 2) + itemDiameter;

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


  if (isMobileView) {
    const baseListItemHeight = "h-16";
    const baseTitleLineClamp = "line-clamp-2";

    return (
      <div className="py-12 px-4 bg-white overflow-hidden"> {/* Added overflow-hidden */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            {/* 3. Apply motion to mobile heading */}
            <motion.h2
              className="text-2xl font-bold text-gray-900 mb-3"
              variants={textContentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.1} // Stagger delay
            >
              Our Azure Penetration Testing Process
            </motion.h2>
            {/* 4. Apply motion to mobile paragraph */}
            <motion.p
              className="text-md text-gray-700"
              variants={textContentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={0.2} // Stagger delay
            >
              Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
            </motion.p>
          </div>

          {/* Central Display Area for Mobile */}
          <div className="mb-10 p-6 bg-gradient-to-br from-slate-50 to-gray-100 rounded-xl shadow-xl text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {activeStep?.title || 'Select a Step'}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {activeStep?.description || 'Details will appear here.'}
            </p>
          </div>

          {/* List View for Mobile */}
          <div className="space-y-3 sm:space-y-4">
            {testingStepsData.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step)}
                className={`
                  w-full p-2 sm:p-3 rounded-md text-white
                  flex items-center text-left 
                  focus:outline-none transition-all duration-300 ease-in-out
                  overflow-hidden 
                  ${step.bgColor}
                  ${baseListItemHeight} 
                  sm:h-auto          
                  ${activeStep.id === step.id
                    ? 'ring-2 ring-offset-1 ring-white scale-105 shadow-lg'
                    : 'shadow-sm hover:shadow-md hover:scale-[1.02]'
                  }
                `}
              >
                <step.icon className="h-5 w-5 sm:h-6 sm:w-6 mr-2 sm:mr-3 flex-shrink-0" />
                <div className="flex-grow overflow-hidden">
                  <h4 className={`text-xs sm:text-sm font-semibold leading-tight 
                                 ${baseTitleLineClamp} 
                                 sm:line-clamp-none  
                                 sm:leading-normal   
                                `}>
                    {step.shortTitle}
                  </h4>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // --- Desktop View (Circle Diagram) ---
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"> {/* Added overflow-hidden */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-x-8 gap-y-12 items-center">
        <div className="lg:col-span-4 ml-10">
          {/* 5. Apply motion to desktop heading */}
          <motion.h2
            className="text-3xl font-bold text-gray-900 mb-4"
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.1} // Stagger delay
          >
            Our Azure Penetration Testing Process
          </motion.h2>
          {/* 6. Apply motion to desktop paragraph */}
          <motion.p
            className="text-lg text-gray-700"
            variants={textContentVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0.2} // Stagger delay
          >
            Ten Sentinel stands out as a leading provider of Azure Penetration Testing Service for several compelling reasons. Our structured approach ensures comprehensive coverage:
          </motion.p>
        </div>

        <div className="lg:col-span-8 flex justify-center items-center min-h-[36rem] sm:min-h-[42rem]">
          <div
            className="relative"
            style={{
              width: `${diagramContainerSize}px`,
              height: `${diagramContainerSize}px`,
            }}
          >
            {/* Central Display Area */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                          rounded-full bg-gradient-to-br from-slate-50 to-gray-100
                          shadow-2xl
                          flex flex-col justify-center items-center text-center p-6
                          ring-8 ring-white ring-opacity-60`}
              style={{
                width: `${centralCircleDiameter}px`,
                height: `${centralCircleDiameter}px`,
              }}
            >
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 sm:mb-3 px-2">
                  {activeStep?.title || "Select a step"}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-3">
                  {activeStep?.description || "Details will appear here."}
                </p>
              </div>
            </div>

            {/* Outer Orbiting Circles */}
            {testingStepsData.map((step, index) => {
              const angleOffset = - (1 * (2 * Math.PI / testingStepsData.length));
              const angle = (index / testingStepsData.length) * 2 * Math.PI - (Math.PI / 2) + angleOffset;
              const x = Math.cos(angle) * diagramRadius;
              const y = Math.sin(angle) * diagramRadius;
              const isActive = activeStep.id === step.id;

              return (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step)}
                  className={`
                    absolute p-2 rounded-full text-white
                    flex flex-col items-center justify-center text-center
                    focus:outline-none
                    transition-all duration-300 ease-in-out
                    ${step.bgColor}
                    ${isActive
                      ? 'scale-105 shadow-2xl ring-4 ring-offset-2 ring-white'
                      : 'shadow-lg hover:scale-110 hover:shadow-2xl'
                    }
                  `}
                  style={{
                    width: `${itemDiameter}px`,
                    height: `${itemDiameter}px`,
                    top: '50%',
                    left: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    opacity: 1,
                  }}
                >
                  <step.icon className="h-7 w-7 mb-1" />
                  <span className="text-[10px] font-medium leading-tight px-1">
                    {step.shortTitle}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveCircleDiagram;