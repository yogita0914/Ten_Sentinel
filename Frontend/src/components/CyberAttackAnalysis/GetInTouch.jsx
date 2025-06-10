import React, { useState } from "react";
import GetInTouch from "../../assets/GetInTouch.png"; // Adjust the path as necessary

const GetInTouchForm = () => {
  return (
    <section className="bg-gray-50 mb-10" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Left illustration */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src={GetInTouch} 
            alt="FAQ Illustration" 
            className="hidden min-[769px]:block w-full h-[450px] object-cover rounded-lg"
          />
        </div>

        {/* Right form */}
        <div className="w-full lg:w-1/2 bg-white shadow-xl rounded-xl p-8">
          <h2 className="text-3xl font-semibold text-center mb-6">
            Get In Touch <br />
            <span className="text-blue-600 font-bold">By filling this form ↓</span>
          </h2>

          {/* Form */}
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                type="tel"
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
              <div className="flex gap-3 flex-wrap">
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
         <button
  type="submit"
  className="w-28 mx-auto block bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-sm"
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
