import { UserIcon } from "../../assets/icons";

type UserIconProps = {
    uid: string
    imgUrl: string
}

export default function ProfileIcon({uid, imgUrl}: UserIconProps) {
  return (
    <div className="bg-gray-200 w-[45px] h-[45px] rounded-full overflow-hidden flex justify-center items-center p-1">
      <img src={imgUrl.length === 0 ? UserIcon : imgUrl} alt={uid} />
    </div>
  );
}
