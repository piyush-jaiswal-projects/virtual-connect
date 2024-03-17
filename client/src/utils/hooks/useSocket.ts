import { useEffect, useRef } from "react";
import { Socket, io } from "socket.io-client";

const URL = process.env.REACT_APP_API_URL || "";

const useSocket = ():Socket | undefined => {
  const socket = useRef<Socket>();

  useEffect(() => {
    socket.current = io(URL, {
      withCredentials: false,
      retries: 5,
      reconnection: true,
      reconnectionDelay: 5000,
      reconnectionAttempts: Infinity,
      autoConnect: true,
    });
    socket.current.connect();

    return () => {
      socket.current?.disconnect();
    };
  }, []);

  return socket.current;
};

export default useSocket;
