import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soñé que...",
  description: "Compartí con el mundo tus sueños mas fumados",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gradient-to-b from-superDarkBlue to-darkBlue min-h-screen pb-40`}
      >
        <div className="bg-repeat bg-[url('./../assets/imagenes/patronEstrellas.png')]">
          <Header />
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  );
}
