export default function generateOtp() {
  const characters =
    "ABCDEFGH0123456789JKLMNOPQRSTUVWXYZabcd0123456789efghijklmnopq0123456789rstuvwxyz";
  let otp = "";
  const length = 6;

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    otp += characters.charAt(randomIndex);
  }

  return otp;
}
