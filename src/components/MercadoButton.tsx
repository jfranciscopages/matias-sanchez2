"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { TPlan } from "../types";

interface MercadoPagoButtonProps {
  plan: TPlan;
  usd: boolean;
}

const MercadoPagoButton = ({ plan, usd }: MercadoPagoButtonProps) => {
  const [url, setUrl] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);

      try {
        const { data: preference } = await axios.post("/api/checkout", plan);

        setUrl(preference.url);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    if (!usd) {
      generateLink();
    }

    generateLink();
  }, [plan]);

  return (
    <div>
      {loading ? (
        <button
          className="w-[400px] bg-blue p-4 rounded-2xl text-white flex justify-center items-center"
          disabled
        >
          <div className="border-white h-5 w-5 animate-spin rounded-full border-4 border-t-blue" />
        </button>
      ) : (
        <>
          {usd ? (
            <button
              className="w-[400px] bg-blue p-4 rounded-2xl text-white flex justify-center items-center opacity-70 cursor-not-allowed"
              disabled
            >
              No disponible con Mercado Pago
            </button>
          ) : (
            <a
              className="w-[400px] cursor-pointer bg-blue p-4 rounded-2xl text-white flex justify-center items-center"
              href={url}
            >
              Mercado Pago
            </a>
          )}
        </>
      )}
    </div>
  );
};

export default MercadoPagoButton;
