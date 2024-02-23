"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("locked");
    } else {
      document.body.classList.remove("locked");
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <button className="md:hidden uppercase text-white" onClick={toggleMenu}>
        {isOpen ? "" : "Menu"}
      </button>
      <nav
        className={` md:relative w-full h-full z-50 items-center ${
          isOpen
            ? "flex locked  top-0 left-0 fixed bg-black justify-center "
            : "hidden md:flex "
        }`}
      >
        <div className="md:flex flex flex-col w-full uppercase gap-5 justify-end items-center md:items-center md:flex-row md:p-5  md:gap-12">
          <button
            className="absolute md:hidden top-8 right-8 text-white"
            onClick={toggleMenu}
          >
            &#10006;
          </button>
          <Link
            className="hover:text-base_2 transition-all text-white"
            href="/works"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Работы
          </Link>
          <Link
            className="hover:text-base_2  transition-all text-white"
            href="/media"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Медиа
          </Link>
          <Link
            className="hover:text-base_2 btn material-bubble border p-3 transition-all text-white"
            href="/contact"
            onClick={() => {
              setIsOpen(false);
            }}
          >
            Связаться
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavLinks;
