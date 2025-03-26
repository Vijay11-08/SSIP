import React from "react";
import UserRoutes from "./routes/UserRoutes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserFooter from "./components/UserFooter";
import UserHeader from "./components/UserHeader";

const App = () => {
  return (
    <div>
      <UserHeader/>
      <Router>
        <UserRoutes/>
      </Router>
      <UserFooter />
    </div>
  );
};

export default App;