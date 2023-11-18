export default function generateUserId() {
  const timestamp = new Date().getTime().toString(36); // Convert timestamp to base36
  const randomPart = Math.random().toString(36).substr(2, 5); // Random part, excluding "0."

  const userId = `${"user"}_${timestamp}${randomPart}`;
  return userId;
};
