import { ActiveUserProps } from "../../../types/User.types";
import Chat from "./chat";
import Header from "./header";
import InitialUI from "./initialUi";

export default function CommunicationPanel(props: {
  chatData: ActiveUserProps;
  isInitial: boolean;
}) {
  //TODO: Fetch Chat details, based on uid

  return (
    <div className="md:w-[80%] h-[100%]">
      {props.isInitial === false && (
        <>
          <Header name={props.chatData.name} imgUrl={props.chatData.imgUrl} />
          <Chat />
        </>
      )}

      {props.isInitial === true && <InitialUI />}
    </div>
  );
}
