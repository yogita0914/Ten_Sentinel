import { CloudIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      <style jsx global>{`
        /* --- KEYFRAMES (Keep your existing keyframes) --- */
        @keyframes localizedHoverRotate {
          0%,
          100% {
            transform: translate(0px, 0px) rotate(var(--initial-rotate));
          }
          25% {
            transform: translate(2px, -4px)
              rotate(calc(var(--initial-rotate) + 0.5deg));
          }
          50% {
            transform: translate(-1px, -2px)
              rotate(calc(var(--initial-rotate) - 0.3deg));
          }
          75% {
            transform: translate(-2px, 3px)
              rotate(calc(var(--initial-rotate) + 0.2deg));
          }
        }
        @keyframes localizedHoverLargeCloud {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(-4px, -3px) scale(1.006) rotate(-0.1deg);
          }
          50% {
            transform: translate(2px, -6px) scale(1.012) rotate(0.05deg);
          }
          75% {
            transform: translate(3px, 1px) scale(1.004) rotate(0.1deg);
          }
        }
        @keyframes entryDriftTopLeft {
          0% {
            transform: translate(-40vw, -30vh)
              rotate(calc(var(--initial-rotate) - 45deg)) scale(0.6);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(var(--initial-rotate)) scale(1);
            opacity: 1;
          }
        }
        @keyframes entryDriftBottomRight {
          0% {
            transform: translate(38vw, 28vh)
              rotate(calc(var(--initial-rotate) + 45deg)) scale(0.6);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(var(--initial-rotate)) scale(1);
            opacity: 1;
          }
        }
        @keyframes entryDriftLargeCloud {
          0% {
            transform: translate(-20vw, 15vh) rotate(-15deg) scale(0.5);
            opacity: 0;
          }
          100% {
            transform: translate(0, 0) rotate(0deg) scale(1);
            opacity: 1;
          }
        }
        .animate-enter-then-hover-top-left {
          animation: entryDriftTopLeft 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1
              forwards,
            localizedHoverRotate 6s ease-in-out 3s infinite alternate;
        }
        .animate-enter-then-hover-bottom-right {
          animation: entryDriftBottomRight 3.3s
              cubic-bezier(0.25, 0.46, 0.45, 0.94) 1 forwards,
            localizedHoverRotate 6s ease-in-out 3.3s infinite alternate;
        }
        .animate-enter-then-hover-large-cloud {
          animation: entryDriftLargeCloud 3.5s
              cubic-bezier(0.165, 0.84, 0.44, 1) 1 forwards,
            localizedHoverLargeCloud 7s ease-in-out 3.5s infinite alternate;
        }

        /* Add smooth scrolling to the HTML element */
        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 text-white py-20 px-4 sm:px-6 lg:px-8 min-h-[100vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          {/* ... decorative elements ... */}
          <CloudIcon
            className="absolute left-10 top-10 w-48 h-48 text-purple-400 transform -rotate-12 animate-enter-then-hover-top-left"
            style={{ "--initial-rotate": "-12deg" }}
          />
          <CpuChipIcon
            className="absolute right-10 bottom-10 w-32 h-32 text-teal-400 transform rotate-12 animate-enter-then-hover-bottom-right"
            style={{ "--initial-rotate": "12deg" }}
          />
          <div className="absolute left-20 top-1/2 h-1 w-1/3 bg-teal-500/30 transform -translate-y-1/2 -rotate-6"></div>
          <div className="absolute left-24 top-1/2 h-1 w-2/5 bg-purple-500/30 transform  translate-y-4 rotate-3"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center md:text-left w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:col-start-2">
              {" "}
              {/* Text content on the right for md+ */}
              <motion.h1
                className="mt-15
                           text-3xl          // Base for < sm
                           sm:text-4xl        // For sm to < md
                           md:text-4xl        // REDUCED for md to < lg (2.25rem / 36px)
                           lg:text-6xl        // For lg+
                           font-extrabold tracking-tight
                           leading-tight      
                           md:leading-tight   // Specifically for md if it wraps
                           lg:leading-normal  // Revert to normal leading for larger text
                           "
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                custom={0.2}
              >
                Azure Penetration Test
              </motion.h1>
              <motion.p
                className="mt-6
                           text-base         // Base for < sm
                           sm:text-lg        // For sm+
                           text-indigo-100 max-w-xl mx-auto md:mx-0"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                custom={0.4}
              >
                The Ten Sentinel Azure Penetration Testing service is designed
                to proactively identify, analyze, and remediate security
                vulnerabilities within your Azure cloud infrastructure.
                Leveraging deep expertise in cloud security and Microsoft
                Azure’s native tools, Ten Sentinel provides a comprehensive
                assessment that mimics real-world attack scenarios.
              </motion.p>
              <motion.div
                className="mt-10"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                custom={0.6}
              >
                <a
                  href="#contact" /* MODIFIED: Changed href to point to the section ID "contact" */
                  className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300"
                >
                  Talk to Our Expert!
                </a>
              </motion.div>
            </div>

            <div className="hidden md:block md:col-start-1 md:row-start-1">
              {/* ... decorative SVG ... */}
              <div className="relative flex justify-center items-center h-full animate-enter-then-hover-large-cloud">
                <svg
                  viewBox="0 0 200 120"
                  className="w-full h-auto max-w-md mx-auto text-purple-500 fill-current opacity-60"
                >
                  <path d="M100 20 C60 20 40 50 40 70 C20 70 10 90 30 100 C40 115 70 120 100 110 C130 120 160 115 170 100 C190 90 180 70 160 70 C160 50 140 20 100 20 Z" />
                </svg>
                <div className="absolute bottom-[20%] left-1/3 w-2 h-16 md:h-20 bg-teal-400/70 rounded-t-full transform origin-bottom -rotate-12"></div>
                <div className="absolute bottom-[15%] left-1/2 w-2 h-20 md:h-24 bg-teal-400/70 rounded-t-full transform origin-bottom"></div>
                <div className="absolute bottom-[20%] left-2/3 w-2 h-16 md:h-20 bg-teal-400/70 rounded-t-full transform origin-bottom rotate-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
