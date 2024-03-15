import { Message } from "../../../types/Message.types";
import { ActiveUserProps, User } from "../../../types/User.types";
import Chat from "./chat";
import Header from "./header";
import InitialUI from "./initialUi";

export default function CommunicationPanel(props: {
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
