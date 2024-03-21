import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

import { getCookie, getAllCookies, createMessage } from "../utils";
import { useWindowWidth } from "../utils/hooks";
import { Message as MessageType } from "../types/Message.types";
import { User as UserType } from "../types/User.types";
import { ChatPanel, OnlineUserList } from "../components";

const URL = process.env.REACT_APP_API_URL || "";

export default function ChatApp() {
  const socket = useRef<Socket>();
  const windowWidth = useWindowWidth();

  const [isInitial, setInitial] = useState<boolean>(true);
  const [currSid, setCurrSid] = useState<string>("");
  const [activeChat, setActiveChat] = useState<UserType | null>(null);
  const [messageList, setMessageList] = useState<MessageType[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<UserType[]>([]);

  if (getCookie("isUserLoggedIn") !== "true") {
    window.location.replace("/");
    // TODO instead maintain internal state to
    // check whether user is logged in or not
  }

  useEffect(() => {
    socket.current = io(URL);
    socket.current.connect();

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  useEffect(() => {
    function notifyUserConnected() {
      socket.current?.on("user-sid", (connData) => {
        const sid: string = connData.sid;
        setCurrSid(sid);
        const { name, email, uid } = getAllCookies();
        const user = { name, email, uid, sid };
        socket.current?.emit("user-details", user);
      });
    }

    function updateUserList(userList: UserType[]) {
      setOnlineUsers(userList);
    }

    function updateMessageList(msg: MessageType) {
      setMessageList((list) => {
        return [...list, msg];
      });
    }

    socket.current?.on("connect", notifyUserConnected);
    socket.current?.on("user-joined", (list: UserType[]) =>
      updateUserList(list)
    );
    socket.current?.on("user-left", (list: UserType[]) => updateUserList(list));
    socket.current?.on("receive-message", (msg: MessageType) =>
      updateMessageList(msg)
    );
    socket.current?.on("message-sent", (msg: MessageType) =>
      updateMessageList(msg)
    );
    socket.current?.on("error", (error: string) => {
      alert(error);
    });

    return () => {
      socket.current?.off("user-joined");
      socket.current?.off("user-left");
      socket.current?.off("user-sid");
      socket.current?.off("receive-message");
      socket.current?.off("message-sent");
      socket.current?.off("error");
    };
  }, []);

  const sendMessageHandler = (msg: string) => {
    const message: MessageType = createMessage(msg, activeChat, currSid);
    socket.current?.emit("send-message", message);
  };

  return (
    <div className="md:flex justify-center items-start w-[100%] h-[85vh] overflow-hidden">
      <OnlineUserList
        users={onlineUsers.filter((user) => user.sid !== currSid)}
        setActiveChat={(args: UserType) => {
          setActiveChat(args);
          setInitial(false);
          if (windowWidth <= 500)
            document.getElementById("user-list")?.classList.toggle("hidden");
        }}
      />
      <ChatPanel
        messageList={messageList}
        sendMessageHandler={sendMessageHandler}
        chatData={activeChat}
        isInitial={isInitial}
      />
    </div>
  );
}
