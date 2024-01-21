import { useState } from "react";

export default function ChatBar() {
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    alert(`Sent a message! : ${message}`);
    setMessage("");
  };

  return (
    <div className="h-[50px] flex justify-center items-center w-[100%]">
      <div className="rounded-3xl w-[80%] h-[50px]">
        <input
          id="msgInput"
          className="w-[90%] border rounded-l-3xl h-[50px] px-2 outline-none"
          type="text"
          placeholder="enter your message ..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              sendMessage();
            }
          }}
        />
        <button
          id="msgBtn"
          className="bg-black w-[10%] text-white h-[50px] rounded-r-3xl px-2"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
