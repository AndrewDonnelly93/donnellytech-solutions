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

export default function Home() {
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #330000 80%), url('/gryffindor-pattern.jpg')`,
        backgroundBlendMode: "multiply",
        backgroundRepeat: "repeat",
        backgroundSize: "200px 200px",
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
      <Typography
        variant="h2"
        fontWeight="bold"
        gutterBottom
        sx={{ letterSpacing: "0.08em", mb: { xs: 2, sm: 3 } }}
      >
        Donnelly Tech Solutions
      </Typography>
      <Typography
        variant="h5"
        fontStyle="italic"
        gutterBottom
        sx={{ mb: { xs: 3, sm: 4 } }}
      >
        Brave solutions, bold code, bright future.
      </Typography>

      <Typography variant="body1" maxWidth={600} mb={6}>
        Led by Andrew Donnelly — software engineer, sole director, and owner.
        Crafting cutting-edge web solutions with Next.js, MUI, and TypeScript.
        Committed to excellence and courageous problem-solving.
      </Typography>

      <Box
        sx={{
          maxWidth: 700,
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
        <Typography variant="body1" paragraph>
          Hi, I am Andrew — a writer and software engineer with a strong focus
          on modern full-stack development, React ecosystems, and intuitive user
          experiences. I believe good software feels like poetry: structured,
          expressive, and intentional.
        </Typography>
        <Typography variant="body1" paragraph>
          💻 Full-stack developer focused on React, Next.js, and Node.js
        </Typography>
        <Typography variant="body1" paragraph>
          🌍 Based in London, working with clients across Europe and the UK
        </Typography>
        <Typography variant="body1" paragraph>
          📚 Writing a memoir and editing essays in my spare time
        </Typography>
        <Typography variant="body1" paragraph>
          🧭 Travelling Europe and the world, exploring stories, and debugging
          life one bug at a time
        </Typography>
        <Typography variant="body1" paragraph>
          🏗️ Always learning, always iterating — on code and life
        </Typography>
        <Typography variant="body1" fontStyle="italic" paragraph>
          &quot;Code is just another form of storytelling.&quot;
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Services */}
        <Typography
          variant="h4"
          gutterBottom
          sx={{ fontFamily: theme.typography.h2.fontFamily }}
        >
          What I Do
        </Typography>
        <Typography variant="body1" paragraph>
          I build responsive, user-friendly websites with powerful features
          tailored to your needs. For example, I recently developed a full
          ecommerce artist portfolio for David McEwen, featuring:
        </Typography>
        <ul>
          <li>Stripe payment integration for smooth, secure transactions</li>
          <li>Contentful CMS to easily manage and showcase artworks</li>
          <li>
            Custom email notifications and contact forms for seamless
            communication
          </li>
          <li>
            Fully responsive design ensuring great experience on all devices
          </li>
        </ul>
        <Typography variant="body1">
          Whether you need a business site, portfolio, or custom web app, I
          deliver quality solutions using modern tools like Next.js, MUI, and
          TypeScript.
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Tech Stack */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontFamily: theme.typography.h3.fontFamily }}
        >
          Tech Stack
        </Typography>
        <Typography variant="body1" paragraph>
          Frontend: Next.js, React, TypeScript
          <br />
          Backend: Node.js, Prisma, PostgreSQL
          <br />
          Tools: Stripe, Contentful, Resend
          <br />
          DevOps: Vercel, AWS CDK, GitHub Actions
        </Typography>

        <Divider sx={{ my: 3 }} />

        {/* Values */}
        <Typography
          variant="h5"
          gutterBottom
          sx={{ fontFamily: theme.typography.h3.fontFamily }}
        >
          What I Value
        </Typography>
        <Typography variant="body1">
          Accessibility-first UI design
          <br />
          Clear, maintainable code
          <br />
          Building tools that empower creatives
        </Typography>

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
          .
        </Typography>
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
  );
}
