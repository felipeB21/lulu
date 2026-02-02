import type { Metadata } from "next";
import { Inter, Unbounded } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const unbounded = Unbounded({ subsets: ["latin"], variable: "--font-heading" });

export const metadata: Metadata = {
  title: "lulú - ¡tu asistente virtual!",
  description:
    "lulú es tu asistente virtual impulsado por IA, diseñado para ayudarte a gestionar tareas, responder preguntas y mejorar tu productividad de manera eficiente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${unbounded.variable}`}>
      <body className="max-w-5xl mx-auto p-5 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
