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
          <span className="max-w-[550px] text-[18px] font-semibold">
            Добро пожаловать на сайт вашего идеального партнера в организации
            незабываемых мероприятий! Я специализируюсь на проведении различных
            событий: от свадеб и корпоративов до юбилеев и тематических
            вечеринок. Моя цель — сделать каждое мероприятие уникальным и
            запоминающимся.
            <h4>
              <br />
              <span className="text-[20px]">Что я предлагаю:</span>
              <ul className="flex flex-col gap-3 ">
                <br />
                <li>
                  • Профессиональный подход: С многолетним опытом в индустрии
                  развлечений, я знаю, как создать атмосферу, которая будет
                  радовать вас и ваших гостей.
                </li>
                <li>
                  • Индивидуальные решения: Каждое мероприятие — это уникальная
                  история. Я работаю в тесном сотрудничестве с клиентами, чтобы
                  понять их пожелания и реализовать самые смелые идеи.
                </li>
                <li>
                  • Креативные концепции: Я предлагаю оригинальные сценарии и
                  развлекательные программы, которые сделают ваше событие ярким
                  и динамичным.
                </li>
              </ul>
              <br />
              <span className="text-[20px]">
                Почему выбирают меня:
                <ul className="flex flex-col gap-3">
                  <br />
                  <li>
                    • Отличные отзывы: Мои клиенты ценят наш профессионализм и
                    внимание к деталям.
                  </li>
                  <li>
                    • Гибкость: Я готов адаптироваться под любые условия и
                    пожелания.
                  </li>
                  <li>
                    • Постоянное развитие: Я слежу за новыми трендами в
                    организации мероприятий и внедряем их в нашу работу.
                  </li>
                </ul>
              </span>
              <p className="text-[23px] lg:py-4">
                Свяжитесь со мной! Заполните форму обратной связи или позвоните
                мне, чтобы обсудить ваше мероприятие. Давайте вместе создадим
                что-то удивительное!
              </p>
            </h4>
          </span>
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
