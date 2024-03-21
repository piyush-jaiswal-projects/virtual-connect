import ReceivedMsgCard from "./ReceivedMsgCard";
import SentMsgCard from "./SentMsgCard";
import { Message } from "../types/Message.types";
import { User } from "../types/User.types";
import { useCallback, useEffect } from "react";

export default function MessageWindow(props: {
  messageList: Message[];
  activeReceipient: User | null;
}) {
  const chatContainer = document.getElementById("chat-container");

  const autoScrollContainer = useCallback(() => {
    if (chatContainer === null) return;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, [chatContainer]);

  useEffect(() => {
    autoScrollContainer();
  }, [props.messageList.length, autoScrollContainer]);

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
      className="h-[85%] md:h-[90%] w-[100%] mx-auto bg-gray-100 overflow-x-hidden overflow-y-scroll no-scrollbar px-2"
    >
      {props.messageList.map((message) => {
        if (props.activeReceipient?.uid === message.sender.uid)
          return <ReceivedMsgCard msg={message.content} />;
        else return <SentMsgCard msg={message.content} />;
      })}
    </div>
  );
}
