import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRET_KEY;

export default function verifyPassword(
  currPassword: string,
  userPassword: string
) {
  return bcrypt.compareSync(currPassword + secretKey, userPassword);
}

export function hashPassword(password: string) {
  const salt = bcrypt.genSaltSync(10);
  const hashedPassword = bcrypt.hashSync(password + secretKey, salt);
  return hashedPassword;
}
