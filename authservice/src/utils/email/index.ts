import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.SENDER_GMAIL_ADDRESS,
    clientId: process.env.SENDER_GMAIL_CLIENT_ID,
    clientSecret: process.env.SENDER_GMAIL_CLIENT_SECRET,
    accessToken: process.env.SENDER_GMAIL_ACCESS_TOKEN,
  },
});

export default async function sendMail(
  recipient_mail: string,
  subject: string,
  body: string
) {
  try {
    const mail = {
      from: `"Piyush Jaiswal" <${process.env.SENDER_GMAIL_ADDRESS}>`,
      to: recipient_mail,
      subject: subject,
      text: body,
    };

    const info = await transporter.sendMail(mail);
    console.log("Message sent: %s", info.messageId);
    return {
      success: true,
      message: `Mail sent successfully, message id: ${info.messageId}`,
    };
  } catch (error) {
    console.error("Mail not sent", error);
    return {
      success: false,
      message: "Mail not sent, encountered an error",
    };
  }
}
