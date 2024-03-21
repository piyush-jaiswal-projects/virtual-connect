import { User } from "../types/User.types";
import { Message } from "../types/Message.types";
import getCookie from "./getCookie";

const createMessage = (msg: string, activeChat: User | null, currSid: string): Message => {
    try {
      const newMsg: Message = {
        msg_id: new Date() + String(getCookie("uid")) + activeChat?.uid,
        sender: {
          name: String(getCookie("name")),
          uid: String(getCookie("uid")),
          sid: currSid
        },
        receipient: {
          name: String(activeChat?.name),
          uid: String(activeChat?.uid),
          sid: activeChat?.sid || ""
        },
        content: msg,
        timestamp: new Date(),
      };
  
      return newMsg;
    } catch (error) {
      throw new Error()
    }
};
  
export default createMessage