import Link from "next/link";
import { MoveUpRight } from "lucide-react";

const Links = () => {
  return (
    <div className="flex gap-4 md:gap-8 pt-8">
      <div>
        <Link
          href="https://www.instagram.com/dimamihey/"
          className="flex gap-2 relative group"
        >
          Instagram
          <MoveUpRight />
          <span className="md:block hidden absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </div>
      <div>
        <Link
          href="https://t.me/publicdimamihey"
          className="flex gap-2 relative group"
        >
          Telegram <MoveUpRight />
          <span className="md:block hidden absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </div>
      <div>
        <Link
          href="https://www.tiktok.com/@dimamihey"
          className="flex gap-2 relative group"
        >
          Tik-Tok <MoveUpRight />
          <span className="md:block hidden absolute left-0 -bottom-1 w-full h-0.5 bg-white transition-all duration-300 origin-left transform scale-x-0 group-hover:scale-x-100"></span>
        </Link>
      </div>
    </div>
  );
};

export default Links;
