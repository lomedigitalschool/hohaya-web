
import axios from 'axios'

const url = 'https://hohaya-api-1.onrender.com'
const api = axios.create({
    baseURL: url, // "http://localhost:5000",
    headers:{
        "Content-Type":"application/json",
    }
})

api.interceptors.request.use((config) => {

  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;


