import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Matías Sanchez Sorondo",
  description: "Cambiá tu vida a través del fitness, hábitos y un entorno positivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="icon" href="./icon.ico" sizes="any" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="text-white w-full bg-gradient-to-b from-black to-gray-800">
        <Header />
        <main className="flex w-full flex-col items-center justify-between text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
