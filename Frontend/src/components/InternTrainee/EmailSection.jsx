import React from "react";
import { motion } from "framer-motion";
import email from '../../assets/InternTrainee/email.avif';

const EmailSection = () => {
  return (
    <div className="w-full  px-4 py-10 flex flex-col gap-8 items-center">
      {/* Headings */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          Have any Questions or want more information about the Program?
        </h1>
        <p className="text-lg sm:text-xl font-medium text-gray-600">
          Get in touch with us right now!
        </p>
      </div>

      {/* Email Card */}
      <div className="w-full flex justify-center">
        <motion.div
          whileHover="hover"
          variants={{
            hover: {
              boxShadow: "0px 0px 20px rgba(59,130,246,0.5)",
              scale: 1.02,
              transition: { duration: 0.3 },
            },
          }}
          className="relative w-full max-w-sm bg-white rounded-xl overflow-hidden p-6 flex flex-col items-center justify-center border-2 border-gray-300"
        >
          {/* Shine overlay */}
          <motion.div
            variants={{
              hover: {
                x: ["-100%", "200%"],
                transition: { duration: 1, ease: "easeInOut" },
              },
            }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent pointer-events-none"
            style={{
              width: "50%",
              transform: "skewX(-20deg)",
              opacity: 0.5,
            }}
          />

          {/* Email logo */}
          <img
            src={email}
            alt="Email Icon"
            className="w-20 h-20 object-contain mb-3"
          />

          {/* Button */}
          <a
            href="mailto:info@entrepreneurshipnetwork.net"
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full max-w-[200px] text-center"
          >
            Email Us
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default EmailSection;
