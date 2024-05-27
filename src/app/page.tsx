import DividerReady from "../components/DividerReady";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Video from "../components/Video";
import { paragraph } from "../utils/paragraphs";
import Plans from "../components/Plans";
import Carousel from "../components/Carousel";
import Experience from "../components/Experience";
import VslEmbeded from "../components/VslEmbeded";
import FAQ from "../components/FAQ";
import ScrollLink from "../components/SmoothLink";
import Image from "next/image";
import Timer from "../components/Timer";

export default function Home() {
  return (
    <>
      <section className="background_w_image w-full flex  flex-col items-center justify-center gap-5 md:gap-0 md:justify-between px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <h2 className="flex flex-col justify-center items-center gap-5 text-center text-xl lg:text-4xl leading-4 ">
          <span className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-blue">
            TRANSFORMÁ 90
          </span>
          <span className="text-xl sm:text-3xl 2xl:text-4xl  font-extrabold">
            Tu cambio empieza YA
          </span>
          {/* <Timer /> */}
        </h2>
        <div className="flex flex-col justify-center items-center gap-4 md:mt-10">
          <Video
            source={"/videos/VSL FINAL.mp4"}
            height="600"
            width="500"
            mutedVideo={true}
            autoPlay={true}
          />
          <ScrollLink href="#planes" className="mt-2">
            <Button
              background="bg-white"
              textColor="text-black"
              text="Agenda tu llamada!"
            />
          </ScrollLink>
        </div>
      </section>
      {/* <Plans /> */}
      <Experience />
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
      <section className="flex w-full flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <h2 className="text-xl sm:text-3xl lg:text-3xl 2xl:text-3xl font-extrabold mb-10">
          TRANSFORMACIONES
        </h2>
        <Carousel />
      </section>
      <DividerReady ready />
      <section className="flex flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className=" w-full h-full px-5">
          {paragraph.map((info, index) => (
            <div
              key={index}
              className="my-16 flex flex-col md:flex-row items-start"
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
      <DividerReady />
      {/* <Experience /> */}
      {/* <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
      <section className="flex w-full flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <h2 className="text-xl sm:text-3xl lg:text-3xl 2xl:text-3xl font-extrabold mb-10">
          TRANSFORMACIONES
        </h2>
        <Carousel />
      </section>
      <DividerReady ready /> */}
      <FAQ />
    </>
  );
}
