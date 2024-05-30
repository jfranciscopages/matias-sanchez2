import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
      <body className="backgroundColor text-white w-full ">
        <Header />
        <main className="flex w-full flex-col items-center justify-between text-white">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
