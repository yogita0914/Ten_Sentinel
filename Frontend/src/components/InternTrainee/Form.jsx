import React, { useRef } from "react";
import { CircleX } from "lucide-react";
import Brochure from '../../assets/InternTrainee/broucher.jpg'

const Form = ({ onClose }) => {
  return (
    <div className="bg-gray-800 w-full max-w-sm rounded-lg shadow-xl p-5 relative">
      <button
        onClick={onClose}
        className="absolute top-1 right-1 text-white hover:text-blue-400"
      >
        <CircleX size={17} />
      </button>

      <img
        src={Brochure}
        alt="Brochure Preview"
        className="w-full h-45 object-cover rounded mb-3"
      />

      <h1 className="text-lg font-semibold mb-1 text-white text-center">
        Download the Brochure
      </h1>
      <p className="text-xs text-gray-100 mb-3 text-center">
        Check your email after submitting the form.
      </p>

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
          className="mt-3 w-full bg-blue-600 text-white py-1.5 rounded hover:bg-blue-700 text-sm"
        >
          Download Now
        </button>
      </form>
    </div>
  );
};
export default Form;