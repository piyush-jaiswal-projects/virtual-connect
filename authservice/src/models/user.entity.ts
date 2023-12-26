import { EntitySchema } from "typeorm";
import { generateUserId } from "../utils";

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      type: "text",
      primary: true,
    },
    email: {
      type: "text",
      unique: true,
      nullable: false,
    },
    password: {
      type: "text",
      nullable: false,
    },
    isVerified: {
      type: "boolean",
      default: false,
    },
    last_otp: {
      type: "text",
      nullable: true,
    },
  },
});

export class User {
  id: string;
  email: string;
  password: string;
  isVerified: boolean;

  constructor(id: string, email: string, password: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.isVerified = false;
  }
}
