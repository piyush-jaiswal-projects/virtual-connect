import { Request, Response } from "express";
import { myDataSource } from "../db";
import userEntity, { User } from "../models/user.entity";
import { ApiError, ApiResponse, generateToken, sendMail } from "../utils";
import { welcomeUserTemplate } from "../utils/email/template";

const VerifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;
    const user = await myDataSource.getRepository(userEntity).findOne({
      where: {
        email: email,
      },
    });

    if (!user) throw new ApiError(401, "User does not exists!");


    if (user.last_otp === otp) {
      const isUpdated = await myDataSource.getRepository(userEntity).save({
        ...user,
        isVerified: true,
      });

      if (isUpdated) {
        res
          .status(200)
          .json(new ApiResponse(200, "", "OTP verified successfully!"));

        await sendMail(
          email,
          "Welcome to virtual - connect",
          welcomeUserTemplate()
        );
        return;
      }

      throw new ApiError(400, "User data not updated!");
    }

    throw new ApiError(401, "Invalid otp!");
  } catch (error: any) {
    res.status(error.statusCode | 500).json({
      success: false,
      message: error.message,
    });
  }
};

export { VerifyOtp };
