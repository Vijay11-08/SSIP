import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutUs from "../pages/user/AboutUs";
import Home from "../pages/user/Home";
import UserIndex from "../pages/user/UserIndex";
import ContactUs from "../pages/user/ContactUs";

import UserHeader from "../components/UserHeader";
import UserFooter from "../components/UserFooter";

import UserDashboard from "../pages/user/UserDashboard"

const UserRoutes = () => { 
    return (
        <Router>
            <UserHeader />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    <Route path="/UserIndex" element={<UserIndex />} />
                    <Route path="/UserDashboard" element={<UserDashboard />} />
                </Routes>
            </main>
            <UserFooter />
        </Router>
    );
};

export default UserRoutes;
