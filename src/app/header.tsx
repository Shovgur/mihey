import NavLinks from "@/components/navLinks";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full px-[124px] z-30 relative  pt-20 pb-14 flex justify-between items-center">
      <div className="flex items-center w-full justify-between ">
        <Link href="/" className="text-[30px]">
          Mihey
        </Link>
        <NavLinks />
      </div>
    </header>
  );
};

export default Header;
