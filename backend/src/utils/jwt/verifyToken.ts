import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "../../../.env",
});

export default function verifyToken(type: string, token: string) {
  try {
    const secret =
      type === "access"
        ? process.env.ACCESS_TOKEN_SECRET
        : process.env.REFRESH_TOKEN_SECRET;

    jwt.verify(token, secret || "", (err: any) => {
      if (err) return false;
      else return true;
    });
  } catch (error) {
    throw new Error();
  }
}
