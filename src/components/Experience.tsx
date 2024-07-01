import React from "react";
import VimeoCarousel from "./VimeoCarousel";

const Experience = () => {
  return (
    <section className="flex w-full flex-col items-center justify-start mb-2 my-14 px-4 md:px-10 lg:px-20 max-w-[1200px] mx-auto ">
      <h1 className="text-center text-xl md:text-2xl lg:text-4xl font-extrabold text-white my-5">
        TESTIMONIOS
      </h1>
      {/* <h2 className="text-l sm:text-2xl lg:text-2xl 2xl:text-4xl font-extrabold">
        TRABAJANDO CONMIGO
      </h2> */}
      <div className=" lg:my-10 w-full h-full max-w-[1000px] mx-auto">
        <VimeoCarousel />
      </div>
    </section>
  );
};

export default Experience;
