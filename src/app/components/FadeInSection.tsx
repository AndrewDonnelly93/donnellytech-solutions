"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useRevealOnView } from "../hooks/useRevealOnView";

interface FadeInSectionProps {
  children: ReactNode;
}

export default function FadeInSection({ children }: FadeInSectionProps) {
  const { ref, visible } = useRevealOnView();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.6 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
}
