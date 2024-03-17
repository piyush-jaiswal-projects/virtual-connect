import { useState } from "react";

export default function ChatBar(props: {
  sendMessage: (msg: string) => void;
}) {

  const [message, setMessage] = useState<string>("")

  return (
    <div className="h-[50px] flex justify-center items-center w-[100%] my-2">
      <div className="rounded-3xl w-[90%] h-[50px]">
        <input
          id="msgInput"
          className="w-[80%] border rounded-l-3xl h-[50px] px-2 outline-none"
          type="text"
          placeholder="enter your message ..."
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
          className="bg-black w-[20%] md:w-[15%] lg:w-[10%] text-white h-[50px] rounded-r-3xl px-2"
          onClick={() => {
            props.sendMessage(message);
            setMessage("");
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
