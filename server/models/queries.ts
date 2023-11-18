export const userCreateQuery = `CREATE TABLE IF NOT EXISTS users
(
    id VARCHAR(100) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    isVerified BOOLEAN DEFAULT FALSE,
    last_otp VARCHAR(100)
)`

export const userDropQuery = `DROP TABLE IF EXISTS users`

export const searchUserQuery = `SELECT * FROM users WHERE email = $1`

export const saveUserQuery = `INSERT into users Values ($1, $2, $3, $4, $5, $6)`

export const saveUserOtpQuery = `UPDATE users SET last_otp = $1 WHERE email = $2`