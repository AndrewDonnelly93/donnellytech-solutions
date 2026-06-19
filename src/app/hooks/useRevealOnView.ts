"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export function useRevealOnView(amount = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isInView) {
      setVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) setVisible(true);
  }, [isInView]);

  return { ref, visible };
}
