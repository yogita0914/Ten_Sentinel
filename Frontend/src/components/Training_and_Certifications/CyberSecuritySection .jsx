import React from "react";
import training1 from "../../assets/Training_and_Certifications_images/training1.jpg";

const CyberSecuritySection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-6 md:gap-10">
      {/* Left: Image */}
      <div className="w-full md:w-1/2">
        <img
          src={training1}
          alt="Cybersecurity Training"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left gap-4">
        <h2 className="text-[14px] sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 leading-tight">
          Interested in learning about <br />
          <span className="text-[12px] sm:text-sm md:text-lg lg:text-xl font-bold text-indigo-700">
            Ethical Hacking / Cyber Security?
          </span>
        </h2>

        <p className="text-[11px] sm:text-sm md:text-base lg:text-lg font-bold text-gray-800">
          You’re @ the right place!
        </p>

        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">
          India alone would need one million Cyber Security professionals by
          2025, and we haven’t reached half yet.
        </p>

        <p className="text-[10px] sm:text-xs md:text-sm lg:text-base text-gray-700 leading-relaxed">
          We don’t just provide training, but we also provide you the experience
          that companies are looking for.
        </p>
      </div>
    </div>
  );
};

export default CyberSecuritySection;
