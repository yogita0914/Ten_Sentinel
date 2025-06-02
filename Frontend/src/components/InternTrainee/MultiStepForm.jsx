import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    option: "",
    degree: "",
    branch: "",
    year: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;
    const yearRegex = /^\d{4}$/;

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Name is required";

      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!emailRegex.test(formData.email)) {
        newErrors.email = "Invalid email format";
      }

      if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
      } else if (!phoneRegex.test(formData.phone)) {
        newErrors.phone = "Phone number must be 10 digits";
      }
    }

    if (step === 2) {
      if (!formData.option.trim()) newErrors.option = "Option is required";
    }

    if (step === 3) {
      if (!formData.degree.trim()) newErrors.degree = "Degree is required";
      if (!formData.branch.trim()) newErrors.branch = "Branch is required";

      if (!formData.year.trim()) {
        newErrors.year = "Year is required";
      } else if (!yearRegex.test(formData.year)) {
        newErrors.year = "Year must be a 4-digit number";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      console.log("Form Submitted:", formData);
      setIsSubmitted(true);

      // Redirect to step 1 after 3 seconds
      setTimeout(() => {
        setStep(1);
        setIsSubmitted(false); // Hide success message when redirected
        // Optionally reset the form
        setFormData({
          name: "",
          email: "",
          age: "",
          degree: "",
          branch: "",
          year: "",
        });
        setErrors({});
      }, 3000);
    }
  };

  const inputClass = (field) =>
    `w-full border px-3 py-2 rounded mt-0.5 outline-none transition-all duration-300 
  ${errors[field] ? "border-red-500" : "border-gray-300"} 
  bg-white text-black 
  hover:bg-blue-100 hover:border-blue-400 
  focus:ring-2 focus:ring-blue-500`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{
        boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)",
      }}
      transition={{ duration: 0.4 }}
      className="max-w-xl mx-auto p-6 bg-gray-200 rounded-lg shadow mt-20"
      // style={{ minHeight: "440px" }} // ← Add fixed height or minHeight
    >
      <h1 className="text-2xl font-bold mb-6 text-center text-black">
        Cyber Skills Registration
      </h1>
      <form onSubmit={handleSubmit} className="space-y-1 text-black">
        {step === 1 && (
          <>
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputClass("name")}
              />
              <p className="text-red-700 text-sm min-h-[20px]">
                {errors.name || ""}
              </p>
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={inputClass("email")}
              />
              <p className="text-red-700 text-sm min-h-[20px]">
                {errors.email || ""}
              </p>
            </div>
            <div>
              <label className="block font-medium">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={inputClass("phone")}
              />
              <p className="text-red-700 text-sm min-h-[20px]">
                {errors.phone || ""}
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <p className="mt-4 font-semibold">Are You a :</p>
            <div className="space-y-2">
              {["Student", "Working Professional", "Fresher", "Other"].map(
                (opt) => (
                  <label key={opt} className="block">
                    <input
                      type="radio"
                      name="option"
                      value={opt}
                      checked={formData.option === opt}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {opt}
                  </label>
                )
              )}
              <p className="text-red-700 text-sm min-h-[20px]">
                {errors.option || ""}
              </p>
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                Continue
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <div>
              <label className="block font-medium">Degree</label>
              <input
                type="text"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                className={inputClass("degree")}
              />
              <p className="text-red-700 text-sm min-h-[20px]">
                {errors.degree || ""}
              </p>
            </div>
            <div>
              <label className="block font-medium">Branch</label>
              <input
                type="text"
                name="branch"
                value={formData.branch}
                onChange={handleChange}
                className={inputClass("branch")}
              />
              <p className="text-red-700 text-sm min-h-[20px]">
                {errors.branch || ""}
              </p>
            </div>
            <div>
              <label className="block font-medium">Year of Passout</label>
              <input
                type="text"
                name="year"
                value={formData.year}
                onChange={handleChange}
                className={inputClass("year")}
              />
              <p className="text-red-700 text-sm min-h-[20px]">
                {errors.year || ""}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <button
                type="button"
                onClick={handleBack}
                className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            {isSubmitted && (
              <p className="mt-4 text-blue-500 text-center font-semibold">
                ✅ Form submitted successfully!
              </p>
            )}
          </>
        )}
      </form>
    </motion.div>
  );
};

export default MultiStepForm;
