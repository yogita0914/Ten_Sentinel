import React from "react";
import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 px-6 relative overflow-hidden" id="contact">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90 -z-10"></div>
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 -z-10">
        <svg width="100%" height="100%">
          <pattern id="pattern-hex" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <rect id="pattern-hex-rect" x="0" y="0" width="1" height="1" fill="none" stroke="white" strokeWidth="0.2"></rect>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-hex)"></rect>
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            
            <h2 className="text-xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to secure your cloud infrastructure?
            </h2>
            
            <p className="text-sm md:text-lg text-gray-500 mb-8 max-w-lg">
              Get enterprise-grade cloud security that protects your business 24/7. Our experts are ready to help you implement a comprehensive security strategy.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
                <span>Comprehensive security assessment</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
                <span>24/7 monitoring and threat detection</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
                <span>Regular security updates and patches</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-blue-200 flex-shrink-0" />
                <span>Dedicated security support team</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Enter your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="Tell us about your security needs"
                  ></textarea>
                </div>
                
                <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-62 text-sm md:text-lg bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
                >
                  Secure Your Cloud Now
                </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;