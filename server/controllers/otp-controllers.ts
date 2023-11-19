import { Request, Response } from "express";
import executeQuery from "../models/connection";
import { searchUserQuery, updateUserVerificationQuery } from "../models/queries";
import { generateOtp, getEmailTemplate, sendMail } from "../utils";

const SendOtp = async (req: Request, res: Response) => {
  try {
    const { email, subject } = req.body;

    const otp = generateOtp();
    const emailBody = getEmailTemplate("send otp", otp);
    const response = await sendMail(email, subject, emailBody);

    if (response.success) {
      res.status(200).json({
        success: true,
        message: "OTP sent successfully",
      });
    } else {
      throw Error("OTP not sent");
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: `Something went wrong! : ${error.message}`,
    });
  }
};

const VerifyOtp = async (req: Request, res: Response) => {
  try {
    const { email, otp } = req.body;

    const response = await executeQuery(searchUserQuery, [email]);
    if (!response.success)
      throw Error(
        "Request to fetch data from database returns an unexpected error."
      );

    if (otp === response.data[0].last_otp) {
     
      const updateVerifyStatus = await executeQuery(updateUserVerificationQuery, [true, email])
      if (!updateVerifyStatus.success)
      throw Error(
        "Request to fetch data from database returns an unexpected error."
      );

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

  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: error.message,
      success: false
    });
  }
};

export { VerifyOtp, SendOtp };
