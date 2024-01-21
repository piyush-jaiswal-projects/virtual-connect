import express from "express";
import { check } from "express-validator";
import validateRequest from "../middlewares/validReq.middleware";

import { login, signup } from "../controllers/auth.controller";

const router = express.Router();

router.post(
  "/signup",
  [
    check("name").notEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  validateRequest,
  signup
);

router.post(
  "/login",
  [
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  validateRequest,
  login
);

export default router;
