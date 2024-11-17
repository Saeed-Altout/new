import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { TOKEN_KEY, USER_KEY } from "@/config/constants";

const COOKIE_OPTIONS = {
  expires: 7, // Cookie expiration in days
  secure: process.env.NODE_ENV === "production",
  sameSite: "Strict",
};

/**
 * Set the access token in cookies.
 * @param token - The JWT token to set in cookies.
 */
export const setAccessToken = (token: string) => {
  Cookies.set(TOKEN_KEY, token, {
    ...COOKIE_OPTIONS,
    sameSite: "strict",
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
 * @param data - User authentication data including token and metadata.
 */
export const setAuthData = (data: {
  token: string;
  token_expiration: Date | string;
  user: { id: number; email: string };
  role: string;
  is_remembered: boolean;
}) => {
  setAccessToken(data.token);
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
      sameSite: "strict",
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
 * Get user metadata from cookies.
 * @returns {object | null} User metadata or null if not found.
 */
export const getUserMetadata = (): {
  user: { id: number; email: string };
  role: string;
  is_remembered: boolean;
  token_expiration: string;
} | null => {
  const metadata = Cookies.get(USER_KEY);
  return metadata ? JSON.parse(metadata) : null;
};

/**
 * Remove authentication data from cookies.
 */
export const clearAuthData = () => {
  Cookies.remove(TOKEN_KEY);
  removeAccessToken();
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
      return null;
    }
    return decoded;
  } catch (error) {
    console.error("Failed to decode token:", error);
    return null;
  }
};

/**
 * Check if the JWT token has expired.
 * @param token - The JWT token to check.
 * @returns {boolean} True if the token is expired, false otherwise.
 */
export const isTokenExpired = (token: string): boolean => {
  const decodedToken = decodeToken(token) as { exp?: number } | null;
  if (!decodedToken || !decodedToken.exp) {
    return true;
  }

  const expirationTime = decodedToken.exp * 1000;
  return Date.now() > expirationTime;
};

/**
 * Check if the stored token in cookies has expired.
 * @returns {boolean} True if the token is expired, false otherwise.
 */
export const isStoredTokenExpired = (): boolean => {
  const token = getAccessToken();
  return token ? isTokenExpired(token) : true;
};
