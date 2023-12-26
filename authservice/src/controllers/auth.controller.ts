import { Request, Response } from "express";
import { verifyPassword, hashPassword } from "../utils/encryptPassword";
import {
  asyncHandler,
  generateOtp,
  generateUserId,
  getEmailTemplate,
  sendMail,
} from "../utils";

// API: SIGNIN
const signin = asyncHandler(async (req: Request, res: Response) => {
  try {
  } catch (error) {}
});

export {signin}
