import { User } from "../../../types/User.types";
import UserCard from "./userCard";

export default function OnlineList(props: {
  setActiveChat: (args: User) => void;
  users: User[] | undefined;
}) {
  
  return (
    <div id="user-list" className="md:w-[30%] lg:w-[20%] border-r md:min-h-[85vh] p-2">
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
