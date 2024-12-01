"use client";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import avatar from "../../../public/images/mihey/mihey.jpeg";
import Image from "next/image";

const page = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <main className="flex min-h-screen px-[30px] md:px-[104px] overflow-x-hidden z-20 relative ">
      <div className="pt-12 flex-col flex md:flex md:flex-row justify-between w-full">
        <div className="flex flex-col pb-10 md:pb-0">
          <h1 className="text-[35px] leading-[48px] md:text-big md:leading-[80px] max-w-[770px]">
            Do you have any Ideas? Let’s create the future
          </h1>
          <ContactForm onClose={closeModal} />
        </div>
        <div className="bg-[url('/images/mihey/mihey.jpeg')] bg-cover md:block hidden rounded-full w-[400px] h-[400px]"></div>
      </div>
    </main>
  );
};

export default page;
