import * as React from "react";
import { Routes, Route } from "react-router-dom";

import SellerDashboard from "../pages/seller/SellerDashboard";
import SellerHeader from "../components/SellerHeader";
import SellerFooter from "../components/SellerFooter";

const SellerRoutes = () => { 
    return(
        <Router>
        <SellerHeader />
        <main>
            <Routes>
                    <Route path="/SellerDashboard" element={<SellerDashboard />} />
            </Routes>
        </main>
        <SellerFooter />
        </Router>
    );
};

export default SellerRoutes;