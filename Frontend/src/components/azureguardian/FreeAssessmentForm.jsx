// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import {
//   PaperAirplaneIcon,
//   ChatBubbleOvalLeftEllipsisIcon,
// } from "@heroicons/react/24/outline";

// import Support from "../../assets/ContactUSPage/Support.jpg";

// const FreeAssessmentForm = () => {
//   // State for the form (extracted from the Contact component)
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // In a real app, you'd send this data to a backend
//     console.log("Form Submitted:", { name, email, message });
//     setSubmitted(true);
//     setName("");
//     setEmail("");
//     setMessage("");
//     // Hide the success message after 3 seconds
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <div>
//       {/* You might have other content for your FreeAssessmentForm above or below this section */}

//       {/* --- Extracted Contact Section Starts --- */}
//       {/* Add the id here */}
//       <div
//         id="contact-us-section"
//         className="flex justify-center items-stretch gap-8 px-8 py-12 flex-wrap"
//       >
//         {/* Left Image */}
//         <div className="flex-1 min-w-[300px] max-w-[500px] hidden md:block">
//           <motion.img
//             src={Support}
//             alt="Customer Support"
//             className="w-full h-full rounded-xl object-contain"
//             animate={{ y: [0, -10, 0] }}
//             transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
//           />
//         </div>

//         {/* Form */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true, margin: "-100px" }}
//           className="bg-[#f8f8f8] p-8 rounded-xl shadow-md flex-1 min-w-[300px] max-w-[500px] relative overflow-hidden"
//         >
//           {/* Animated Blobs */}
//           <motion.div
//             animate={{ x: [0, 50, 0], y: [0, -30, 0], rotate: [0, 5, 0] }}
//             transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
//             className="absolute -left-20 -top-20 w-40 h-40 bg-cyan-400 rounded-full opacity-30 -z-0"
//           />
//           <motion.div
//             animate={{ x: [0, -40, 0], y: [0, 30, 0], rotate: [0, -5, 0] }}
//             transition={{
//               duration: 18,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 3,
//             }}
//             className="absolute -right-20 -bottom-20 w-48 h-48 bg-blue-400 rounded-full opacity-30 -z-0"
//           />

//           <div className="relative z-10">
//             <motion.div
//               whileHover={{ scale: 1.05 }}
//               className="flex justify-center w-full mb-4"
//             >
//               <div className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 py-2 rounded-full">
//                 <ChatBubbleOvalLeftEllipsisIcon className="h-5 w-5 mr-2" />
//                 <span className="text-sm font-medium tracking-wider">
//                   GET IN TOUCH {/* Or keep "CONTACT US" if preferred */}
//                 </span>
//               </div>
//             </motion.div>

//             <p className="text-lg text-center mb-6 text-gray-500 sm:text-xl">
//               Have questions or need a free assessment? We’d love to hear from
//               you!
//             </p>

//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="flex flex-col gap-6">
//                 {/* Name */}
//                 <motion.div
//                   animate={name ? { scale: 1.03 } : { scale: 1 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   className="relative"
//                 >
//                   <input
//                     type="text"
//                     placeholder="Your Name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base transition-all"
//                     required
//                   />
//                   {name && (
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
//                     >
//                       ✓
//                     </motion.div>
//                   )}
//                 </motion.div>

//                 {/* Email */}
//                 <motion.div
//                   animate={email ? { scale: 1.03 } : { scale: 1 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   className="relative"
//                 >
//                   <input
//                     type="email"
//                     placeholder="Your Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     className="w-full px-5 py-3 rounded-full border border-gray-300 text-gray-900 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-sm sm:text-base transition-all"
//                     required
//                   />
//                   {email && (
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="absolute top-0 right-0 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full -mt-2 -mr-2"
//                     >
//                       ✓
//                     </motion.div>
//                   )}
//                 </motion.div>

//                 {/* Message */}
//                 <motion.div
//                   animate={message ? { scale: 1.03 } : { scale: 1 }}
//                   transition={{ type: "spring", stiffness: 300, damping: 20 }}
//                   className="relative"
//                 >
//                   <textarea
//                     placeholder="Your Message / Assessment Request"
//                     value={message}
//                     onChange={(e) => setMessage(e.target.value)}
//                     rows={4}
//                     className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all text-sm sm:text-base resize-y"
//                     required
//                   />
//                 </motion.div>
//               </div>

//               {/* Submit Button */}
//               <motion.button
//                 type="submit"
//                 disabled={!email || !name || !message}
//                 whileHover={{
//                   scale: email && name && message ? 1.05 : 1,
//                   boxShadow:
//                     email && name && message
//                       ? "0 10px 25px -5px rgba(34, 211, 238, 0.3)"
//                       : "none",
//                 }}
//                 whileTap={{ scale: email && name && message ? 0.95 : 1 }}
//                 className={`w-40 mx-auto block px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all ${
//                   email && name && message
//                     ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
//                     : "bg-gray-200 text-gray-400 cursor-not-allowed"
//                 }`}
//                 style={{ whiteSpace: "nowrap" }}
//               >
//                 Send Message <PaperAirplaneIcon className="h-5 w-5" />
//               </motion.button>

//               {submitted && (
//                 <motion.div
//                   initial={{ opacity: 0, y: 10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   transition={{ duration: 0.5 }}
//                   className="text-green-600 font-semibold text-center mt-2"
//                 >
//                   Request submitted successfully!
//                 </motion.div>
//               )}
//             </form>
//           </div>
//         </motion.div>
//       </div>
//       {/* --- Extracted Contact Section Ends --- */}
//     </div>
//   );
// };

// export default FreeAssessmentForm;


import React, { useState } from "react";
import GetInTouch from "../../assets/GetInTouch.png";

const FreeAssessmentForm = () => {
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
      const digitsOnly = value.replace(/\D/g, '');
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

    if (!formData.company.trim()) newErrors.company = "Company name is required";
    if (!formData.callTime) newErrors.callTime = "Please select a preferred call time";
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
            <span className="text-blue-600 font-bold">By filling this form ↓</span>
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
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
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
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-3 border rounded-lg focus:ring-2 shadow-sm transition focus:outline-none focus:ring-blue-500 border-gray-300"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength="10"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
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
                {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
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
              {errors.callTime && <p className="text-red-500 text-sm mt-1">{errors.callTime}</p>}
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
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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

export default FreeAssessmentForm;