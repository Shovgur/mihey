import Links from "../components/Links";
import Image from "next/image";
import circle from "../../public/images/circle.png";
import mihey from "../../public/images/mihey/bg.png";

export default function Home() {
  return (
    <>
      <section className="flex pt-[100px] justify-between min-h-screen px-[30px] md:px-[104px] overflow-x-hidden w-full relative z-20">
        <div className="flex flex-col relative  gap-5">
          <h1 className="text-[49px] md:text-big leading-[60px] md:leading-[89px] relative ">
            Привет, я Дима Михей
          </h1>
          <Image
            className="absolute -left-10 -top-10 md:block hidden z-10 animate-spin-slow"
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
      <Image
        className="absolute object-cover h-full w-full top-0 left-0"
        alt="photo"
        src={mihey}
      />
    </>
  );
}
