import React from "react";
import GetInTouch from "../../assets/GetInTouch.png"; // Correct path

const GetInTouchForm = () => {
  return (
    <section className="bg-gray-50 mb-10 px-4 py-10" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        
        {/* Image: Only show on large devices */}
        <div className="w-full hidden lg:flex justify-center">
          <img 
            src={GetInTouch} 
            alt="Get In Touch Illustration" 
            className="w-full max-w-2xl h-[700px] object-contain rounded-2xl "
          />
        </div>

        {/* Form Section */}
        <div className="w-full bg-white shadow-2xl rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-center mb-6 leading-tight">
            Get In Touch <br />
            <span className="text-blue-600 font-extrabold">By filling this form ↓</span>
          </h2>

          <form className="space-y-6">
            {/* Input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              <input
                type="email"
                placeholder="Company Email"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
            </div>

            {/* Call time selection */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                When do we call you? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-3">
                {["9-12 PM", "12-3 PM", "3-6 PM"].map((time) => (
                  <button
                    type="button"
                    key={time}
                    className="border border-blue-500 text-blue-600 px-5 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Message box */}
            <textarea
              rows="5"
              placeholder="Please outline the queries or issues you need help with!"
              className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            ></textarea>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              SUBMIT FORM
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchForm;
