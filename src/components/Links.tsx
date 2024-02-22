import Link from "next/link";
import { MoveUpRight } from "lucide-react";
const Links = () => {
  return (
    <div className="flex gap-4 md:gap-8 pt-8">
      <Link className="flex gap-2" href="/https://www.instagram.com/dimamihey/">
        Instagram
        <MoveUpRight />
      </Link>
      <Link className="flex gap-2" href="/https://t.me/publicdimamihey">
        Telegram <MoveUpRight />
      </Link>
      <Link className="flex gap-2" href="/https://www.tiktok.com/@dimamihey">
        Tik-Tok <MoveUpRight />
      </Link>
    </div>
  );
};

export default Links;
