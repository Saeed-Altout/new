import { create } from "zustand";
import {
  setAuthData,
  getAccessToken,
  getUserMetadata,
  clearAuthData,
  isStoredTokenExpired,
} from "@/utils/token";

/**
 * Interface representing the authentication state in the store.
 */
interface AuthState {
  token: string | null; // The JWT access token.
  isAuthenticated: boolean; // Indicates if the user is authenticated.
  user: User | null; // User information (null if not authenticated).
  role: string | null; // User's role (null if not authenticated).
  isRemembered: boolean; // Indicates if the user has opted to stay logged in.

  /**
   * Sets the authentication data (token and user info) in the store and persists it in cookies.
   * @param data - The authentication data containing token, user info, role, and remember option.
   */
  setAuthData: (data: {
    token: string;
    token_expiration: Date | string;
    user: User;
    role: string;
    is_remembered: boolean;
  }) => void;

  /**
   * Clears the authentication data from the store and removes it from cookies.
   */
  clearAuth: () => void;

  /**
   * Checks if the stored token is expired. If expired, clears the authentication data and logs out the user.
   * @returns {boolean} - True if the token is expired, false otherwise.
   */
  checkTokenExpiration: () => boolean;
}

/**
 * A Zustand store that manages the authentication state and token expiration logic.
 */
export const useAuthStore = create<AuthState>((set) => {
  // Get initial token and metadata from cookies
  const token = getAccessToken();
  const metadata = getUserMetadata();

  // Determine if the user is authenticated based on the token's existence
  const isAuthenticated = !!token;

  return {
    token,
    isAuthenticated,
    user: isAuthenticated ? metadata?.user || null : null,
    role: isAuthenticated ? metadata?.role || null : null,
    isRemembered: isAuthenticated ? metadata?.is_remembered || false : false,

    /**
     * Sets the authentication data in the store and persists it in cookies.
     * @param data - The authentication data containing token, user info, role, and remember option.
     */
    setAuthData: (data) => {
      setAuthData(data); // Persist the auth data to cookies
      set({
        token: data.token,
        isAuthenticated: true,
        user: data.user,
        role: data.role,
        isRemembered: data.is_remembered,
      });
    },

    /**
     * Clears the authentication data from the store and removes it from cookies.
     */
    clearAuth: () => {
      clearAuthData(); // Remove data from cookies
      set({
        token: null,
        isAuthenticated: false,
        user: null,
        role: null,
        isRemembered: false,
      });
    },

    /**
     * Checks if the stored token has expired.
     * If expired, clears authentication data and logs out the user.
     * @returns {boolean} - Returns true if the token is expired, otherwise false.
     */
    checkTokenExpiration: () => {
      const isExpired = isStoredTokenExpired(); // Check if the token has expired

      if (isExpired) {
        clearAuthData(); // Remove expired token and metadata
        set({
          token: null,
          isAuthenticated: false,
          user: null,
          role: null,
          isRemembered: false,
        });
        console.log("Token expired, logging out."); // Optionally log out message
      }

      return isExpired; // Return whether the token is expired
    },
  };
});
