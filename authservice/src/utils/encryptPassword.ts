import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export function verifyPassword(currPassword: string, userPassword: string) {
  const res = bcrypt.compareSync(currPassword + secretKey, userPassword);
  return res;
}

export function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password + secretKey, salt);
  return hashedPassword;
}
