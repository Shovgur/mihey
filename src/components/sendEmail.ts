"use server";
import axios from "axios";
import nodemailer from "nodemailer";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export async function sendMessage(formData: FormData): Promise<void> {
  try {
    // Отправляем данные на mock API
    const response = await axios.post(
      "https://65cb4e84efec34d9ed873756.mockapi.io/api/nodemailer/nodemailer",
      formData
    );
    console.log("Data sent to mock API:", response.data);

    // Отправляем сообщение на почту
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL || "your-email@gmail.com",
        pass: process.env.PASSWORD || "your-email-password",
      },
    });

    const mailOptions = {
      from: formData.email || "your-email@gmail.com",
      to: "dimamihey11@gmail.com",
      subject: "Ведущий Дмитрий Михей",
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error("Failed to send email");
  }
}
