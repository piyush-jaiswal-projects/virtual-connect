import { Request, Response } from "express";
import executeQuery from "../models/connection";
import {
  saveUserOtpQuery,
  saveUserQuery,
  searchUserQuery,
} from "../models/queries";
import { generateOtp, generateUserId, verifyPassword } from "../utils";

const signin = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    // checking if user already exists
    const response = await executeQuery(searchUserQuery, [email]);
    if (!response.success) {
      res.status(500).json({
        error: "Unexpected error",
        message:
          "The request to fetch data from database returns an unexpected error.",
      });
      return;
    }

    // Case: user doesn't exists
    if (response.data?.length === 0) {
      const otp = generateOtp();
      const uid = generateUserId(); //unique user id
      const response = await executeQuery(saveUserQuery, [
        uid,
        name,
        email,
        password,
        false,
        otp,
      ]);
      if (response.success) {
        // send otp
        console.log("User doesn't exists, sending otp");
      }
      return;
    }

    // Case: user already exists
    const user = response.data[0];
    if (user.isverified) {
      const pass: boolean = verifyPassword(password, user.password);
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
        console.log("User exists, not verified, sending otp");
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Internal server error",
      message: "Something went wrong",
    });
  }
};

exports.Register = signin;
