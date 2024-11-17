import { create } from "zustand";
import {
  setAuthData,
  getAccessToken,
  getUserMetadata,
  clearAuthData,
  isStoredTokenExpired,
} from "@/utils/token";

interface User {
  id: number;
  email: string;
}

interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
  user: User | null;
  role: string | null;
  isRemembered: boolean;
  initializeAuth: () => void;
  setAuthData: (data: {
    token: string;
    token_expiration: Date | string;
    user: User;
    role: string;
    is_remembered: boolean;
  }) => void;
  clearAuth: () => void;
  checkTokenExpiration: () => boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  user: null,
  role: null,
  isRemembered: false,

  /**
   * Initializes the auth state based on stored cookies.
   * Should be called during app initialization.
   */
  initializeAuth: () => {
    const token = getAccessToken();
    const metadata = getUserMetadata();
    const isAuthenticated = token ? !isStoredTokenExpired() : false;

    if (!isAuthenticated) {
      clearAuthData(); // Cleanup expired or invalid data
    }

    set({
      token,
      isAuthenticated,
      user: isAuthenticated ? metadata?.user || null : null,
      role: isAuthenticated ? metadata?.role || null : null,
      isRemembered: isAuthenticated ? metadata?.is_remembered || false : false,
    });
  },

  /**
   * Sets the authentication data and updates the store.
   * @param data - The authentication data including token, user, role, etc.
   */
  setAuthData: (data) => {
    setAuthData(data); // Persist data to cookies
    set({
      token: data.token,
      isAuthenticated: true,
      user: data.user,
      role: data.role,
      isRemembered: data.is_remembered,
    });
  },

  /**
   * Clears the authentication state and removes cookies.
   */
  clearAuth: () => {
    clearAuthData();
    set({
      token: null,
      isAuthenticated: false,
      user: null,
      role: null,
      isRemembered: false,
    });
  },

  /**
   * Checks if the stored token has expired and clears auth if it has.
   * @returns {boolean} True if the token is expired, false otherwise.
   */
  checkTokenExpiration: () => {
    const isExpired = isStoredTokenExpired();

    if (isExpired) {
      clearAuthData();
      set({
        token: null,
        isAuthenticated: false,
        user: null,
        role: null,
        isRemembered: false,
      });
      console.log("Token expired, logging out.");
    }

    return isExpired;
  },
}));
