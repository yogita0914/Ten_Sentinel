import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, ShieldCheckIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-16 md:py-24 lg:py-28 mt-3">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      </div>

      {/* Floating security icons - reduced number for mobile */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            x: [0, i % 2 === 0 ? 15 : -15, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 10 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
          className={`absolute ${i % 2 === 0 ? 'text-blue-400' : 'text-indigo-400'} opacity-30 hidden sm:block`}
          style={{
            top: `${10 + (i * 10)}%`,
            left: `${5 + (i * 10)}%`,
            fontSize: `${1 + (i * 0.2)}rem`
          }}
        >
          <LockClosedIcon className="h-6 w-6 md:h-8 md:w-8" />
        </motion.div>
      ))}

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-1 md:px-5 md:py-2 mb-4 md:mb-6 border border-white/20"
          >
            <ShieldCheckIcon className="h-4 w-4 md:h-5 md:w-5 mr-2 text-cyan-300" />
            <span className="text-xs md:text-sm font-medium tracking-wider">Your Cyber Security is Our Priority👍</span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-6 md:mb-8 leading-snug md:leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              We are the Cyber Security Experts
            </span>
            <br className="hidden sm:block" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Helping you stay ahead of the Curve!
            </span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 mb-8 md:mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We provide Consultation, Training and Cyber Security Services.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-base sm:text-lg flex items-center justify-center transition-all duration-300 shadow-lg"
            >
              Get FREE Consultation
              <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Animated floating shield - hidden on mobile */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute right-4 sm:right-10 top-1/2 -translate-y-1/2 hidden lg:block"
        >
          <svg width="200" height="200" viewBox="0 0 300 300" fill="none" className="w-[150px] h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[300px] xl:h-[300px]">
            <motion.path
              d="M150 25L50 50V125C50 187.5 150 275 150 275C150 275 250 187.5 250 125V50L150 25Z"
              stroke="url(#shieldGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 1 }}
              fill="none"
            />
            <motion.path
              d="M150 100V175"
              stroke="url(#shieldGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 2.5 }}
            />
            <motion.path
              d="M125 150H175"
              stroke="url(#shieldGradient)"
              strokeWidth="8"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
            />
            <defs>
              <linearGradient id="shieldGradient" x1="150" y1="25" x2="150" y2="275" gradientUnits="userSpaceOnUse">
                <stop stopColor="#22D3EE" />
                <stop offset="1" stopColor="#3B82F6" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;