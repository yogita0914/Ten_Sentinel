import React, { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";

const EmployeeTraining = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 text-center font-sans">
      {/* Header */}
      <header
  className="relative bg-cover bg-center flex flex-col items-center justify-center text-center text-white px-4 pt-36 pb-10"

        style={{
          backgroundImage:
            "linear-gradient(to bottom, #06b6d4, #3b82f6), url('/images/ET23.jpg')",
          backgroundBlendMode: "overlay",
        }}
      >
        <h1 className="text-3xl md:text-5xl font-bold mb-2 md:text-left">
          Employee Awareness & Training
        </h1>
        <p className="text-lg md:text-xl font-medium tracking-wide md:text-left !text-cyan-200 drop-shadow-md">
          Grow. Escalate. Learn
        </p>
      </header>

<section className="w-full bg-white">
  <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 text-center">
      Empower Your People to Protect Your Organization
    </h2>

    {/* Image ONLY visible at md (768px), stacked above text */}
    <div className="hidden md:block lg:hidden mb-10">
      <img
        src="./employee training images/ET32.png"
        alt="Training Session"
        className="rounded-lg shadow-lg w-full max-w-3xl object-cover mx-auto"
      />
    </div>

    {/* Side-by-side layout for lg and above */}
    <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-stretch">
      {/* Image */}
      <div className="flex justify-center h-full">
        <img
          src="/employee training images/ET32.png"
          alt="Training Session"
          className="rounded-lg shadow-lg w-full h-full max-w-3xl object-cover"
        />
      </div>

      {/* Content */}
      <div className="w-full text-left flex flex-col justify-center h-full">
        <p className="text-lg text-gray-700 mb-4">
          Regardless of how sophisticated your organization’s security systems are, the human factor always introduces potential vulnerabilities. In fact, human error continues to be a leading cause of data breaches.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Ten Sentinel offers a comprehensive approach to cybersecurity education through both general end-user awareness and role-based training, helping your employees stay informed and vigilant.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          By fostering a culture of security awareness, you enable employees to become your first line of defense. Empowered users recognize threats, respond quickly, and contribute to a safer digital environment.
        </p>
      </div>
    </div>

    {/* Content for mobile and md (768px), excluding large screens */}
    <div className="block lg:hidden">
      <div className="w-full text-left">
        <p className="text-lg text-gray-700 mb-4">
          Regardless of how sophisticated your organization’s security systems are, the human factor always introduces potential vulnerabilities. In fact, human error continues to be a leading cause of data breaches.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Ten Sentinel offers a comprehensive approach to cybersecurity education through both general end-user awareness and role-based training, helping your employees stay informed and vigilant.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          By fostering a culture of security awareness, you enable employees to become your first line of defense. Empowered users recognize threats, respond quickly, and contribute to a safer digital environment.
        </p>
      </div>
    </div>
  </div>
</section>


      {/* Human Element */}
      <section className="w-full bg-gray-100 py-12 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl flex flex-col h-full bg-white shadow-md ${(index === 2) ? "md:col-span-2 lg:col-span-1" : ""}`}
              >
                <div className="h-48 md:h-64 lg:h-48 w-full">
                  <img
                    src={[
                      "/employee training images/ET30.png",
                      "/employee training images/ET3.webp",
                      "/employee training images/ET28.png",
                    ][index]}
                    alt={[
                      "The Human Element",
                      "On-Demand Training",
                      "Completed Annually",
                    ][index]}
                    className="w-full h-full object-cover rounded-t-lg"
                  />
                </div>
                <div className="flex flex-col justify-start p-6 h-full">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    {[
                      "The Human Element",
                      "On-Demand Training",
                      "Completed Annually",
                    ][index]}
                  </h3>
                  <p className="text-gray-700 text-sm">
                    {[
                      "The most effective way to train your employees in strengthening the human aspect of your company’s security is through cybersecurity awareness programs. This is especially critical for remote workers, as phishing, social engineering, compromised passwords, and insecure network practices can put your business at risk of attacks.",
                      "Cybersecurity training is usually offered on demand through online courses, allowing learners to complete it at their own pace, access it from anywhere, and revisit the material as needed. Interactive and engaging training is essential for driving real change in user behavior.",
                      "To ensure employees remain up-to-date on protecting themselves online and stay informed about new and evolving threats, annual training is recommended. Additionally, many business compliance and insurance regulations require training to be completed at least once a year.",
                    ][index]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Purpose */}
<section className="w-full bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:w-[95%]">
    <div className="text-center mb-8 md:mb-10">
<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-4 text-center max-w-full">
  What is the Goal of Cybersecurity Awareness Training for Employees?
</h2>
    </div>

    {/* Responsive layout: stack at md, side-by-side at lg */}
    <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-stretch">
      
      {/* Image Wrapper with side curves at md+ */}
      <div className="hidden md:flex justify-center items-center">
        <div className="overflow-hidden md:rounded-l-xl md:rounded-r-xl bg-gray-100 w-full max-w-2xl">
          <img
            src="/employee training images/ET26.jpeg"
            alt="Benefits of Training"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="flex flex-col justify-center text-left text-gray-700 text-base leading-relaxed md:text-lg">
        <p className="mb-4">
          The goal of cybersecurity awareness training is to build a strong human firewall within the organization. It prepares employees to identify and avoid phishing emails, social engineering attacks, and unsafe online behavior.
        </p>
        <p className="mb-4">
          Employees are often the weakest link in security. Training transforms them into informed individuals who can detect red flags, follow best practices, and reduce risk across digital workflows.
        </p>
        <p>
          Ultimately, the program helps prevent data breaches, protects sensitive assets, and fosters a proactive security culture at every level of the organization.
        </p>
      </div>
    </div>
  </div>
</section>

{/* Feature Cards */}
<section className="w-full bg-gray-100">
  <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-6">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {[
        "Social Engineering Attacks",
        "Password Management",
        "Official Devices",
        "Devices Security",
        "Data Security",
        "Incident Management",
      ].map((label, index) => (
        <div
          key={index}
          className="border border-gray-200 rounded-xl shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-between p-4 h-[220px] box-border"
        >
          <img
            src={[
              "/employee training images/ET7.png",
              "/employee training images/ET8.png",
              "/employee training images/ET11.png",
              "/employee training images/ET13.png",
              "/employee training images/ET14.png",
              "/employee training images/ET16.jpeg",
            ][index]}
            alt={label}
            className="w-full h-32 object-contain mb-2"
          />
          <h3 className="text-md font-semibold text-yellow-600 text-center">
            {label}
          </h3>
        </div>
      ))}
    </div>
  </div>
</section>
    {/* Contact Section */}
      <section className="w-full bg-white">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src="/employee training images/ET21.jpg"
              alt="Get in Touch Illustration"
              className="rounded-lg max-w-full h-auto hidden md:block"
            />
          </div>
          <div className="w-full max-w-md">
            <h2 className="text-xl font-bold mb-1">Get In Touch</h2>
            <p className="text-sm text-gray-600 mb-4">By filling this form ↓</p>
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <input type="text" placeholder="Name" className="p-2 border rounded-md" />
              <input type="email" placeholder="Company Email" className="p-2 border rounded-md" />
              <input type="tel" placeholder="Phone Number" className="p-2 border rounded-md" />
              <input type="text" placeholder="Company Name" className="p-2 border rounded-md" />
              <textarea
                placeholder="Please outline the queries or issues you need help with!"
                className="sm:col-span-2 p-2 border rounded-md h-24"
              />
              <button
  type="submit"
  className="sm:col-span-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 mx-auto w-32"
>
  SUBMIT FORM
</button>

            </form>
          </div>
        </div>
      </section>


{/* FAQ Section */}

      <section className="w-full bg-gray-100">
  <div className="max-w-3xl mx-auto px-4 py-10">
  <h2 className="text-3xl font-bold text-center mb-6">FAQs</h2>
    <div className="flex flex-col gap-4 text-sm text-gray-800">
      {faqList.map((item, i) => (
        <div
          key={i}
          className="border border-gray-200 rounded-md overflow-hidden bg-white"
        >
          <div
            onClick={() => toggleFAQ(i)}
            className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
          >
            <p className="font-semibold text-base text-left">{item.question}</p>
            <ChevronDown
              className={`w-5 h-5 min-w-[20px] min-h-[20px] transition-transform duration-300 ${
                openIndex === i ? "rotate-180" : ""
              }`}
            />
          </div>
        {openIndex === i && (
  <div className="p-4 pt-0 text-left text-gray-700 bg-gray-200 border-t border-gray-300">
    {item.answer}
  </div>
)}
  </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
};

const faqList = [
  {
    question: "What is employee awareness training?",
    answer:
      "It's a program that educates employees on cybersecurity risks and best practices to reduce threats caused by human error.",
  },
  {
    question: "What do you get in employee awareness training?",
    answer:
      "Training includes modules on phishing, data protection, password hygiene, incident response, and more, tailored to various employee roles.",
  },
  {
    question: "What is the purpose behind security awareness training?",
    answer:
      "To build a security-conscious workforce that actively prevents cyber threats and adheres to organizational policies.",
  },
  {
    question: "What is covered under Ten Sentinel employee awareness training program?",
    answer:
      "Topics like phishing awareness, secure browsing, email safety, password management, and device security are covered.",
  },
  {
    question: "What are the benefits of employee awareness training?",
    answer:
      "It reduces risks, prevents breaches, ensures compliance, builds trust, and strengthens the overall security posture.",
  },
  {
    question:
      "Why is cyber security awareness training essential for employees in today’s digital age?",
    answer:
      "Because modern threats exploit human error; training makes employees the first line of defense.",
  },
  {
    question:
      "How can cyber security awareness training benefit my organization and its employees?",
    answer:
      "It boosts confidence, reduces incidents, improves response time, and meets regulatory requirements.",
  },
  {
    question:
      "What are the key topics covered in Ten Sentinel cyber security awareness training for employees?",
    answer:
      "Key topics include phishing, malware, social engineering, password security, and safe remote work practices.",
  },
  {
    question:
      "How does Ten Sentinel’s cyber security awareness training help employees recognize and respond to phishing attacks?",
    answer:
      "Through simulations, real-world scenarios, and practical guidance on identifying and reporting phishing.",
  },
  {
    question:
      "What strategies does Ten Sentinel employ to engage employees during cyber security awareness training?",
    answer:
      "Interactive modules, quizzes, gamified learning, and progress tracking tools keep employees engaged.",
  },
];

export default EmployeeTraining;