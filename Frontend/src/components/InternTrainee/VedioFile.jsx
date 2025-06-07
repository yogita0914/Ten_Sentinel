import React from "react";
import { Link } from "react-router-dom";

const VedioFile = () => {
  return (
    <div className="w-full">
      {/* Video Section */}
      <div className="my-16 px-4 sm:px-6 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold mb-6">
          Explore Our Cyber Security Training
        </h1>

        <div className="flex justify-center mb-6">
          <div className="w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/MQfoZkQqfvg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>

        <Link to="/">
          <button className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white text-sm lg:text-lg md:text-lg font-semibold py-2 px-6 rounded-lg shadow">
            Looking for Certified Hacker Course
          </button>
        </Link>
      </div>

      {/* Background Banner Section */}
      <div
        className="relative bg-cover bg-center min-h-[320px] md:min-h-[400px] px-4 sm:px-8 flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://t4.ftcdn.net/jpg/03/58/10/87/360_F_358108785_rNJtmort9m65M3pft5swd7lnKJcTCB8u.jpg')",
        }}
      >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-60"></div> */}

        <div className="relative z-10 space-y-4 max-w-5xl px-4">
          <h1 className="text-white text-lg lg:text-3xl md:text-2xl  font-semibold">
            This is a Job-Oriented Program wherein you would be either promoted
            in our company with a fixed stipend or assisted for jobs outside.
          </h1>
          <h1 className="text-white text-lg lg:text-3xl md:text-2xl font-semibold">
            At the end, you would have a training certificate and an experience
            certificate to kick start your career further.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default VedioFile;
