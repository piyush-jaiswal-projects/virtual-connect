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
    <div className="flex flex-col justify-between items-center h-[90%] w-[100%] rounded-lg">
      <ChatSection
        messageList={props.messageList}
        activeReceipient={props.activeRecipient}
      />
      <ChatBar sendMessage={props.sendMessage} />
    </div>
  );
}
