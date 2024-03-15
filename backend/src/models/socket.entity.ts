import { EntitySchema } from "typeorm";

export default new EntitySchema({
    name: "Socket Id and User Id Map",
    tableName: "sid_map",
    columns: {
        sid: {
            type: "text"
        },
        uid: {
            type: "text",
            primary: true
        }
    }
})