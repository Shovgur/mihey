"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { sendMessage } from "./sendEmail";

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
      className="pt-2 text-black flex flex-col gap-8"
      onSubmit={handleSubmit}
    >
      <label className="flex flex-col">
        <input
          placeholder="Ваше имя"
          className="w-full rounded-none pt-2 border-0 border-b bg-transparent pb-3   text-base font-light leading-[1em] tracking-[-.06em] text-black outline-none placeholder:font-light placeholder:text-black placeholder:text-opacity-50 focus:placeholder:text-opacity-30 lg:pb-2 "
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <label className="flex flex-col">
        <input
          placeholder="Email"
          className="w-full rounded-none pt-2 border-0 border-b bg-transparent pb-3   text-base font-light leading-[1em] tracking-[-.06em] text-black outline-none placeholder:font-light placeholder:text-black placeholder:text-opacity-50 focus:placeholder:text-opacity-30 lg:pb-2 "
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </label>
      <label className="flex flex-col">
        <input
          placeholder="Сообщение"
          className="w-full rounded-none pt-2 border-0 border-b bg-transparent pb-3   text-base font-light leading-[1em] tracking-[-.06em] text-black outline-none placeholder:font-light placeholder:text-black placeholder:text-opacity-50 focus:placeholder:text-opacity-30 lg:pb-2 "
          type="text"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        />
      </label>
      <div className="flex justify-between">
        <button
          type="submit"
          className="inline-flex justify-center transform transition-all rounded-lg border border-black px-4 py-2 text-sm font-medium text-black hover:-translate-y-1"
        >
          Отправить
        </button>
        <button
          type="button"
          className="inline-flex justify-center transform transition-all rounded-lg border border-black px-4 py-2 text-sm font-medium text-black hover:-translate-y-1"
          onClick={onClose}
        >
          Отмена
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
