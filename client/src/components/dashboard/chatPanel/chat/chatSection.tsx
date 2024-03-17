import ReceivedMsgCard from "./receivedMsgCard";
import SentMsgCard from "./sentMsgCard";
import { Message } from "../../../../types/Message.types";
import { User } from "../../../../types/User.types";
import { useEffect } from "react";

export default function ChatSection(props: {
  messageList: Message[];
  activeReceipient: User | null;
}) {
  const chatContainer = document.getElementById("chat-container");

  const autoScrollContainer = () => {
    if (chatContainer === null) return;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  };

  useEffect(() => {
    autoScrollContainer();
  }, [props.messageList.length]);

  chatContainer?.addEventListener("scroll", () => {
    const isScrolledToBottom: boolean =
      chatContainer.scrollHeight - chatContainer.clientHeight <=
      chatContainer.scrollTop + 1;
    if (isScrolledToBottom) {
      autoScrollContainer();
    }
  });

  return (
    <div
      id="chat-container"
      className="h-[90%] w-[100%] mx-auto bg-gray-100 overflow-x-hidden overflow-y-scroll no-scrollbar px-2"
    >
      {props.messageList.map((message) => {
        if (props.activeReceipient?.sid === message.sender.sid)
          return <ReceivedMsgCard msg={message.content} />;
        else return <SentMsgCard msg={message.content} />;
      })}
    </div>
  );
}
