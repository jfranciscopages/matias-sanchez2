import { Resend } from "resend";
import { EmailAdmin } from "../../../components/Emails/EmailAdmin";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_KEY);

export async function POST(request: NextRequest) {
  const { name, email, dni } = await request.json();

  try {
    await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["ignaciofronttest@gmail.com"],
      subject: `${name} compró un plan`,
      react: EmailAdmin({
        nombre: name,
        email: email,
        dni: dni,
      }),
    });

    return Response.json({ message: "Email Sent" }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error" }, { status: 500 });
  }
}
