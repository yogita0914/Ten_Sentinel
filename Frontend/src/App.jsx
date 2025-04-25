import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PrivacyPage } from './pages/PrivacyPage';
import LandingPage from './pages/LandingPage';

const App = () => {
  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>

      <Footer />
    </div>
  );
};

export default App;