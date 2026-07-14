import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Google fonts
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

// Assuming Forum is available on Google Fonts but `next/font/google` doesn't support it directly if it's not a variable font,
// actually Forum is a standard Google Font, so we can import it.
import { Forum } from "next/font/google";

const forum = Forum({
  weight: "400",
  variable: "--font-forum",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Mom Coach | Tu coach de sueño y crianza",
  description: "Consultora en sueño pediátrico y coach en hábitos de alimentación. Te ayudamos a encontrar la armonía en la crianza y volver a dormir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${inter.variable} ${fraunces.variable} ${forum.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
