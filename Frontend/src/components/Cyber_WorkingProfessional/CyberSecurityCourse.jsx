import React from 'react';
import { CheckCircle, Users, BookOpen, Laptop2, TrendingUp, Repeat } from 'lucide-react';

const CyberSecurityCourse = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* WHO IS THIS COURSE FOR */}
      <h2 className="text-center text-2xl font-bold mb-12 text-gray-800">Who Should Enroll?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            title: 'IT & Software Professionals',
            description: 'Enhance your career by adding in-demand cybersecurity expertise to your skill set.'
          },
          {
            title: 'Cybersecurity Specialists',
            description: 'Take your existing knowledge to the next level with advanced security tactics and strategies.'
          },
          {
            title: 'Aspiring Cybersecurity Experts',
            description: 'New to the field? Get the right foundation to launch your cybersecurity career confidently.'
          },
          {
            title: 'Career Switchers',
            description: 'Pivot into cybersecurity from non-technical backgrounds with step-by-step guidance.'
          },
          {
            title: 'Business Owners & Leaders',
            description: 'Understand cybersecurity’s business impact and protect your organization from modern threats.'
          },
          {
            title: 'Senior Executives',
            description: 'Stay informed on security best practices to make smarter strategic decisions.'
          }
        ].map((item, index) => (
          <div key={index} className="flex items-start p-5 border border-gray-200 rounded-xl shadow hover:shadow-lg transition-shadow bg-white">
            <CheckCircle className="text-green-500 w-8 h-8 mr-4 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* WHY JOIN */}
      <div className="bg-blue-100 mt-20 py-12 px-6 sm:px-8 lg:px-12 rounded-2xl">
        <h2 className="text-center text-2xl font-bold mb-12 text-gray-800">
          Why Choose Our Cybersecurity Program?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[
            {
              icon: <Users className="w-10 h-10 text-blue-600" />,
              title: ' Expert Community',
              description: 'Network with seasoned cybersecurity professionals globally.'
            },
            {
              icon: <BookOpen className="w-10 h-10 text-blue-600" />,
              title: ' Mentorship',
              description: '1:1 mentorship for 6 months to fast-track your growth.'
            },
            {
              icon: <Laptop2 className="w-10 h-10 text-blue-600" />,
              title: 'Hands-On Learning',
              description: 'Real-world projects & labs to sharpen your skills.'
            },
            {
              icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
              title: 'Boost Your Career',
              description: 'Gain credentials that open doors to high-paying roles.'
            },
            {
              icon: <Repeat className="w-10 h-10 text-blue-600" />,
              title: 'Smooth Career Switch',
              description: 'Tailored guidance to shift into cybersecurity seamlessly.'
            }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center p-5 bg-white rounded-xl shadow hover:shadow-lg transition-shadow">
              <div className="mb-4">{item.icon}</div>
              <h4 className="text-md font-semibold text-gray-900">{item.title}</h4>
              <p className="text-sm text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityCourse;
