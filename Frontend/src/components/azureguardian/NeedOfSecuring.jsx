import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion } from "framer-motion"; // 1. Import motion
import {
  LockClosedIcon,
  CalculatorIcon,
  DocumentCheckIcon,
  ShieldExclamationIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  CogIcon,
  BuildingOfficeIcon,
} from "@heroicons/react/24/outline";

const securingNeedsData = [
  {
    id: "data_protection",
    icon: LockClosedIcon,
    title: "Data Protection",
    description:
      "Ensuring robust data protection mechanisms are in place to safeguard sensitive information from breaches and unauthorized access, maintaining confidentiality and integrity.",
  },
  {
    id: "cost_effective",
    icon: CalculatorIcon,
    title: "Cost-Effective Security",
    description:
      "Outsourcing Azure security services offers a cost-effective alternative to maintaining an in-house team. Benefit from advanced technologies and experienced experts without added training/infrastructure costs.",
  },
  {
    id: "compliance",
    icon: DocumentCheckIcon,
    title: "Compliance & Regulatory",
    description:
      "Meeting industry-specific compliance standards (e.g., GDPR, HIPAA, PCI-DSS) and regulatory obligations related to data security and privacy in the cloud.",
  },
  {
    id: "mitigating_risks",
    icon: ShieldExclamationIcon,
    title: "Mitigating Risks",
    description:
      "Proactively identifying and mitigating security risks to prevent financial losses, reputational damage, operational disruptions, and legal liabilities.",
  },
  {
    id: "business_ops",
    icon: ShieldCheckIcon,
    title: "Protecting Business Operations",
    description:
      "Ensuring the continuity and availability of critical business operations by protecting Azure infrastructure from cyber threats, downtime, and data loss.",
  },
  {
    id: "managing_costs",
    icon: BanknotesIcon,
    title: "Managing Overall Costs",
    description:
      "Optimizing security spending by implementing efficient security measures and avoiding the high costs associated with security incidents, recovery, and fines.",
  },
  {
    id: "proper_config",
    icon: CogIcon,
    title: "Ensuring Proper Configuration",
    description:
      "Properly configuring Azure cloud resources with appropriate security settings prevents misconfigurations that could expose the environment to significant risks and vulnerabilities.",
  },
  {
    id: "org_goals",
    icon: BuildingOfficeIcon,
    title: "Supporting Organizational Goals",
    description:
      "A secure Azure environment enables innovation and scalability, allowing organizations to confidently adopt new technologies, expand services, and grow their infrastructure.",
  },
];

const defaultActiveItem = securingNeedsData[0];
const MOBILE_BREAKPOINT = 533;
const TABLET_BREAKPOINT = 1024;

const mobileBoxBackgrounds = [
  "bg-sky-600/70",
  "bg-cyan-500/75",
  "bg-teal-600/70",
  "bg-blue-700/75",
  "bg-indigo-600/70",
  "bg-violet-500/75",
  "bg-purple-600/70",
  "bg-fuchsia-500/75",
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

  const iconCircleRadius = useMemo(
    () => centralTextMaxWidthPixels / 2 + centralTextPadding + itemRadius,
    [centralTextMaxWidthPixels, centralTextPadding, itemRadius]
  );

  const layoutContainerDiameter = useMemo(
    () => 2 * (iconCircleRadius + itemRadius),
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
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobileView) {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
      return;
    }
    let lastTime = 0;
    const animate = (timestamp) => {
      if (!lastTime) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      const currentSpeed = isUserInteracting ? 0 : baseRotationSpeed;
      const actualRotationSpeed = currentSpeed * (deltaTime / (1000 / 60));
      if (currentSpeed > 0) {
        setRotationAngle(
          (prevAngle) => (prevAngle + actualRotationSpeed) % 360
        );
      }
      lastTime = timestamp;
      animationFrameId.current = requestAnimationFrame(animate);
    };
    animationFrameId.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrameId.current)
        cancelAnimationFrame(animationFrameId.current);
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
  }, [
    numItems,
    iconCircleRadius,
    layoutContainerWidth,
    layoutContainerHeight,
    iconStartAngleOffset,
    rotationAngle,
    isMobileView,
  ]);

  const itemBaseSizeClass = "w-24 h-24";
  const itemPaddingClass = "p-1.5";
  const iconInButtonSizeClass = "h-8 w-8";
  const iconInButtonMarginBottom = "mb-0.5";
  const titleInButtonTextSizeClass = "text-[11px] leading-tight";
  const centralTitleTextSizeClass = "text-base sm:text-lg";
  const centralDescriptionTextSizeClass = "text-xs";
  const centralDescriptionLineHeightClass = "leading-snug";
  const buttonTransitionClasses =
    "transition-[transform,background-color,color,border-color] duration-300 ease-in-out";
  const borderThicknessClass = "border-2";

  const handleContainerMouseEnter = () =>
    !isMobileView && setIsUserInteracting(true);
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
    const baseCardHeight = "h-36";
    const baseDescriptionLineClamp = "line-clamp-3";

    return (
      <div className="py-12 px-4 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-start overflow-hidden">
        {" "}
        {/* Added overflow-hidden */}
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
                            ${
                              mobileBoxBackgrounds[
                                index % mobileBoxBackgrounds.length
                              ]
                            }`}
              >
                <div className="flex items-center mb-2">
                  <item.icon className="h-6 w-6 text-white mr-2 flex-shrink-0" />
                  <h3 className="text-base font-semibold text-white line-clamp-1">
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`text-xs text-slate-100 leading-snug 
                               ${baseDescriptionLineClamp}
                               sm:line-clamp-none
                             `}
                >
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
    <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {" "}
      {/* Added overflow-hidden */}
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
          <div
            className={`flex justify-center items-center mb-8 lg:w-1/2 lg:mb-0`}
          >
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
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: `${centralTextMaxWidthPixels}px`,
                    maxWidth: "90%",
                    zIndex: 5,
                  }}
                >
                  <h3
                    className={`${centralTitleTextSizeClass} font-semibold mb-1 text-white`}
                  >
                    {activeNeed.title}
                  </h3>
                  <p
                    className={`${centralDescriptionTextSizeClass} ${centralDescriptionLineHeightClass} text-slate-100`}
                  >
                    {activeNeed.description}
                  </p>
                </div>
              )}

              {itemPositions &&
                itemPositions.length > 0 &&
                securingNeedsData.map((item, index) => {
                  const isActive = activeNeed && activeNeed.id === item.id;
                  const position = itemPositions[index];
                  if (!position) return null;
                  const borderColorClass = isActive
                    ? "border-white"
                    : "border-blue-300";
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
                        left: position.left,
                        top: position.top,
                        backgroundColor: isActive
                          ? "rgb(59, 130, 246)"
                          : "#FFFFFF",
                        transform: `translate(-50%, -50%) ${
                          isActive ? "scale(1.1)" : "scale(1)"
                        }`,
                        zIndex: isActive ? 15 : 10,
                        boxSizing: "border-box",
                      }}
                      title={item.title}
                      role="button"
                      tabIndex={0}
                      onFocus={() => handleButtonMouseEnter(item)}
                    >
                      <item.icon
                        className={`${iconInButtonSizeClass} ${iconInButtonMarginBottom} transition-colors duration-300
                                 ${
                                   isActive
                                     ? "text-white"
                                     : "text-blue-600 group-hover:text-blue-700"
                                 }`}
                      />
                      <span
                        className={`${titleInButtonTextSizeClass} font-medium text-center transition-colors duration-300
                                 ${
                                   isActive
                                     ? "text-white"
                                     : "text-blue-600 group-hover:text-blue-700"
                                 }`}
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
                Azure cloud security lies in protecting sensitive data, ensuring
                compliance, and maintaining business continuity. With increasing
                cyber threats, robust security measures in Azure help safeguard
                cloud infrastructure, applications, and workloads.
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NeedOfSecuring;


// import React, { useState, useMemo, useEffect, useRef } from "react";
// import { motion } from "framer-motion"; // 1. Import motion
// import {
//   LockClosedIcon,
//   CalculatorIcon,
//   DocumentCheckIcon,
//   ShieldExclamationIcon,
//   ShieldCheckIcon,
//   BanknotesIcon,
//   CogIcon,
//   BuildingOfficeIcon,
// } from "@heroicons/react/24/outline";

// const securingNeedsData = [
//   {
//     id: "data_protection",
//     icon: LockClosedIcon,
//     title: "Data Protection",
//     description:
//       "Ensuring robust data protection mechanisms are in place to safeguard sensitive information from breaches and unauthorized access, maintaining confidentiality and integrity.",
//   },
//   {
//     id: "cost_effective",
//     icon: CalculatorIcon,
//     title: "Cost-Effective Security",
//     description:
//       "Outsourcing Azure security services offers a cost-effective alternative to maintaining an in-house team. Benefit from advanced technologies and experienced experts without added training/infrastructure costs.",
//   },
//   {
//     id: "compliance",
//     icon: DocumentCheckIcon,
//     title: "Compliance & Regulatory",
//     description:
//       "Meeting industry-specific compliance standards (e.g., GDPR, HIPAA, PCI-DSS) and regulatory obligations related to data security and privacy in the cloud.",
//   },
//   {
//     id: "mitigating_risks",
//     icon: ShieldExclamationIcon,
//     title: "Mitigating Risks",
//     description:
//       "Proactively identifying and mitigating security risks to prevent financial losses, reputational damage, operational disruptions, and legal liabilities.",
//   },
//   {
//     id: "business_ops",
//     icon: ShieldCheckIcon,
//     title: "Protecting Business Operations",
//     description:
//       "Ensuring the continuity and availability of critical business operations by protecting Azure infrastructure from cyber threats, downtime, and data loss.",
//   },
//   {
//     id: "managing_costs",
//     icon: BanknotesIcon,
//     title: "Managing Overall Costs",
//     description:
//       "Optimizing security spending by implementing efficient security measures and avoiding the high costs associated with security incidents, recovery, and fines.",
//   },
//   {
//     id: "proper_config",
//     icon: CogIcon,
//     title: "Ensuring Proper Configuration",
//     description:
//       "Properly configuring Azure cloud resources with appropriate security settings prevents misconfigurations that could expose the environment to significant risks and vulnerabilities.",
//   },
//   {
//     id: "org_goals",
//     icon: BuildingOfficeIcon,
//     title: "Supporting Organizational Goals",
//     description:
//       "A secure Azure environment enables innovation and scalability, allowing organizations to confidently adopt new technologies, expand services, and grow their infrastructure.",
//   },
// ];

// const defaultActiveItem = securingNeedsData[0];
// const MOBILE_BREAKPOINT = 533;
// const TABLET_BREAKPOINT = 1024;

// const mobileBoxBackgrounds = [
//   "bg-sky-600/70",
//   "bg-cyan-500/75",
//   "bg-teal-600/70",
//   "bg-blue-700/75",
//   "bg-indigo-600/70",
//   "bg-violet-500/75",
//   "bg-purple-600/70",
//   "bg-fuchsia-500/75",
// ];

// const NeedOfSecuring = () => {
//   const [activeNeed, setActiveNeed] = useState(defaultActiveItem);
//   const [rotationAngle, setRotationAngle] = useState(0);
//   const [isUserInteracting, setIsUserInteracting] = useState(false);
//   const [isMobileView, setIsMobileView] = useState(false);
//   const [isTabletView, setIsTabletView] = useState(false);
//   const numItems = securingNeedsData.length;
//   const animationFrameId = useRef(null);

//   const itemDiameter = 96;
//   const itemRadius = itemDiameter / 2;
//   // Adjusted central text and circle dimensions for a tighter fit (as per previous good version)
//   const centralTextMaxWidthPixels = 280;
//   const centralCircleInternalPadding = 20;
//   const centralCircleDiameter = centralTextMaxWidthPixels + 2 * centralCircleInternalPadding;


//   const iconStartAngleOffset = -90;
//   const baseRotationSpeed = 0.5;

//   // Adjusted iconCircleRadius calculation based on a tighter central circle
//   const gapBetweenCentralCircleAndIcons = 20;
//   const iconCircleRadius = useMemo(
//     () => centralCircleDiameter / 2 + gapBetweenCentralCircleAndIcons + itemRadius,
//     [centralCircleDiameter, gapBetweenCentralCircleAndIcons, itemRadius]
//   );

//   const layoutContainerDiameter = useMemo(
//     () => 2 * (iconCircleRadius + itemRadius),
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
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   useEffect(() => {
//     if (isMobileView) {
//       if (animationFrameId.current)
//         cancelAnimationFrame(animationFrameId.current);
//       return;
//     }
//     let lastTime = 0;
//     const animate = (timestamp) => {
//       if (!lastTime) lastTime = timestamp;
//       const deltaTime = timestamp - lastTime;
//       const currentSpeed = isUserInteracting ? 0 : baseRotationSpeed;
//       const actualRotationSpeed = currentSpeed * (deltaTime / (1000 / 60));
//       if (currentSpeed > 0) {
//         setRotationAngle(
//           (prevAngle) => (prevAngle + actualRotationSpeed) % 360
//         );
//       }
//       lastTime = timestamp;
//       animationFrameId.current = requestAnimationFrame(animate);
//     };
//     animationFrameId.current = requestAnimationFrame(animate);
//     return () => {
//       if (animationFrameId.current)
//         cancelAnimationFrame(animationFrameId.current);
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
//   }, [
//     numItems,
//     iconCircleRadius,
//     layoutContainerWidth,
//     layoutContainerHeight,
//     iconStartAngleOffset,
//     rotationAngle,
//     isMobileView,
//   ]);

//   const itemBaseSizeClass = "w-24 h-24";
//   const itemPaddingClass = "p-1.5";
//   const iconInButtonSizeClass = "h-8 w-8";
//   const iconInButtonMarginBottom = "mb-0.5";
//   const titleInButtonTextSizeClass = "text-[11px] leading-tight";
//   const centralTitleTextSizeClass = "text-base sm:text-lg";
//   const centralDescriptionTextSizeClass = "text-xs";
//   const centralDescriptionLineHeightClass = "leading-snug";
//   const buttonTransitionClasses =
//     "transition-[transform,background-color,color,border-color] duration-300 ease-in-out";
//   const borderThicknessClass = "border-2";

//   const handleContainerMouseEnter = () =>
//     !isMobileView && setIsUserInteracting(true);
//   const handleContainerMouseLeave = () => {
//     if (!isMobileView) {
//       setIsUserInteracting(false);
//       setActiveNeed(defaultActiveItem);
//     }
//   };
//   const handleButtonMouseEnter = (item) => !isMobileView && setActiveNeed(item);

//   const textContentVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (delay = 0) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay,
//         duration: 0.6,
//         ease: "easeOut",
//       },
//     }),
//   };

//   if (isMobileView) {
//     const baseCardHeight = "h-36";
//     const baseDescriptionLineClamp = "line-clamp-3";

//     return (
//       <div className="py-12 px-4 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-start overflow-hidden">
//         <div className="w-full max-w-md mx-auto text-center">
//           <motion.h2
//             className="text-2xl font-bold mb-8"
//             variants={textContentVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.3 }}
//             custom={0.1}
//           >
//             The Imperative of Azure Cloud Security
//           </motion.h2>

//           <div className="space-y-3 sm:space-y-4">
//             {securingNeedsData.map((item, index) => (
//               <div
//                 key={item.id}
//                 className={`p-3 rounded-lg shadow-lg text-left backdrop-blur-sm
//                             hover:shadow-xl hover:scale-[1.02] transition-all duration-300
//                             flex flex-col 
//                             ${baseCardHeight}
//                             sm:h-auto sm:min-h-[11rem]
//                             overflow-hidden
//                             ${
//                               mobileBoxBackgrounds[
//                                 index % mobileBoxBackgrounds.length
//                               ]
//                             }`}
//               >
//                 <div className="flex items-center mb-2">
//                   <item.icon className="h-6 w-6 text-white mr-2 flex-shrink-0" />
//                   <h3 className="text-base font-semibold text-white line-clamp-1">
//                     {item.title}
//                   </h3>
//                 </div>
//                 <p
//                   className={`text-xs text-slate-100 leading-snug 
//                                ${baseDescriptionLineClamp}
//                                sm:line-clamp-none
//                              `}
//                 >
//                   {item.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-300 to-indigo-400 text-white min-h-screen flex flex-col items-center justify-center overflow-hidden">
//       <div className="w-full max-w-7xl mx-auto text-center">
//         <motion.h2
//           className="text-3xl sm:text-4xl font-bold mb-8 md:mb-12 text-white" /* Ensure main heading is white */
//           variants={textContentVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           custom={0.1}
//         >
//           The Imperative of Azure Cloud Security
//         </motion.h2>
//         <div className={`flex flex-col items-center lg:flex-row lg:gap-10`}>
//           <div
//             className={`flex justify-center items-center mb-8 lg:w-1/2 lg:mb-0`}
//           >
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
//                 // Central display circle - styled with white background
//                 <div
//                   className="absolute flex items-center justify-center rounded-full shadow-xl backdrop-blur-md  bg-sky-200" // CHANGED: Background to white, shadow to shadow-lg
//                   style={{
//                     top: "50%",
//                     left: "50%",
//                     transform: "translate(-50%, -50%)",
//                     width: `${centralCircleDiameter}px`,
//                     height: `${centralCircleDiameter}px`,
//                     zIndex: 5,
//                     pointerEvents: "none",
//                   }}
//                 >
//                   <div
//                     className="flex flex-col items-center justify-center text-center"
//                     style={{
//                       width: `${centralTextMaxWidthPixels}px`,
//                     }}
//                   >
//                     <h3
//                       className={`${centralTitleTextSizeClass} font-semibold mb-1 text-gray-800`} // CHANGED: Text color for title
//                     >
//                       {activeNeed.title}
//                     </h3>
//                     <p
//                       className={`${centralDescriptionTextSizeClass} ${centralDescriptionLineHeightClass} text-gray-600`} // CHANGED: Text color for description
//                     >
//                       {activeNeed.description}
//                     </p>
//                   </div>
//                 </div>
//               )}

//               {itemPositions &&
//                 itemPositions.length > 0 &&
//                 securingNeedsData.map((item, index) => {
//                   const isActive = activeNeed && activeNeed.id === item.id;
//                   const position = itemPositions[index];
//                   if (!position) return null;
//                    const borderColorClass = isActive
//                     ? "border-white" 
//                     : "border-blue-300";
//                   return (
//                     <div
//                       key={item.id}
//                       onMouseEnter={() => handleButtonMouseEnter(item)}
//                       className={`absolute flex flex-col items-center justify-center
//                                 ${itemBaseSizeClass} ${itemPaddingClass} rounded-full shadow-xl
//                                 ${buttonTransitionClasses}
//                                 ${borderThicknessClass} ${borderColorClass}
//                                 focus:outline-none group cursor-pointer`}
//                       style={{
//                         left: position.left,
//                         top: position.top,
//                         backgroundColor: isActive
//                           ? "rgb(37, 99, 235)" // Tailwind blue-700 for active items
//                           : "#FFFFFF", // White for inactive items
//                         transform: `translate(-50%, -50%) ${
//                           isActive ? "scale(1.1)" : "scale(1)"
//                         }`,
//                         zIndex: isActive ? 15 : 10,
//                         boxSizing: "border-box",
//                       }}
//                       title={item.title}
//                       role="button"
//                       tabIndex={0}
//                       onFocus={() => handleButtonMouseEnter(item)}
//                     >
//                       <item.icon
//                         className={`${iconInButtonSizeClass} ${iconInButtonMarginBottom} transition-colors duration-300
//                                  ${
//                                    isActive
//                                      ? "text-white" // Icon color for active item
//                                      : "text-blue-600 group-hover:text-blue-700" // Icon color for inactive item
//                                  }`}
//                       />
//                       <span
//                         className={`${titleInButtonTextSizeClass} font-medium text-center transition-colors duration-300
//                                  ${
//                                    isActive
//                                      ? "text-white" // Text color for active item
//                                      : "text-blue-600 group-hover:text-blue-700" // Text color for inactive item
//                                  }`}
//                       >
//                         {item.title}
//                       </span>
//                     </div>
//                   );
//                 })}
//             </div>
//           </div>
//           {!isTabletView && (
//             <div className="lg:w-1/2 text-left lg:pl-10">
//               <motion.h2
//                 className="text-3xl font-bold text-white mb-4"
//                 variants={textContentVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 custom={0.2}
//               >
//                 Needs Of Cloud Security
//               </motion.h2>
//               <motion.p
//                 className="text-lg text-slate-200" /* Adjusted for better contrast on gradient */
//                 variants={textContentVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 custom={0.3}
//               >
//                 Azure cloud security lies in protecting sensitive data, ensuring
//                 compliance, and maintaining business continuity. With increasing
//                 cyber threats, robust security measures in Azure help safeguard
//                 cloud infrastructure, applications, and workloads.
//               </motion.p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NeedOfSecuring;