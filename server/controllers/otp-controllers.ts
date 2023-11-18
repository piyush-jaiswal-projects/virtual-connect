import { Request, Response } from "express";
import executeQuery from "../models/connection";
import { searchUserQuery } from "../models/queries";

const VerifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const response = await executeQuery(searchUserQuery, [email]);
    if (!response.success) {
      res.status(500).json({
        error: "Unexpected error",
        message:
          "The request to fetch data from database returns an unexpected error.",
      });
      return;
    }

    if (otp === response.data[0].last_otp) {
      res.status(200).json({
        message: "Otp verified successfully!",
        success: true,
      });
    } else {
      res.status(401).json({
        message: "Invalid OTP!",
        success: false,
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      message: "Something went wrong",
    });
  }
};

exports.VerifyOtp = VerifyOtp;
