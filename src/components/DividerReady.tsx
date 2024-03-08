import React from "react";
import Button from "./Button";
import ScrollLink from "./SmoothLink";

const DividerReady = () => {
  return (
    <section className="w-full h-[340px] bg-ligthblue flex flex-col items-center justify-center gap-10 my-10">
      <div className="flex flex-col justify-center items-center">
        <p className="text-xl md:text-3xl font-extrabold">
          Si ellos lo LOGRARON
        </p>
        <p className="text-xl md:text-3xl font-extrabold">
          es porque vos también podes hacerlo.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-xl md:text-3xl font-extrabold">¿Estás listo?</p>
        <ScrollLink href="#planes">
          <Button
            text="INICIAR AHORA"
            background="bg-black"
            textColor="text-white"
          />
        </ScrollLink>
      </div>
    </section>
  );
};

export default DividerReady;
