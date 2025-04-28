import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PaperAirplaneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-blue-100 to-cyan-200">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-2xl mx-auto text-center bg-white p-10 rounded-3xl shadow-xl relative overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -left-20 -top-20 w-40 h-40 bg-cyan-400 rounded-full opacity-30"
          />

          <motion.div
            animate={{
              x: [0, -40, 0],
              y: [0, 30, 0],
              rotate: [0, -5, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
            className="absolute -right-20 -bottom-20 w-48 h-48 bg-blue-400 rounded-full opacity-30"
          />

          <div className="relative z-10">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full mb-6"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium tracking-wider">NEWSLETTER</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              Stay Updated on Cyber Threats
            </h2>

            <p className="text-gray-600 mb-8">
              Get monthly security insights, threat intelligence, and exclusive offers
            </p>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-left"
            >
              <motion.div
                animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
                transition={{ type: 'spring', stiffness: 400 }}
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
              >
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                  {name && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
                    >
                      ✓
                    </motion.div>
                  )}
                </div>

                <div className="flex-1 relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className="w-full px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-sm sm:text-base"
                  />
                  {email && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
                    >
                      ✓
                    </motion.div>
                  )}
                </div>
              </motion.div>

              <motion.button
                disabled={!email || !name}
                whileHover={{
                  scale: email && name ? 1.05 : 1,
                  boxShadow: email && name ? "0 10px 25px -5px rgba(34, 211, 238, 0.3)" : "none"
                }}
                whileTap={{ scale: email && name ? 0.95 : 1 }}
                className={`w-full sm:w-auto px-5 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg flex items-center justify-center gap-1.5 sm:gap-2 transition-all ${email && name
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-sm sm:shadow-md'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  } mx-auto`}
              >
                SUBSCRIBE NOW
                <PaperAirplaneIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </motion.button>
            </motion.form>

            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}