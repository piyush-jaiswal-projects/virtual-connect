import { Request, Response } from "express";
import { verifyPassword, hashPassword } from "../utils/lib/encryptPassword";
import {
  ApiResponse,
  createUserId,
  generateToken,
  generateOtp,
  newUserTemplate,
  sendMail,
} from "../utils";
import { myDataSource } from "../db";
import userEntity, { User } from "../models/user.entity";
import ApiError from "../utils/classes/ApiError";

// API: SIGNUP
const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    const isUser = await myDataSource.getRepository(userEntity).find({
      where: [{ name: name }, { email: email }],
    });

    if (isUser.length !== 0) throw new ApiError(401, "User already exists!");

    const newUserId = createUserId(email);
    const hashedPassword = hashPassword(password);
    const otp = generateOtp();

    const newUser = new User(
      newUserId,
      name,
      email,
      hashedPassword,
      false,
      otp
    );

    const userData = await myDataSource.getRepository(userEntity).save(newUser);

    if (!userData) throw new ApiError(400, "Something Went Wrong!");

    const emailBody = newUserTemplate(otp);
    const isMailSent = await sendMail(
      email,
      "Virtual Connect - OTP for verification",
      emailBody
    );
    if (!isMailSent.success) throw new ApiError(500, "OTP not sent!");

    res
      .status(200)
      .json(new ApiResponse(200, userData, "OTP sent successfully!"));
  } catch (error: any) {
    res.status(error.statusCode || 500).json({
      success: false,
      message: error.message,
    });
    console.log(error);
    
  }
};

// API: LOGIN
const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await myDataSource.getRepository(userEntity).findOne({
      where: {
        email: email,
      },
    });
    if (!user) throw new ApiError(401, "User does not exists!");

    const isVerified = verifyPassword(password, user.password);
    if (!isVerified) throw new ApiError(401, "Invalid password!");

    const accessToken = generateToken("access", email, "10m");
    const refreshToken = generateToken("refresh", email, "1d");

    res
      .status(200)
      .cookie("jwt-refresh", refreshToken, {
        httpOnly: true,
        sameSite: false,
        secure: true,
        maxAge: 24 * 60 * 60 * 1000,
      })
      .json(
        new ApiResponse(
          200,
          {
            accessToken,
            name: user.name,
            email: user.email,
            uid: user.id,
            isVerified: user.isVerified,
          },
          "User logged in successfully!"
        )
      );
  } catch (error: any) {
    res.status(error.statusCode | 500).json({
      success: false,
      message: error.message,
    });
  }
};

export { signup, login };
