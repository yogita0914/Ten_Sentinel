import React, { useState, useRef } from "react";
import Accordions from "./Module";
import Form from "./Form";

const ProgramCurriculum = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div className="relative w-full">
      <div className="text-center px-4 py-10 bg-white">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">
          Welcome to Ten Sentinel
        </h1>
        <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl mb-2">
          We provide a very unique Industry Oriented Curriculum from basics to
          an advanced level.
        </p>
        <p className="text-gray-700 max-w-4xl mx-auto text-base sm:text-lg lg:text-xl">
          The training covers 12 Modules which are divided into 3 Chapters –
          Basic, Advanced and Specialization.
        </p>
      </div>

      <div className="px-4 sm:px-6 lg:px-12">
        <Accordions />
      </div>

      <div className="flex flex-col items-center space-y-6 px-4 py-10">
        <button
          onClick={handleShowForm}
          className="px-6 py-3 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700 font-bold text-sm sm:text-base"
        >
          DOWNLOAD BROCHURE
        </button>

        {showForm && (
          <div className="absolute inset-0 bg-black/10 z-50 flex items-center justify-center p-4">
            <Form onClose={handleCloseForm} />
          </div>
        )}
        <p className="text-center font-semibold text-gray-700 pt-4 px-4 text-sm sm:text-base">
          *Download the brochure to better understand the course curriculum,
          structure and pricing structure of the training program.
        </p>
      </div>
    </div>
  );
};

export default ProgramCurriculum;
