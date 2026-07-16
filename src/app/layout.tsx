import type { Metadata } from "next";
import { Forum, Fraunces, Arimo } from "next/font/google";
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

// Helvetica isn't a licensable web font, so we self-host Arimo — Google's
// metric-compatible substitute for Helvetica/Arial — as the general text
// typeface from the brand book, instead of relying on the visitor's OS
// having Helvetica installed.
const arimo = Arimo({
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
    <html lang="es" className={`${forum.variable} ${fraunces.variable} ${arimo.variable}`}>
      <body>{children}</body>
    </html>
  );
}
