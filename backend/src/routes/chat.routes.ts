import express from "express";
import { check } from "express-validator";
import validateRequest from "../middlewares/validReq.middleware";
import { getMessages } from "../controllers/chat.controller";

const router = express.Router();

router.post(
  "/getMessages",
  [check("userId").notEmpty().isString()],
  validateRequest,
  getMessages
);

export default router
