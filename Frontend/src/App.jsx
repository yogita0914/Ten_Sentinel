import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PrivacyPage } from './pages/PrivacyPage';
import Security_Audits from './pages/Security_Audits';
import { WebDesignPage } from './pages/WebDesignPage';
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./components/BlogComponents/BlogDetail";
import ScrollToTop from "./components/BlogComponents/ScrollToTop";
import DataPrivacy from "./pages/DataPrivacy";
import Marketing from "./pages/Marketing";
import AboutPage from './pages/AboutPage';
import CloudSecurity from "./pages/CloudSecurity";
import IsoPage from "./components/IsoPage/IsoPage";
import { VAPT } from "./pages/VAPT";
import ContactUsPage from "./pages/ContactUsPage";
import Development from "./pages/DevelopmentPage";
import training from "./components/EmployeeTraining/EmployeeTraining";
import EmployeeTraining from "./components/EmployeeTraining/EmployeeTraining";
import InternTrainee from "./pages/InternTrainee";
import Cyber_WorkingProfessional from "./pages/Cyber_WorkingProfessional";
import { GCP } from "./pages/GCP";


const App = () => {
  return (
    <div>
      <Navbar />

      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/blog-detail/:id" element={<BlogDetail />} />
          <Route path="/security-audits" element={<Security_Audits />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
           <Route path="/cyber-working-professional" element={<Cyber_WorkingProfessional />} />
          <Route path="/cloud-security" element={<CloudSecurity />} />
          <Route path="/web-design" element={<WebDesignPage />} />
          <Route path="/data-privacy" element={<DataPrivacy />} />
          <Route path="/iso-page" element={<IsoPage />} />
          <Route path="/vapt" element={<VAPT />} />
          <Route path="/contact" element={<ContactUsPage />} />
          <Route path="/development" element={<Development />} />
          <Route path="/training" element={<EmployeeTraining />} />
          <Route path="/intern-trainee" element={<InternTrainee />}/>
          <Route path="/gcp" element={<GCP />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
