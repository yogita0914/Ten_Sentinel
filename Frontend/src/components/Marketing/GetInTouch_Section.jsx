import React, { useState } from "react";
import GetInTouch from "../../assets/GetInTouch.png";

const GetInTouch_Section = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    callTime: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Special handling for phone number to only allow digits
    if (name === "phone") {
      // Remove all non-digit characters
      const digitsOnly = value.replace(/\D/g, "");
      setFormData({ ...formData, [name]: digitsOnly });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCallTimeClick = (time) => {
    setFormData({ ...formData, callTime: time });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit mobile number";
    } else if (/^(\d)\1{9}$/.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.company.trim())
      newErrors.company = "Company name is required";
    if (!formData.callTime)
      newErrors.callTime = "Please select a preferred call time";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Form submitted successfully!");

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
        callTime: "",
      });
      setErrors({});
    }
  };

  return (
    <section id="contact" className="bg-gray-50 mb-8 px-4 py-8">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full hidden lg:flex justify-center">
          <img
            src={GetInTouch}
            alt="Get In Touch Illustration"
            className="w-full max-w-xl h-[500px] object-contain rounded-2xl"
          />
        </div>

        {/* Form Section */}
        <div className="w-full bg-white shadow-lg rounded-2xl p-6">
          <h2 className="text-3xl font-semibold text-center mb-4 leading-tight">
            Get In Touch <br />
            <span className="text-blue-600 font-bold">
              By filling this form ↓
            </span>
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Input Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 shadow-sm transition focus:outline-none focus:ring-blue-500 border-gray-300"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Company Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 shadow-sm transition focus:outline-none focus:ring-blue-500 border-gray-300"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="number"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 shadow-sm transition focus:outline-none focus:ring-blue-500 border-gray-300"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength="10"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 shadow-sm transition focus:outline-none focus:ring-blue-500 border-gray-300"
                />
                {errors.company && (
                  <p className="text-red-500 text-sm mt-1">{errors.company}</p>
                )}
              </div>
            </div>

            {/* Call Time */}
            <div>
              <label className="block font-medium text-gray-700 mb-2">
                When do we call you? <span className="text-red-500">*</span>
              </label>
              <div className="flex flex-wrap gap-2">
                {["9-12 PM", "12-3 PM", "3-6 PM"].map((time) => (
                  <button
                    type="button"
                    key={time}
                    onClick={() => handleCallTimeClick(time)}
                    className={`border px-4 py-2 rounded-full transition ${
                      formData.callTime === time
                        ? "bg-blue-500 text-white border-blue-500"
                        : "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
              {errors.callTime && (
                <p className="text-red-500 text-sm mt-1">{errors.callTime}</p>
              )}
            </div>

            {/* Message Box */}
            <div>
              <textarea
                name="message"
                rows="4"
                placeholder="Please outline the queries or issues you need help with!"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition cursor-pointer"
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

export default GetInTouch_Section;
