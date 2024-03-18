"use client";
import React from "react";
import { plans } from "../../utils/plans";
import PlanCheckout from "../../components/PlanCheckout";
import { useSearchParams } from "next/navigation";

const Checkout = () => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const selectedPlan = plans.find((p) => p.title.toLowerCase() === plan);
  const { title, background, includes } = selectedPlan || {};

  const handleSubmit = () => {
    window.location.href =
      "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848df5820d018df9dd0f760560";
  };

  return (
    <section className="background_w_image w-full flex flex-col items-center justify-center gap-5 md:gap-0 md:justify-between px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
      <div className=" p-6 w-full bg-white rounded-2xl flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-black font-bold text-2xl">
            Estas por suscribirte al Plan
          </h2>
          <h3 className="text-black font-bold text-3xl">{title}</h3>
          <p className="text-black font-bold text-base text-center max-w-[500px] mt-4 opacity-80">
            * Una vez que realices el pago serás redireccionado a la app donde
            debes registrarte, en aproximadamente 48 horas recibiras dentro de
            la app tus planificaciones.
          </p>
        </div>
        <PlanCheckout
          title={title}
          background={background}
          includes={includes}
        />
        <div className="w-[400px] h-[3px] bg-gray-200"></div>
        <div className="w-full h-full flex-col flex gap-5 justify-center items-center">
          <button
            onClick={handleSubmit}
            className="w-[400px] cursor-pointer bg-blue p-4 rounded-2xl text-white flex justify-center items-center"
          >
            Mercado Pago
          </button>
          <button className="w-[400px] cursor-pointer bg-paypal p-4 rounded-2xl text-white flex justify-center items-center">
            Paypal
          </button>
        </div>
      </div>
    </section>
  );
};

export default Checkout;
