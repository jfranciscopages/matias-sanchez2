"use client";
import { useSearchParams } from "next/navigation";
import React from "react";
import { plans } from "../utils/plans";
import PlanCheckout from "./PlanCheckout";


const CheckoutComponent = ({handlePay}:) => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const selectedPlan = plans.find((p) => p.title.toLowerCase() === plan);
  const { title, background, includes, price } = selectedPlan || {};


  return (
    <section className="background_w_image w-full flex min-h-screen flex-col items-center justify-center gap-5 md:gap-0 md:justify-between px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
      <div className=" p-6 w-full bg-white rounded-2xl flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-black font-bold text-2xl">
            Estas por comprar el Plan
          </h2>
          <h3 className="text-black font-bold text-3xl">{title}</h3>
        </div>
        <PlanCheckout
          title={title}
          background={background}
          includes={includes}
        />
        <div className="w-[400px] h-[3px] bg-gray-200"></div>
        <div className="w-full h-full flex justify-center items-center">
          {/* <MercadoPagoButton Plan={selectedPlan} /> */}
          <button
            onClick={handlePay}
            className="w-[400px] rounded-2xl h-full bg-[#009ee3] p-4 cursor-pointer"
          >
            Mercado Pago
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutComponent;
