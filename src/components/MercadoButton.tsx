"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { TPlan } from "../types";

interface MercadoPagoButtonProps {
  Plan: TPlan;
}

const MercadoPagoButton = ({ Plan }: MercadoPagoButtonProps) => {
  const [url, setUrl] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const generateLink = async () => {
      setLoading(true);

      try {
        const { data: preference } = await axios.post("/api/checkout", {
          Plan,
        });

        setUrl(preference.url);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };

    generateLink();
  }, [Plan]);

  return (
    <div>
      {loading ? (
        <button
          className='            className="w-[400px] rounded-2xl h-full bg-[#009ee3] p-4 cursor-pointer"
                    '
        >
          cargando
        </button>
      ) : (
        <>
          <a href={url}>Comprar ahora</a>
        </>
      )}
    </div>
  );
};

export default MercadoPagoButton;
