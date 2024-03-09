import mercadopago, { payment } from "mercadopago";
import type { NextRequest } from "next/server";

const client = new mercadopago.configure({
  access_token: process.env.MERCADO_PAGO,
});

export async function POST(req: NextRequest) {
  const body = await req
    .json()
    .then((data) => data as { data: { id: string } });

  console.log(body, "body");

  return Response.json({ sucess: true });
}
