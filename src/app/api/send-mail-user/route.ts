import { Resend } from "resend";
import EmailUser from "../../../components/Emails/EmailUser";
import { NextRequest } from "next/server";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: NextRequest) {
  const { name, email } = await request.json();

  try {
    await resend.emails.send({
      from: "admin@matisanchezsorondo.com",
      to: [email],
      subject: `¡Bienvenido, ${name}! Te dejo los links para que no los pierdas :)`,
      react: EmailUser({
        user: name,
      }),
    });

    return Response.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
