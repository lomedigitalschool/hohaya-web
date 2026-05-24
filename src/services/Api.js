import axios from "axios";
import useAuthStore from "../stores/useAuthStore";

// Url de connexion au backend
const url = "https://hohaya-api-1.onrender.com";
const api = axios.create({
  baseURL: url, // "http://localhost:5000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token =
    useAuthStore.getState().token || sessionStorage.getItem("accessToken");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

//
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expiré → déconnexion automatique
      useAuthStore.getState().logout();
      sessionStorage.clear();
      window.location.href = "/login";
    }
    return Promise.reject(error);
  },
);

export default api;
