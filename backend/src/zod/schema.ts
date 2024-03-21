import {z} from "zod"

export const MessageSchema = z.object({
    senderId: z.string(),
    recieverId: z.string(),
    message: z.object({})
})