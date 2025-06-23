import React from "react";
import security_bg from "../../assets/security_bg.jpg"; // Adjust the path as necessary
import Marketing from "../../assets/marketing.jpg"; // Adjust the path as necessary
import { TrendingUp } from "lucide-react";
import HeroSection from "../cloud-security/HeroSection";

const Hero_marketing = () => {

  return (
    <div className="bg-cyan-200">
      {/* Hero Section with Background Image */}

      <HeroSection
        subtitle=" Innovative strategies to boost your brand’s reach and engagement."
        title="Marketing"
        backgroundImage={security_bg}
        Icon={TrendingUp}
      />

      {/* Marketing Strategy Section */}
      <div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-start gap-8">
          <div className="w-full lg:w-1/2">
            <img
              src={Marketing}
              alt="Marketing Strategy"
              className="rounded-lg shadow-lg w-full h-66 object-cover"
            />
          </div>

          <div className="text-left w-full lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Strategic Marketing Solutions
            </h2>
            <ul className="list-none space-y-3 text-gray-700">
              <li>
                <span className="font-semibold">Grow your business</span>{" "}
                through data-driven marketing approaches and audience engagement
              </li>
              <li>
                <span className="font-semibold">
                  Develop compelling brand narratives
                </span>{" "}
                that resonate with your ideal customer base
              </li>
              <li>
                <span className="font-semibold">
                  Enhance your digital presence
                </span>{" "}
                with tailored strategies across web, social, and paid media
              </li>
              <li>
                <span className="font-semibold">
                  Leverage SEO, social media, and analytics
                </span>{" "}
                to increase visibility and conversion rates
              </li>
              <li>
                <span className="font-semibold">
                  Achieve measurable results
                </span>{" "}
                through personalized, performance-driven marketing plans
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero_marketing;
