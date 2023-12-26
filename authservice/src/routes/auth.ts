import express from "express";
import { check } from "express-validator";
import validateRequest from "../middlewares/validReq.middleware";

import { signin } from "../controllers/auth.controller";

const router = express.Router();

router.post(
  "/signin",
  [
    check("name").notEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  validateRequest,
  signin
);

export default router;
