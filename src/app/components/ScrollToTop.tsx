"use client";
import { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { vars } from "../../themeVars";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={scrollToTop}
        aria-label="Scroll to top"
        size="medium"
        sx={{
          position: "fixed",
          bottom: 28,
          right: 28,
          zIndex: 1100,
          backgroundColor: "color-mix(in srgb, var(--mui-palette-primary-main) 15%, transparent)",
          color: vars.primaryMain,
          border: "1px solid color-mix(in srgb, var(--mui-palette-primary-main) 35%, transparent)",
          backdropFilter: "blur(12px)",
          boxShadow: vars.cardShadow,
          transition: "all 0.25s ease",
          '[data-mui-color-scheme="light"] &': {
            backgroundColor: vars.primaryMain,
            color: "var(--mui-palette-primary-contrastText)",
            border: "none",
            backdropFilter: "none",
          },
          "&:hover": {
            backgroundColor: "color-mix(in srgb, var(--mui-palette-primary-main) 25%, transparent)",
            transform: "translateY(-3px)",
            '[data-mui-color-scheme="light"] &': {
              backgroundColor: vars.primaryDark,
            },
          },
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTop;
