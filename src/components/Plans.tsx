"use client";
import React from "react";
import Plan from "./Plan";
import { plans } from "../utils/plans";

const Plans = () => {
  const handleRedirect = () => {
    window.location.href = "https://wa.link/jbklis";
  };

  return (
    <section
      id="planes"
      className="background_w_image bg-white w-full flex  flex-col items-center justify-start px-4 md:px-10 lg:px-20 gap-20 max-w-[1200px] mx-auto"
    >
      <div className="flex flex-col justify-center items-center gap-12">
        <div className="w-full flex justify-center">
          <div className="w-10 h-[3px] bg-ligthblue"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <h3 className="text-xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-extrabold text-white">
            PLANES
          </h3>
          <h3 className="text-xl sm:text-3xl 2xl:text-4xl text-center font-extrabold text-blue">
            ¡Elegí el plan que más se adapte a vos!
          </h3>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
        {plans.map((plan, index) => (
          <Plan
            key={index}
            title={plan.title}
            background={plan.background}
            short={plan.short}
            benefits={plan.benefits}
            price={plan.price}
            includes={plan.includes}
            usd={plan.usd}
          />
        ))}
      </div>
      <div
        onClick={handleRedirect}
        className="cursor-pointer flex flex-col justify-center items-center opacity-60"
      >
        <h3 className="text-xl font-semibold text-ligthblue">¿Tenes dudas?</h3>
        <h3 className="text-xl font-semibold text-ligthblue">
          ¡Mandame un Whatsapp!
        </h3>
      </div>
    </section>
  );
};

export default Plans;
