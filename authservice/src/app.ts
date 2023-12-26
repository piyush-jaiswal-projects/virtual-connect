import express, { Request, Response } from "express";
import cors from "cors";
import AuthRouter from "./routes/auth";
import OtpRouter from "./routes/otp";

const app = express();

const corsOptions = {
  origin: "*", // Allow all origins
  methods: "PUT, POST, GET, DELETE, PATCH, OPTIONS", // Allowed methods
  allowedHeaders:
    "Origin, X-Requested-With, Content-Type, Accept, Authorization", // Allowed headers
  credentials: true,
  maxAge: 800,
};

app.use(cors(corsOptions));
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

app.use("/api/user", AuthRouter);
app.use("/api/otp", OtpRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Virtual Connect Server!!");
});

export { app };
