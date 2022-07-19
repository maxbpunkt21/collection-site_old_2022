import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import "./App.css";
import Home from "./components/Home";
import StrainDetail from "./components/StrainDetail";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<StrainDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;