import * as React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../pages/admin/Dashboard";
import AdminIndex from "../pages/admin/AdminIndex";

const UserRoutes = () => { 
    return(
       <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/AdminIndex" element={<AdminIndex/>}/>
                    
                </Routes>
            </div>
        </Router>
    );
};

export default UserRoutes;