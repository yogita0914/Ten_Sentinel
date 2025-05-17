import React from 'react';
import MultiStepForm from './MultiStepForm'; // import your component

const FormSection = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 md:px-6"
      style={{
        backgroundImage:
          "url('https://cdn.vectorstock.com/i/500p/00/37/padlock-concept-cyber-security-protection-vector-47170037.jpg')",
      }}
    >
      <div className="p-6 md:p-4 sm:p-10 grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-7xl mt-8">
        {/* Left Column */}
        <div className="text-white flex flex-col justify-center space-y-4 text-center md:text-left mt-10 md:pr-8 md:mt-18">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-snug">
            Start Your Career in Cyber Security
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold">Begin your journey now!</h2>
          <p className="text-lg md:text-md lg:text-xl">
            We’re offering more than just Cyber Security training — it’s a complete package of Training + Internship + Certification in one program.
          </p>
          <p className="text-md md:text-sm lg:text-lg">
            This remote paid training gives you real-time exposure, hands-on projects, and the chance to gain practical experience guided by experts.
          </p>
          <p className="text-md md:text-sm lg:text-lg">
            Whether you're a student or job seeker, this is your opportunity to gain skills, build your resume, and step confidently into a career.
          </p>
        </div>

        {/* Right Column (Form Component) */}
        <div className="w-full max-w-lg mx-auto">
          <MultiStepForm />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
