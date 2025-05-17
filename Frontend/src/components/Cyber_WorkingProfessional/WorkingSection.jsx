import React from 'react';
import {
  FaShieldAlt,
  FaUserGraduate,
  FaChartLine,
  FaGlobe,
  FaNetworkWired,
  FaExchangeAlt,
  FaTools,
  FaUserSecret,
  FaBug,
  FaLightbulb
} from 'react-icons/fa';

const benefits = [
  {
    icon: <FaShieldAlt className="text-3xl text-blue-600" />,
    title: 'Enhance Security Expertise'
  },
  { icon: <FaUserGraduate className="text-3xl text-blue-600" />, title: 'Upskill with Certification' },
  { icon: <FaChartLine className="text-3xl text-blue-600" />, title: 'Climb the Career Ladder' },
  { icon: <FaGlobe className="text-3xl text-blue-600" />, title: 'Global Work Opportunities' },
  { icon: <FaNetworkWired className="text-3xl text-blue-600" />, title: 'Expand Professional Network' },
  { icon: <FaExchangeAlt className="text-3xl text-blue-600" />, title: 'Easier Role Transition' },
  { icon: <FaTools className="text-3xl text-blue-600" />, title: 'Hands-on Industry Tools' },
  { icon: <FaUserSecret className="text-3xl text-blue-600" />, title: 'Real Ethical Hacking Exposure' },
  { icon: <FaBug className="text-3xl text-blue-600" />, title: 'Advanced Threat Detection' },
  { icon: <FaLightbulb className="text-3xl text-blue-600" />, title: 'Strategic Problem Solving' }
];

const WorkingSection = () => {
  return (
  <section className="bg-[#DBEAFE] py-10">

      <div className="max-w-7xl mx-auto  py-1 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
          Benefits of Cyber Security Course for <br className="sm:hidden" />
          Working Cyber Security Professionals
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-all w-full h-full min-h-[140px]"
            >
              <div className="mb-3 bg-blue-100 w-12 h-12 flex items-center justify-center rounded-full">
                {item.icon}
              </div>
              <h3 className="text-xs sm:text-sm font-medium text-gray-800 flex-1 flex items-center justify-center text-center break-words">
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-gray-700 text-base sm:text-lg font-medium">
          Unlock your full potential with in-demand cybersecurity skills!
        </p>
      </div>
    </section>
  );
};

export default WorkingSection;
