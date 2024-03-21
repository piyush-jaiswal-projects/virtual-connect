import { UserIcon } from "../../assets/icons";

export default function ProfileIcon(props: {uid: string}) {
  return (
    <div className="bg-gray-200 w-[45px] h-[45px] rounded-full overflow-hidden flex justify-center items-center p-1">
      <img src={UserIcon} alt={props.uid} />
    </div>
  );
}
