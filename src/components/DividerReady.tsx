import React from "react";
import Button from "./Button";
import ScrollLink from "./SmoothLink";
import Link from "next/link";

interface DividerReady {
  ready?: boolean;
}

const DividerReady = ({ ready }: DividerReady) => {
  return (
    <section
      className={`w-full h-full py-5 ${
        !ready ? "md:h-[200px]" : "md:h-[340px]"
      }  flex flex-col items-center justify-center gap-5 md:gap-10 my-4`}
    >
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
      {ready && (
        <div className="flex flex-col justify-center items-center">
          <p className="text-xl md:text-3xl font-extrabold">
            Si ellos lo LOGRARON
          </p>
          <p className="text-center text-xl md:text-3xl font-extrabold">
            es porque vos también podes hacerlo.
          </p>
        </div>
      )}
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-xl md:text-3xl font-extrabold">Cambia tu fisico YA</p>
        {/* <ScrollLink href="#planes"> */}
        <Link
          href={{
            pathname: "/calendly",
          }}
        >
          <Button
            text="Agenda tu llamada"
            background="bg-black"
            textColor="text-white"
          />
        </Link>
        {/* </ScrollLink> */}
      </div>
      <div className="h-[40px] w-full flex justify-center items-center px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
        <div className="divider"></div>
      </div>
    </section>
  );
};

export default DividerReady;
