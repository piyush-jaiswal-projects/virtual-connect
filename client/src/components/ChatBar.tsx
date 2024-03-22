import { useState } from "react";

export default function ChatBar(props: {
  sendMessage: (msg: string) => void;
}) {

  const [message, setMessage] = useState<string>("")

  return (
    <div className="h-[10%] bg-white rounded-lg flex justify-around items-center w-[100%] my-2">
        <input
          id="msgInput"
          className="w-[85%] border rounded-lg h-[50px] px-2 outline-none"
          type="text"
        placeholder="enter your message ..."
        autoComplete="off"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              props.sendMessage(message);
              setMessage("");
            }
          }}
        />
        <button
          id="msgBtn"
          className="bg-black w-[20%] md:w-[15%] lg:w-[10%] text-white h-[50px] rounded-lg px-2"
          onClick={() => {
            props.sendMessage(message);
            setMessage("");
          }}
        >
          Send
        </button>
    </div>
  );
}
