import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Backend URL
  headers: { "Content-Type": "application/json" },
});

export default API;
