import Button from "../../components/Button";
import React from "react";

const ThankYou = () => {
  return (
    <section className="w-full h-full min-h-[50vh] flex flex-col justify-center items-center max-w-[1000px] mx-auto">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-center text-4xl font-extrabold">Muchas Gracias!</h2>
        <h3 className="text-center text-2xl  font-extrabold">
          Ahora tenes que registrarte en nuestra App e ingresar al grupo de
          Whatsapp!
        </h3>
      </div>
      <div className="w-full h-full flex justify-between my-20">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-center text-2xl text-blue font-extrabold">
            Registrarse en la App
          </p>
          <Button
            text="Registrarse"
            background="bg-white"
            textColor="text-black"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-center text-2xl text-blue font-extrabold">
            Unirse al grupo de Whatsapp
          </p>
          <Button
            text="Whatsapp"
            background="bg-white"
            textColor="text-black"
          />
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
