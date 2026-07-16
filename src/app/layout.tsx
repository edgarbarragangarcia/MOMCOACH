import type { Metadata } from "next";
import { Forum, Fraunces, Montserrat } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import SiteFooter from "@/components/layout/SiteFooter";
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

// The brand book lists Helvetica for general text, but the live
// themomcoaching.com site actually ships Montserrat — matching that so
// the site is consistent with what the business currently has published.
const montserrat = Montserrat({
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
    <html lang="es" className={`${forum.variable} ${fraunces.variable} ${montserrat.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
