import React from "react";
import { TPlan } from "../types";

const PlanCheckout = ({ background, title, includes }: TPlan) => {
  return (
    <div
      className={`${
        background === 1
          ? "bg-plan-1"
          : background === 2
          ? "bg-plan-2"
          : "bg-plan-3"
      } relative bg-cover bg-top flex flex-col justify-between items-center w-full lg:max-w-[380px] h-[600px] rounded-2xl border border-white`}
    >
      <div
        className={`absolute w-full p-8 h-full flex flex-col justify-center gap-[50px] items-center bg-[rgba(0,0,0,0.75)] rounded-2xl`}
      >
        <h3 className="text-2xl font-extrabold text-center">{title}</h3>
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
      </div>
    </div>
  );
};

export default PlanCheckout;
