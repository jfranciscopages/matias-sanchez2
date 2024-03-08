import React from "react";
import Button from "./Button";
import { TPlan } from "@/types";
import Link from "next/link";

const Plan = ({ background, title, price, includes, short, usd }: TPlan) => {
  return (
    <div
      className={`${
        background ? "bg-plan-1" : "bg-plan-2"
      } relative bg-cover bg-top flex flex-col justify-between items-center w-full min-w-[350px] sm:min-w-[400px] lg:min-w-[380px] h-full ${
        short ? "min-h-[900px]" : "min-h-[1000px]"
      } rounded-2xl border border-white`}
    >
      <div
        className={`absolute w-full p-8 h-full flex flex-col justify-between gap-[50px] items-center bg-[rgba(0,0,0,0.75)] rounded-2xl`}
      >
        <h3 className="text-4xl font-extrabold text-center">{title}</h3>
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl font-extrabold text-ligthblue">{price}</p>
          {usd ? (
            <p className="text-xl font-medium ">USD/mensaul*</p>
          ) : (
            <p className="text-xl font-medium ">mensual*</p>
          )}
        </div>
        <p className="text-xl font-extrabold">¿Que incluye?</p>
        <div className="flex flex-col items-start justify-center">
          {includes.map((include, index) => (
            <div className="w-full h-full flex gap-4 my-2" key={index}>
              <div className="w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#ffffff"
                    d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                  />
                </svg>
              </div>
              {include}
            </div>
          ))}
        </div>
        <div className="w-[90%] h-[2px] bg-white"></div>
        <div>
          <Link
            href={{
              pathname: "/checkout",
              query: { plan: title.toLowerCase() },
            }}
          >
            {usd ? (
              <Button
                text="CONSULTAR"
                background="bg-white"
                textColor="text-black"
              />
            ) : (
              <Button
                text="EMPEZAR YA"
                background="bg-white"
                textColor="text-black"
              />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Plan;
