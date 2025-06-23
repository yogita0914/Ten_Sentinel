import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PrivacyPage } from "./pages/PrivacyPage";
import Security_Audits from "./pages/Security_Audits";
import { WebDesignPage } from "./pages/WebDesignPage";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./components/BlogComponents/BlogDetail";
import ScrollToTop from "./components/BlogComponents/ScrollToTop";
import DataPrivacy from "./pages/DataPrivacy";
import Marketing from "./pages/Marketing";
import AboutPage from "./pages/AboutPage";
import CloudSecurity from "./pages/CloudSecurity";
import IsoPage from "./components/IsoPage/IsoPage";
import { VAPT } from "./pages/VAPT";
import ContactUsPage from "./pages/ContactUsPage";
import Development from "./pages/DevelopmentPage";
import EmployeeTraining from "./components/EmployeeTraining/EmployeeTraining";
import InternTrainee from "./pages/InternTrainee";
import Cyber_WorkingProfessional from "./pages/Cyber_WorkingProfessional";
import AzureGuardian from "./pages/AzureGuardian";
import { GCP } from "./pages/GCP";
import CyberAttackAnalysisPage from "./components/CyberAttackAnalysis/CyberAttackAnalysisPage";
import PishingSimulation from "./pages/PhishingSimulation";
import Training_and_Certifications from "./pages/Training_and_Certifications";
import AWSSentinel from "./components/AWS/AWSSentinel";
import OrbitalDiagram from "./components/AWS/OrbitalDiagram";
import OrbitalDiagram2 from "./components/AWS/OrbitalDiagram2";

const App = () => {
  return (
    <>
      <ScrollToTop />

      <div>
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/blog-detail/:id" element={<BlogDetail />} />
            <Route path="/security-audits" element={<Security_Audits />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/privacy-policy" element={<PrivacyPage />} />
            <Route
              path="/cyber-working-professional"
              element={<Cyber_WorkingProfessional />}
            />
            <Route path="/cloud-security" element={<CloudSecurity />} />
            <Route path="/web-design" element={<WebDesignPage />} />
            <Route path="/data-privacy" element={<DataPrivacy />} />
            <Route path="/iso-page" element={<IsoPage />} />
            <Route path="/vapt" element={<VAPT />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/development" element={<Development />} />
            <Route path="/training" element={<EmployeeTraining />} />
            <Route path="/intern-trainee" element={<InternTrainee />} />
            <Route path="/azure-guardian" element={<AzureGuardian />} />
            <Route path="/gcp" element={<GCP />} />
            <Route
              path="/CyberAttackAnalysisPage"
              element={<CyberAttackAnalysisPage />}
            />

            <Route
              path="/phishing-simulation"
              element={<PishingSimulation />}
            />
            <Route
              path="/training-certifications"
              element={<Training_and_Certifications />}
            />
            <Route path="/aws-sentinel" element={<AWSSentinel />} />
            <Route path="/orbital" element={<OrbitalDiagram />} />
            <Route path="/orbital" element={<OrbitalDiagram2 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
