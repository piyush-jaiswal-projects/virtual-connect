import express from "express";
import { check } from "express-validator";
import validateRequest from "../middlewares/validReq.middleware";
import { VerifyOtp, SendOtp } from "../controllers/otp";

const router = express.Router();

router.post(
  "/verifyOtp",
  [check("email").normalizeEmail().isEmail()],
  validateRequest,
  VerifyOtp
);

router.post(
  "/sendOtp",
  [check("email").normalizeEmail().isEmail()],
  validateRequest,
  SendOtp
);

export default router;
