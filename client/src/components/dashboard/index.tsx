import React, { useState } from "react";
import { getCookie } from "../../utils";
import OnlineList from "./onlineList";
import CommunicationPanel from "./communicationPanel";
import { ActiveUserProps } from "../../types/User.types";
import { DummyOnlineData } from "../../constants";

export default function Dashboard() {
  const isUserLoggedIn: string | null = getCookie("isUserLoggedIn");

  const [isInitial, setInitial] = useState<boolean>(true);
  const [activeChat, setActiveChat] = useState<ActiveUserProps>({
    name: "",
    uid: "",
    imgUrl: "",
  });

  if (isUserLoggedIn !== "true") {
    window.location.replace("/");
  }

  return (
    <div className="md:flex justify-center items-start w-[100%] h-[85vh] overflow-hidden">
      <OnlineList
        onlineUsers={DummyOnlineData}
        setActiveChat={(name: string, uid: string, imgUrl: string) => {
          setActiveChat({ name, uid, imgUrl });
          setInitial(false);
        }}
      />
      <CommunicationPanel chatData={activeChat} isInitial={isInitial} />
    </div>
  );
}
