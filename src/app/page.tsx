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
import Player from "../components/Player";

export default function Home() {
  return (
    <>
      <section className="background_w_image w-full flex  flex-col items-center justify-center gap-5 md:gap-0 md:justify-between px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <h2 className="flex flex-col justify-center items-center gap-5 text-center text-xl lg:text-4xl leading-4 ">
          <span className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-blue">
            Cambia tu VIDA
          </span>
          <span className="text-xl sm:text-3xl 2xl:text-4xl  font-extrabold">
            a través del fitness, hábitos y un entorno positivo
          </span>
        </h2>
        <div className="flex flex-col justify-center items-center gap-4 md:mt-10">
          <Player src={"/videos/video-presentacion.webm"} />
          {/* <Video
            width="lg:max-w-[1000px] 2xl:max-w-[1400px]"
            height="max-h-[630px]"
          /> */}
          <ScrollLink href="#planes">
            <Button
              background="bg-white"
              textColor="text-black"
              text="quiero comenzar ahora"
            />
          </ScrollLink>
        </div>
      </section>
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
      <Plans />
      <section className="flex flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="flex flex-col justify-center items-center gap-4">
          <Player src={"/videos/video-aplicacion.mov"} />
          {/* <Video
            source={""}
            width="lg:max-w-[1000px] 2xl:max-w-[1400px]"
            height="max-h-[630px]"
          /> */}
          <ScrollLink href="#planes">
            <Button
              background="bg-white"
              textColor="text-black"
              text="quiero comenzar ahora"
            />
          </ScrollLink>
        </div>

        <div className=" w-full h-full px-5">
          {paragraph.map((info, index) => (
            <div
              key={index}
              className="my-20 flex flex-col md:flex-row items-start"
            >
              <div className="flex flex-col items-center ">
                <Image
                  alt="mobile"
                  src={
                    index === 0
                      ? "/imgs/mobile.png"
                      : index === 1
                      ? "/imgs/nutricion.png"
                      : "/imgs/comunidad.png"
                  }
                  width={370}
                  height={480}
                  className="image-filter"
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
      <DividerReady />
      <Experience />
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
      <section className="flex w-full flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <Carousel />
      </section>
      <DividerReady ready />
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px]">
        <div className="divider"></div>
      </div>
      <FAQ />
    </>
  );
}
