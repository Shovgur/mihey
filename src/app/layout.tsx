import type { Metadata } from "next";
import "./globals.css";
import Header from "./header";
import Image from "next/image";
import elipse_2 from "../../public/images/elips_all.png";


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
        <main className="flex min-h-screen px-[124px] z-20 relative">
          {children}
        </main>
        
        <Image
          className="absolute bottom-0 w-full z-10"
          src={elipse_2}
          alt="elipse_1"
        />
      </body>
    </html>
  );
}
