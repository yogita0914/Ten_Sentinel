import React from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

const ConsultationForm = ({
  name,
  email,
  companyName,
  helpMessage,
  isFormValid,
  closeModal,
  handleSubmit,
  setName,
  setEmail,
  setCompanyName,
  setHelpMessage,
}) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 w-full max-w-lg md:max-w-md relative overflow-hidden"
        // style={{ marginTop: '50px' }}
      >
        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Form */}
        <div className="relative z-10">
          <h2 className="text-2xl text-black sm:text-3xl font-extrabold text-center mb-2">Get FREE Consultation</h2>
          <p className="text-lg sm:text-xl text-gray-500 text-center mb-6">Just fill up the form below...</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col gap-4">
              {/* Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-5 py-3 text-gray-900 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm sm:text-base"
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

              {/* Company Email */}
              <div className="relative">
                <input
                  type="email"
                  placeholder="Company Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 text-gray-900 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm sm:text-base"
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

              {/* Company Name */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-5 py-3 text-gray-900 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm sm:text-base"
                />
                {companyName && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
                  >
                    ✓
                  </motion.div>
                )}
              </div>

              {/* Help Message */}
              <div className="relative">
                <textarea
                  placeholder="How can we help you?"
                  value={helpMessage}
                  onChange={(e) => setHelpMessage(e.target.value)}
                  className="w-full px-5 py-3 text-gray-900 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm sm:text-base h-28 resize-none"
                />
                {helpMessage && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
                  >
                    ✓
                  </motion.div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              disabled={!isFormValid}
              whileHover={{
                scale: isFormValid ? 1.05 : 1,
                boxShadow: isFormValid ? "0 10px 25px -5px rgba(34, 211, 238, 0.3)" : "none",
              }}
              whileTap={{ scale: isFormValid ? 0.95 : 1 }}
              className={`w-full px-8 py-3 rounded-full font-bold text-base flex items-center justify-center gap-2 transition-all ${isFormValid
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              type="submit"
            >
              Submit Form
              <PaperAirplaneIcon className="h-5 w-5" />
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>

  );
};

export default ConsultationForm;