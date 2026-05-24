import { create } from "zustand";
import { persist } from "zustand/middleware";



// Stockage global des donnees de l'utilisateur 
const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      refreshToken: null,
      user: null,

      login: (data) => set({
        token: data.accessToken,
        refreshToken: data.refreshToken,
        user: data.user,
      }),

      logout: () => set({
        token: null,
        refreshToken: null,
        user: null,
      }),
    }),
    {
      name: "auth-storage", 
    }
  )
);

export default useAuthStore;