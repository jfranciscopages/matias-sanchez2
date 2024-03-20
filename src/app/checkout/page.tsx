"use client";
import React, { useState, useEffect } from "react";
import { plans } from "../../utils/plans";
import PlanCheckout from "../../components/PlanCheckout";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

declare global {
  interface Window {
    paypal?: any;
  }
}

const Checkout = () => {
  const searchParams = useSearchParams();
  const plan = searchParams.get("plan");
  const selectedPlan = plans.find((p) => p.title.toLowerCase() === plan);
  const { title, background, includes } = selectedPlan || {};

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AY_ldYCx8wa4sOKtAanu3PmU5cmQF6aoKB7P_kIuYNgla4DiQZp9JSR7dmbenPTcCS1sq7P7ImoaaC2h&vault=true&intent=subscription";
    script.async = true;
    script.onload = () => {
      renderPayPalButton();
    };
    document.body.appendChild(script);
  }, []);

  const renderPayPalButton = () => {
    if (window.paypal) {
      window.paypal
        .Buttons({
          style: {
            shape: "",
            color: "gold",
            layout: "vertical",
            label: "paypal",
          },
          createSubscription: function (data, actions) {
            return actions.subscription.create({
              plan_id: "P-9HD84983HF850203MMX4PQ3Y",
            });
          },
          onApprove: function (data, actions) {
            alert("Gracias por tu compra, ahora serás redirigido a la página");
            document.location.href = "http://matisanchezsorondo.com/thank-you";
          },
        })
        .render("#paypal-button-container");
    }
  };

  const handleSubmit = () => {
    window.location.href =
      "https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848df5820d018df9dd0f760560"; // Update this with the appropriate action for Mercado Pago
  };

  return (
    <section className="background_w_image w-full flex flex-col items-center justify-center gap-5 md:gap-0 md:justify-between px-4 md:px-10 lg:px-20 max-w-[1350px] mx-auto">
      <div className=" p-6 w-full bg-white rounded-2xl flex flex-col items-center justify-center gap-10">
        <div className="flex flex-col justify-center items-center ">
          <h2 className="text-black font-bold text-2xl text-center">
            Estas por suscribirte al Plan
          </h2>
          <h3 className="text-black font-bold text-3xl text-center">{title}</h3>
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
        <button
          onClick={handleSubmit}
          className="w-full max-w-[400px] cursor-pointer bg-blue p-3 rounded-md text-white flex justify-center items-center"
        >
          Mercado Pago
          <Image
            src="/imgs/mercadopago.png"
            width="30"
            height="30"
            alt="mercadopago"
            className="ml-2"
          />
        </button>
        <div className=" w-[300px] h-[3px] bg-gray-200"></div>
        <div
          id="paypal-button-container"
          className="w-full max-w-[400px] h-full"
        ></div>
      </div>
    </section>
  );
};

export default Checkout;
