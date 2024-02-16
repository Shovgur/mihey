import Links from "@/components/Links";

export default function Home() {
  return (
    <section>
      <div className="flex flex-col gap-5">
        <h1 className="text-big">Привет, я Дима Михей</h1>
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
