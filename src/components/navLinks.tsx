import Link from "next/link";
const NavLinks = () => {
  return <nav className="flex gap-12 text-white text-header-little">
    <Link className="hover:text-base_2 transition-all" href='/works'>Работы</Link>
    <Link className="hover:text-base_2 transition-all" href='/works'>Связатся</Link>
    <Link className="hover:text-base_2 transition-all" href='/works'>Медиа</Link>
  </nav>;
};

export default NavLinks;
