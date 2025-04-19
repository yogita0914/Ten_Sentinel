import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
      <Footer/>
    </div>
  );
};

export default App;