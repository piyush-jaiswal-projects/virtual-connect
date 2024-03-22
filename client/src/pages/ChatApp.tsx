import { useEffect, useRef, useState } from "react";
import { Socket, io } from "socket.io-client";

import { getCookie, getAllCookies, createMessage } from "../utils";
import { useWindowWidth } from "../utils/hooks";
import { Message as MessageType } from "../types/Message.types";
import { User as UserType } from "../types/User.types";
import {
  ChatPanel,
  Footer,
  OnlineUserList,
  SearchUserBar,
  VerticalBar,
} from "../components";

const URL = process.env.REACT_APP_API_URL || "";

export default function ChatApp() {
  const socket = useRef<Socket>();
  const windowWidth = useWindowWidth();
  const userId = getCookie("uid");
  const name = getCookie("name");

  const [isInitial, setInitial] = useState<boolean>(false);
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

  const toggleUserListpanel = () => {
    document.getElementById("user-list-panel")?.classList.toggle("hidden");
  };

  return (
    <>
      <div className="lg:flex justify-center items-start w-[100%] h-[100vh] lg:h-[93vh] lg:overflow-hidden bg-gray-300">
        <VerticalBar
          uid={userId === null ? "nullId" : userId}
          name={name === null ? "null" : name}
        />
        <div
          onClick={toggleUserListpanel}
          className="lg:hidden h-[30px] bg-white p-1 text-center"
        >
          {document
            .getElementById("user-list-panel")
            ?.classList.contains("hidden")
            ? "Show Users"
            : "Hide Users"}
        </div>
        <div
          id="user-list-panel"
          className="w-[100%] lg:w-[25%] lg:flex flex-col justify-around items-center lg:h-[100%] p-2 m-0"
        >
          <SearchUserBar
            userList={onlineUsers}
            setUserList={(newList: UserType[]) => {
              setOnlineUsers(newList);
            }}
          />
          <OnlineUserList
            users={onlineUsers.filter((user) => user.sid !== currSid)}
            setActiveChat={(args: UserType) => {
              setActiveChat(args);
              setInitial(false);
              toggleUserListpanel();
              if (windowWidth <= 500)
                document
                  .getElementById("user-list")
                  ?.classList.toggle("hidden");
            }}
          />
        </div>
        <ChatPanel
          messageList={messageList}
          sendMessageHandler={sendMessageHandler}
          chatData={activeChat}
          isInitial={isInitial}
        />
      </div>
          <div className="hidden lg:block">
          <Footer />
      </div>
    </>
  );
}
