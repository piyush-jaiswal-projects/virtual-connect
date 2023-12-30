export default function generateUserId(email: string) {
  const timestamp = new Date().getTime().toString(36); // Convert timestamp to base36

  const userId = `${"user"}_${timestamp}${email.split("@")[0]}`;
  return userId;
}
