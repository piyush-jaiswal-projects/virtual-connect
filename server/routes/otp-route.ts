import express from "express";
import { check } from "express-validator";
import validateRequest from "../middleware/validate-request";

const otpControllers = require("../controllers/otp-controllers");

const router = express.Router();

router.post(
  "/verifyOtp",
  [check("email").normalizeEmail().isEmail()],
  validateRequest,
  otpControllers.VerifyOtp
);

router.post(
  "/sendOtp",
  [check("email").normalizeEmail().isEmail()],
  validateRequest,
  otpControllers.SendOtp
);

module.exports = router;
