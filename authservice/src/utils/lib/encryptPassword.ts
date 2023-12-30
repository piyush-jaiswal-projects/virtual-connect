import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export function verifyPassword(
  currPassword: string,
  userPassword: string | unknown
) {
  if (typeof userPassword === "string") {
    const res = bcrypt.compareSync(currPassword + secretKey, userPassword);
    return res;
  }
  return false
}

export function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password + secretKey, salt);
  return hashedPassword;
}
