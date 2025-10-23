import axios from "axios";
console.log("Base URL:", import.meta.env.VITE_APP_BASE_URL);
const instance = axios.create({
  // baseURL: "http://localhost:5000/api", // replace with your backend URL
  baseURL : import.meta.env.VITE_APP_BASE_URL, // use environment variable or default to localhost
  withCredentials: true, // This is important for sending cookies with requests
});

export default instance;
