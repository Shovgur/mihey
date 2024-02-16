import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Image from "next/image";
import elipse_2 from "../../public/images/elips_all.png";
import avatar from "../../public/images/mihey/sticker_mihey.webp"

export const metadata: Metadata = {
  title: "Dima Mihey",
  description: "Ведщуий мероприятий",
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
        <main className="flex min-h-full px-[124px] z-20 relative pt-[100px]">
          {children}
          <Image className="bg-white rounded-full mt-16 ml-10" width={300} height={400} alt="avatar" src={avatar}/>
        </main>
        
        <Image
          className="absolute -top-56 w-full z-10"
          src={elipse_2}
          alt="elipse_1"
        />
      </body>
    </html>
  );
}
