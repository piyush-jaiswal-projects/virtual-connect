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
    <div className=" lg:w-[70%] h-[85%] lg:h-[100%] bg-gray-300 p-2 pb-0">
      {props.isInitial === false && (
        <div className="flex flex-col h-[100%] justify-around items-center">
          <Header
            name={props.chatData === null ? "" : props.chatData.name}
            uid={props.chatData === null ? "" : props.chatData.uid}
          />
          <Chat
            sendMessage={props.sendMessageHandler}
            messageList={props.messageList}
            activeRecipient={props.chatData}
          />
        </div>
      )}

      {props.isInitial === true && <InitialUI />}
    </div>
  );
}
