import { UserData } from "../types/user.types";
import pool from "./pool";

const errorData: UserData[] = [];

async function executeQuery(queryText: string, params?: string[]) {
  try {
    const client = await pool.connect();
    const res = await client.query(queryText, params);

    client.release();
    return {
      data: res.rows,
      success: true,
    };
  } catch (error) {
    console.error("Unexpected error executing query: ", error);
    return {
      data: errorData,
      error: "error executing query",
      success: false,
    };
  }
}

export default executeQuery;
