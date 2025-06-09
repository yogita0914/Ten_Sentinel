import React from "react";
import icon1 from '../../assets/security_audits/icon1.png';
import icon2 from '../../assets/security_audits/icon2.png';
import icon3 from '../../assets/security_audits/icon3.png';
import icon4 from '../../assets/security_audits/icon4.png';
import icon5 from '../../assets/security_audits/icon5.png';
import icon6 from '../../assets/security_audits/icon6.png';
import icon7 from '../../assets/security_audits/icon7.png';
import icon8 from '../../assets/security_audits/icon8.png';
import icon9 from '../../assets/security_audits/icon9.png';
import icon10 from '../../assets/security_audits/icon10.png';

const features = [
  {
    label: "24×7 Operation",
    icon: icon1,
  },
  {
    label: "Proven Track Record",
    icon: icon2,
  },
  {
    label: "Single Point of Contact",
    icon: icon3,
  },
  {
    label: "Vendor Neutral",
    icon: icon4,
  },
  {
    label: "Customer Focused",
    icon: icon5,
  },
  {
    label: "Passionate & Experienced",
    icon: icon6,
  },
  {
    label: "Trusted Partner",
    icon: icon7,
  },
  {
    label: "Focused on Quality",
    icon: icon8,
  },
  {
    label: "Agile & Aware",
    icon: icon9,
  },
  {
    label: "Fully Accountable",
    icon: icon10,
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
