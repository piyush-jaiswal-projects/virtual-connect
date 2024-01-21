import { ActiveUserProps } from "../../../types/User.types";
import UserCard from "./userCard";

export default function OnlineList(props: {
  setActiveChat: (name: string, uid: string, imgUrl: string) => void;
  onlineUsers: ActiveUserProps[];
}) {
  return (
    <div className="md:w-[20%] border-r min-h-[85vh] p-2">
      <h3>Online (3)</h3>
      {props.onlineUsers.map((user) => {
        return (
          <UserCard
            setActive={props.setActiveChat}
            uid={user.uid}
            key={user.uid}
            imgUrl={user.imgUrl}
            name={user.name}
          />
        );
      })}
    </div>
  );
}
