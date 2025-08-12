import axios from "axios";

const api = axios.create({
  baseURL: "https://greencart12.netlify.app/api", // Change to your backend URL in production
  withCredentials: true, // send cookies (JWT token in cookie)
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
