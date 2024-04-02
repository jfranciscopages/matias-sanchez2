import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Montserrat } from 'next/font/google'

export const metadata: Metadata = {
  title: "Matías Sanchez Sorondo",
  description: "Cambiá tu vida a través del fitness, hábitos y un entorno positivo",
};

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100','200','300', '500', '700', '900'],
  style: ['normal'],
  display: 'swap'
})

let classes = "flex w-full flex-col items-center justify-between text-white" + `${montserrat.className}`

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
        {/* <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        /> */}
      </head>
      <body className="text-white">
        <Header />
        <main className={classes}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
