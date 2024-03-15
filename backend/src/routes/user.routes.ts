import express from "express";
import { check } from "express-validator";
import validateRequest from "../middlewares/validReq.middleware";
import {
  getAllUsers,
  setUserOffline,
  setUserSocketId,
} from "../controllers/user.controller";

const router = express.Router();

router.get("/getAllUsers", getAllUsers);

router.post(
  "/setUserSocketId",
  [check("email").notEmpty().isEmail(), check("socketId").notEmpty()],
  validateRequest,
  setUserSocketId
);

router.post(
    "/setUserOffline",
    [check("email").notEmpty().isEmail()],
    validateRequest,
    setUserOffline
)

export default router;
