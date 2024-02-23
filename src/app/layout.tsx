import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Image from "next/image";
import elipse_dark from "../../public/images/elipse_all_dark.png";
import mihey from "../../public/images/mihey/bg.png";

import "swiper/css";
import "swiper/css/effect-fade";

export const metadata: Metadata = {
  title: "Dima Mihey",
  description: "Ведущий мероприятий",
};

export default function RootLayout({
  children,
  isHomepage,
}: Readonly<{
  children: React.ReactNode;
  isHomepage: boolean;
}>) {
  return (
    <html lang="en">
      <body className="text-white font-primary relative bg-[#161313] z-20">
        <Header />
        {children}

        <Image
          className="absolute bottom-0 w-full z-10"
          src={elipse_dark}
          alt="elipse_1"
        />
      </body>
    </html>
  );
}
