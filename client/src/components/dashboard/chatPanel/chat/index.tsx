import ChatBar from "./chatBar";
import ChatSection from "./chatSection";
import { Message } from "../../../../types/Message.types";
import { User } from "../../../../types/User.types";

export default function Chat(props: {
  activeRecipient: User | null
  messageList: Message[]
  sendMessage: (msg: string) => void
}) {

  return (
    <div className="flex flex-col justify-between h-[90%]">
      <ChatSection messageList={props.messageList} />
      <ChatBar
        sendMessage={props.sendMessage}
      />
    </div>
  );
}
