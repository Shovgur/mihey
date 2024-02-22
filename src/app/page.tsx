import Links from "@/components/Links";
import Image from "next/image";
import circle from "../../public/images/circle.png";

export default function Home() {
  return (
    <section className="flex pt-[100px] justify-between w-full">
      <div className="flex flex-col relative  gap-5">
        <h1 className="text-big leading-[89px] z-20">Привет, я Дима Михей</h1>
        <Image
          className="absolute -left-10 -top-6 z-10 animate-spin-slow"
          width={170}
          alt="circle"
          src={circle}
        />
        <p className="max-w-[550px] text-[18px]">
          I m a Senior Product Designer (UI, UX), and a Design mentor. I am
          passionate about creating a user-centered design, gathering and
          translating user data into design decisions and products.
        </p>
        <Links />
      </div>
    </section>
  );
}
