import React from "react";
import VimeoCarousel from "./VimeoCarousel";

const Experience = () => {
  return (
    <section className="flex w-full  flex-col items-center justify-start my-14 px-4 md:px-10 lg:px-20 max-w-[1200px] mx-auto">
      <h2 className="text-xl sm:text-3xl lg:text-3xl 2xl:text-3xl font-extrabold">
        SU EXPERIENCIA
      </h2>
      <h2 className="text-xl sm:text-3xl lg:text-3xl 2xl:text-5xl font-extrabold">
        TRABAJANDO CONMIGO
      </h2>
      <div className="my-20 w-full h-full max-w-[1000px] mx-auto">
        <VimeoCarousel />
      </div>
    </section>
  );
};

export default Experience;
