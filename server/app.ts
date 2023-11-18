"use strict";

import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import os from "os";
import http from "http";
import path from "path";
import { Server, Socket } from "socket.io";
import {ConnectDBInstance, DisconnectDB} from "./database/connection";

console.log(`>>>>> Node Environment is ${process.env.NODE_ENV}`);

const app = express();
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

dotenv.config();

app.set("view engine", "ejs");

//Allow Cross-Origin requests
const corsOptions = {
  origin: "*", // Allow all origins
  methods: "PUT, POST, GET, DELETE, PATCH, OPTIONS", // Allowed methods
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization", // Allowed headers
  credentials: true,
  maxAge: 800,
};

const authRouter = require("./routes/auth-route");
const otpRouter = require("./routes/otp-route");

app.use(cors(corsOptions));

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Virtual Connect Server!!");
});

app.use("/api/user", authRouter);
app.use("/api/otp", otpRouter);

var server = http.createServer(app);

app.use(express.static(path.resolve("./public")));

server.listen(process.env.SERVER_PORT, () => {
  console.log(
    `>>>>> Nodejs Applications is listening on port ${process.env.SERVER_PORT}!`
  );
});
