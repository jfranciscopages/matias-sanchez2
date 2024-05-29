"use client";
import React from "react";
import CalendlyWidget from "../../components/calendly";

const Calendly = () => {
  return (
    <section className="sm:w-11/12  md:w-7/12 flex flex-col items-center justify-center gap-5 md:gap-0 md:justify-between max-w-[1350px] mx-auto bg-gradient-to-b from-black to-gray-800">
      <div className=" p-6 w-full bg-white rounded-2xl flex flex-col items-center justify-center h-[1350px]">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-black font-bold text-3xl text-center">
            ¿Cómo Empezar?
          </h2>
          <br />
          <h2 className="text-black font-bold text-xl text-center">
            <span className="text-blue">Agenda una llamada</span> en el
            calendario de abajo para ver <br /> si sos un buen fit para nuestro
            programa!
          </h2>
        </div>
        <CalendlyWidget />
      </div>
    </section>
  );
};

export default Calendly;
