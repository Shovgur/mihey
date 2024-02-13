import Image from "next/image";
import hero_image from "../../public/images/div.hero-images.png";

export default function Home() {
  return (
    <section>
      <Image alt="hero" src={hero_image} />
    </section>
  );
}
