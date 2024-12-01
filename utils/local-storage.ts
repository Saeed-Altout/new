/**
 * @module LocalStorageService
 * Utility functions for managing localStorage interactions with type safety and consistent naming conventions.
 */

import { EMAIL, TOKEN_KEY, USER_KEY } from "@/config/constants";

/**
 * Type definition for the user metadata object.
 */
export type User = {
  id: string;
  name: string;
  email: string;
  role?: string; // Optional field for user roles
  [key: string]: unknown; // Allow additional properties
};

/**
 * Save email to localStorage.
 * @param email - The email address to store.
 */
export const setEmail = (email: string): void => {
  localStorage.setItem(EMAIL, email);
};

/**
 * Remove email from localStorage.
 */
export const removeEmail = (): void => {
  localStorage.removeItem(EMAIL);
};

/**
 * Retrieve email from localStorage.
 * @returns The email address or an empty string if not found.
 */
export const getEmail = (): string => {
  return localStorage.getItem(EMAIL) || "";
};

/**
 * Save access token to localStorage.
 * @param token - The access token to store.
 */
export const setAccessToken = (token: string): void => {
  localStorage.setItem(TOKEN_KEY, token);
};

/**
 * Remove access token from localStorage.
 */
export const removeAccessToken = (): void => {
  localStorage.removeItem(TOKEN_KEY);
};

/**
 * Retrieve access token from localStorage.
 * @returns The access token or an empty string if not found.
 */
export const getAccessToken = (): string => {
  return localStorage.getItem(TOKEN_KEY) || "";
};

/**
 * Save user metadata to localStorage.
 * @param user - The user object to store.
 */
export const setUserMetadata = (user: User): void => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

/**
 * Remove user metadata from localStorage.
 */
export const removeUserMetadata = (): void => {
  localStorage.removeItem(USER_KEY);
};

/**
 * Retrieve user metadata from localStorage.
 * @returns The user object or `null` if not found.
 */
export const getUserMetadata = (): User | null => {
  const user = localStorage.getItem(USER_KEY);
  return user ? (JSON.parse(user) as User) : null;
};

export const clearAll = (): void => localStorage.clear();
