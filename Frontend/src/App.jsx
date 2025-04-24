import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { PrivacyPage } from './pages/PrivacyPage';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className='flex-grow my-16'>
        <Routes>
          <Route path="/" />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;