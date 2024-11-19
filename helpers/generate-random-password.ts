export function generateRandomPassword(length: number = 10): string {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";

  while (new Set(password).size < Math.min(8, length)) {
    password = Array.from({ length }, () =>
      charset.charAt(Math.floor(Math.random() * charset.length))
    ).join("");
  }

  return password;
}
