import { User } from "../types/User.types";
import UserCard from "./OnlineUserCard";

export default function OnlineUserList(props: {
  setActiveChat: (args: User) => void;
  users: User[] | undefined;
}) {
  
  return (
    <div id="user-list" className="min-h-[60px] lg:min-h-[90%] w-[100%] bg-white rounded-lg p-2">
      <div className="">
        <h3>Online Users ({props.users?.length}) </h3>
      </div>
      {props.users?.map((user) => {
        return (
          <UserCard
            key={user.uid}
            setActive={props.setActiveChat}
            user={user}
          />
        );
      })}
    </div>
  );
}
