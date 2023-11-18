export const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    isVerified BOOLEAN DEFAULT FALSE,
    last_otp VARCHAR(100)
)`

export const userDropQuery = `DROP TABLE IF EXISTS users`