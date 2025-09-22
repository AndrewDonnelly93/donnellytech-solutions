"use client";
import React from "react";
import {
  useTheme,
  Box,
  Typography,
  Button,
  Link as MuiLink,
  Divider,
} from "@mui/material";
import Link from "next/link";
import ThreeScene from "./components/SpinningLogoBox";
import FadeInSection from "./components/FadeInSection";
import WorkExperienceTimeline from "./components/WorkExperienceTimeline";
import VolunteerExperienceTimeline from "./components/VolunteerExperienceTimeline";
import TechStackSection from "./components/TechStackSection";
import ServicesSection from "./components/ServicesSection";
import MyValuesSection from "./components/MyValuesSection";

const ctaButtons = [
  { href: "/services", text: "My Services", variant: "contained" as const },
  { href: "/portfolio", text: "View Portfolio", variant: "contained" as const },
  { href: "/about", text: "About Me", variant: "outlined" as const },
  { href: "/contact", text: "Contact Me", variant: "outlined" as const },
];

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", color: theme.palette.text.primary }}>
      {/* --- HERO SECTION --- */}
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          maxWidth: "1200px !important",
          mx: "auto", // centers horizontally
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 4 },
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ letterSpacing: "0.08em", mb: { xs: 2, sm: 3 }, mt: 2 }}
          >
            Donnelly Tech Solutions
          </Typography>
        </FadeInSection>

        <FadeInSection>
          <ThreeScene />
        </FadeInSection>

        {/* --- NEW HEADLINE / TAGLINE --- */}
        <FadeInSection>
          <Typography
            variant="h4"
            component="h2"
            sx={{
              mt: { xs: 4, sm: 5 }, // FIXED: Added margin-top for spacing
              mb: { xs: 3, sm: 4 },
              textAlign: "center",
              color: theme.palette.secondary.light, // Use the accent color
              fontWeight: 500,
              maxWidth: "800px",
              mx: "auto", // FIXED: Ensure horizontal centering
            }}
          >
            Building High-Performance Web Applications That Drive Business
            Growth.
          </Typography>
        </FadeInSection>

        {/* --- NEW INTRODUCTORY PARAGRAPH --- */}
        <FadeInSection>
          <Typography
            variant="h6"
            component="p"
            maxWidth={750}
            mb={6}
            sx={{ mx: "auto", color: "#ccc", lineHeight: 1.7 }}
          >
            Hi, I am Andrew. I build practical, high-performance web solutions
            that deliver real results. As a full-stack developer specializing in
            React, Next.js, and TypeScript, I partner with businesses to create
            fast, scalable, and maintainable applications. My passion is
            transforming complex technical challenges into user-friendly digital
            experiences that help my clients succeed.
          </Typography>
        </FadeInSection>

        <FadeInSection>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 2,
              mb: { xs: 6, sm: 8 },
            }}
          >
            {ctaButtons.map((button) => (
              <Link href={button.href} passHref key={button.text}>
                <Button variant={button.variant} color="secondary" size="large">
                  {button.text}
                </Button>
              </Link>
            ))}
          </Box>
        </FadeInSection>
      </Box>

      {/* --- MAIN CONTENT SECTIONS --- */}
      <Box
        sx={{
          maxWidth: 1200,
          mx: "auto",
          bgcolor: theme.palette.background.paper + "DD", // transparency
          p: { xs: 3, sm: 4 },
          borderRadius: 2,
          boxShadow: 3,
          color: theme.palette.text.primary,
        }}
      >
        <ServicesSection />
        <Divider sx={{ my: 6, borderColor: "#444" }} />
        <TechStackSection />
        <Divider sx={{ my: 6, borderColor: "#444" }} />
        <MyValuesSection />
        <Divider sx={{ my: 6, borderColor: "#444" }} />
        <WorkExperienceTimeline />
        <Divider sx={{ my: 6, borderColor: "#444" }} />
        <VolunteerExperienceTimeline />
      </Box>
    </Box>
  );
};

export default Home;
