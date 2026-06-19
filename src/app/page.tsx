"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Box, Typography, Button, Divider, Grid } from "@mui/material";
import HeroIntro from "./components/HeroIntro";
import FadeInSection from "./components/FadeInSection";
import WorkExperienceTimeline from "./components/WorkExperienceTimeline";
import VolunteerExperienceTimeline from "./components/VolunteerExperienceTimeline";
import ServicesSection from "./components/ServicesSection";
import TailoredFeedbackSection from "./components/TailoredFeedbackSection";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { vars } from "../themeVars";

const CALENDLY_BOOK_CALL_URL = "https://calendly.com/andrew-donnellytechsolutions/30min";

const stats = [
  { value: "30+", label: "Projects Delivered" },
  { value: "10", label: "Years Experience" },
  { value: "3", label: "Industry Domains" },
];

const roleTags = [
  "Full-Stack Engineer",
  "Frontend Engineer",
  "Backend Engineer",
  "Cloud Architect",
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
          scrollMarginTop: "80px",
          pt: "30px",
        }}
      >
        <Box sx={{ maxWidth: 1200, mx: "auto", px: { xs: 3, md: 6 }, pb: { xs: 8, md: 10 } }}>
          <FadeInSection>
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="flex-start">
              <Grid size={{ xs: 12, md: 7 }}>
                <HeroIntro />

                <Typography
                  variant="body1"
                  sx={{
                    color: vars.textSecondary,
                    lineHeight: 1.9,
                    mt: { xs: 1.5, md: 2 },
                    mb: 4,
                    fontSize: { xs: "0.98rem", md: "1.05rem" },
                  }}
                >
                  Hello! I&apos;m Andrew Donnelly, a senior full-stack engineer with 10+ years of experience
                  specialising in React, Next.js, Angular, TypeScript, NestJS, FastAPI, and ASP.NET. I partner
                  with fintech, logistics, and wellness businesses to ship production-ready products — from
                  Stripe and Web3 payment flows to AI-powered fleet platforms and React Native studio apps,
                  built on microservices, microfrontends, and cloud infrastructure across AWS, Azure, and GCP.
                </Typography>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5, mb: 5 }}>
                  {roleTags.map((role) => (
                    <Box
                      key={role}
                      sx={{
                        px: 2,
                        py: 0.75,
                        borderRadius: "999px",
                        border: `1px solid ${vars.border}`,
                        color: vars.textSecondary,
                        fontSize: "0.82rem",
                        fontWeight: 500,
                      }}
                    >
                      {role}
                    </Box>
                  ))}
                </Box>

                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, mb: 6 }}>
                  <Button variant="contained" color="primary" size="large" component="a" href="#work" sx={{ px: 4, py: 1.5, fontWeight: 700 }}>
                    View My Work
                  </Button>
                  <Button
                    variant="outlined"
                    size="large"
                    component="a"
                    href={CALENDLY_BOOK_CALL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<CalendarMonthIcon />}
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
                    Book a Call
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
              </Grid>

              <Grid size={{ xs: 12, md: 5 }}>
                <Box
                  sx={{
                    position: "relative",
                    mx: { xs: "auto", md: 0 },
                    ml: { md: "auto" },
                    maxWidth: 360,
                    p: "3px",
                    borderRadius: "20px",
                    background: vars.accentGradient,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      borderRadius: "18px",
                      overflow: "hidden",
                      aspectRatio: "3 / 4",
                      bgcolor: vars.surface,
                    }}
                  >
                    <Image
                      src="/donnelly-tech-solutions.jpg"
                      alt="Andrew Donnelly"
                      fill
                      sizes="(max-width: 900px) 100vw, 360px"
                      style={{ objectFit: "cover" }}
                      priority
                    />
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </FadeInSection>
        </Box>
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
              href={CALENDLY_BOOK_CALL_URL}
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
