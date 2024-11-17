import { create } from "zustand";
import {
  setAccessToken,
  getAccessToken,
  removeAccessToken,
  isTokenExpired,
} from "@/utils/token";

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  setToken: (token: string) => void;
  clearAuth: () => void;
  checkTokenExpiration: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: getAccessToken(),
  isAuthenticated: !!getAccessToken(),

  setToken: (token) => {
    setAccessToken(token);
    set({ token, isAuthenticated: true });
  },

  clearAuth: () => {
    removeAccessToken();
    set({ token: null, isAuthenticated: false });
  },

  checkTokenExpiration: () => {
    const token = getAccessToken();
    if (token && isTokenExpired(token)) {
      set({ token: null, isAuthenticated: false });
      removeAccessToken();
      console.log("Token expired, logging out.");
    }
  },
}));
