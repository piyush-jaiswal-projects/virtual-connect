import { server } from "./app";
import dotenv from "dotenv";
import connectDB from "./db";
import { io } from "./socket";

dotenv.config({
  path: "../.env",
});

connectDB()
  .then(() => {
    server.listen(process.env.PORT || 6969, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .then(() => {
    io.listen(5001)
  })
  .catch((err) => {
    console.log("POSTGRES db connection failed !!! ", err);
  });
