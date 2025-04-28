import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./components/BlogComponents/BlogDetail";
import ScrollToTop from "./components/BlogComponents/ScrollToTop";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/blog-detail/:id" element={<BlogDetail />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
