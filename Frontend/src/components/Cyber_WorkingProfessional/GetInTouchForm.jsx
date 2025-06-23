import React from "react";
import GetInTouch from "../../assets/GetInTouch.png"; // Correct path

const GetInTouchForm = () => {
  return (
    <section className="bg-gray-50 mb-8 px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Image: Only show on large devices */}
        <div className="w-full hidden lg:flex justify-center">
          <img 
            src={GetInTouch} 
            alt="Get In Touch Illustration" 
            className="w-full max-w-xl h-[500px] object-contain rounded-2xl "
          />
        </div>

        {/* Form Section */}
        <div className="w-full bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-3xl font-semibold text-center mb-4 leading-tight">
            Get In Touch <br />
            <span className="text-blue-600 font-bold">By filling this form ↓</span>
          </h2>

          <form className="space-y-4">
            {/* Input fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              <input
                type="email"
                placeholder="Company Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              <input
                type="number"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
            </div>

            {/* Call time selection */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                When do we call you? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {["9-12 PM", "12-3 PM", "3-6 PM"].map((time) => (
                  <button
                    type="button"
                    key={time}
                    className="border border-blue-500 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-500 hover:text-white transition"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Message box */}
            <textarea
              rows="4"
              placeholder="Please outline the queries or issues you need help with!"
              className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
            ></textarea>

            {/* Submit button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white text-sm px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
              >
                SUBMIT FORM
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchForm;
