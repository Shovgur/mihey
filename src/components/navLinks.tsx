'use client'
import Link from "next/link";
import { useState } from "react";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:flex md:items-center md:justify-end md:gap-12 text-white ">
      <button className="md:hidden flex " onClick={toggleMenu}>
        Меню
      </button>
      <div className={`md:flex md:gap-12 ${isOpen ? 'block' : 'hidden'}`}>
        <Link className="hover:text-base_2 transition-all" href="/works">
          Работы
        </Link>
        <Link className="hover:text-base_2 transition-all" href="/media">
          Медиа
        </Link>
        <Link className="hover:text-base_2 transition-all" href="/contact">
          Связаться
        </Link>
      </div>
    </nav>
  );
};

export default NavLinks;
