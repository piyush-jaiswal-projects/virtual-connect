import { useCallback, useEffect, useState } from "react";
import { getCookie } from "../../utils";
import UsersList from "./userBar";
import CommunicationPanel from "./chatPanel";
import { Message } from "../../types/Message.types";
import { getAllCookies } from "../../utils/getCookie";
import { User } from "../../types/User.types";
import useSocket from "../../utils/hooks/useSocket";
import createMessage from "../../utils/createMessage";

export default function Dashboard() {
  const socket = useSocket();

  const [isInitial, setInitial] = useState<boolean>(true);
  const [currSid, setCurrSid] = useState<string>("");
  const [activeChat, setActiveChat] = useState<User | null>(null);
  const [messageList, setMessageList] = useState<Message[]>([]);
  const [onlineUsers, setOnlineUsers] = useState<User[]>([]);

  if (getCookie("isUserLoggedIn") !== "true") {
    window.location.replace("/");
  }

  useEffect(() => {
    socket.on("connect", () => {
      socket.on("user-sid", (connData) => {
        const sid: string = connData.sid;
        setCurrSid(sid);
        const { name, email, uid } = getAllCookies();
        const user = { name, email, uid, sid };
        socket.emit("user-details", user);
      });
    });

    socket.on("user-joined", (userList: User[]) => {
      setOnlineUsers(userList);
    });

    socket.on("user-left", (userList: User[]) => {
      setOnlineUsers(userList);
    });

    socket.on("receive-message", (msg: Message) => {
      console.log(msg);
      setMessageList((list) => {
        return [...list, msg];
      });
    });

    // return () => {
    //   socket.emit("disconnect")
    // };
  }, [socket]);

  const sendMessageHandler = useCallback((msg: string) => {
    const message: Message = createMessage(msg, activeChat, currSid);
    socket.emit("message", message);
    console.log(`Tried to send message: ${message.content}`);
  }, []);

  return (
    <div className="md:flex justify-center items-start w-[100%] h-[85vh] overflow-hidden">
      <UsersList
        users={onlineUsers}
        setActiveChat={(args: User) => {
          setActiveChat(args);
          setInitial(false);
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
