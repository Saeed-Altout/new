import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const TOKEN_KEY = "cws-auth-token";
const COOKIE_OPTIONS = {
  expires: 7,
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
 * Get the access token from cookies.
 * @returns {string | null} The access token, or null if not found.
 */
export const getAccessToken = (): string | null => {
  return Cookies.get(TOKEN_KEY) || null;
};

/**
 * Remove the access token from cookies.
 */
export const removeAccessToken = () => {
  Cookies.remove(TOKEN_KEY);
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
