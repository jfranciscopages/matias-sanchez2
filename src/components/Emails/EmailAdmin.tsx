import Image from "next/image";
import * as React from "react";
import Logo from "./logo.webp";

interface EmailTemplateProps {
  nombre: string;
  email: string;
  dni: string;
}

export const EmailAdmin: React.FC<Readonly<EmailTemplateProps>> = ({
  nombre,
  email,
  dni,
}) => (
  <div
    style={{
      backgroundColor: "#000",
      color: "#fff",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "15px",
    }}
  >
    <h1>Hola Matias!</h1>
    <p>El cliente {nombre} ha adquirido un plan</p>
    <div>
      <h3>Datos del usuario</h3>
      <p>email: {email}</p>
      <p>DNI: {dni}</p>
    </div>
  </div>
);
