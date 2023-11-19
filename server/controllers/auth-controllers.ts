import { Request, Response } from "express";
import executeQuery from "../models/connection";
import { verifyPassword, hashPassword } from "../utils/encrypt-password";
import { validationResult } from "express-validator";
import {
  saveUserOtpQuery,
  saveUserQuery,
  searchUserQuery,
} from "../models/queries";
import {
  generateOtp,
  generateUserId,
  getEmailTemplate,
  sendMail,
} from "../utils";

// API: SIGNIN
const signin = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // checking if user already exists
    const response = await executeQuery(searchUserQuery, [email]);
    if (!response.success)
      throw Error(
        "Request to fetch data from database returns an unexpected error."
      );

    // Case: user doesn't exists
    if (response.data?.length === 0) {
      const otp = generateOtp();
      const uid = generateUserId(); //unique user id
      var hashedPassword = hashPassword(password);
      const response = await executeQuery(saveUserQuery, [
        uid,
        name,
        email,
        hashedPassword,
        false,
        otp,
      ]);
      if (response.success) {
        // send otp
        const emailBody = getEmailTemplate("send otp", otp);
        const mail = await sendMail(
          email,
          "Welcome to virtual connect!",
          emailBody
        );
        if (mail.success) {
          res.status(200).json({
            success: true,
            message: "OTP sent successfully",
          });
        } else {
          throw Error("OTP not sent");
        }
      }
      return;
    }

    // Case: user already exists
    const user = response.data[0];
    if (user.isverified) {
      const pass: boolean = await verifyPassword(password, user.password);
      if (pass) {
        res.status(200).json({
          success: true,
          message: "user logged in successfully",
        });
      } else {
        res.status(401).json({
          success: false,
          message: "wrong password",
        });
      }
    } else {
      const otp = generateOtp();
      const response = await executeQuery(saveUserOtpQuery, [otp, user.email]);
      if (response.success) {
        // send otp
        const emailBody = getEmailTemplate("send otp", otp);
        const mail = await sendMail(
          email,
          "welcome back to Virtual Connect!",
          emailBody
        );
        if (mail.success) {
          res.status(200).json({
            success: true,
            message: "OTP sent successfully",
          });
        } else {
          throw Error("OTP not sent");
        }
      }
    }
  } catch (error: any) {
    console.error(error);
    res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

exports.Register = signin;
