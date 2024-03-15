import ReceivedMsgCard from "./receivedMsgCard";
import SentMsgCard from "./sentMsgCard";
import { Message } from "../../../../types/Message.types";

export default function ChatSection(props: { messageList: Message[] }) {
  return (
    <div
      id="chat-container"
      className="h-[90%] w-[85%] mx-auto overflow-x-hidden overflow-y-scroll px-2"
    >
      {props.messageList.map((message) => {
        // if (message.type === "received")
          return <ReceivedMsgCard msg={message.content} />;
        // else return <SentMsgCard msg={message.content} />;
      })}
    </div>
  );
}
