import React from "react";
import Button from "./Button";
import { TPlan } from "../types";
import Link from "next/link";
import Image from "next/image";

const Plan = ({
  background,
  title,
  price,
  includes,
  short,
  usd,
  benefits,
}: TPlan) => {
  const handleRedirect = () => {
    window.location.href = "https://wa.link/jbklis";
  };

  return (
    <div
      className={`${
        background === 1
          ? "bg-plan-1"
          : background === 2
          ? "bg-plan-2"
          : "bg-plan-3"
      } relative bg-cover bg-top flex flex-col justify-between items-center w-full min-w-[350px] sm:min-w-[400px] lg:min-w-[340px] 2xl:min-w-[380px] h-full ${
        short ? "min-h-[920px]" : "min-h-[1000px]"
      } rounded-2xl border border-white`}
    >
      <div
        className={`absolute w-full p-8 h-full flex flex-col ${
          usd
            ? "justify-between gap-[20px]"
            : "justify-between 2xl:justify-center gap-[20px]"
        } items-center bg-[rgba(0,0,0,0.75)] rounded-2xl`}
      >
        <h3 className="text-xl 2xl:text-2xl font-extrabold text-center">
          {title}
        </h3>
        <div className="flex flex-col justify-center items-center">
          {usd ? (
            <>
              <p className="text-4xl 2xl:text-5xl font-extrabold text-ligthblue">
                ${price}
              </p>
              <p className="text-xl 2xl:text-xl font-medium ">USD/mensual*</p>
              <p className="text-xs font-medium text-center">
                (Estadía minima 3 meses)
              </p>
            </>
          ) : (
            <>
              <p className="text-4xl 2xl:text-5xl font-extrabold text-ligthblue">
                ${(price / 1000).toFixed(3).replace(".", ",")}
              </p>
              <p className="text-xl 2xl:text font-medium ">mensual*</p>
              <div className="flex justify-center items-center gap-2 opacity-80 my-2">
                <Image
                  src="/imgs/mercadopago.png"
                  width={20}
                  height={20}
                  alt="mercadopago"
                />
                <Image
                  src="/imgs/paypal.png"
                  width={20}
                  height={20}
                  alt="paypal"
                />
              </div>
              <p className="text-xs font-medium text-center">
                (Estadía minima 3 meses)
              </p>
            </>
          )}
        </div>
        {usd && (
          <p className="text-sm 2xl:text-base font-medium text-center">
            Vas a trabajar de manera exclusiva conmigo y con nuestro
            nutricionista para asegurarnos cumplir ese objetivo
          </p>
        )}
        <div className="flex flex-col items-start justify-center w-full">
          {benefits &&
            benefits.map((benefit, index) => (
              <div
                className="w-full h-full flex items-start gap-4 my-2"
                key={index}
              >
                <div className="w-5 h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path
                      fill="#ffffff"
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </div>
                <p className="text-sm 2xl:text-base">{benefit}</p>
              </div>
            ))}
        </div>
        <p className="text-lg 2xl:text-xl font-extrabold">¿Que incluye?</p>
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
              <p className="text-sm 2xl:text-base">{include}</p>
            </div>
          ))}
        </div>
        <div className="w-[90%] h-[2px] bg-white"></div>
        <div>
          {usd ? (
            <div onClick={handleRedirect}>
              <Button
                text="CONSULTAR"
                onClick
                background="bg-white"
                textColor="text-black"
              />
            </div>
          ) : (
            <Link
              href={{
                pathname: "/checkout",
                query: { plan: title.toLowerCase() },
              }}
            >
              <Button
                text="EMPEZAR YA"
                background="bg-white"
                textColor="text-black"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Plan;
