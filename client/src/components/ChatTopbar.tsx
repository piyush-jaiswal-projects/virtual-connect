import ProfileIcon from "../ui/images/profileIcon";

export default function ChatTopbar(props: { name: string, uid: string }) {
  return (
    <div className="flex justify-between items-center p-2 border-b w-[100%] h-[50px] lg:h-[8%] bg-white rounded-lg">
      <div className="flex justify-start items-center">
        <ProfileIcon uid={props.uid} />
        <h2 className="mx-2 text-black">{props.name}</h2>
      </div>

      <div className="flex justify-center items-center">
        <a href={`/profile/${props.uid}`} className="bg-black flex justify-center items-center rounded-full h-[40px] w-auto text-white px-4 ">
          Profile
        </a>
      </div>
    </div>
  );
}
