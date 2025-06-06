import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const PopupForm = ({
  name,
  email,
  phone,
  isFormValid,
  closeModal,
  handleSubmit,
  setName,
  setEmail,
  setPhone,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="relative w-[90vw] max-w-xl bg-white rounded-2xl shadow-2xl"
    >
      {/* Close Button */}
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>

      {/* Form Content */}
      <div className="p-6 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-2">
          GET YOUR FREE WEB APPLICATION VAPT SAMPLE REPORT
        </h2>
        <p className="text-base sm:text-lg text-gray-600 text-center mb-6">
          Please check your email for the sample report
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-3 rounded-full border text-black border-gray-300 text-sm sm:text-base focus:ring-2 focus:ring-cyan-500 outline-none"
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

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 rounded-full text-black border border-gray-300 text-sm sm:text-base focus:ring-2 focus:ring-cyan-500 outline-none"
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

          {/* Phone Number */}
          <div className="relative">
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-5 py-3 rounded-full text-black border border-gray-300 text-sm sm:text-base focus:ring-2 focus:ring-cyan-500 outline-none"
            />
            {phone && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
              >
                ✓
              </motion.div>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <motion.button
              disabled={!isFormValid}
              whileHover={{
                scale: isFormValid ? 1.05 : 1,
                boxShadow: isFormValid
                  ? "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
                  : "none",
              }}
              whileTap={{ scale: isFormValid ? 0.95 : 1 }}
              type="submit"
              className={`w-full px-8 py-3 flex items-center justify-center gap-2 text-white font-semibold rounded-full transition-all ${isFormValid
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-lg"
                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
            >
              Submit Form
              <PaperAirplaneIcon className="h-5 w-5" />
            </motion.button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default PopupForm;