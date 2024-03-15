import { useMemo } from "react";
import { io } from "socket.io-client";

const URL = process.env.REACT_APP_API_URL || "";

const useSocket = () => {
  const socket = useMemo(
    () =>
      io(URL, {
        withCredentials: true,
        retries: 5,
        reconnectionDelay: 5000,
        reconnectionAttempts: 3,
      }),
    []
  );
  return socket;
};

export default useSocket
