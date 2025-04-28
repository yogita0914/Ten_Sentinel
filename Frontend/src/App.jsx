import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./components/BlogComponents/BlogDetail";
import ScrollToTop from "./components/BlogComponents/ScrollToTop";
import { PrivacyPage } from "./pages/PrivacyPage";
import Security_Audits from "./pages/Security_Audits";

const App = () => {
  return (
    <div>
      <Navbar />

      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/blog-detail/:id" element={<BlogDetail />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/security-audits" element={<Security_Audits />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
