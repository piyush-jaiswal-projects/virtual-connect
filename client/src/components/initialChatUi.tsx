import { Chatting } from "../assets/images";

export default function InitialChatUI() {
  return (
    <div className="bg-gray-200 h-[100%] flex justify-center items-center">
      <div>
        <img src={Chatting} alt="" />
        <p className="text-center">
          Select User to start chatting
        </p>
      </div>
    </div>
  );
}
