import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/classes/ApiError";
import { asyncHandler } from "../utils";

const validateRequest = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new ApiError(401, "Invalid inputs passed!");
    }
    next();
  }
);
export default validateRequest;
