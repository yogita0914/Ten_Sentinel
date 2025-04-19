import React from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" />
      </Routes>
    </div>
  );
};

export default App;