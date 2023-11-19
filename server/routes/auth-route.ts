import express from "express";
import { check } from "express-validator";
import validateRequest from "../middleware/validate-request";

const authControllers = require("../controllers/auth-controllers");

const router = express.Router();

router.post(
  "/signin",
  [
    check("name").notEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  validateRequest,
  authControllers.Register
);

module.exports = router;
