import nodemailer from "nodemailer";

interface EmailInterface {
    host: string;
  }
  
  export default EmailInterface;
  

export const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
} as EmailInterface );

export const mailOptions = {
  from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
  to: `${process.env.SMTP_TO_EMAIL}`,
};
