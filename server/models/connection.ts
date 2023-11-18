import pool from "./pool";

async function executeQuery(queryText: string, params?: []) {
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
      error: "error executing query",
      success: false,
    };
  }
}

export default executeQuery;
