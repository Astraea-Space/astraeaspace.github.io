"use client"
import "@/app/css/style.css";

import { Inter, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ss3 = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-ss3",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${ss3.variable} bg-gray-50 font-inter tracking-tight text-gray-900 antialiased`}
      >
        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
          {children}
          <Analytics />
        </div>  
      </body>
    </html>
  );
}
