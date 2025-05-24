import React from "react";
import { motion } from "framer-motion";

export const ContactSection = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="contact">
    {/* Background gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-white-600 to-white-700 opacity-90 -z-10"></div>

    <div className="max-w-7xl mx-auto">
      {/* Flex layout: column on small, row on large */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center justify-center">
        {/* IMAGE - Hidden on small screens */}
        <motion.div
          className="hidden md:block w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <img
            className="w-full h-auto object-contain rounded-xl shadow-md"
            src="https://img.freepik.com/premium-photo/logo-web-design-is-shown-white-background_939033-77071.jpg?ga=GA1.1.1858429720.1745583539&semt=ais_hybrid&w=740"
            alt="Contact Illustration"
          />
        </motion.div>

        {/* FORM - Always visible, centered when image hidden */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 mx-auto">
            <h3 className="text-xl sm:text-2xl text-center font-bold text-gray-900 mb-6">
              Get Started Today
            </h3>

            <form className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name:
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your security needs"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-40 text-sm md:text-base bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium py-3 px-6 rounded-lg hover:shadow-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300"
                >
                  Submit Form
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);
