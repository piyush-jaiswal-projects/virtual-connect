import ChatBar from "./ChatBar";
import ChatSection from "./MessageWindow";
import { Message } from "../types/Message.types";
import { User } from "../types/User.types";

export default function ChatWindow(props: {
  activeRecipient: User | null
  messageList: Message[]
  sendMessage: (msg: string) => void
}) {

  return (
    <div className="flex flex-col justify-between h-[80%] md:h-[90%]">
      <ChatSection
        messageList={props.messageList}
        activeReceipient={props.activeRecipient}
      />
      <ChatBar sendMessage={props.sendMessage} />
    </div>
  );
}
