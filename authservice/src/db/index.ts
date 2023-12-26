import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { DB_NAME } from "../constants";
import userEntity from "../models/user.entity";

dotenv.config({
  path: "../.env",
});

const connectDB = async () => {
  try {
    const myDataSource = new DataSource({
      type: "postgres",
      host: process.env.DB_HOST,
      port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined,
      database: DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [userEntity],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
    });

    const connectionString = await myDataSource.initialize();
    console.log("Postgres db Connected");
  } catch (error) {
    console.log("Postgres db connection Failed! ", error);
    process.exit(1);
  }
};

export default connectDB;
