import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Only Profits — Agenda tu llamada",
  description:
    "Conectamos infoproductores que quieren vender sin tocar ventas y comerciales que quieren dirigir cuentas de verdad. Responde 4 preguntas y agenda tu llamada con el equipo de Only Profits.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${plusJakartaSans.variable} antialiased`}>
      <body className="min-h-screen">
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  );
}
