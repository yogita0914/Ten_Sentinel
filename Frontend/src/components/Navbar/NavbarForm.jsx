import React, { useRef } from "react";
import { CircleX } from "lucide-react";
import { motion } from "framer-motion";
import email from "../../assets/InternTrainee/email.avif";

const NavbarForm = ({onClose}) => {
    const modalRef = useRef();

    const closeModal = (e) =>{
        if(modalRef.current === e.target){
            onClose();
        }
    }

  return (
    <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-gray-50/3 bg-opacity-30 backdrop-blur-md flex flex-col items-center">
      <div className=" bg-gray-50 w-100 h-80 m-5 mt-30 p-2 rounded-2xl flex flex-col items-center">
        <button 
        onClick = {onClose} 
        className="place-self-end cursor-pointer">
          <CircleX size={20}/>
        </button>
        <div>
          <h1 className="text-center text-2xl font-bold text-gray-800">
            Have any questions ?
          </h1>
          <p className=" text-center text-lg font-medium text-gray-600 mb-2">
            Get in touch with right now !
          </p>
        </div>
        <div className="w-60 h-40 mb-2 m-3 flex justify-center">
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
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition w-full max-w-[180px] text-center"
            >
              Email Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default NavbarForm;
