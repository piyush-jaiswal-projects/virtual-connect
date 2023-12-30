import { EntitySchema } from "typeorm";

export default new EntitySchema({
  name: "User",
  tableName: "users",
  columns: {
    id: {
      type: "text",
      primary: true,
    },
    name: {
      type: "text",
      unique: true,
      nullable: false,
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
    }
  },
});

export class User {
  id: string;
  name: string;
  email: string;
  password: string;
  isVerified: boolean;
  last_otp: string;

  constructor(
    id: string,
    name: string,
    email: string,
    password: string,
    isVerified = false,
    last_otp = ""
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
    this.isVerified = isVerified;
    this.last_otp = last_otp;
  }
}
