import { Message } from "../types/Message.types";
import { User } from "../types/User.types";
import Chat from "./ChatWindow";
import Header from "./ChatTopbar";
import InitialUI from "./initialChatUi";

export default function ChatPanel(props: {
  chatData: User | null;
  isInitial: boolean;
  messageList: Message[];
  sendMessageHandler: (msg: string) => void;
}) {

  return (
    <div className="md:w-[80%] h-[100%]">
      {props.isInitial === false && (
        <>
          <Header name={props.chatData === null ? "" : props.chatData.name} />
          <Chat sendMessage={props.sendMessageHandler} messageList={props.messageList} activeRecipient={props.chatData} />
        </>
      )}

      {props.isInitial === true && <InitialUI />}
    </div>
  );
}
