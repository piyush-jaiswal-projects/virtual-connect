import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import AuthRouter from "./routes/auth.routes";
import OtpRouter from "./routes/otp.routes";
import UserRouter from "./routes/user.routes";
import ChatRouter from "./routes/chat.routes";
import { createServer } from "http";

const app = express();
const server = createServer(app);

const corsOptions = {
  origin: "*", // Allow all origins
  methods: "PUT, POST, GET, DELETE, PATCH, OPTIONS", // Allowed methods
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization", // Allowed headers
  credentials: true,
  maxAge: 800,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/auth", AuthRouter);
app.use("/api/otp", OtpRouter);
app.use("/api/user", UserRouter);
app.use("/api/chat", ChatRouter);

app.get("/", (req: Request, res: Response) => {
  console.log("pinged");

  res.send("Welcome to Virtual Connect Server!!");
});

export { server };
