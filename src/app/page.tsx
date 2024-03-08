import DividerReady from "../components/DividerReady";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Video from "../components/Video";
import { paragraph } from "../utils/paragraphs";
import Plans from "../components/Plans";
import Carousel from "../components/Carousel";
import Experience from "../components/Experience";
import FAQ from "../components/FAQ";
import ScrollLink from "../components/SmoothLink";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="background_w_image w-full flex min-h-screen flex-col items-center justify-center gap-5 md:gap-0 md:justify-between px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <h2 className="flex flex-col justify-center items-center gap-5 text-center text-xl lg:text-4xl leading-4 ">
          <span className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-blue">
            Cambia tu VIDA
          </span>
          <span className="text-xl sm:text-3xl lg:text-4xl font-extrabold">
            a través del fitness, hábitos y un entorno positivo
          </span>
        </h2>
        <div className="md:my-10">
          <Video
            source="/videos/video-presentacion.mp4"
            width="lg:max-w-[900px]"
            height="max-h-[630px]"
          />
        </div>
        <ScrollLink href="#planes">
          <Button
            background="bg-white"
            textColor="text-black"
            text="quiero comenzar ahora"
          />
        </ScrollLink>
      </section>
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
      <Plans />
      <section className="flex min-h-screen flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <h2 className="text-xl sm:text-3xl lg:text-5xl font-extrabold text-blue text-center"></h2>
        <div className=" w-full h-full">
          {paragraph.map((info, index) => (
            <div
              key={index}
              className="my-20 flex flex-col md:flex-row items-center"
            >
              <div className="flex flex-col items-center">
                <Image
                  alt="mobile"
                  src="/imgs/mobile.webp"
                  width={370}
                  height={480}
                />
              </div>
              <Paragraph
                key={index}
                title={info.title}
                texts={info.texts}
                list={info.list}
              />
            </div>
          ))}
        </div>
      </section>
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
      <Experience />
      <DividerReady />
      <section className="flex w-full min-h-screen flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1200px] mx-auto">
        <Carousel />
      </section>
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px]">
        <div className="divider"></div>
      </div>
      <FAQ />
    </>
  );
}
