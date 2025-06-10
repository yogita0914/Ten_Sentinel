import React, { forwardRef } from "react";
import { motion } from "framer-motion";
import contact from '../../assets/PhishingSimulation/contact.png';

const ContactUs = forwardRef((ref) => {
  return (
    <div id='contact' className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4 bg-gray-100">
      {/* Left Side - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src= {contact}
          alt="Contact Illustration"
          className="max-w-[90%] h-full md:max-w-full"
        />
      </div>

      {/* Right Side - Contact Form */}
      <motion.div
        className="w-full md:w-1/2 max-w-sm p-6 bg-white rounded-2xl shadow-xl transition duration-300 border border-gray-300 relative"
        ref={ref}
        whileHover={{
          boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
          scale: 1.02,
        }}
      >
        {/* Shiny border animation */}
        <div className="absolute inset-0 rounded-2xl pointer-events-none z-[-1] group-hover:animate-pulse border border-blue-400"></div>

        <h2 className="text-xl font-bold text-center mb-4">Contact Us</h2>
        <form className="space-y-3 text-sm">
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              inputMode="numeric"
              maxLength="10"
              placeholder="Phone Number"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              rows="3"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Your message..."
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white cursor-pointer py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
});

export default ContactUs;
