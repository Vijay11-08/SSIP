import * as React from "react";
import { Routes, Route } from "react-router-dom";

import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminHeader from "../components/AdminHeader";
import AdminFooter from "../components/AdminFooter";
const UserRoutes = () => { 
    return(
        <Router>
        <AdminHeader />
        <main>
            <Routes>
                    <Route path="/AdminDashboard" element={<AdminDashboard />} />
                    </Routes>
            </main>
            <AdminFooter />
        </Router>
    );
};

export default UserRoutes;