import { EntitySchema } from "typeorm";
import { v4 as uuidV4 } from "uuid";
import { Message } from "../types/message.types";

export default new EntitySchema({
  name: "Stores all messages",
  tableName: "messages",
  columns: {
    id: {
      type: "uuid",
      primary: true,
      default: () => `'${uuidV4()}'`,
    },
    senderId: {
      type: "text",
      nullable: false,
    },
    recieverId: {
      type: "text",
      nullable: false,
    },
    message: {
      type: "json",
      nullable: false,
    },
  },
});

export class MessageEntry {
  senderId: string;
  recieverId: string;
  message: Message;

  constructor(senderId: string, recieverId: string, message: Message) {
    this.senderId = senderId;
    this.recieverId = recieverId;
    this.message = message;
  }
}
