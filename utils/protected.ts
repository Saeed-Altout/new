import { getUserMetadata } from "@/utils/token"; // Assumes token metadata extraction
import { Role } from "@/config/enums";

/**
 * Checks if the authenticated user has a valid role and returns it.
 * @returns {Role | null} User role if valid, otherwise null.
 */
export const getUserRole = (): Role | null => {
  const metadata = getUserMetadata();

  // Check if metadata exists and contains a valid role
  if (metadata && Object.values(Role).includes(metadata.role as Role)) {
    return metadata.role as Role;
  }

  return null; // Return null if role is invalid or not found
};
/**
 * Determines if the user is a company user.
 * @returns {boolean} True if the user is a company, otherwise false.
 */
export const isCompanyUser = (): boolean => {
  return getUserRole() === Role.COMPANY;
};

/**
 * Determines if the user is a student user.
 * @returns {boolean} True if the user is a student, otherwise false.
 */
export const isStudentUser = (): boolean => {
  return getUserRole() === Role.STUDENT;
};
