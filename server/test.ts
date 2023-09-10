// index.js

import express from "express";
const { Server: SocketIO } = require("socket.io");
import http from "http";
import path from "path";
import { Server, Socket } from "socket.io";

const app = express();
const server = http.createServer(app);

const io = new SocketIO(server);
const PORT = 8000;

// Create a users map to keep track of users
const users = new Map();

app.get("/users", (req, res) => {
  return res.json(Array.from(users));
});

io.on('connection', (socket: Socket) => {
    console.log(`user connected: ${socket.id}`);
    users.set(socket.id, socket.id);

    // emit that a new user has joined as soon as someone joins
    socket.broadcast.emit('users:joined', socket.id);
    socket.emit('hello', { id: socket.id });

    socket.on('outgoing:call', data => {
        const { fromOffer, to } = data;

        socket.to(to).emit('incomming:call', { from: socket.id, offer: fromOffer });
    });

    socket.on('call:accepted', data => {
        const { answere, to } = data;
        socket.to(to).emit('incomming:answere', { from: socket.id, offer: answere })
    });


    socket.on('disconnect', () => {
        console.log(`user disconnected: ${socket.id}`);
        users.delete(socket.id);
        socket.broadcast.emit('user:disconnect', socket.id);
    });
});


app.use(express.static( path.resolve('./public') ));

app.get('/users', (req, res) => {
    return res.json(Array.from(users));
});

server.listen(PORT, () => console.log(`Server started at PORT:${PORT}`));


// "use strict";

// import express from "express";
// import { Request, Response } from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import os from "os";
// import http from "http";
// import path from "path";
// import { Server, Socket } from "socket.io";

// console.log(`>>>>> Node Environment is ${process.env.NODE_ENV}`);

// const app = express();
// // app.use(express.json({ limit: "10mb" }));
// // app.use(express.urlencoded({ limit: "10mb", extended: true }));

// // dotenv.config();

// // app.set("view engine", "ejs");

// // create a users map to keep track of users
// const users = new Map();

// // Allow Cross-Origin requests
// // const corsOptions = {
// //   origin: "*", // Allow all origins
// //   methods: "PUT, POST, GET, DELETE, PATCH, OPTIONS", // Allowed methods
// //   allowedHeaders:
// //     "Origin, X-Requested-With, Content-Type, Accept, Authorization", // Allowed headers
// //   credentials: true,
// //   maxAge: 800,
// // };

// // const authRouter = require("./routes/auth-route");
// // const otpRouter = require("./routes/otp-route");

// // app.use(cors(corsOptions));

// // app.get("/", (req: Request, res: Response) => {
// //   res.send("Welcome to Virtual Connect Server!!");
// // });

// // app.use("/api/user", authRouter);
// // app.use("/api/otp", otpRouter);

// var server = http.createServer(app);
// const io = new Server();

// io.on("connection", (socket: Socket) => {
//   console.log(`user connected: ${socket.id}`);

//   socket.on("disconnect", () => {
//     console.log(`user disconnected: ${socket.id}`);
//   });

//   socket.on("outgoing:call", (data) => {
//     const { fromOffer, to } = data;
//     socket.to(to).emit("incomming:call", { from: socket.id, offer: fromOffer });
//   });

//   socket.on("call:accepted", (data) => {
//     const { answere, to } = data;
//     socket
//       .to(to)
//       .emit("incomming:answere", { from: socket.id, offer: answere });
//   });
// });

// app.use(express.static(path.resolve("./public")));

// server.listen(process.env.SERVER_PORT, () => {
//   console.log(
//     `>>>>> Nodejs Applications is listening on port ${process.env.SERVER_PORT}!`
//   );
// });
