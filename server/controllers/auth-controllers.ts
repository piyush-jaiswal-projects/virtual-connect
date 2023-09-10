import { Request, Response } from 'express'

const signin = async (req: Request, res: Response) => {
    // check if user exists
    // if it does and is verified, match password and redirect to user portal on success
    // if it doesn't, send OTP to mail id and store it in database with field verified equals to false
}

exports.Register = signin