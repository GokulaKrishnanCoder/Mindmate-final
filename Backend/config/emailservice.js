// utils/emailService.js
import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
  host: 'smtp-relay.brevo.com',
  port: 587, // TLS port
  secure: false, // use TLS
  auth: {
    user: process.env.BREVO_SMTP_LOGIN, // Brevo SMTP Login
    pass: process.env.BREVO_SMTP_KEY,   // Brevo SMTP Key
  },
});

export const sendMail = async ({ to, subject, text }) => {
  try {
    await transporter.sendMail({
      from: '"Mindmate" <care.mindmate@gmail.com>',
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    throw new Error('Failed to send email');
  }
};
