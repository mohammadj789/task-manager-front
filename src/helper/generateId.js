export function generateUniqueId() {
  const timestamp = Date.now().toString(36); // Convert current time to base 36
  const randomChars = Math.random().toString(36).substring(2, 8); // Generate random characters
  return `${timestamp}-${randomChars}`; // Combine timestamp and random characters
}
