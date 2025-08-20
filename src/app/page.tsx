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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ThreeScene from "./components/SpinningLogoBox";
import FadeInSection from "./components/FadeInSection";
import WorkExperienceTimeline from "./components/WorkExperienceTimeline";
import VolunteerExperienceTimeline from "./components/VolunteerExperienceTimeline";
import TechStackSection from "./components/TechStackSection";
import ServicesSection from "./components/ServicesSection";
import MyValuesSection from "./components/MyValuesSection";

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%", py: 6 }}>
      <Box
        component="main"
        sx={{
          minHeight: "100vh",
          maxWidth: "1200px !important",
          mx: "auto", // centers horizontally
          color: theme.palette.text.primary,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          px: { xs: 2, sm: 3, md: 4 },
          pt: { xs: 4, sm: 6, md: 8 }, // only top padding now
          pb: 0, // remove bottom padding
          textAlign: "center",
        }}
      >
        <FadeInSection>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ letterSpacing: "0.08em", mb: { xs: 2, sm: 3 } }}
          >
            Donnelly Tech Solutions
          </Typography>
        </FadeInSection>

        <FadeInSection>
          <ThreeScene />
        </FadeInSection>

        <FadeInSection>
          <Typography
            variant="h5"
            fontStyle="italic"
            gutterBottom
            sx={{ mb: { xs: 3, sm: 4 }, textAlign: "center" }}
          >
            Practical solutions, clean code, real results.
          </Typography>
        </FadeInSection>

        <FadeInSection>
          <Typography variant="body1" maxWidth={600} mb={6} sx={{ mx: "auto" }}>
            I run my own software development company, building and delivering
            web applications directly to clients. I am a full-stack developer
            focused on React, Next.js, Node.js, and TypeScript. I am passionate
            about creating practical, maintainable software and continuously
            learning new technologies to solve real-world problems.
          </Typography>
        </FadeInSection>

        <Box
          sx={{
            maxWidth: 1200,
            bgcolor: theme.palette.background.paper + "DD", // transparency
            p: { xs: 3, sm: 4 },
            borderRadius: 2,
            boxShadow: 3,
            mb: 6,
            color: theme.palette.text.primary,
            textAlign: "left",
            fontFamily: theme.typography.body1.fontFamily,
            fontWeight: 400,
            fontSize: { xs: "0.95rem", sm: "1rem" },
            lineHeight: 1.6,
            // Responsive typography for paragraphs
            "& p": {
              mb: 2,
            },
            "& ul": {
              pl: 4,
              mb: 2,
              "& li": {
                mb: 1,
              },
            },
          }}
        >
          {/* Intro */}
          <FadeInSection>
            <Typography variant="body1">
              Hi, I am Andrew — a full-stack developer with a strong focus on
              modern web development, React ecosystems, and intuitive user
              experiences. I believe good software is like well-crafted
              storytelling: clear, expressive, and purposeful.
            </Typography>
            <Typography variant="body1">
              💻 React, Next.js, Node.js, TypeScript
            </Typography>
            <Typography variant="body1">
              🌍 Currently based in Ireland, actively seeking opportunities in
              London and open to relocation or remote work. I am working with
              clients across Europe and the UK
            </Typography>
            <Typography variant="body1">
              📚 Writing a memoir and editing essays in my spare time
            </Typography>
            <Typography variant="body1">
              🧭 Travelling Europe and the world, exploring stories, and
              debugging life one bug at a time
            </Typography>
            <Typography variant="body1">
              🏗️ Always learning, always iterating — on code and life
            </Typography>
            <Typography variant="body1" fontStyle="italic">
              &quot;Code is just another form of storytelling.&quot;
            </Typography>
          </FadeInSection>

          <Divider sx={{ my: 3 }} />

          {/* Services */}
          <ServicesSection />

          <Divider sx={{ my: 3 }} />

          {/* Tech Stack */}
          <TechStackSection />
          <Divider sx={{ my: 3 }} />

          {/* Values */}
          <MyValuesSection />

          {/* Work Experience */}
          <Divider sx={{ my: 3 }} />
          <WorkExperienceTimeline />

          {/* Volunteer Experience */}
          <Divider sx={{ my: 3 }} />
          <VolunteerExperienceTimeline />

          <FadeInSection>
            <Typography mt={3}>
              📬 Let’s connect on{" "}
              <MuiLink
                href="https://www.linkedin.com/in/andrewdonnelly93/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.secondary.main,
                  textDecoration: "underline",
                  mr: 1,
                }}
              >
                <LinkedInIcon sx={{ mr: 0.5, verticalAlign: "middle" }} />
                LinkedIn
              </MuiLink>
              and{" "}
              <MuiLink
                href="https://github.com/AndrewDonnelly93"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: theme.palette.secondary.main,
                  textDecoration: "underline",
                  ml: 1,
                }}
              >
                <GitHubIcon sx={{ mr: 0.5, verticalAlign: "middle" }} />
                GitHub
              </MuiLink>
            </Typography>
          </FadeInSection>
        </Box>

        <Box sx={{ display: "flex", gap: 2, mb: { xs: 6, sm: 8 } }}>
          <Link href="/portfolio" passHref>
            <Button variant="contained" color="secondary" size="large">
              View Portfolio
            </Button>
          </Link>
          <Link href="/contact" passHref>
            <Button variant="outlined" color="secondary" size="large">
              Contact
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
