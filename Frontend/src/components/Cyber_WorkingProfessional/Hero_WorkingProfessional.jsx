import React, { useState } from 'react';

import Working_Professional_img from '../../assets/Working_Professional_img.jpg';

const Hero_WorkingProfessional = ({ scrollToForm }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col mt-10 lg:mt-20 md:mt-18 lg:flex-row gap-12 items-center">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <p className="text-sm sm:text-lg font-medium text-blue-200">
              Flexible, expert-led Cyber Security Course designed for busy working professionals.
            </p>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Upskill & Boost Your Income with Our Advanced Cybersecurity Course.
            </h1>

            <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
              <button
                className="bg-white text-blue-800 hover:bg-blue-100 font-bold py-3 px-6 rounded-md transition duration-200"
                onClick={() => setIsModalOpen(true)}
              >
                Download Brochure
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-md transition duration-200"
                onClick={scrollToForm}
              >
                ENROLL NOW
              </button>
            </div>
          </div>

          {/* Right side - Online Image */}
          <div className="lg:w-1/2">
            <img
              src={Working_Professional_img}
              alt="Online Training"
              className="w-full h-auto rounded-lg shadow-xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 relative flex flex-col md:flex-row">
            {/* Close button */}
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              ✕
            </button>

            {/* Left side - Image */}
            <div className="md:w-1/2 hidden md:block">
              <img
                src={Working_Professional_img}
                alt="Brochure"
                className="w-full h-full object-cover rounded-l-lg"
              />
            </div>

            {/* Right side - Form */}
            <div className="md:w-1/2 w-full px-4 py-6">
              <h2 className="text-lg sm:text-xl font-bold text-center text-gray-800 mb-2">
                FILL THE FORM TO DOWNLOAD THE BROCHURE!
              </h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-medium mb-1">
                    Want Callback from our Course Advisors? <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-4">
                    <label className="flex items-center">
                      <input type="radio" name="callback" value="Yes" className="mr-2" required />
                      Yes
                    </label>
                    <label className="flex items-center">
                      <input type="radio" name="callback" value="No" className="mr-2" required />
                      No
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded mt-2"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero_WorkingProfessional;
