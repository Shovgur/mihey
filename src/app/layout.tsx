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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-white font-primary relative bg-[#161313] z-20">
        <Header />
        <main className="flex min-h-screen px-[104px] overflow-x-hidden z-20 relative">
          {children}
        </main>

        <Image
          className="absolute bottom-0 w-full z-10"
          src={elipse_dark}
          alt="elipse_1"
        />
        <Image
          className="absolute h-full w-full top-0"
          alt="photo"
          src={mihey}
        />
      </body>
    </html>
  );
}
