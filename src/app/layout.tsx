import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import "./globals.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Donnelly Tech Solutions — Web Development & More",
  description:
    "Donnelly Tech Solutions — full-stack web development specialising in fintech, logistics, e-commerce, mobile apps, and microservices.",
  verification: {
    google: "59wByZ_NmG853IkSQPjqZWhvrbtnFTzJi6Q1SK9sbtw",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <InitColorSchemeScript attribute="data" defaultMode="dark" />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
