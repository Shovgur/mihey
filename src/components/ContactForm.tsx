"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { sendMessage } from "./sendEmail";
import { MoveUpRight } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactFormProps {
  onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await sendMessage(formData);
      console.log("Message sent successfully!");
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <form
      className="text-black flex flex-col gap-12 pt-32"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col">
        <input
          placeholder="Имя"
          className="w-full pt-2 border-0 border-b bg-transparent pb-3 lg:px-2 !text-white font-light leading-[1em] tracking-[-.03em]  outline-none placeholder:font-light placeholder:text-black placeholder:text-opacity-50 focus:placeholder:text-opacity-30 lg:pb-2 "
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label className="flex flex-col">
        <input
          placeholder="Email"
          className="w-full rounded-none pt-2 border-0 border-b bg-transparent pb-3 lg:px-2 text-white  font-light leading-[1em] tracking-[-.03em]  outline-none placeholder:font-light placeholder:text-black placeholder:text-opacity-50 focus:placeholder:text-opacity-30 lg:pb-2 "
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label className="flex flex-col">
        <input
          placeholder="Сообщение"
          className="w-full rounded-none pt-2 border-0 border-b bg-transparent pb-3 lg:px-2 text-white  font-light leading-[1em] tracking-[-.03em]  outline-none placeholder:font-light placeholder:text-black placeholder:text-opacity-50 focus:placeholder:text-opacity-30 lg:pb-2 "
          type="text"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit" className="flex uppercase gap-3 hover:text-base_2">
        Отправить
        <MoveUpRight />
      </button>
    </form>
  );
};

export default ContactForm;
