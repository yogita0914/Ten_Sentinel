import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className='flex-grow'>
        <Routes>
          <Route path="/" />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;