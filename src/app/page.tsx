import Links from "@/components/Links";
import Image from "next/image";
import mihey from "../../public/images/mihey/mihey_photo.png";
import circle from "../../public/images/circle.png";

export default function Home() {
  return (
    <section className="flex pt-[100px] justify-between w-full">
      <div className="flex flex-col relative  gap-5">
        <h1 className="text-big z-20">Привет, я Дима Михей</h1>
        <Image className="absolute -right-10 -top-6 z-10 animate-spin-slow" width={170} alt="circle" src={circle}/>
        <p className="max-w-[550px] text-[18px]">
          I m a Senior Product Designer (UI, UX), and a Design mentor. I am
          passionate about creating a user-centered design, gathering and
          translating user data into design decisions and products.
        </p>
        <Links />
      </div>
      <Image width={400} className="md:w-[500px] absolute right-0 top-0 md:h-[600px]" alt="photo" src={mihey} />
    </section>
  );
}
