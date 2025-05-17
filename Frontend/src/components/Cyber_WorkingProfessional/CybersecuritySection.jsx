// CybersecuritySection.jsx
import React from 'react';

const CybersecuritySection = () => {
  return (
    <div>
      {/* Features Section */}
      <div className="bg-blue-50 py-0">
        <div className="max-w-7xl mx-auto py-10 lg:py-18 md:py-13 px-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-2xl mb-3">👨‍💻</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Internship + Training</h3>
              <p className="text-gray-600 text-sm">Real-world experience</p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-2xl mb-3">🗓️</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">6 Months</h3>
              <p className="text-gray-600 text-sm">Comprehensive program</p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-2xl mb-3">👐</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Hands On Training</h3>
              <p className="text-gray-600 text-sm">Practical learning</p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-2xl mb-3">👨‍🏫</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Dedicated Mentor</h3>
              <p className="text-gray-600 text-sm">Personal guidance</p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-2xl mb-3">📚</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">Latest Curriculum</h3>
              <p className="text-gray-600 text-sm">Updated content</p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 text-center hover:shadow-md transition-shadow">
              <div className="text-blue-600 text-2xl mb-3">🎯</div>
              <h3 className="font-semibold text-lg text-gray-800 mb-1">New Batch Starts May</h3>
              <p className="text-gray-600 text-sm">Enroll now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
     <div className="bg-white mt-0 px-4 sm:px-6 lg:px-8 shadow-inner">
  <div className="max-w-7xl mx-auto lg:py-15 py-10 px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl  lg:text-4xl font-extrabold text-gray-900 mb-8 text-center whitespace-nowrap">
      Course Overview
    </h2>

    <div className="flex flex-col lg:flex-row gap-12 items-start">
      {/* Text Content */}
      <div className="lg:w-1/2 text-gray-700 space-y-5 text-base leading-relaxed">
        <p>
          Designed specifically for working professionals, our Cybersecurity course combines flexibility with industry-relevant skills to fit seamlessly into your schedule.
        </p>
        <p>
          You'll get hands-on training through real-world simulations, build practical skills, and connect with peers and industry experts through structured internship opportunities.
        </p>
        <p>
          Personalized 1:1 mentorship from experienced cybersecurity professionals ensures you gain the guidance and support needed to elevate your career with confidence.
        </p>
        <p className="text-700 font-semibold">
          Ready to future-proof your career?{' '}
          <span>Join our Online Cybersecurity Program today and take the next step toward becoming a certified expert.</span>
        </p>
      </div>

      {/* Video Embed */}
      <div className="w-full lg:w-1/2">
        <div className="relative overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="w-full h-64 sm:h-80"
            src="https://www.youtube.com/embed/_DVVNOGYtmU?start=616"
            title="Cybersecurity Intern Trainee Program Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>

    </div>
  </div>
</div>

    </div>
  );
};

export default CybersecuritySection;
