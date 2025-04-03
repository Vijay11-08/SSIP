import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./accounts/RegisterForm";
import "../src/styles/register.css";
const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<h1 className="text-2xl font-bold">Welcome to Tribal Art Platform</h1>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
