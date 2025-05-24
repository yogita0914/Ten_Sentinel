import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  LockOpenIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";
import ConsultationForm from "./ConsultationForm";

export default function FreeTrial() {
  const [isHovering, setIsHovering] = useState(false);
  const [isBreaking, setIsBreaking] = useState(false);
  const [isSecure, setIsSecure] = useState(false);

  // 🛠️ Modal and Form States (copied from Hero)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [helpMessage, setHelpMessage] = useState("");

  const isFormValid = name && email && companyName && helpMessage;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) return;

    // Reset form after submit
    setName("");
    setEmail("");
    setCompanyName("");
    setHelpMessage("");

    // Close modal
    closeModal();
  };



  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white z-50">
      <div className="container mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="inline-block mb-5"
          >
            <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full">
              No-Risk Assessment
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">
              Give it a try and secure yourself
            </span>
            <br />
            <span className="text-white">it's FREE</span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl px-6 py-8 sm:p-10 mb-10 shadow-lg border border-gray-700/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 mb-8">
              <motion.div
                animate={
                  isBreaking
                    ? {
                      x: [0, 5, -5, 0],
                      boxShadow: "0 0 15px rgba(239, 68, 68, 0.5)",
                    }
                    : {}
                }
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                onClick={() => {
                  setIsBreaking(true);
                  setTimeout(() => {
                    setIsBreaking(false);
                    setIsSecure(false);
                  }, 1000);
                }}
                className={`flex items-center ${isBreaking
                    ? "bg-red-500/20 border-red-500"
                    : "bg-gray-700 hover:bg-gray-600 border-gray-600"
                  } p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex-1 max-w-full md:max-w-md`}
              >
                <LockOpenIcon
                  className={`h-8 w-8 sm:h-10 sm:w-10 mr-4 ${isBreaking ? "text-red-500" : "text-red-400"
                    }`}
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    If we break in
                  </h3>
                  <p className="text-sm text-gray-300">
                    We'll report vulnerabilities with remediation steps
                  </p>
                </div>
              </motion.div>

              <motion.div
                animate={isHovering ? { scale: 1.1 } : { scale: 1 }}
                className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold"
              >
                OR
              </motion.div>

              <motion.div
                animate={
                  isSecure
                    ? {
                      x: [0, 5, -5, 0],
                      boxShadow: "0 0 15px rgba(16, 185, 129, 0.5)",
                    }
                    : {}
                }
                onClick={() => {
                  setIsSecure(true);
                  setTimeout(() => setIsSecure(false), 1000);
                }}
                className={`flex items-center ${isSecure
                    ? "bg-green-500/20 border-green-500"
                    : "bg-gray-700 hover:bg-gray-600 border-gray-600"
                  } p-4 sm:p-5 rounded-xl border transition-all cursor-pointer flex-1 max-w-full md:max-w-md`}
              >
                <LockClosedIcon
                  className={`h-8 w-8 sm:h-10 sm:w-10 mr-4 ${isSecure ? "text-green-500" : "text-green-400"
                    }`}
                />
                <div>
                  <h3 className="font-bold text-base sm:text-lg">
                    If we can't
                  </h3>
                  <p className="text-sm text-gray-300">
                    You pay nothing - confirmation of your security
                  </p>
                </div>
              </motion.div>
            </div>

            <p className="text-sm sm:text-base text-gray-300 mb-8">
              We ethically attempt to penetrate your systems. If successful, we
              provide detailed reports. If unsuccessful, you gain confidence in
              your security posture at no cost.
            </p>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(34, 211, 238, 0.5)",
              }}
              whileTap={{
                scale: 0.95,
                boxShadow: "0 5px 15px -5px rgba(34, 211, 238, 0.3)",
              }}
              onClick={openModal}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full font-medium sm:font-semibold text-xs sm:text-sm md:text-base shadow-sm sm:shadow-md inline-flex items-center cursor-pointer active:scale-[0.98] transition-all duration-100"
            >
              <ShieldCheckIcon className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-1.5" />
              <span className="whitespace-nowrap">START FREE TRIAL</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="absolute inset-0 bg-black/10 z-50 flex items-center justify-center p-4">
          <ConsultationForm
            name={name}
            email={email}
            companyName={companyName}
            helpMessage={helpMessage}
            isFormValid={isFormValid}
            closeModal={closeModal}
            handleSubmit={handleSubmit}
            setName={setName}
            setEmail={setEmail}
            setCompanyName={setCompanyName}
            setHelpMessage={setHelpMessage}
          />
        </div>
      )}
    </section>
  );
}
