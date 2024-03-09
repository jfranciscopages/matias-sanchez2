import mercadopago from "mercadopago";
import { NextApiRequest } from "next";
import { NextRequest } from "next/server";

mercadopago.configure({
  access_token: process.env.MERCADO_PAGO,
});

// const URL = "https://matiassanchezfit.vercel.app";
const URL = "http://localhost:3000";

export async function POST(req: NextRequest) {
  const data = await req.json();

  try {
    const preference: any = {
      items: [
        {
          title: `Plan ${data.title}`,
          unit_price: data.price,
          quantity: 1,
        },
      ],
      auto_return: "approved",
      back_urls: {
        success: `${URL}/thank-you`,
        failure: `${URL}`,
      },
      notification_url: `${URL}/api/notify`,
    };

    const response = await mercadopago.preferences.create(preference);

    console.log(response.body);

    return new Response(JSON.stringify({ url: response.body.init_point }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({
        message: "Internal Server Error",
        error: error.message,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
