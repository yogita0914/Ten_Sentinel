import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PrivacyPage } from './pages/PrivacyPage';
import LandingPage from './pages/LandingPage';
import Security_Audits from './pages/Security_Audits';
import { WebDesignPage } from './pages/WebDesignPage';

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/security-audits" element={<Security_Audits />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />

          <Route path="/web-design" element={<WebDesignPage />} />
        </Routes>

      <Footer />
    </div>
  );
};

export default App;