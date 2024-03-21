import { measureMemory } from "vm";
import { myDataSource } from "../../db";
import messagesEntity, { MessageEntry } from "../../models/messages.entity";
import { Message } from "../../types/message.types";
import { MessageSchema } from "../../zod/schema";

const saveMessageToDb = async (msg: Message) => {
  try {
    const msgPacket: MessageEntry = {
      senderId: msg.sender.uid,
      recieverId: msg.receipient.uid,
      message: msg,
    };
    const validatedInput = MessageSchema.safeParse(msgPacket);

    if (validatedInput.success === false)
      throw new Error(`Invalid message format! \n ${validatedInput.error}`);

    await myDataSource.getRepository(messagesEntity).save(validatedInput.data);
    console.log("message saved!");
    
  } catch (error) {
    console.log(`Error saving message!`);
    console.log(error);
  }
};

export default saveMessageToDb;
