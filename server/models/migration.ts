import executeQuery from "./connection";
import { userCreateQuery, userDropQuery } from "./queries";

executeQuery(userCreateQuery)
  .then((res) => {
    console.log("users tabel created successfully");
  })
  .catch((res) => {
    console.log("users tabel not created");
  });
