"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Box } from "@mui/material";

const domains = [
  "FinTech & Web3",
  "Logistics & Supply Chain",
  "Wellness & Fitness",
];

const domainColors: Record<string, string> = {
  "FinTech & Web3": "#3b82f6",
  "Logistics & Supply Chain": "#a855f7",
  "Wellness & Fitness": "#f97316",
};

const AnimatedDomainText = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % domains.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  const current = domains[index];
  const color = domainColors[current];

  return (
    <Box
      sx={{
        display: "inline-block",
        minWidth: { xs: 260, md: 420 },
        height: { xs: "2.4rem", md: "3.2rem" },
        verticalAlign: "bottom",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
          style={{
            display: "inline-block",
            color,
            fontWeight: 800,
            fontSize: "inherit",
            lineHeight: "inherit",
          }}
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </Box>
  );
};

export default AnimatedDomainText;
