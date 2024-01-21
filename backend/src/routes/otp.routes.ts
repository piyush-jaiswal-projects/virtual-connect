import express from "express";
import { check } from "express-validator";
import validateRequest from "../middlewares/validReq.middleware";
import { VerifyOtp } from "../controllers/otp.controller";

const router = express.Router();

router.post(
  "/verifyOtp",
  [check("email").normalizeEmail().isEmail()],
  validateRequest,
  VerifyOtp
);

export default router;
