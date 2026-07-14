import type { Metadata } from "next";
import { Forum, Fraunces, Inter } from "next/font/google";
import "./globals.css";

const forum = Forum({
  weight: "400",
  variable: "--font-forum",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Mom Coach | Coach de Sueño Infantil",
  description: "Te ayudo a superar todo tipo de problemas relacionados con el sueño de tu bebé de forma gentil.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${forum.variable} ${fraunces.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
