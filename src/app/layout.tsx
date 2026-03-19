import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Samin Siddique | Mechanical Engineering Portfolio",
  description:
    "Portfolio of Samin Siddique — Mechanical Engineering student showcasing CAD, FEA, CFD, SolidWorks, and ANSYS projects.",
  keywords: [
    "Mechanical Engineering",
    "Portfolio",
    "SolidWorks",
    "ANSYS",
    "FEA",
    "CFD",
    "CAD",
    "Samin Siddique",
  ],
  openGraph: {
    title: "Samin Siddique | Mechanical Engineering Portfolio",
    description:
      "Mechanical Engineering student showcasing CAD, FEA, CFD, and simulation projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen">
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
