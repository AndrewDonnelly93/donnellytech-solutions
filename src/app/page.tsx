"use client";
import React, { useEffect } from "react";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import { motion } from "framer-motion";
import ThreeScene from "./components/SpinningLogoBox";
import FadeInSection from "./components/FadeInSection";
import WorkExperienceTimeline from "./components/WorkExperienceTimeline";
import VolunteerExperienceTimeline from "./components/VolunteerExperienceTimeline";
import ServicesSection from "./components/ServicesSection";
import TailoredFeedbackSection from "./components/TailoredFeedbackSection";
import AnimatedDomainText from "./components/AnimatedDomainText";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { vars } from "../themeVars";

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "10", label: "Years Experience" },
  { value: "3", label: "Industry Domains" },
];

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
    }
  }, []);

  return (
    <Box sx={{ width: "100%", color: vars.textPrimary, position: "relative", zIndex: 1 }}>

      <Box
        id="about"
        component="section"
        sx={{
          minHeight: "100vh",
          maxWidth: "1200px",
          mx: "auto",
          px: { xs: 3, md: 6 },
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 4 },
          scrollMarginTop: "80px",
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <Typography
                variant="body2"
                sx={{
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  color: vars.primaryMain,
                  fontWeight: 600,
                  mb: 2,
                  fontSize: "0.78rem",
                }}
              >
                Senior Full-Stack Engineer
              </Typography>

              <Box
                sx={{
                  borderLeft: "4px solid",
                  borderImage: `${vars.accentGradient} 1`,
                  pl: 3,
                  mb: 3,
                }}
              >
                <Typography variant="h1" sx={{ color: vars.textPrimary, fontWeight: 800, lineHeight: 1.1 }}>
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
                        color: "transparent",
                        backgroundImage: "linear-gradient(90deg, #00d2c8 0%, #4dfff5 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Andrew
                    </Box>
                  </Box>
                  .
                </Typography>
              </Box>

              <Typography
                component="div"
                sx={{
                  fontSize: { xs: "1.5rem", md: "2rem" },
                  fontWeight: 700,
                  color: vars.textPrimary,
                  mb: 3,
                  lineHeight: 1.3,
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "baseline",
                  gap: "0.3em",
                }}
              >
                Building for <AnimatedDomainText />
              </Typography>

              <Typography
                variant="body1"
                sx={{ color: vars.textSecondary, maxWidth: 540, lineHeight: 1.8, mb: 5 }}
              >
                Senior full-stack engineer with 10+ years of experience, specialising in React, Next.js, Angular, TypeScript, NestJS, FastAPI, and ASP.NET. I partner with fintech, logistics, and wellness businesses to ship production-ready products: from Stripe and Web3 payment flows to AI-powered fleet platforms and React Native studio apps, built on microservices, microfrontends, and cloud infrastructure across AWS, Azure, and GCP.
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 6 }}>
                <Button variant="contained" color="primary" size="large" component="a" href="#work" sx={{ px: 4, py: 1.5, fontWeight: 700 }}>
                  View My Work
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component="a"
                  href="#contact"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderColor: vars.border,
                    color: vars.textPrimary,
                    "&:hover": {
                      borderColor: vars.primaryMain,
                      color: vars.primaryMain,
                      backgroundColor: "color-mix(in srgb, var(--mui-palette-primary-main) 10%, transparent)",
                    },
                  }}
                >
                  Get in Touch
                </Button>
              </Box>

              <Box sx={{ display: "flex", gap: { xs: 3, md: 5 }, flexWrap: "wrap" }}>
                {stats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      sx={{
                        fontSize: { xs: "1.6rem", md: "2rem" },
                        fontWeight: 800,
                        background: vars.accentGradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        lineHeight: 1,
                        mb: 0.5,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: vars.textSecondary, fontSize: "0.82rem" }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: "-20px",
                    borderRadius: "50%",
                    background: vars.heroGlow,
                    zIndex: 0,
                  },
                }}
              >
                <Box sx={{ position: "relative", zIndex: 1 }}>
                  <ThreeScene />
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 6 }, pb: 12, position: "relative", zIndex: 1 }}>
        <Box
          id="work"
          component="section"
          sx={{
            py: { xs: 6, md: 10 },
            borderTop: `1px solid ${vars.divider}`,
            scrollMarginTop: "80px",
          }}
        >
          <ServicesSection />
        </Box>

        <Divider />

        <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
          <TailoredFeedbackSection />
        </Box>

        <Divider />

        <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
          <WorkExperienceTimeline />
        </Box>

        <Divider />

        <Box component="section" sx={{ py: { xs: 6, md: 10 } }}>
          <VolunteerExperienceTimeline />
        </Box>

        <FadeInSection>
          <Box
            id="contact"
            component="section"
            sx={{
              mt: 6,
              p: { xs: 5, md: 8 },
              borderRadius: "24px",
              background: vars.ctaGradient,
              border: "1px solid color-mix(in srgb, var(--mui-palette-primary-main) 20%, transparent)",
              textAlign: "center",
              scrollMarginTop: "80px",
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: 800, color: vars.textPrimary, mb: 2 }}>
              Ready to build something great?
            </Typography>
            <Typography variant="body1" sx={{ color: vars.textSecondary, mb: 5, maxWidth: 480, mx: "auto" }}>
              Let&apos;s turn your idea into a production-ready product. Book a
              free discovery call today.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="https://calendly.com/andrew-donnelly-tech-solutions"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<CalendarMonthIcon />}
              sx={{ px: 5, py: 1.8, fontWeight: 700, fontSize: "1rem" }}
            >
              Book a Free Call
            </Button>
          </Box>
        </FadeInSection>
      </Box>
    </Box>
  );
};

export default Home;
