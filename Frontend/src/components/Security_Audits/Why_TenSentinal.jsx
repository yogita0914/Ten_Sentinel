import React from "react";

const features = [
  {
    label: "24×7 Operation",
    icon: "https://img.icons8.com/fluency/48/customer-support.png",
  },
  {
    label: "Proven Track Record",
    icon: "https://img.icons8.com/color/48/000000/happy.png",
  },
  {
    label: "Single Point of Contact",
    icon: "https://img.icons8.com/color/48/000000/touchscreen-smartphone.png",
  },
  {
    label: "Vendor Neutral",
    icon: "https://img.icons8.com/fluency/48/home.png",
  },
  {
    label: "Customer Focused",
    icon: "https://img.icons8.com/color/48/000000/customer-support.png",
  },
  {
    label: "Passionate & Experienced",
    icon: "https://img.icons8.com/color/48/000000/teamwork.png",
  },
  {
    label: "Trusted Partner",
    icon: "https://img.icons8.com/color/48/000000/handshake.png",
  },
  {
    label: "Focused on Quality",
    icon: "https://img.icons8.com/color/48/000000/approval.png",
  },
  {
    label: "Agile & Aware",
    icon: "https://img.icons8.com/color/48/000000/artificial-intelligence.png",
  },
  {
    label: "Fully Accountable",
    icon: "https://img.icons8.com/color/48/000000/facebook-like.png",
  },
];

const Why_TenSentinal = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
          Why <span className="text-teal-600">Ten Sentinal?</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center items-stretch">
          {features.map(({ label, icon }) => (
            <div
              key={label}
              className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300 
             w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] md:w-[180px] md:h-[160px]
             text-center flex flex-col items-center justify-center space-y-2"
            >
              <img src={icon} alt={label} className="h-10" />
              <p className="text-sm font-medium text-gray-800">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why_TenSentinal;
