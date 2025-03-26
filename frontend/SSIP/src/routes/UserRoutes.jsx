import * as React from "react";
import { Routes, Route } from "react-router-dom";

import AboutUs from "../pages/user/AboutUs";
import Home from "../pages/user/Home";
import UserIndex from "../pages/user/UserIndex";
import ContactUs from "../pages/user/ContactUs";


const UserRoutes = () => { 
    return(
       <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/AboutUs" element={<AboutUs/>}/>
                    <Route path="/ContactUs" element={<ContactUs/>}/>
                    <Route path="/UserIndex" element={<UserIndex/>}/>

                </Routes>
            </div>
        </Router>
    );
};

export default UserRoutes;