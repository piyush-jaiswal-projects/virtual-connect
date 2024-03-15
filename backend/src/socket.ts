import { Server } from "socket.io";
import { server } from "./app";
import dotenv from "dotenv";
import { Message } from "./types/message.types";
import deleteUserFromSocketList from "./utils/lib/deleteUserFromSocketList";

dotenv.config();

const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
    credentials: true,
  },
});

interface User {
  name: string;
  email: string;
  uid: string;
  sid: string;
}

var connectedUsers: User[] = [];

io.use((socket, next) => {
  //TODO verify user request
  //TODO save or replace user socket id to database
  next();
});

io.on("connection", (socket) => {
  io.to(socket.id).emit("user-sid", {sid: socket.id})

  socket.on("user-details", (user) => {
    connectedUsers = deleteUserFromSocketList(connectedUsers, user);
    connectedUsers.push(user);
    io.emit("user-joined", connectedUsers);
  });

  socket.on("message", (msg: Message) => {
    console.log(msg);
    if (msg.receipient.sid.length === 0) return;
    socket.to(msg.receipient.sid).emit("receive-message", msg);
    //TODO: Asynchronously save message to db
    console.log("emitted msg to respective client");
  });

  socket.on("disconnect", () => {
    const updatedUserList: User[] = [];
    connectedUsers.forEach((user) => {
      if (user.sid !== socket.id) updatedUserList.push(user);
    });
    connectedUsers = updatedUserList
    socket.disconnect()
    io.emit("user-left", connectedUsers);
  });
});

export { io };
