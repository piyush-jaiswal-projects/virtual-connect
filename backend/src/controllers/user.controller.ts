import { Request, Response } from "express";
import { myDataSource } from "../db";
import userEntity from "../models/user.entity";
import { ApiError, ApiResponse } from "../utils";

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await myDataSource.getRepository(userEntity).find({
        select: {
            name: true,
            id: true,
            socketId: true,
            imgUrl: true
        }
    });
      
      if(!users) throw new ApiError(400, "Error fetching data!")

    res
      .status(200)
      .json(new ApiResponse(200, users, "Fetched all users!"));
  } catch (error: any) {
    res.status(error.statusCode | 500).json({
      success: false,
      message: error.message,
    });
  }
};


const setUserSocketId = async (req: Request, res: Response) => {
    try {
        const { email, socketId } = req.body
        
        const user = await myDataSource.getRepository(userEntity).findOne({
            where: {
                email: email
            }
        })

        if (!user) throw new ApiError(401, "User does not exists!")
        
        const isUpdated = await myDataSource.getRepository(userEntity).save({
            ...user,
            socketId: socketId,
            onlineStatus: "true"
        })

        if (!isUpdated) throw new ApiError(500, "User status update failed!") 
        
        res.status(200).json(new ApiResponse(200, [], "User status update success!"))
        
    } catch (error: any) {
        res.status(error.statusCode | 500).json({
            success: false,
            message: error.message,
        })
    }
};


const setUserOffline = async (req: Request, res: Response) => {
    try {
        const { email} = req.body
        
        const user = await myDataSource.getRepository(userEntity).findOne({
            where: {
                email: email
            }
        })

        if (!user) throw new ApiError(401, "User does not exists!")
        
        const isUpdated = await myDataSource.getRepository(userEntity).save({
            ...user,
            onlineStatus: "false"
        })

        if (!isUpdated) throw new ApiError(500, "User status update failed!") 
        
        res.status(200).json(new ApiResponse(200, [], "User status update success!"))
        
    } catch (error: any) {
        res.status(error.statusCode | 500).json({
            success: false,
            message: error.message,
        })
    }
};

export { getAllUsers, setUserOffline, setUserSocketId }

