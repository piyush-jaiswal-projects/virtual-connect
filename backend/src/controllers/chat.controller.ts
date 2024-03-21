import { Request, Response } from "express";
import { ApiResponse, ApiError } from "../utils";
import { myDataSource } from "../db";
import messagesEntity, { MessageEntry } from "../models/messages.entity";
import { Message } from "../types/message.types";

const getMessages = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    const messageList = await myDataSource.getRepository(messagesEntity).find({
      where: [{ senderId: userId }, { recieverId: userId }],
      select: {
        message: true
      }
    });

    if (messageList.length === 0)
      throw new ApiError(404, "Messages not found!");

    // let messages: Message[]
    // messageList.forEach(item => {
    //   //@ts-ignore
    //   messages.push(item.message)
    // })
    console.log(messageList[0].message);
    console.log(messageList[1].message);
    
    res
      .status(200)
      .json(new ApiResponse(200, messageList, "Fetched all messages!"));
  } catch (error: any) {
    res.status(error.statusCode | 500).json({
      success: false,
      message: error.message,
    });
  }
};

export { getMessages };
