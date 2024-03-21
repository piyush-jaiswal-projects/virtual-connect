import { useEffect, useRef, useState } from "react";
import { getCookie } from "../../utils";
import UsersList from "./userBar";
import CommunicationPanel from "./chatPanel";
import { Message } from "../../types/Message.types";
import { getAllCookies } from "../../utils/getCookie";
import { User } from "../../types/User.types";
import createMessage from "../../utils/createMessage";
import { Socket, io } from "socket.io-client";
import useWindowWidth from "../../utils/hooks/useWindowWidth";
import axios from "axios";

const URL = process.env.REACT_APP_API_URL || "";

export default function Dashboard() {
  const socket = useRef<Socket>();
  const windowWidth = useWindowWidth();

  const [isInitial, setInitial] = useState<boolean>(true);
  const [currSid, setCurrSid] = useState<string>("");
  const [activeChat, setActiveChat] = useState<User | null>(null);
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);

  if (getCookie("isUserLoggedIn") !== "true") {
    window.location.replace("/");
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

    function updateUserList(userList: User[]) {
      setOnlineUsers(userList);
    }

    function updateMessageList(msg: Message) {
      setMessageList((list) => {
        return [...list, msg];
      });
    }

    socket.current?.on("connect", notifyUserConnected);
    socket.current?.on("user-joined", (list: User[]) => updateUserList(list));
    socket.current?.on("user-left", (list: User[]) => updateUserList(list));
    socket.current?.on("receive-message", (msg: Message) =>
      updateMessageList(msg)
    );
    socket.current?.on("message-sent", (msg: Message) =>
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
    const message: Message = createMessage(msg, activeChat, currSid);
    socket.current?.emit("send-message", message);
  };

  return (
    <div className="md:flex justify-center items-start w-[100%] h-[85vh] overflow-hidden">
      <UsersList
        users={onlineUsers.filter((user) => user.sid !== currSid)}
        setActiveChat={(args: User) => {
          setActiveChat(args);
          setInitial(false);
          if (windowWidth <= 500)
            document.getElementById("user-list")?.classList.toggle("hidden");
        }}
      />
      <CommunicationPanel
        messageList={messageList}
        sendMessageHandler={sendMessageHandler}
        chatData={activeChat}
        isInitial={isInitial}
      />
    </div>
  );
}
