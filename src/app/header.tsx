"use client";
import NavLinks from "@/components/navLinks";
import Link from "next/link";
const Header = () => {
  return (
    <header className="w-full px-[124px] z-30 relative border-b pt-20 pb-14 flex justify-between items-center">
      <Link href="/" className="text-[40px]">
        Mihey
      </Link>
      <NavLinks />
    </header>
  );
};

export default Header;
