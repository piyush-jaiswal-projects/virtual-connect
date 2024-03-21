import ProfileIcon from "../../../lib/images/profileIcon";
import { User } from "../../../types/User.types";

type UserCardProps = {
  user: User
  setActive: (args: User) => void;
};

export default function UserCard({
  user,
  setActive,
}: UserCardProps) {
  return (
    <div
      onClick={() => {
        setActive(user);
      }}
      className="flex justify-start items-center border-b p-2 cursor-pointer hover:bg-gray-100"
    >
      <ProfileIcon uid={user.uid} />

      <div className="mx-4 text-lg">
        <h2>{user.name}</h2>
      </div>
    </div>
  );
}
