"use client";
import { useState, Fragment } from "react";
import InstIcon from "@/components/Icons/InstIcon";
import TelegramIcon from "@/components/Icons/TelegramIcon";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import ContactForm from "@/components/ContactForm";
const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <header className="w-full p-7 flex justify-between items-center">
      <div className="">Logo</div>
      <div className="flex items-center gap-4">
        <Link target="_blank" href="https://www.instagram.com/dimamihey/">
          <InstIcon className="w-7 h-7 p-1 rounded-lg hover:rounded-sm border" />
        </Link>
        <Link target="_blank" href="https://t.me/publicdimamihey">
          <TelegramIcon className="w-8 h-8 border rounded-full hover:rounded-lg p-1" />
        </Link>
        <button
          className="uppercase hover:cursor-pointer btn material-bubble"
          onClick={() => setIsOpen(true)}
        >
          Связаться
        </button>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    />
                    <ContactForm onClose={closeModal} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </header>
  );
};

export default Header;
