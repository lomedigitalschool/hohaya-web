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

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // pas de requete infinie

      try {
        const refreshToken =
          sessionStorage.getItem("refreshToken") ||
          useAuthStore.getState().refreshToken;

        if (!refreshToken) {
          throw new Error("No refresh token");
        }

        const res = await api.post("/auth/refresh", { refreshToken });
        const newAccessToken = res.data.accessToken;

        // update storage (les deux pour cohérence simple)
        sessionStorage.setItem("accessToken", newAccessToken);
        useAuthStore.setState({ token: newAccessToken });

        // update header + retry request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

        return api(originalRequest);
      } catch (err) {
        // Token expiré ou refresh impossible → déconnexion automatique
        useAuthStore.getState().logout();
        sessionStorage.clear();
        window.location.href = "/login";
        return Promise.reject(err);
      }
    }

    return Promise.reject(error);
  },
);

export default api;
