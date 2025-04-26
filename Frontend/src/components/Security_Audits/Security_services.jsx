import React from "react";
import { CheckCircle } from "lucide-react";

const services = [
  { label: "ISO 27001:2013", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "PCI DSS", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "HIPAA", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "NIST", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "GDPR", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "Australian Cyber Security Centre (ACSC)", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "Information Security Manual (ISM)", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "Protective Security Policy Framework (PSPF)", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "RBI Framework", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
  { label: "SOC", img: "https://res.cloudinary.com/dj8fjdbcx/image/upload/v1745435733/ISO_logo_copie_kg7taq.png" },
];

const benefits = [
  "Reveal hidden security vulnerabilities within your systems",
  "Pinpoint potential data leaks and apply timely mitigation",
  "Enhance overall system stability and efficiency",
  "Proactively prevent data breaches and information loss",
];

const features = [
  "Comprehensive cybersecurity assessment of your entire IT environment",
  "Identification of risks, vulnerabilities, and threat vectors",
  "Executive-level summary report with key findings and actionable insights",
  "Seamless integration with minimal disruption to daily operations",
];

export default function SecurityAuditServices() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-20 py-16 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
        Security Audit Services
      </h2>

      {/* Grid of Audit Services */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 justify-items-center mb-12 mt-8 px-4 sm:px-10 lg:px-20">
        {services.map(({ label, img }) => (
          <div
            key={label}
            className="rounded-xl border hover:shadow-xl p-4 w-full max-w-[180px] bg-white flex flex-col items-center text-center transition-all duration-300"
          >
            <img src={img} alt={label} className="h-16 mb-3 object-contain" />
            <p className="text-sm font-medium text-gray-800">{label}</p>
          </div>
        ))}
      </div>

      {/* Benefits & Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-4 sm:px-10 lg:px-20">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Key Benefits of a Cybersecurity Audit
          </h3>
          <ul className="space-y-2">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Audit Features at a Glance
          </h3>
          <ul className="space-y-2">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="text-green-500 w-5 h-5 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
