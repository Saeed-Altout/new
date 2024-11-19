import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { TOKEN_KEY, USER_KEY } from "@/config/constants";

// Cookie options to be used for setting authentication data
const COOKIE_OPTIONS = {
  expires: 7, // Cookie expiration in days
  secure: process.env.NODE_ENV === "production", // Ensure secure cookies in production environment
  sameSite: "Strict", // Restrict cookies to same site for security
};

/**
 * Set the access token in cookies.
 * @param token - The JWT token to set in cookies.
 */
export const setAccessToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {
    ...COOKIE_OPTIONS,
    sameSite: "strict", // Ensure the cookie is only sent with requests to the same site
  });
};

/**
 * Remove the access token from cookies.
 */
export const removeAccessToken = () => {
  Cookies.remove(TOKEN_KEY);
};

/**
 * Set the user authentication data in cookies.
 * @param data - The user authentication data, including token, user info, role, and remember option.
 */
export const setAuthData = (data: {
  token: string; // JWT token for user authentication
  token_expiration: Date | string; // Expiration date of the token
  user: User; // User data (ID and email)
  role: string; // Role of the user (e.g., admin, user)
  is_remembered: boolean; // Indicates whether the user chose to stay logged in
}) => {
  // Set the access token
  setAccessToken(data.token);

  // Store user metadata, token expiration, and other details in cookies
  Cookies.set(
    USER_KEY,
    JSON.stringify({
      user: data.user,
      role: data.role,
      is_remembered: data.is_remembered,
      token_expiration: data.token_expiration,
    }),
    {
      ...COOKIE_OPTIONS,
      sameSite: "strict", // Ensure the cookie is only sent with requests to the same site
    }
  );
};

/**
 * Get the access token from cookies.
 * @returns {string | null} The JWT token, or null if not found.
 */
export const getAccessToken = (): string | null => {
  return Cookies.get(TOKEN_KEY) || null;
};

/**
 * Get the user metadata (such as ID, email, role, etc.) from cookies.
 * @returns {object | null} User metadata or null if not found.
 */
export const getUserMetadata = (): {
  user: User; // User info
  role: string; // Role of the user
  is_remembered: boolean; // Indicates if the user chose to stay logged in
  token_expiration: string; // Expiration time of the token
} | null => {
  const metadata = Cookies.get(USER_KEY);
  return metadata ? JSON.parse(metadata) : null;
};

/**
 * Remove authentication data (token and user metadata) from cookies.
 */
export const clearAuthData = () => {
  Cookies.remove(TOKEN_KEY); // Remove the JWT token
  removeAccessToken(); // Remove the token from cookies
};

/**
 * Decode and validate the JWT token.
 * @param token - The JWT token to decode and validate.
 * @returns {object | null} The decoded token payload, or null if invalid.
 */
export const decodeToken = (token: string): object | null => {
  try {
    const decoded = jwt.decode(token);
    if (typeof decoded === "string" || decoded === null) {
      return null; // Invalid token
    }
    return decoded; // Return the decoded token payload
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null; // Return null if decoding fails
  }
};

/**
 * Check if the JWT token has expired.
 * @param token - The JWT token to check.
 * @returns {boolean} True if the token is expired, false otherwise.
 */
export const isTokenExpired = (token: string): boolean => {
  const decodedToken = decodeToken(token) as { exp?: number } | null;

  // If the token does not have an expiration date or the expiration date is missing, consider it expired
  if (!decodedToken || !decodedToken.exp) {
    return true;
  }

  const expirationTime = decodedToken.exp * 1000; // Convert expiration time to milliseconds
  return Date.now() > expirationTime; // Compare current time with expiration time
};

/**
 * Check if the stored token in cookies has expired.
 * @returns {boolean} True if the token is expired, false otherwise.
 */
export const isStoredTokenExpired = (): boolean => {
  const token = getAccessToken();
  return token ? isTokenExpired(token) : true; // Check expiration based on stored token
};
