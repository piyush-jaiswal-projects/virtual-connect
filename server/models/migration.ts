import executeQuery from "./connection";
import { userCreateQuery, userDropQuery } from "./queries";

executeQuery(userCreateQuery)
  .then((res) => {
    if (res.success) console.log("$ users table created successfully");
    throw Error("users table not created")
  })
  .catch((error) => {
    console.log("X ", error.message);
  })
  .finally(() => {
    process.exit(0)
  })
