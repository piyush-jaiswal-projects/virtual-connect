import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
  path: "../../../.env",
});

export default function generateToken(
  type: "access" | "refresh",
  email: string,
  expiryTime: string
) {
  try {
    const secret =
      type === "access"
        ? process.env.ACCESS_TOKEN_SECRET
        : process.env.REFRESH_TOKEN_SECRET;

    const data = {
      email,
    };

    const token = jwt.sign(data, secret || "", {
      expiresIn: expiryTime,
      // algorithm: "RS256",
    });

    return token;
  } catch (error: any) {
    console.log(error.message);
    throw new Error();
  }
}
