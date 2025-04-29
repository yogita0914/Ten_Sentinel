import React from 'react';

const AwarenessSection = () => {
  return (
    <div className="font-sans">
      {/* Top Stats Section */}
      <div className=" rounded-xl p-8 mx-4 my-8">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x">
              <div className="flex flex-col items-center justify-center p-8 hover:bg-blue-50 transition">
                <div className="text-4xl font-extrabold text-blue-600">100,000+</div>
                <div className="mt-2 text-gray-500 text-lg font-medium">Professionals Trained</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 hover:bg-blue-50 transition">
                <div className="text-4xl font-extrabold text-blue-600">500+</div>
                <div className="mt-2 text-gray-500 text-lg font-medium">Workshops Delivered</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 hover:bg-blue-50 transition">
                <div className="text-4xl font-extrabold text-blue-600">95%</div>
                <div className="mt-2 text-gray-500 text-lg font-medium">Client Satisfaction</div>
              </div>
              <div className="flex flex-col items-center justify-center p-8 hover:bg-blue-50 transition">
                <div className="text-4xl font-extrabold text-blue-600">60+</div>
                <div className="mt-2 text-gray-500 text-lg font-medium">Marketing Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center my-6">
        <a
          href="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded text-center"
        >
          Explore Our Latest Marketing Workshops
        </a>
      </div>

      {/* Awareness Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-10 px-4 py-6 bg-gray-100">
  {/* Left Card */}
  <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-5 sm:p-6 rounded-2xl text-center shadow-2xl w-full sm:w-[380px] md:w-[420px] h-[260px] relative flex flex-col justify-center transform hover:scale-105 transition-transform duration-300 ease-in-out">
    <h2 className="text-3xl sm:text-4xl font-extrabold tracking-wide">80%</h2>
    <p className="mt-3 text-base sm:text-lg font-medium leading-relaxed">
      of businesses lack a clear digital marketing strategy.
    </p>
    <div className="absolute top-3 right-3 w-7 h-7 border-2 border-white rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
    <div className="absolute bottom-3 left-3 w-7 h-7 border-2 border-white rounded-full flex items-center justify-center">
      <div className="w-2 h-2 bg-white rounded-full"></div>
    </div>
  </div>

  {/* Right Text */}
  <div className="max-w-md px-2">
    <h3 className="text-xl sm:text-2xl font-bold mb-3">Need marketing awareness? Let us help you grow!</h3>
    <p className="text-gray-700 mb-3 text-sm sm:text-base">
      Our marketing training programs are tailored to specific audiences, ensuring relevance and practical application in real-world scenarios.
    </p>
    <p className="font-semibold text-sm sm:text-base">We provide marketing training for:</p>
    <ul className="list-disc list-inside text-gray-600 mt-2 space-y-1 text-sm sm:text-base">
      <li>Startups</li>
      <li>Business Owners</li>
      <li>Marketing Professionals</li>
      <li>Students</li>
    </ul>
  </div>
</div>


      {/* Topics Section */}
      <div className="bg-gray-50 py-16 px-6">
  <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    
    {/* Left Text Section */}
    <div className="text-center md:text-left">
      <h2 className="text-4xl font-extrabold text-cyan-700 mb-4 leading-tight">
        The Awareness is provided on<br className="hidden md:block" />
        various basics and important topics <span className="text-cyan-600">including:</span>
      </h2>
      <p className="text-lg text-gray-600">
        Our sessions are designed to ensure practical understanding and safety for every digital user.
      </p>
    </div>

    {/* Right Topics List */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg text-gray-700">
      {[
        "Social Media Usage",
        "Smartphone Security",
        "Online Threats",
        "Online Safety Measures",
        "Cyber Law & Cyber Crime Studies",
        "Cyber Parenting",
        "Banking Security",
        "Employee Awareness",
      ].map((topic, index) => (
        <div key={index} className="flex items-center space-x-2">
          <span className="text-emerald-500 text-xl">✔</span>
          <span>{topic}</span>
        </div>
      ))}
    
    
    
    
    </div>

    
  </div>
</div>



    </div>
  );
};

export default AwarenessSection;
