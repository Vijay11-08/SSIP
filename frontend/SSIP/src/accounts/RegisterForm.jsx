import React, { useState } from "react";
import API from "../services/api"; // Ensure correct path
import "../styles/Register.css";



const Register = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    mobile: "",
    profilePic: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, profilePic: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataObj = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataObj.append(key, value);
    });

    try {
      const response = await API.post("/auth/register", formDataObj);
      alert(response.data.message);
    } catch (error) {
      alert("Error in registration");
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h2 className="text-xl font-bold">Registration Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <input type="text" name="fullname" placeholder="Full Name" onChange={handleChange} required className="border p-2 w-full" />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required className="border p-2 w-full" />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required className="border p-2 w-full" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" onChange={handleChange} required className="border p-2 w-full" />
        <input type="radio" name="gender" value="Male" onChange={handleChange} /> Male
        <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
        <input type="number" name="mobile" placeholder="Mobile Number" onChange={handleChange} required className="border p-2 w-full" />
        <input type="file" name="profilePic" onChange={handleFileChange} required className="border p-2 w-full" />
        <button type="submit" className="bg-blue-500 text-white p-2">Register</button>
      </form>
    </div>
  );
};

export default Register;
