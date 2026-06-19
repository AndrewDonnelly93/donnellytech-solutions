"use client";
import React, { ReactNode } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import { AppThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import StarBackground from "./components/StarBackground";
import ScrollToTop from "./components/ScrollToTop";
import { Analytics } from "@vercel/analytics/next";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <AppThemeProvider>
      <ParallaxProvider>
        <StarBackground />
        <Navbar />
        {children}
        <ScrollToTop />
        <Analytics />
        <Footer />
      </ParallaxProvider>
    </AppThemeProvider>
  );
}
