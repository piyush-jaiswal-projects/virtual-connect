import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const conString = process.env.DB_CONNECTION_STRING;

function ConnectDBInstance() {
  var client = new pg.Client(conString);
  client.connect(function (err) {
    if (err) {
      return console.error("could not connect to postgres", err);
    }
    client.query('SELECT NOW() AS "theTime"', function (err, result) {
      if (err) {
        return console.error("error running query", err);
      }
      console.log("DB Connected", result.rows[0].theTime);
      // >> output: 2018-08-23T14:02:57.117Z
    //     client.end(() => {
    //       console.log("DB disconnected");
          
    //   });
    });
  });
}

function DisconnectDB() {
    var client = new pg.Client(conString);
    client.end(() => {
        console.log("DB disconnected");
        
    });
}

export {ConnectDBInstance, DisconnectDB};
