import { ChatIcon, UserIcon } from "../assets/icons";

const AppOptions = ({ uid, name }: { uid: string; name: string }) => {
  return (
    <div className="text-white my-4 flex lg:flex-col justify-center items-center">
      <a
        href="/dashboard"
        className="m-2 flex flex-col justify-center items-center"
      >
        <img
          className="invert border-black rounded-full p-1 overflow-hidden w-[30px] h-[30px]"
          alt=""
          src={ChatIcon}
        />
        <p>Chat</p>
      </a>

      <a
        href={`/profile/${uid}`}
        className="m-2 flex flex-col justify-center items-center"
      >
        <img
          className="invert  border-black rounded-full p-1 overflow-hidden w-[30px] h-[30px]"
          alt=""
          src={UserIcon}
        />
        <p> {name.split(" ")[0]}</p>
      </a>
    </div>
  );
};

export default AppOptions;
