import mercadopago from "mercadopago";
import { NextApiRequest, NextApiResponse } from "next";
import { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { TPlan } from "../../types";

mercadopago.configure({
  access_token: process.env.MP_ACCESS_TOKEN,
});

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(req);
  if (req.method === "POST") {
    console.log(req.body);
    const plan: TPlan = req.body.plan;

    const URL = "https://matiassanchezfit.vercel.app";

    try {
      const preference: CreatePreferencePayload = {
        items: [
          {
            title: plan.title,
            unit_price: plan.price,
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

      res.status(200).send({ url: response.body.init_point });
    } catch (error) {
      console.error("Error occurred:", error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  } else {
    res.status(400).json({ message: "Method not allowed" });
  }
};

export { handler };
