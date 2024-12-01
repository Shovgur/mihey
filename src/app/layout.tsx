import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Image from "next/image";
import elipse_dark from "../../public/images/elipse_all_dark.png";
import localFont from "next/font/local";
import "swiper/css";
import "swiper/css/effect-fade";

export const metadata: Metadata = {
  title: "Dima Mihey",
  description: "Ведущий мероприятий",
};

const font = localFont({ src: "./fonts/Figtree-VariableFont_wght.ttf" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-white font-primary relative bg-[#161313] z-20 ${font.className}`}
      >
        <Header />
        {children}

        <Image
          className="absolute bottom-0 w-full h-full z-10"
          src={elipse_dark}
          alt="elipse_1"
        />
      </body>
    </html>
  );
}
