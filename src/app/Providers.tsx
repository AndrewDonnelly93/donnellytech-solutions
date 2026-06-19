"use client";
import React, { ReactNode } from "react";
import { AppThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppThemeProvider>
      <StarBackground />
      <Navbar />
      {children}
      <ScrollToTop />
      <Analytics />
      <Footer />
    </AppThemeProvider>
  );
}
