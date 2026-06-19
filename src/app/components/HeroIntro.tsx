"use client";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import AnimatedDomainText from "./AnimatedDomainText";
import { vars } from "../../themeVars";

export default function HeroIntro() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <Box sx={{ display: "flex", gap: 2.5, mb: { xs: 3, md: 0 } }}>
        <Box
          sx={{
            width: 3,
            flexShrink: 0,
            borderRadius: 2,
            background: vars.accentGradient,
            position: "relative",
            minHeight: 120,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: vars.secondaryMain,
            },
          }}
        />
        <Box>
          <Box
            component="p"
            sx={{
              m: 0,
              mb: 1.5,
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              color: vars.textSecondary,
              fontSize: "0.72rem",
              fontWeight: 500,
            }}
          >
            Senior Full-Stack Engineer
          </Box>

          <Box
            component="h2"
            sx={{
              m: 0,
              mb: 1.5,
              fontWeight: 800,
              lineHeight: 1.08,
              fontSize: { xs: "clamp(2rem, 7vw, 3rem)", md: "clamp(2.5rem, 4.5vw, 3.75rem)" },
              color: vars.textPrimary,
            }}
          >
            Hi, I&apos;m{" "}
            <Box
              component="span"
              sx={{
                position: "relative",
                display: "inline-block",
                fontWeight: 800,
              }}
            >
              <Box component="span" sx={{ color: vars.primaryLight }}>
                Andrew
              </Box>
              <Box
                component="span"
                aria-hidden
                sx={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, #00d2c8 0%, #4dfff5 30%, #60a5fa 58%, #a855f7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Andrew
              </Box>
            </Box>
            .
          </Box>

          <Box
            sx={{
              fontSize: { xs: "1.2rem", md: "1.55rem" },
              fontWeight: 600,
              color: vars.textSecondary,
              lineHeight: 1.35,
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              gap: "0.35em",
            }}
          >
            Building for <AnimatedDomainText />
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}
