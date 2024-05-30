import dynamic from "next/dynamic";
import DividerReady from "../components/DividerReady";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import Video from "../components/Video";
import { paragraph } from "../utils/paragraphs";
const Plans = dynamic(() => import("../components/Plans"));
const Experience = dynamic(() => import("../components/Experience"));
const Carousel = dynamic(() => import("../components/Carousel"));
// import Plans from "../components/Plans";
// import Carousel from "../components/Carousel";
// import Experience from "../components/Experience";
import VslEmbeded from "../components/VslEmbeded";
import FAQ from "../components/FAQ";
import ScrollLink from "../components/SmoothLink";
import Image from "next/image";
import Timer from "../components/Timer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* <div className="w-full bg-gradient-to-b from-black to-gray-800"> */}
      <div className="heightMobile">
        <section className=" w-full flex  flex-col items-center justify-center gap-5 md:gap-0 md:justify-between px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto mb-4">
          <h2 className="flex flex-col justify-center items-center gap-5 text-center text-xl lg:text-4xl leading-4 ">
            <span className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold ">
              COMO CAMBIAR TU <span className="blueColor">CUERPO</span>, MEJORAR
              TU SALUD Y TRANSFORMAR TU MENTALIDAD
            </span>
          </h2>
        </section>
        <div className="flex flex-col justify-center items-center gap-7 md:-mt-20 ">
          <iframe
            className="video_vsl z-10 md:-mb-20"
            title="vimeo-video"
            src={`https://player.vimeo.com/video/950957131`}
            width="1200"
            height="900"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          <span></span>
          <a href="/calendly">
            <button
              className="shadow-3xl text-center text-xl md:text-2xl lg:text-4xl font-extrabold rounded-[60px] bg-white 
            text-black px-[20px] py-[15px] md:px-[40px] md:py-[20px] w-full
            max-w-[532px] font-bold animate-fade-in transform transition duration-500 hover:scale-105"
            >
              AGENDA TU LLAMADA
            </button>
          </a>
          {/* <Link
            href={{
              pathname: "/calendly",
            }}
          >
            <Button
              background="bg-white"
              textColor="text-black"
              text="Agenda tu llamada"
            />
          </Link> */}
        </div>
      </div>

      <section className="isMobile">
        <div className="h-[40px] mt-20 w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
          <div className="divider"></div>
        </div>
        <Experience />
        <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
          <div className="divider"></div>
        </div>
      </section>

      {/* <section className="flex w-full flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <h2 className="text-xl sm:text-3xl lg:text-5xl 2xl:text-5xl text-center font-extrabold mb-10">
          Transformaciones
        </h2>
        <Carousel />
      </section> */}
      {/* <DividerReady ready />
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
      </section> */}
      {/* <DividerReady /> */}
      <FAQ />
      {/* </div> */}
    </>
  );
}
