import { app } from "./app";
import dotenv from "dotenv";
import connectDB from "./db";

dotenv.config({
  path: "../.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 6969, () => {
      console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("POSTGRES db connection failed !!! ", err);
  });
