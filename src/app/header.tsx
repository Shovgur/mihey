"use client";
import NavLinks from "@/components/navLinks";
const Header: React.FC = () => {
  return (
    <header className="w-full px-[124px] z-30 relative border-b pt-20 pb-14 flex justify-between items-center">
      <div className="text-[40px]">Mihey</div>
      <NavLinks />
    </header>
  );
};

export default Header;
