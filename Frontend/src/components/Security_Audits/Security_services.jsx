import React from "react";
import { CheckCircle } from "lucide-react";
import ISO_logo_copie_1 from "../../assets/security_audits/ISO_logo_copie_1.png";
import pcidss_2 from "../../assets/security_audits/pcidss_2.png";
import Hippa_3 from "../../assets/security_audits/Hippa_3.png";
import nist_4 from "../../assets/security_audits/nist_4.png";
import gdpr_5 from "../../assets/security_audits/gdpr_5.png";
import ACSC from "../../assets/security_audits/ACSC.png";
import ISM_7 from "../../assets/security_audits/ISM_7.png";
import pspf_8 from "../../assets/security_audits/pspf_8.png";
import RBI_framework_9 from "../../assets/security_audits/RBI_framework_9.png";
import SOC_10 from "../../assets/security_audits/SOC_10.png";

const services = [
  { label: "ISO 27001:2013", img: ISO_logo_copie_1 },
  { label: "PCI DSS", img: pcidss_2 },
  { label: "HIPAA", img: Hippa_3 },
  { label: "NIST", img: nist_4 },
  { label: "GDPR", img: gdpr_5 },
  { label: "Australian Cyber Security Centre (ACSC)", img: ACSC },
  { label: "Information Security Manual (ISM)", img: ISM_7 },
  { label: "Protective Security Policy Framework (PSPF)", img: pspf_8 },
  { label: "RBI Framework", img: RBI_framework_9 },
  { label: "SOC", img: SOC_10 },
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
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-12 mt-8 px-2 sm:px-8 lg:px-15">
        {services.map(({ label, img }) => (
          <div
            key={label}
            className="rounded-xl border border-[#E5E7EB] hover:shadow-lg hover:border-blue-800 
                 w-[160px] sm:w-[180px] md:w-[200px] h-[180px]
                 bg-[#F8F9FD] flex flex-col items-center justify-center text-center 
                 transition-all duration-300 p-4"
          >
            <img
              src={img}
              alt={label}
              className="h-12 sm:h-14 mb-3 object-contain"
            />
            <p className="text-sm font-medium text-gray-800 leading-snug px-2 break-words">
              {label}
            </p>
          </div>
        ))}
      </div>

      {/* Benefits & Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 px-4 sm:px-10 lg:px-20">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Key Benefits of a Cybersecurity Audit
          </h3>
          <ul className="space-y-3">
            {benefits.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
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
          <ul className="space-y-3">
            {features.map((item) => (
              <li key={item} className="flex items-start gap-3 text-gray-700">
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
