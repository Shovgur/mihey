"use client";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import avatar from "../../../public/images/mihey/sticker_mihey.webp";
import Image from "next/image";

const page = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div className="pt-12 flex-col flex md:flex md:flex-row justify-between w-full">
      <div className="flex flex-col pb-10 md:pb-0">
        <h1 className="text-[35px] leading-[48px] md:text-big md:leading-[80px] max-w-[770px]">
          Do you have any Ideas? Let’s create the future
        </h1>
        <ContactForm onClose={closeModal} />
      </div>
      <div>
        <Image
          className="bg-white h-[300px] md:block hidden rounded-full mt-16 ml-10"
          width={300}
          alt="avatar"
          src={avatar}
        />
      </div>
    </div>
  );
};

export default page;
