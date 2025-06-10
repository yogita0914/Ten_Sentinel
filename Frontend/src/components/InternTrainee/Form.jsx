import React, { useRef } from "react";
import { CircleX } from "lucide-react";
import broucher from '../../assets/InternTrainee/broucher.jpg'

const Form = ({ onClose }) => {
  const formRef = useRef();

  const closeForm = (e) => {
    if (formRef.current === e.target) {
      onClose();
    }
  };

  return (
    <div
      ref={formRef}
      onClick={closeForm}
       className="relative top-785 md:top-495 lg:top-420 left-0 w-full h-screen bg-gray-100/50 backdrop-blur-xs text-center flex justify-center items-center"
    >
      
      <div className="bg-gray-800 w-full max-w-sm rounded-lg shadow-xl p-5 relative">
        <div>
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-white hover:text-blue-400"
        >
          <CircleX size={17} />
        </button>

      </div>
        
        {/* Image */}
        <img
          src={broucher}
          alt="Brochure Preview"
          className="w-full h-45 object-cover rounded mb-3"
        />

        {/* Heading and Paragraph */}
        <h1 className="text-lg font-semibold mb-1 text-white text-center">
          Download the Brochure
        </h1>
        <p className="text-xs text-gray-100 mb-3 text-center">
          Check your email after submitting the form.
        </p>

        {/* Form */}
        <form className="space-y-3 text-left text-sm">
          <div>
            <label className="block font-medium mb-1 text-white">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-3 py-1.5 border border-gray-300 bg-gray-50 rounded text-sm"
              required
            />
          </div>

          <div>
            <label className="block font-medium mb-1 text-white">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-3 py-1.5 border bg-gray-50 border-gray-300 rounded text-sm"
              required
            />
          </div>

          <button
            type="submit"
            className=" mt-3 w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 text-sm"
          >
            Download Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;


