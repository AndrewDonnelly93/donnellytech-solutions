"use client";
import React, { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../../theme";

export type ThemeMode = "dark" | "light" | "system";

export const AppThemeProvider = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme} defaultMode="dark" modeStorageKey="theme-mode" disableTransitionOnChange>
    <CssBaseline enableColorScheme />
    {children}
  </ThemeProvider>
);
