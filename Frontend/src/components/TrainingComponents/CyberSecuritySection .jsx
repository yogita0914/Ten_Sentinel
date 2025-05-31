
import React from "react";
import training1 from "../../assets/TrainingPage_Images/training1.jpg";

const CyberSecuritySection = () => {
  return (
    <>
      <style>
        {`
          /* Custom styles for screen sizes between 768px and 820px */
          @media (min-width: 768px) and (max-width: 820px) {
            .container-md-padding {
              padding-left: 1rem !important;
              padding-right: 1rem !important;
              gap: 1rem !important;
            }

            .image-md-width {
              width: 60% !important; /* increased image width */
              flex-shrink: 0;
            }

            .text-md-width {
              width: 40% !important; /* reduced text width */
            }

            .heading-md {
              font-size: 1.375rem !important; /* ~22px */
            }

            .subheading-md {
              font-size: 1rem !important; /* ~16px */
            }

            .paragraph-md {
              font-size: 0.875rem !important; /* ~14px */
            }
          }
        `}
      </style>

      <div
        className="max-w-8xl mx-auto px-6 sm:px-10 md:px-28 py-12 flex flex-col md:flex-row items-center justify-between w-full container-md-padding"
        style={{ gap: "2rem" }}
      >
        {/* Left: Image */}
        <div className="w-full md:w-1/2 image-md-width">
          <img
            src={training1}
            alt="Cybersecurity Training"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full md:w-1/2 text-md-width flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight heading-md">
            Interested in learning about <br />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-indigo-700 subheading-md">
              Ethical Hacking / Cyber Security?
            </span>
          </h2>

          <p className="pt-6 text-base sm:text-lg md:text-xl font-bold text-gray-800 subheading-md">
            You’re @ the right place!
          </p>

          <p className="pt-6 text-sm sm:text-base md:text-lg font-normal text-gray-700 leading-relaxed paragraph-md">
            India alone would need one million Cyber Security professionals by
            2025, and we haven’t reached half yet.
          </p>

          <p className="pt-6 text-sm sm:text-base md:text-lg font-normal text-gray-700 leading-relaxed paragraph-md">
            We don’t just provide training, but we also provide you the
            experience that companies are looking for.
          </p>
        </div>
      </div>
    </>
  );
};

export default CyberSecuritySection;
